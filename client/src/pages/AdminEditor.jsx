import { useMemo, useState, useRef, useEffect } from "react";
import JoditEditor from "jodit-react";
import axios from "axios";
import toast from "react-hot-toast";
import { Trash } from "lucide-react";
import { v4 as uuid } from "uuid";
import PageReorderModal from "../components/PageReorderModal";

export default function AdminEditor() {
    const [slug, setSlug] = useState("new");
    const [locale, setLocale] = useState("en");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [tabs, setTabs] = useState([{ id: uuid(), label: "", content: "", hasCustomTabContent: false }]);
    const [options, setOptions] = useState([]);
    const [isExisting, setIsExisting] = useState(false);
    const [loading, setLoading] = useState(false);
    const [saving, setSaving] = useState(false);
    const [reorderOpen, setReorderOpen] = useState(false);

    const editorsRef = useRef({});

    // const editorConfig = useMemo(() => ({
    //     height: 500,
    //     readonly: false,
    //     toolbarAdaptive: false,
    //     toolbarSticky: true,

    //     defaultActionOnPaste: "insert_as_html",
    //     pastePlain: false,

    //     cleanHTML: {
    //         removeStyles: {
    //             background: true,
    //             "background-color": true
    //         }
    //     },

    //     allowIframe: true,

    //     uploader: {
    //         insertImageAsBase64URI: true,
    //         filesVariableName: () => "pdf",
    //         url: `${import.meta.env.VITE_BACKEND_URL}/admin/upload/pdf`,

    //         method: "POST",
    //         format: "json",
    //         withCredentials: false,


    //         prepareData: (formData) => {
    //             return formData;
    //         },

    //         isSuccess: (resp) => {
    //             return !!resp?.url;
    //         },

    //         process: (resp) => {
    //             return {
    //                 files: [resp.url],
    //                 baseurl: "",
    //                 fileName: resp.fileName,
    //                 error: null,
    //                 msg: "Uploaded successfully",
    //             };
    //         },

    //         defaultHandlerSuccess: function (data) {
    //             const editor = this;

    //             data.files.forEach((url) => {
    //                 if (url.endsWith(".pdf")) {
    //                     const fileName =
    //                         data.fileName || url.split("/").pop();

    //                     editor.selection.insertHTML(
    //                         `<a href="${`/view-pdf?url=${encodeURIComponent(url)}`}" target="_blank" 
    //                         rel="noopener noreferrer" 
    //                         style="text-decoration: underline; 
    //                         font-size: 18px;
    //                         color: inherit; cursor: pointer;"
    //                         onmouseover="this.style.color='#3b82f6'"
    //                         onmouseout="this.style.color='inherit'">
    //                         ${fileName}
    //                         </a>`
    //                     );
    //                 } else {
    //                     editor.selection.insertImage(url);
    //                 }
    //             });
    //         },

    //         error: function (e) {
    //             console.error("Upload failed", e);
    //         },

    //         allowedExtensions: ["jpg", "jpeg", "png", "webp", "gif", "pdf"],
    //     },
    // }), []);

    const imageUploader = {
        insertImageAsBase64URI: true,
        url: `${import.meta.env.VITE_BACKEND_URL}/admin/upload/image`,
        method: "POST",
        format: "json",
        filesVariableName: () => "image",

        isSuccess: (resp) => !!resp?.url,

        process: (resp) => ({
            files: [resp.url],
            fileName: resp.originalName,
        }),

        defaultHandlerSuccess: function (data) {
            data.files.forEach((url) => {
                this.selection.insertImage(url);
            });
        },
    };
    const pdfUploader = {
        insertImageAsBase64URI: false,
        url: `${import.meta.env.VITE_BACKEND_URL}/admin/upload/pdf`,
        method: "POST",
        format: "json",
        filesVariableName: () => "pdf",

        isSuccess: (resp) => !!resp?.url,

        process: (resp) => ({
            files: [resp.url],
            fileName: resp.fileName,
        }),

        defaultHandlerSuccess: function (data) {
            const url = data.files[0];
            const fileName = data.fileName || url.split("/").pop();

            this.selection.insertHTML(`
                <a href="/view-pdf?url=${encodeURIComponent(url)}"
                   target="_blank"
                   rel="noopener noreferrer"
                   style="text-decoration: underline; font-size: 18px;">
                    ${fileName}
                </a>
            `);
        },
    };

    const editorConfig = useMemo(() => ({
        height: 500,
        readonly: false,
        toolbarAdaptive: false,
        toolbarSticky: true,

        defaultActionOnPaste: "insert_as_html",
        pastePlain: false,

        allowIframe: true,

        uploader: {
            ...pdfUploader,

            prepareData: function (formData) {
                const file = formData.get("image") || formData.get("pdf");
                if (!file) return formData;

                console.log('file.type', file.type)
                this.options.uploader =
                    file.type === "application/pdf" ? pdfUploader : imageUploader;

                return formData;
            },

            allowedExtensions: ["jpg", "jpeg", "png", "webp", "gif", "pdf"],
        },
    }), []);


    const fetchOptions = async () => {
        try {
            const res = await axios.get(
                `${import.meta.env.VITE_BACKEND_URL}/page/slugs-and-titles`
            );
            setOptions(res.data);
        } catch (err) {
            console.error(err);
            toast.error("Failed to load page list");
        }
    };

    useEffect(() => {
        fetchOptions();
    }, []);

    const fetchPage = async () => {
        if (!slug) return toast.error("Please enter a slug first");
        setLoading(true);
        try {
            const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/page/get/${slug}?locale=${locale}`);
            const page = res.data || {};
            setTitle(page.title || "");
            setTabs(
                Array.isArray(page.tabs) && page.tabs.length
                    ? page.tabs.map(t => ({
                        id: uuid(),        // FE-only identity
                        label: t.label,
                        content: t.content,
                        hasCustomTabContent: Boolean(t.hasCustomTabContent)
                    }))
                    : [{ id: uuid(), label: "", content: "" }]
            );

            setContent(page.content || "");
            setIsExisting(true);
            toast.success("Loaded existing page");
        } catch (err) {
            console.error(err);
            toast.error("Page not found, you can create a new one.");
            setIsExisting(false);
            setTitle("");
            setContent("");
            setTabs([{ id: uuid(), label: "", content: "" }]);
        } finally {
            setLoading(false);
        }
    };

    const deletePage = async () => {
        if (!slug || slug === "new") {
            toast.error("No page selected to delete");
            return;
        }

        if (!confirm(`Are you sure you want to delete "${slug}"?`)) return;

        try {
            const res = await axios.delete(
                `${import.meta.env.VITE_BACKEND_URL}/page/${slug}`
            );

            toast.success(res.data.count + " pages deleted successfully");

            setSlug("new");
            setTitle("");
            setContent("");
            setTabs([{ id: uuid(), label: "", content: "" }]);
            setIsExisting(false);
        } catch (err) {
            console.error(err);
            toast.error(err.response?.data?.error || "Failed to delete page");
        }
    };

    const updateTab = (id, key, value) => {
        setTabs(prev => prev.map(t => (t.id === id ? { ...t, [key]: value } : t)));
    };

    const addTab = () =>
        setTabs(prev => [
            ...prev,
            { id: uuid(), label: "", content: "", hasCustomTabContent: false }
        ]);

    const deleteTab = async (tabId) => {
        const tab = tabs.find(t => t.id === tabId);
        if (!tab) return;

        const tabLabel = tab.label?.trim();
        if (!tabLabel) {
            toast.error("Tab label is required to delete a tab");
            return;
        }

        if (!confirm(`Delete tab "${tabLabel}"?`)) return;

        if (isExisting) {
            try {
                const res = await axios.delete(
                    `${import.meta.env.VITE_BACKEND_URL}/page/tab`,
                    { data: { slug, locale, tabLabel } }
                );
                toast.success(res.data.message);
            } catch (err) {
                console.error(err);
                toast.error(err.response?.data?.error || "Failed to delete tab");
                return;
            }
        }

        setTabs(prev => prev.filter(t => t.id !== tabId));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSaving(true);

        const hasInvalidTabs = tabs.some(t => !t.label?.trim());
        if (hasInvalidTabs) {
            toast.error("All tabs must have a label");
            setSaving(false);
            return;
        }

        try {
            if (isExisting) await axios.put(`${import.meta.env.VITE_BACKEND_URL}/page/update`, { slug, locale, content, title, tabs });
            else await axios.post(`${import.meta.env.VITE_BACKEND_URL}/page/add`, { slug, locale, content, title, tabs });
            toast.success("Saved");
            setIsExisting(true);
        } catch (err) {
            console.error(err);
            toast.error(err.response?.data?.error || "Something went wrong!");
        } finally {
            setSaving(false);
        }
    };

    return (
        <div className="w-full mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">
                {isExisting ? "Update Page" : "Create Page"}
            </h1>

            <button
                type="button"
                onClick={() => setReorderOpen(true)}
                className="bg-purple-600 text-white px-4 py-2 mb-8 rounded hover:bg-purple-700"
            >
                Rearrange Pages
            </button>

            <PageReorderModal
                open={reorderOpen}
                onClose={() => setReorderOpen(false)}
            />

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Slug */}
                <div>
                    <label className="block text-sm font-semibold mb-1">Page</label>

                    <div className="flex items-center gap-2">
                        <select
                            value={slug}
                            onChange={(e) => setSlug(e.target.value)}
                            className="flex-1 border rounded p-2"
                        >
                            {options.map(opt => (
                                <option key={opt.slug} value={opt.slug}>
                                    {opt.title}
                                </option>
                            ))}
                            <option value="new">Add new page...</option>
                        </select>

                        <button
                            type="button"
                            onClick={fetchOptions}
                            disabled={loading}
                            className="border px-3 py-2 rounded hover:bg-gray-100 disabled:opacity-50"
                            title="Reload pages"
                        >
                            ⟳
                        </button>
                    </div>
                </div>

                {/* Locale */}
                <div>
                    <label className="block text-sm font-semibold">Locale</label>
                    <select
                        value={locale}
                        onChange={(e) => setLocale(e.target.value)}
                        className="w-full border rounded p-2"
                    >
                        <option value="en">English</option>
                        <option value="ru">Russian</option>
                    </select>
                </div>

                {/* Load Page */}
                <button type="button" onClick={fetchPage} disabled={loading}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"

                >
                    {loading ? "Loading..." : "Load Page"}
                </button>

                {/* Title */}
                <div>
                    <label className="block text-sm font-semibold">Page Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full border rounded p-2"
                    />
                </div>

                {/* Page Content */}
                <div>
                    <h2 className="text-lg font-semibold mb-2">Page Content</h2>
                    <div className="border p-4 rounded bg-gray-50">
                        <JoditEditor
                            value={content}
                            config={editorConfig}
                            onChange={(newContent) => {
                                // onChange fires as user types/pastes — don't re-render the editor value
                                setContent(newContent);
                            }}
                            onBlur={(newContent) => {
                                // optional: use blur to do final save/validation
                                setContent(newContent);
                            }}
                        />
                    </div>
                </div>

                {/* Tabs */}
                <div>
                    <h2 className="text-lg font-semibold mb-2">Tabs</h2>
                    {tabs.map((tab, i) => (
                        <div key={tab.id} className="mb-6 border p-4 rounded bg-gray-50 relative">
                            <label className="block text-sm font-semibold">Tab {i + 1} Label</label>
                            <input value={tab.label} onChange={e => updateTab(tab.id, "label", e.target.value)}
                                className="w-full border rounded p-2"
                            />

                            <div className="my-3 flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    id={`custom-${tab.id}`}
                                    checked={tab.hasCustomTabContent}
                                    onChange={(e) =>
                                        updateTab(tab.id, "hasCustomTabContent", e.target.checked)
                                    }
                                    className="h-4 w-4"
                                />
                                <label
                                    htmlFor={`custom-${tab.id}`}
                                    className="text-sm font-medium"
                                >
                                    This tab uses custom content
                                </label>
                            </div>

                            <label className="block text-sm font-semibold">Tab {i + 1} Content</label>
                            <JoditEditor
                                ref={(el) => (editorsRef.current[tab.id] = el)}
                                value={tab.content}
                                config={editorConfig}
                                onChange={(newContent) => updateTab(tab.id, "content", newContent)}
                                onBlur={(newContent) => updateTab(tab.id, "content", newContent)}
                            />
                            {tabs.length > 1 && (
                                <button
                                    type="button"
                                    onClick={() => deleteTab(tab.id)}
                                    className="absolute top-2 right-2 text-red-600 hover:text-red-800 font-bold"
                                >
                                    <Trash size={25} className="bg-red-300 border p-1" />
                                </button>
                            )}
                        </div>
                    ))}

                </div>

                {/* Save */}
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mr-4"
                >
                    {saving ? "Saving..." : "Save"}
                </button>

                <button
                    type="button"
                    onClick={addTab}
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                    + Add Tab
                </button>

                {isExisting && (
                    <div className="flex justify-end mt-6">
                        <button
                            type="button"
                            onClick={deletePage}
                            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 flex items-center gap-2"
                        >
                            <Trash size={18} />
                            Delete Page
                        </button>
                    </div>
                )}

            </form>
        </div>
    );
}

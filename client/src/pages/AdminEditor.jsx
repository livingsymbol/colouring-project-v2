import { useMemo, useState, useRef } from "react";
import JoditEditor from "jodit-react";
import axios from "axios";
import toast from "react-hot-toast";
import { Trash } from "lucide-react";
import { v4 as uuid } from "uuid";

export default function AdminEditor() {
    const [slug, setSlug] = useState("home-test");
    const [locale, setLocale] = useState("en");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [tabs, setTabs] = useState([{ id: uuid(), label: "", content: "" }]);
    const [isExisting, setIsExisting] = useState(false);
    const [loading, setLoading] = useState(false);
    const [saving, setSaving] = useState(false);

    const editorsRef = useRef({});

    const editorConfig = useMemo(() => ({
        height: 400,
        readonly: false,
        toolbarAdaptive: false,
        toolbarSticky: true,
        uploader: { insertImageAsBase64URI: true },
        // paste options - adjust as needed:
        defaultActionOnPaste: "insert_as_html", // alternatives: "clean", "insert_only_text"
        pastePlain: false, // if true, paste as plain text
        cleanHTML: true,
        // These keep pasted images/files allowed:
        allowIframe: true,
        // any other Jodit config you want
    }), []);

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
                        content: t.content
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

    const updateTab = (id, key, value) => {
        setTabs(prev => prev.map(t => (t.id === id ? { ...t, [key]: value } : t)));
    };

    const addTab = () => setTabs(prev => [...prev, { id: uuid(), label: "", content: "" }]);

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
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">
                {isExisting ? "Update Page" : "Create Page"}
            </h1>

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Slug */}
                <div>
                    <label className="block text-sm font-semibold">Slug</label>
                    <select
                        value={slug}
                        onChange={(e) => setSlug(e.target.value)}
                        className="w-full border rounded p-2"
                    >
                        <option value="home-test">Home</option>
                        <option value="colours-test">Colours</option>
                        <option value="finding-harmony-test">Finding Harmony</option>
                        <option value="aspiration-at-work-test">Aspiration at Work</option>
                        <option value="gallery-test">Gallery</option>
                        <option value="library-test">Library</option>
                        <option value="forum-and-colouring-test">Forum and Colouring</option>
                    </select>
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
                            <label className="block text-sm font-semibold">Tab Label</label>
                            <input value={tab.label} onChange={e => updateTab(tab.id, "label", e.target.value)}
                                className="w-full border rounded p-2"
                            />

                            <label className="block text-sm font-semibold">Tab Content</label>
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
            </form>
        </div>
    );
}

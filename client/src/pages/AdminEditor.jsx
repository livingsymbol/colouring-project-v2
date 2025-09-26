import { useState, useRef } from "react";
import JoditEditor from "jodit-react";
import axios from "axios";
import toast from "react-hot-toast";
import { Trash } from "lucide-react";

export default function AdminEditor() {
    const [slug, setSlug] = useState("test");
    const [locale, setLocale] = useState("en");
    const [title, setTitle] = useState("");
    const [tabs, setTabs] = useState([{ label: "", content: "" }]);
    const [isExisting, setIsExisting] = useState(false);

    const editorsRef = useRef([]);

    const fetchPage = async () => {
        if (!slug) return toast.error("Please enter a slug first");

        try {
            const res = await axios.get(
                `${import.meta.env.VITE_BACKEND_URL}/page/get/${slug}?locale=${locale}`
            );
            const page = res.data;
            setTitle(page.title || "");
            setTabs(page.tabs.length ? page.tabs : [{ label: "", content: "" }]);
            setIsExisting(true);
            toast.success("Loaded existing page");
        } catch (err) {
            console.error(err);
            toast.error("Page not found, you can create a new one.");
            setIsExisting(false);
            setTitle("");
            setTabs([{ label: "", content: "" }]);
        }
    };

    const addTab = () => setTabs([...tabs, { label: "", content: "" }]);

    const updateTab = (index, key, value) => {
        setTabs((prev) => {
            const newTabs = [...prev];
            newTabs[index] = { ...newTabs[index], [key]: value };
            return newTabs;
        });
    };

    const deleteTab = async (index) => {
        const tabLabel = tabs[index].label;

        // If the tab exists in DB (isExisting = true), call backend
        if (isExisting && tabLabel) {
            try {
                const res = await axios.delete(
                    `${import.meta.env.VITE_BACKEND_URL}/page/tab`,
                    { data: { slug, locale, tabLabel } }
                );
                toast.success(res.data.message);
            } catch (err) {
                console.error(err);
                toast.error(err.response?.data?.error || "Failed to delete tab from backend");
                return;
            }
        }

        // Remove tab from UI
        setTabs((prev) => prev.filter((_, i) => i !== index));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = isExisting
                ? `${import.meta.env.VITE_BACKEND_URL}/page/update`
                : `${import.meta.env.VITE_BACKEND_URL}/page/add`;
            const res = await axios.post(url, { slug, locale, title, tabs });
            toast.success(res.data.message);
            setIsExisting(true);
        } catch (err) {
            console.error(err);
            toast.error(err.response?.data?.error || "Something went wrong!");
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
                    <input
                        type="text"
                    />
                    <select
                        value={slug}
                        onChange={(e) => setSlug(e.target.value)}
                        className="w-full border rounded p-2"
                    >
                        <option value="test">Test Page</option>
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
                <button
                    type="button"
                    onClick={fetchPage}
                    className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
                >
                    Load Page
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

                {/* Tabs */}
                <div>
                    <h2 className="text-lg font-semibold mb-2">Tabs</h2>
                    {tabs.map((tab, i) => (
                        <div key={i} className="mb-6 border p-4 rounded bg-gray-50 relative">
                            <label className="block text-sm font-semibold">Tab Label</label>
                            <input
                                type="text"
                                value={tab.label}
                                onChange={(e) => updateTab(i, "label", e.target.value)}
                                className="w-full border rounded p-2 mb-2"
                                required
                            />

                            <label className="block text-sm font-semibold">Tab Content</label>
                            <JoditEditor
                                ref={(el) => (editorsRef.current[i] = el)}
                                value={tab.content}
                                config={{
                                    height: 800,
                                    readonly: false,
                                    toolbarAdaptive: false,
                                    toolbarSticky: true,
                                    uploader: { insertImageAsBase64URI: true },
                                }}
                                onBlur={(newContent) => updateTab(i, "content", newContent)}
                            />

                            {/* Delete Tab Button */}
                            {tabs.length > 1 && (
                                <button
                                    type="button"
                                    onClick={() => deleteTab(i)}
                                    className="absolute top-2 right-2 text-red-600 hover:text-red-800 font-bold"
                                >
                                    <Trash size={25} className="bg-red-300 border p-1" />
                                </button>
                            )}
                        </div>
                    ))}

                    <button
                        type="button"
                        onClick={addTab}
                        className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                    >
                        + Add Tab
                    </button>
                </div>

                {/* Save */}
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    {isExisting ? "Update Page" : "Create Page"}
                </button>
            </form>
        </div>
    );
}

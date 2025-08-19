import { useState } from 'react';

export default function AddPage() {
    const [slug, setSlug] = useState('');
    const [locale, setLocale] = useState('en');
    const [title, setTitle] = useState('');
    const [tabs, setTabs] = useState([{ label: '', content: '' }]);
    const [isUpdateMode, setIsUpdateMode] = useState(false);

    const handleTabChange = (index, field, value) => {
        const updated = [...tabs];
        updated[index][field] = value;
        setTabs(updated);
    };

    const addTab = () => {
        setTabs([...tabs, { label: '', content: '' }]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const processedTabs = tabs.map(sec => {
                let parsedContent = sec.content;

                if (typeof sec.content === 'string') {
                    try {
                        parsedContent = JSON.parse(sec.content);
                    } catch (err) {
                        throw new Error(`Tab "${sec.label}" has invalid JSON content.`);
                    }
                }

                return {
                    label: sec.label,
                    content: parsedContent,
                };
            });

            const endpoint = isUpdateMode
                ? 'http://localhost:3000/api/page/update'
                : 'http://localhost:3000/api/page/add';

            const res = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    slug,
                    locale,
                    title,
                    tabs: processedTabs,
                }),
            });

            const data = await res.json();
            if (res.ok) {
                alert(isUpdateMode ? 'Page updated successfully' : 'Page created successfully');
                setSlug('');
                setLocale('en');
                setTitle('');
                setTabs([{ label: '', content: '' }]);
            } else {
                alert(`Error: ${data.error}`);
            }
        } catch (err) {
            alert(err.message);
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-6">
            <h1 className="text-xl font-semibold mb-4">
                {isUpdateMode ? 'Update Page' : 'Create New Page'}
            </h1>

            <div className="mb-4">
                <label className="mr-2">
                    <input
                        type="checkbox"
                        checked={isUpdateMode}
                        onChange={(e) => setIsUpdateMode(e.target.checked)}
                        className="mr-1"
                    />
                    Update Existing Page
                </label>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    placeholder="Slug (e.g. 'home')"
                    value={slug}
                    onChange={e => setSlug(e.target.value)}
                    className="border p-2 w-full"
                    required
                />

                <select
                    value={locale}
                    onChange={(e) => setLocale(e.target.value)}
                    className="border p-2 w-full"
                >
                    <option value="en">English</option>
                    <option value="ru">Russian</option>
                </select>

                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    className="border p-2 w-full"
                />

                <h2 className="font-medium">Tabs</h2>
                {tabs.map((tab, idx) => (
                    <div key={idx} className="space-y-2 border p-2">
                        <input
                            type="text"
                            placeholder="Label"
                            value={tab.label}
                            onChange={e => handleTabChange(idx, 'label', e.target.value)}
                            className="border p-2 w-full"
                        />
                        <textarea
                            placeholder="Content (JSON text or plain text)"
                            value={tab.content}
                            onChange={e => handleTabChange(idx, 'content', e.target.value)}
                            className="border p-2 w-full h-24"
                        />
                    </div>
                ))}
                <button type="button" onClick={addTab} className="bg-blue-500 text-white px-4 py-2">
                    Add Tab
                </button>

                <button type="submit" className="bg-green-600 text-white px-4 py-2">
                    {isUpdateMode ? 'Update' : 'Submit'}
                </button>
            </form>
        </div>
    );
}

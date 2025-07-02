import { useState } from 'react';

export default function AddPage() {
    const [slug, setSlug] = useState('');
    const [locale, setLocale] = useState('en');
    const [title, setTitle] = useState('');
    const [sections, setSections] = useState([{ label: '', content: '' }]);
    const [isUpdateMode, setIsUpdateMode] = useState(false);

    const handleSectionChange = (index, field, value) => {
        const updated = [...sections];
        updated[index][field] = value;
        setSections(updated);
    };

    const addSection = () => {
        setSections([...sections, { label: '', content: '' }]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const processedSections = sections.map(sec => {
                let parsedContent = sec.content;

                if (typeof sec.content === 'string') {
                    try {
                        parsedContent = JSON.parse(sec.content);
                    } catch (err) {
                        throw new Error(`Section "${sec.label}" has invalid JSON content.`);
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
                    sections: processedSections,
                }),
            });

            const data = await res.json();
            if (res.ok) {
                alert(isUpdateMode ? 'Page updated successfully' : 'Page created successfully');
                setSlug('');
                setLocale('en');
                setTitle('');
                setSections([{ label: '', content: '' }]);
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

                <h2 className="font-medium">Sections</h2>
                {sections.map((section, idx) => (
                    <div key={idx} className="space-y-2 border p-2">
                        <input
                            type="text"
                            placeholder="Label"
                            value={section.label}
                            onChange={e => handleSectionChange(idx, 'label', e.target.value)}
                            className="border p-2 w-full"
                        />
                        <textarea
                            placeholder="Content (JSON text or plain text)"
                            value={section.content}
                            onChange={e => handleSectionChange(idx, 'content', e.target.value)}
                            className="border p-2 w-full h-24"
                        />
                    </div>
                ))}
                <button type="button" onClick={addSection} className="bg-blue-500 text-white px-4 py-2">
                    Add Section
                </button>

                <button type="submit" className="bg-green-600 text-white px-4 py-2">
                    {isUpdateMode ? 'Update' : 'Submit'}
                </button>
            </form>
        </div>
    );
}

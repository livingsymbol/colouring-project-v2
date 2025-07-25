import { useState, useEffect } from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TextAlign from '@tiptap/extension-text-align';
import Underline from '@tiptap/extension-underline';
import Link from '@tiptap/extension-link';
import HardBreak from '@tiptap/extension-hard-break';
import BulletList from '@tiptap/extension-bullet-list';
import ListItem from '@tiptap/extension-list-item';
import {
    Loader2,
    Bold, Italic, Underline as UnderlineIcon, List as BulletIcon,
    ListOrdered, AlignLeft, AlignCenter, AlignRight
} from 'lucide-react';
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Paper
} from '@mui/material';

import AdminNavbar from '../components/AdminNavbar';
import Heading from '../components/Heading';
import toast from 'react-hot-toast';
import OrderedList from '@tiptap/extension-ordered-list';

const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const PAGE_TAB_MAP = {
    'home': ['The Mother', 'Sri Aurobindo'],
    'colours': ['Physics of light and colour', 'Physiology of colour vision', 'Colour psychology', 'Colour theory in art and design', 'Colour in traditional yoga'],
    'finding-harmony': ['Colour spectrum & vibrations', 'Position & angle of colours in The Mother’s symbol', 'Shades & tints', 'Mixing colours', 'RGB & RYB colour schemes', 'What is colour harmony', 'On The Mother’s flag & symbol'],
    'gallery': ['The Mother on flowers']
};

export default function AdminEditor() {
    const [selectedPage, setSelectedPage] = useState('');
    const [tabs, setTabs] = useState([]);
    const [selectedTab, setSelectedTab] = useState('');
    const [loading, setLoading] = useState(false);
    const [saving, setSaving] = useState(false);
    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                hardBreak: false,
                bulletList: false,
                listItem: false,
            }),
            HardBreak,
            Underline,
            Link,
            TextAlign.configure({ types: ['heading', 'paragraph'] }),
            BulletList,
            ListItem,
            OrderedList
        ],
        content: '',
    });

    useEffect(() => {
        if (selectedPage) {
            setTabs(PAGE_TAB_MAP[selectedPage] || []);
            setSelectedTab('');
            editor?.commands.setContent('');
        }
    }, [selectedPage]);

    useEffect(() => {
        if (!selectedPage || !selectedTab) return;

        const fetchTabContent = async () => {
            setLoading(true);
            try {
                const res = await fetch(
                    `${VITE_BACKEND_URL}/admin/page/${selectedPage}/${selectedTab}?locale=en`
                );
                const data = await res.json();
                if (data.error) {
                    setSelectedTab('')
                    toast.error(data.error)
                    return
                }
                editor?.commands.setContent(data.content || '');
            } catch (err) {
                toast.error('Failed to fetch tab content');
            } finally {
                setLoading(false);
            }
        };

        fetchTabContent();
    }, [selectedTab]);

    const handleSave = async () => {
        if (!editor || !selectedPage || !selectedTab) return;
        setSaving(true);
        try {
            const content = editor.getJSON();
            const res = await fetch(
                `${VITE_BACKEND_URL}/admin/page/${selectedPage}/${selectedTab}?locale=en`,
                {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ content }),
                }
            );

            if (!res.ok) throw new Error('Failed to update content');
            toast.success('Content updated successfully!');
        } catch (err) {
            toast.error(err.message || 'Failed to save content');
        } finally {
            setSaving(false);
            setSelectedPage('');
            setSelectedTab('');
        }
    };

    return (
        <div className="w-full min-h-screen bg-gradient">
            <AdminNavbar />
            <div className="p-4 max-w-5xl mx-auto space-y-6">
                <Heading>Admin Edit</Heading>

                {/* Page Dropdown */}
                <FormControl fullWidth margin="normal">
                    <InputLabel>Select Page</InputLabel>
                    <Select
                        value={selectedPage}
                        label="Select Page"
                        onChange={(e) => setSelectedPage(e.target.value)}
                    >
                        {Object.keys(PAGE_TAB_MAP).map((slug) => (
                            <MenuItem key={slug} value={slug}>
                                {slug}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                {/* Tab Dropdown */}
                {tabs.length > 0 && (
                    <FormControl fullWidth margin="normal">
                        <InputLabel>Select Tab</InputLabel>
                        <Select
                            value={selectedTab}
                            label="Select Tab"
                            onChange={(e) => setSelectedTab(e.target.value)}
                        >
                            {tabs.map((label) => (
                                <MenuItem key={label} value={label}>
                                    {label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                )}
                {/* Editor */}
                {loading ? (
                    <div className="flex items-center gap-2 text-blue-600 font-medium">
                        <Loader2 className="animate-spin h-5 w-5" />
                        <span>Loading content...</span>
                    </div>
                ) : (
                    editor &&
                    selectedTab && (
                        <Paper elevation={3} sx={{ p: 2 }}>
                            <div className="border p-4 rounded shadow bg-white space-y-4">
                                {/* Formatting Toolbar */}
                                <div className="flex flex-wrap gap-2 mb-4 border-b pb-3">
                                    <button
                                        onClick={() => editor.chain().focus().toggleBold().run()}
                                        className={`flex items-center gap-1 px-3 py-1.5 rounded text-sm transition ${editor.isActive('bold') ? 'bg-blue-600 text-white' : 'bg-gray-100 hover:bg-gray-200'
                                            }`}
                                    >
                                        <Bold size={16} />
                                        Bold
                                    </button>
                                    <button
                                        onClick={() => editor.chain().focus().toggleItalic().run()}
                                        className={`flex items-center gap-1 px-3 py-1.5 rounded text-sm transition ${editor.isActive('italic') ? 'bg-blue-600 text-white' : 'bg-gray-100 hover:bg-gray-200'
                                            }`}
                                    >
                                        <Italic size={16} />
                                        Italic
                                    </button>
                                    <button
                                        onClick={() => editor.chain().focus().toggleUnderline().run()}
                                        className={`flex items-center gap-1 px-3 py-1.5 rounded text-sm transition ${editor.isActive('underline') ? 'bg-blue-600 text-white' : 'bg-gray-100 hover:bg-gray-200'
                                            }`}
                                    >
                                        <UnderlineIcon size={16} />
                                        Underline
                                    </button>
                                    <button
                                        onClick={() => editor.chain().focus().toggleBulletList().run()}
                                        className={`flex items-center gap-1 px-3 py-1.5 rounded text-sm transition ${editor.isActive('bulletList') ? 'bg-blue-600 text-white' : 'bg-gray-100 hover:bg-gray-200'
                                            }`}
                                    >
                                        <BulletIcon size={16} />
                                        Bullet
                                    </button>
                                    <button
                                        onClick={() => editor.chain().focus().toggleOrderedList().run()}
                                        className={`flex items-center gap-1 px-3 py-1.5 rounded text-sm transition ${editor.isActive('orderedList') ? 'bg-blue-600 text-white' : 'bg-gray-100 hover:bg-gray-200'
                                            }`}
                                    >
                                        <ListOrdered size={16} />
                                        Ordered
                                    </button>
                                    <button
                                        onClick={() => editor.chain().focus().setTextAlign('left').run()}
                                        className={`flex items-center gap-1 px-3 py-1.5 rounded text-sm transition ${editor.isActive({ textAlign: 'left' }) ? 'bg-blue-600 text-white' : 'bg-gray-100 hover:bg-gray-200'
                                            }`}
                                    >
                                        <AlignLeft size={16} />
                                        Left
                                    </button>
                                    <button
                                        onClick={() => editor.chain().focus().setTextAlign('center').run()}
                                        className={`flex items-center gap-1 px-3 py-1.5 rounded text-sm transition ${editor.isActive({ textAlign: 'center' }) ? 'bg-blue-600 text-white' : 'bg-gray-100 hover:bg-gray-200'
                                            }`}
                                    >
                                        <AlignCenter size={16} />
                                        Center
                                    </button>
                                    <button
                                        onClick={() => editor.chain().focus().setTextAlign('right').run()}
                                        className={`flex items-center gap-1 px-3 py-1.5 rounded text-sm transition ${editor.isActive({ textAlign: 'right' }) ? 'bg-blue-600 text-white' : 'bg-gray-100 hover:bg-gray-200'
                                            }`}
                                    >
                                        <AlignRight size={16} />
                                        Right
                                    </button>
                                </div>

                                {/* Tiptap Editor */}
                                <EditorContent editor={editor} className="ProseMirror max-w-full min-h-[200px]" />
                            </div>
                        </Paper>
                    )
                )}
                {/* Save Button */}
                {editor && selectedTab && (
                    <button
                        onClick={handleSave}
                        disabled={saving}
                        className="mt-4 w-full sm:w-auto flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400"
                    >
                        {saving ? (
                            <>
                                <Loader2 className="animate-spin h-4 w-4" />
                                <span>Saving...</span>
                            </>
                        ) : (
                            'Save Changes'
                        )}
                    </button>
                )}
            </div>
        </div>
    );
}

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

// Cache for storing page titles and tabs
let cachedPageData = null;
let cacheTimestamp = null;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export default function AdminEditor() {
    const [pages, setPages] = useState([]);
    const [selectedPage, setSelectedPage] = useState('');
    const [selectedPageData, setSelectedPageData] = useState(null);
    const [selectedTab, setSelectedTab] = useState('');
    const [loading, setLoading] = useState(false);
    const [saving, setSaving] = useState(false);
    const [fetchingPages, setFetchingPages] = useState(false);

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
            // OrderedList,
        ],
        content: '',
    });

    // Function to check if cache is valid
    const isCacheValid = () => {
        return cachedPageData && cacheTimestamp && (Date.now() - cacheTimestamp < CACHE_DURATION);
    };

    // Function to fetch page titles and tabs
    const fetchPageTitlesAndTabs = async () => {
        // Return cached data if valid
        if (isCacheValid()) {
            setPages(cachedPageData);
            return;
        }

        setFetchingPages(true);
        try {
            const res = await fetch(`${VITE_BACKEND_URL}/page/titles-and-tabs`);
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            const data = await res.json();

            // Cache the data
            cachedPageData = data;
            cacheTimestamp = Date.now();

            setPages(data);
        } catch (err) {
            console.error('Error fetching page titles and tabs:', err);
            toast.error('Failed to fetch page data');
            setPages([]);
        } finally {
            setFetchingPages(false);
        }
    };

    // Fetch pages on component mount
    useEffect(() => {
        fetchPageTitlesAndTabs();
    }, []);

    // Handle page selection
    useEffect(() => {
        if (selectedPage) {
            const pageData = pages.find(page => page.slug === selectedPage);
            setSelectedPageData(pageData);
            setSelectedTab('');
            editor?.commands.setContent('');
        } else {
            setSelectedPageData(null);
        }
    }, [selectedPage, pages]);

    // Handle tab content fetching
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
                    setSelectedTab('');
                    toast.error(data.error);
                    return;
                }
                editor?.commands.setContent(data.content || '');
            } catch (err) {
                console.error('Error fetching tab content:', err);
                toast.error('Failed to fetch tab content');
            } finally {
                setLoading(false);
            }
        };

        fetchTabContent();
    }, [selectedTab, selectedPage, editor]);

    const handleSave = async () => {
        if (!editor || !selectedPage || !selectedTab) return;
        setSaving(true);
        try {
            const content = editor.getJSON();
            const res = await fetch(
                `${VITE_BACKEND_URL}/admin/page/${selectedPage}/${encodeURIComponent(selectedTab)}?locale=en`,
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
            console.error('Error saving content:', err);
            toast.error(err.message || 'Failed to save content');
        } finally {
            setSaving(false);
            setSelectedPage('');
            setSelectedTab('');
            setSelectedPageData(null);
        }
    };

    const handleRefreshData = () => {
        // Clear cache and refetch
        cachedPageData = null;
        cacheTimestamp = null;
        fetchPageTitlesAndTabs();
    };

    return (
        <div className="w-full min-h-screen bg-gradient">
            <AdminNavbar />
            <div className="p-4 max-w-5xl mx-auto space-y-6">
                <div className="flex items-center justify-between">
                    <Heading>Admin Edit</Heading>
                    <button
                        onClick={handleRefreshData}
                        disabled={fetchingPages}
                        className="flex items-center gap-2 px-3 py-1.5 text-sm bg-gray-100 hover:bg-gray-200 rounded transition disabled:opacity-50"
                    >
                        {fetchingPages ? (
                            <Loader2 className="animate-spin h-4 w-4" />
                        ) : (
                            'Refresh Data'
                        )}
                    </button>
                </div>

                {/* Loading state for initial fetch */}
                {fetchingPages && pages.length === 0 ? (
                    <div className="flex items-center gap-2 text-blue-600 font-medium">
                        <Loader2 className="animate-spin h-5 w-5" />
                        <span>Loading pages...</span>
                    </div>
                ) : (
                    <>
                        {/* Page Dropdown */}
                        <FormControl fullWidth margin="normal">
                            <InputLabel>Select Page</InputLabel>
                            <Select
                                value={selectedPage}
                                label="Select Page"
                                onChange={(e) => setSelectedPage(e.target.value)}
                                disabled={pages.length === 0}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page.slug} value={page.slug}>
                                        {page.title}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        {/* Tab Dropdown */}
                        {selectedPageData && selectedPageData.tabs.length > 0 && (
                            <FormControl fullWidth margin="normal">
                                <InputLabel>Select Tab</InputLabel>
                                <Select
                                    value={selectedTab}
                                    label="Select Tab"
                                    onChange={(e) => setSelectedTab(e.target.value)}
                                >
                                    {selectedPageData.tabs.map((tab) => (
                                        <MenuItem key={tab} value={tab}>
                                            {tab}
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
                                            {/* Image Upload Button */}
                                            {/* <input
                                                type="file"
                                                accept="image/*"
                                                id="imageUpload"
                                                style={{ display: 'none' }}
                                                onChange={(e) => {
                                                    const file = e.target.files?.[0]
                                                    if (!file) return

                                                    const localUrl = URL.createObjectURL(file) // temp URL
                                                    editor.chain().focus().setImage({ src: localUrl, float: 'none' }).run()
                                                    e.target.value = ''
                                                }}
                                            />

                                            <button
                                                onClick={() => document.getElementById('imageUpload').click()}
                                                className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded"
                                            >
                                                Upload Image
                                            </button>

                                            <button onClick={() => editor.chain().focus().updateAttributes('image', { float: 'left' }).run()}>
                                                Float Left
                                            </button>
                                            <button onClick={() => editor.chain().focus().updateAttributes('image', { float: 'right' }).run()}>
                                                Float Right
                                            </button>
                                            <button onClick={() => editor.chain().focus().updateAttributes('image', { float: 'none' }).run()}>
                                                No Float
                                            </button> */}


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
                    </>
                )}
            </div>
        </div>
    );
}
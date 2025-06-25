import axios from 'axios';
import { useState, useEffect } from 'react';
import { Image as ImageIcon, MessageCircle, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { Loader2 } from 'lucide-react';


export default function ForumTab3() {
    const [posts, setPosts] = useState([]);
    const [showCreate, setShowCreate] = useState(false);
    const [newPost, setNewPost] = useState({ title: '', content: '', imageUrl: '' });
    const [previewUrl, setPreviewUrl] = useState(null);
    const [isPosting, setIsPosting] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/posts`);
            setPosts(res.data);
        };
        fetchPosts();
    }, []);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setNewPost((prev) => ({ ...prev, imageUrl: file.path }));  //TODO change to uploaded link
        setPreviewUrl(URL.createObjectURL(file));
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        setNewPost((prev) => ({ ...prev, imageUrl: file.path }));
        setPreviewUrl(URL.createObjectURL(file));
    };

    const handlePostSubmit = async () => {
        setIsPosting(true);

        try {
            const res = await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}/posts`,
                { ...newPost },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                }
            );

            toast.success(res.data.message || "Post submitted successfully!");
            setShowCreate(false);
            setNewPost({ title: '', content: '', imageUrl: null });
            setPreviewUrl(null);

            const updated = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/posts`);
            setPosts(updated.data);
        } catch (err) {
            console.error(err);
            toast.error(err.response?.data?.message || "Failed to create post");
        } finally {
            setIsPosting(false);
        }
    };

    return (
        <div className="p-4 sm:p-6 md:p-8 max-w-3xl mx-auto">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-[#3300cc]">Forum</h1>
                <button
                    onClick={() => setShowCreate((prev) => !prev)}
                    className="bg-[#3300cc] text-white px-4 py-2 rounded-lg shadow hover:bg-[#220099] transition-colors"
                >
                    {showCreate ? "Cancel" : "+ Create Post"}
                </button>
            </div>

            {showCreate && (
                <div
                    onDrop={handleDrop}
                    onDragOver={(e) => e.preventDefault()}
                    className="border border-gray-200 rounded-xl p-4 sm:p-6 mb-8 bg-white shadow-lg space-y-4"
                >
                    <input
                        type="text"
                        className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#3300cc]"
                        placeholder="Give a title to your post"
                        value={newPost.title}
                        onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                    />
                    <textarea
                        className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#3300cc]"
                        rows={4}
                        placeholder="What's on your mind?"
                        value={newPost.content}
                        onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                    />
                    {previewUrl && (
                        <div className="relative max-w-full">
                            <img
                                src={previewUrl}
                                alt="Preview"
                                className="max-h-60 mx-auto rounded-lg shadow"
                            />
                            <button
                                onClick={() => {
                                    setPreviewUrl(null);
                                    setNewPost((prev) => ({ ...prev, imageUrl: null }));
                                }}
                                className="absolute top-2 right-2 bg-black bg-opacity-50 p-1 rounded-full text-white"
                            >
                                <X size={16} />
                            </button>
                        </div>
                    )}
                    <div className="flex justify-between items-center">
                        <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-600">
                            <ImageIcon size={20} />
                            <span>Select Image</span>
                            <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
                        </label>
                        <button
                            onClick={handlePostSubmit}
                            disabled={isPosting}
                            className="mt-3 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isPosting ? (
                                <>
                                    <Loader2 className="animate-spin" size={16} />
                                    Posting...
                                </>
                            ) : (
                                "Post"
                            )}
                        </button>

                    </div>
                </div>
            )}

            <div className="space-y-4">
                {posts.map((post) => (
                    <div
                        key={post._id}
                        className="p-4 border border-gray-200 rounded-2xl shadow-md bg-white space-y-4"
                    >
                        {/* User Info Row */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-y-1 text-sm text-gray-600">
                            <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-xs sm:text-sm font-semibold">@{post.author.username}</span>
                            <span className="text-sm text-gray-500">
                                {new Date(post.createdAt).toLocaleString(undefined, {
                                    dateStyle: 'medium',
                                    timeStyle: 'short',
                                })}
                            </span>
                        </div>
                        {/* Title */}
                        {post.title && (
                            <h3 className="text-lg sm:text-xl p-2 font-semibold text-[#3300cc]">
                                {post.title}
                            </h3>
                        )}

                        {/* Content */}
                        <p className="text-gray-800 bg-gray-200 p-2 rounded-lg text-base leading-relaxed whitespace-pre-wrap">
                            {post.content}
                        </p>

                        {/* Image */}
                        {post.imageUrl && (
                            <div className="w-full overflow-hidden rounded-lg border border-gray-300">
                                <img
                                    src={post.imageUrl}
                                    alt="Post"
                                    className="max-h-[500px] w-full object-contain"
                                />
                            </div>
                        )}

                        {/* Comment Button */}
                        <div className="pt-2">
                            <button
                                onClick={() => navigate(`/forum/post/${post._id}`)}
                                className="inline-flex items-center gap-2 text-sm text-blue-600 hover:underline font-medium"
                            >
                                <MessageCircle size={16} /> Comment
                            </button>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}

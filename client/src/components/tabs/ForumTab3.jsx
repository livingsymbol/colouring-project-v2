import axios from 'axios';
import { useState, useEffect } from 'react';
import { Image as ImageIcon, MessageCircle, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ForumTab3() {
    const [posts, setPosts] = useState([]);
    const [showCreate, setShowCreate] = useState(false);
    const [newPost, setNewPost] = useState({ content: '', image: null });
    const [previewUrl, setPreviewUrl] = useState(null);
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
        setNewPost((prev) => ({ ...prev, image: file }));
        setPreviewUrl(URL.createObjectURL(file));
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        setNewPost((prev) => ({ ...prev, image: file }));
        setPreviewUrl(URL.createObjectURL(file));
    };

    const handlePostSubmit = async () => {
        const formData = new FormData();
        formData.append('content', newPost.content);
        if (newPost.image) formData.append('image', newPost.image);

        await axios.post(
            `${import.meta.env.VITE_BACKEND_URL}/posts`,
            formData,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            }
        );

        setShowCreate(false);
        setNewPost({ content: '', image: null });
        setPreviewUrl(null);
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/posts`);
        setPosts(res.data);
    };

    return (
        <div className="p-8 max-w-3xl mx-auto">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-semibold">Forum</h1>
                <button
                    onClick={() => setShowCreate((prev) => !prev)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700"
                >
                    + Create Post
                </button>
            </div>

            {showCreate && (
                <div
                    onDrop={handleDrop}
                    onDragOver={(e) => e.preventDefault()}
                    className="border rounded-lg p-4 mb-6 bg-white shadow"
                >
                    <textarea
                        className="w-full p-2 border rounded mb-2"
                        rows={3}
                        placeholder="What's on your mind?"
                        value={newPost.content}
                        onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                    />
                    {previewUrl && (
                        <div className="relative">
                            <img src={previewUrl} alt="Preview" className="max-h-60 mx-auto my-2" />
                            <button
                                onClick={() => {
                                    setPreviewUrl(null);
                                    setNewPost((prev) => ({ ...prev, image: null }));
                                }}
                                className="absolute top-1 right-1 bg-black bg-opacity-50 p-1 rounded-full text-white"
                            >
                                <X size={16} />
                            </button>
                        </div>
                    )}
                    <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-600">
                        <ImageIcon size={20} /> Select Image
                        <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
                    </label>
                    <button
                        onClick={handlePostSubmit}
                        className="mt-3 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                    >
                        Post
                    </button>
                </div>
            )}

            <div className="space-y-6">
                {posts.map((post) => (
                    <div key={post._id} className="p-4 border rounded-lg shadow bg-white">
                        <p className="text-gray-800 font-medium">@{post.author.username}</p>
                        <p className="my-2 whitespace-pre-wrap">{post.content}</p>
                        {post.imageUrl && (
                            <img
                                src={post.imageUrl}
                                alt="Post"
                                className="max-h-96 w-full object-contain rounded"
                            />
                        )}
                        <button
                            onClick={() => navigate(`/forum/post/${post._id}`)}
                            className="flex items-center gap-2 text-blue-600 hover:underline mt-2"
                        >
                            <MessageCircle size={16} /> Comment
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

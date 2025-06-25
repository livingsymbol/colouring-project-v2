import { useEffect, useState } from 'react';
import axios from 'axios';
import Tabs from '../components/Tabs';
import Heading from '../components/Heading';
import { useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
    const [approvedPosts, setApprovedPosts] = useState([]);
    const [pendingPosts, setPendingPosts] = useState([]);
    const [flaggedComments, setFlaggedComments] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/admin/dashboard`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });

                setApprovedPosts(res.data.approvedPosts);
                setPendingPosts(res.data.pendingPosts);
                setFlaggedComments(res.data.flaggedComments);
            } catch (err) {
                console.error('Failed to fetch dashboard data', err);
            }
        };

        fetchData();
    }, []);

    const handleApprove = async (type, id) => {
        try {
            await axios.patch(`${import.meta.env.VITE_BACKEND_URL}/admin/${type}/${id}`, {}, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            window.location.reload();
        } catch (err) {
            console.error('Approve failed', err);
        }
    };

    const handleDelete = async (type, id) => {
        try {
            await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/admin/${type}/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            window.location.reload();
        } catch (err) {
            console.error('Delete failed', err);
        }
    };

    const PostCard = ({ post, showApprove, showDelete }) => (
        <div
            key={post._id}
            className="p-5 sm:p-6 border border-gray-200 rounded-2xl shadow-md bg-white space-y-4"
        >
            {/* Top row: Username + Timestamp */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-600">
                <span className="font-semibold text-blue-700">@{post.author.username}</span>
                <span className="text-xs text-gray-500">
                    {new Date(post.createdAt).toLocaleString(undefined, {
                        dateStyle: 'medium',
                        timeStyle: 'short',
                    })}
                </span>
            </div>

            {/* Title */}
            {post.title && (
                <h3 className="text-lg font-semibold text-[#3300cc]">
                    {post.title}
                </h3>
            )}

            {/* Content */}
            <p className="text-gray-800 text-base leading-relaxed whitespace-pre-wrap">
                {post.content}
            </p>

            {/* Image if present */}
            {post.imageUrl && (
                <div className="w-full overflow-hidden rounded-lg border border-gray-300">
                    <img
                        src={post.imageUrl}
                        alt="Post"
                        className="max-h-[500px] w-full object-contain"
                    />
                </div>
            )}

            {/* Admin Actions (if needed) */}
            <div className="flex gap-4 pt-2">
                {showApprove && <button
                    onClick={() => handleApprove("posts", post._id)}
                    className="bg-green-600 text-white px-4 py-1.5 rounded hover:bg-green-700 transition text-sm"
                >
                    Approve
                </button>}
                {showDelete && <button
                    onClick={() => handleDelete("posts", post._id)}
                    className="bg-red-600 text-white px-4 py-1.5 rounded hover:bg-red-700 transition text-sm"
                >
                    Delete
                </button>}
            </div>
        </div>
    );

    const CommentCard = ({ comment }) => (
        <div className="border p-4 rounded-lg shadow mb-4">
            <div className="text-sm text-gray-600 mb-1">by {comment.author?.username}</div>
            <p className="text-base mb-2 whitespace-pre-wrap">{comment.content}</p>
            <p className="text-xs italic text-gray-500 mb-2">On post: {comment.post?.content?.slice(0, 100)}...</p>
            <div className="flex gap-3">
                <button
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                    onClick={() => handleApprove('comments', comment._id)}
                >
                    Approve
                </button>
                <button
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    onClick={() => handleDelete('comments', comment._id)}
                >
                    Delete
                </button>
            </div>
        </div>
    );

    const tabsData = [
        {
            label: `Approved Posts (${approvedPosts.length})`,
            content: (
                <div className="max-w-5xl mx-auto px-4 py-6">
                    <h2 className="text-3xl font-bold text-[#3300cc] mb-6">Approved Posts</h2>

                    <div className="space-y-6">
                        {approvedPosts.length === 0 ? (
                            <p className="text-gray-600 text-center">No posts available.</p>
                        ) : (
                            approvedPosts.map((post) => (
                                <PostCard key={post._id} post={post} showApprove={false} showDelete={true} />
                            ))
                        )}
                    </div>
                </div>
            )
        },
        {
            label: `Pending Posts (${pendingPosts.length})`,
            content: (
                <div className="max-w-5xl mx-auto px-4 py-6">
                    <h2 className="text-3xl font-bold text-[#3300cc] mb-6">Pending Posts</h2>

                    <div className="space-y-6">
                        {pendingPosts.length === 0 ? (
                            <p className="text-gray-600 text-center">No posts pending approval.</p>
                        ) : (
                            pendingPosts.map((post) => (
                                <PostCard key={post._id} post={post} showApprove={true} showDelete={true} />
                            ))
                        )}
                    </div>
                </div>
            )
        },
        {
            label: `Flagged Comments (${flaggedComments.length})`,
            content: (
                <div className='p-6'>
                    {flaggedComments.length ? flaggedComments.map(comment => (
                        <CommentCard key={comment._id} comment={comment} />
                    )) : <p>No flagged comments.</p>}
                </div>
            )
        }
    ];

    return (
        <div className="w-full mx-auto p-6 min-h-screen gradient-background">
            <button onClick={() => {
                localStorage.clear();
                navigate('/admin/login')
            }}
            >
                Logout
            </button>
            < Heading > Admin Dashboard</Heading >
            <Tabs items={tabsData} />
        </div >
    );
}

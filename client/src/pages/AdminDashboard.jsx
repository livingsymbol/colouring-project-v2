import { useEffect, useState } from 'react';
import axios from 'axios';
import Tabs from '../components/Tabs';
import Heading from '../components/Heading';
import { useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
    const [approvedPosts, setApprovedPosts] = useState([]);
    const [partiallyApprovedPosts, setPartiallyApprovedPosts] = useState([]);
    const [pendingPosts, setPendingPosts] = useState([]);
    const [flaggedComments, setFlaggedComments] = useState([]);
    const [approvedComments, setApprovedComments] = useState([]);
    const [approvalChanges, setApprovalChanges] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [actionLoading, setActionLoading] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/admin/dashboard`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });

                setApprovedPosts(res.data.approvedPosts);
                setPartiallyApprovedPosts(res.data.partiallyApprovedPosts);
                setPendingPosts(res.data.pendingPosts);
                setFlaggedComments(res.data.flaggedComments);
                setApprovedComments(res.data.approvedComments);
            } catch (err) {
                console.error('Failed to fetch dashboard data', err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);


    const handleApprove = async (type, id) => {
        setActionLoading((prev) => ({ ...prev, [id]: true }));
        const approvalData = approvalChanges[id];

        try {
            await axios.patch(`${import.meta.env.VITE_BACKEND_URL}/admin/${type}/${id}`, approvalData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            window.location.reload();
        } catch (err) {
            console.error('Approve failed', err);
        } finally {
            setActionLoading((prev) => ({ ...prev, [id]: false }));
        }
    };

    const handleDelete = async (type, id) => {
        setActionLoading((prev) => ({ ...prev, [id]: true }));
        try {
            await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/admin/${type}/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            window.location.reload();
        } catch (err) {
            console.error('Delete failed', err);
        } finally {
            setActionLoading((prev) => ({ ...prev, [id]: false }));
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

            <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                    <span className="font-medium">Content:</span>
                    {post.isContentApproved ? (
                        <span className="text-green-600">✅</span>
                    ) : (
                        <span className="text-red-500">❌</span>
                    )}
                </div>
                {post.imageUrl && (
                    <div className="flex items-center gap-1">
                        <span className="font-medium">Image:</span>
                        {post.isImageApproved ? (
                            <span className="text-green-600">✅</span>
                        ) : (
                            <span className="text-red-500">❌</span>
                        )}
                    </div>
                )}
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
                {showApprove && (
                    <div className="bg-green-50 border border-green-200 p-4 rounded-xl space-y-2">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-gray-800">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                                <label className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        className="accent-green-600"
                                        checked={approvalChanges[post._id]?.approveContent ?? post.isContentApproved}
                                        disabled={post.isContentApproved}
                                        onChange={(e) => {
                                            setApprovalChanges((prev) => ({
                                                ...prev,
                                                [post._id]: {
                                                    ...prev[post._id],
                                                    approveContent: e.target.checked,
                                                },
                                            }));
                                        }}
                                    />
                                    <span className={post.isContentApproved ? "line-through text-gray-500" : ""}>
                                        Approve Content
                                    </span>
                                </label>

                                {post.imageUrl && (
                                    <label className="flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            className="accent-green-600"
                                            checked={approvalChanges[post._id]?.approveImage ?? post.isImageApproved}
                                            disabled={post.isImageApproved}
                                            onChange={(e) => {
                                                setApprovalChanges((prev) => ({
                                                    ...prev,
                                                    [post._id]: {
                                                        ...prev[post._id],
                                                        approveImage: e.target.checked,
                                                    },
                                                }));
                                            }}
                                        />
                                        <span className={post.isImageApproved ? "line-through text-gray-500" : ""}>
                                            Approve Image
                                        </span>
                                    </label>
                                )}
                            </div>
                        </div>

                        <div className="text-center">
                            <button
                                className="bg-green-600 hover:bg-green-700 text-white font-medium px-4 py-2 rounded-md transition disabled:opacity-50 disabled:cursor-not-allowed"
                                onClick={() => handleApprove('posts', post._id)}
                                disabled={
                                    actionLoading[post._id] ||
                                    !approvalChanges[post._id] ||
                                    (approvalChanges[post._id]?.approveContent === post.isContentApproved &&
                                        approvalChanges[post._id]?.approveImage === post.isImageApproved)
                                }
                            >
                                {actionLoading[post._id] ? 'Approving...' : 'Confirm Approval'}
                            </button>
                        </div>
                    </div>
                )}


                {showDelete && <button
                    className="bg-red-600 py-1.5 text-white px-8 rounded-xl hover:bg-red-700 transition text-md disabled:opacity-50"
                    onClick={() => handleDelete('posts', post._id)}
                    disabled={actionLoading[post._id]}
                >
                    {actionLoading[post._id] ? 'Deleting...' : 'Delete'}
                </button>
                }
            </div>
        </div>
    );

    const CommentCard = ({ comment, showApprove, showDelete }) => (
        <div className="border p-4 rounded-lg shadow mb-4">
            <div className="text-sm text-gray-600 mb-1">by {comment.author?.username}</div>
            <p className="text-base mb-2 whitespace-pre-wrap">{comment.content}</p>
            <p className="text-xs italic text-gray-500 mb-2">On post: {comment.post?.content?.slice(0, 100)}...</p>
            <div className="flex gap-3">
                {showApprove && <button
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                    onClick={() => handleApprove('comments', comment._id)}
                >
                    Approve
                </button>}
                {showDelete && < button
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    onClick={() => handleDelete('comments', comment._id)}
                >
                    Delete
                </button>}
            </div>
        </div >
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
            label: `Partially Approved Posts (${partiallyApprovedPosts.length})`,
            content: (
                <div className="max-w-5xl mx-auto px-4 py-6">
                    <h2 className="text-3xl font-bold text-[#3300cc] mb-6">Partially Approved Posts</h2>

                    <div className="space-y-6">
                        {partiallyApprovedPosts.length === 0 ? (
                            <p className="text-gray-600 text-center">No partially approved posts.</p>
                        ) : (
                            partiallyApprovedPosts.map((post) => (
                                <PostCard
                                    key={post._id}
                                    post={post}
                                    showApprove={true}
                                    showDelete={true}
                                />
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

                <div className="max-w-5xl mx-auto px-4 py-6">
                    <h2 className="text-3xl font-bold text-[#3300cc] mb-6">Flagged Comments</h2>

                    <div className="space-y-6">
                        {flaggedComments.length === 0 ? (
                            <p className="text-gray-600 text-center">No flagged comments.</p>
                        ) : (
                            flaggedComments.map(comment => (
                                <CommentCard key={comment._id} comment={comment} showApprove={true} showDelete={true} />
                            )
                            ))}
                    </div>
                </div>
            )
        },
        {
            label: `Approved Comments (${approvedComments.length})`,
            content: (

                <div className="max-w-5xl mx-auto px-4 py-6">
                    <h2 className="text-3xl font-bold text-[#3300cc] mb-6">Approved Comments</h2>

                    <div className="space-y-6">
                        {approvedComments.length === 0 ? (
                            <p className="text-gray-600 text-center">No approved comments.</p>
                        ) : (
                            approvedComments.map(comment => (
                                <CommentCard key={comment._id} comment={comment} showApprove={false} showDelete={true} />
                            )
                            ))}
                    </div>
                </div>
            )
        }
    ];

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center text-xl text-blue-600 font-semibold">
                Loading dashboard...
            </div>
        );
    }

    return (
        <div className="w-full mx-auto p-6 min-h-screen bg-gradient">
            <button onClick={() => {
                localStorage.clear();
                navigate('/admin/login')
            }}
            >
                Logout
            </button>
            <Heading> Admin Dashboard</Heading >
            <Tabs items={tabsData} />
        </div >
    );
}

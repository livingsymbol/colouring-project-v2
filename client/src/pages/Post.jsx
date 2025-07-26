import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import dayjs from 'dayjs'; // Optional: for pretty date formatting
import { Loader2 } from 'lucide-react';

export default function Post() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [commentInput, setCommentInput] = useState('');
    const [comments, setComments] = useState([]);
    const [replyInputs, setReplyInputs] = useState({});
    const [loading, setLoading] = useState(true);
    const [commentLoading, setCommentLoading] = useState(false);
    const [replyLoading, setReplyLoading] = useState({});

    const token = localStorage.getItem('token');

    useEffect(() => {
        fetchPostandComments();
    }, [id]);

    const fetchPostandComments = async () => {
        try {
            setLoading(true);
            const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/posts/${id}`);
            setPost(res.data.post);
            setComments(res.data.comments);
        } catch (err) {
            console.error('Failed to fetch post:', err);
        } finally {
            setLoading(false);
        }
    };


    const handleCommentSubmit = async () => {
        setCommentLoading(true);
        try {
            await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}/comments`,
                { postId: id, content: commentInput },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setCommentInput('');
            fetchPostandComments();
        } catch (err) {
            alert(err.response?.data?.message || 'Error submitting comment');
        } finally {
            setCommentLoading(false);
        }
    };


    const handleReplySubmit = async (commentId) => {
        setReplyLoading((prev) => ({ ...prev, [commentId]: true }));
        try {
            await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}/comments/${commentId}/reply`,
                { content: replyInputs[commentId] },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setReplyInputs((prev) => ({ ...prev, [commentId]: '' }));
            fetchPostandComments();
        } catch (err) {
            alert(err.response?.data?.message || 'Error submitting reply');
        } finally {
            setReplyLoading((prev) => ({ ...prev, [commentId]: false }));
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-8 space-y-10 bg-white rounded-xl  border-2">
            {loading ? (
                <div className="flex justify-center items-center min-h-[300px]">
                    <Loader2 className="animate-spin text-[#404040]" size={36} />
                </div>
            ) : (
                post && (
                    <div className="space-y-10 bg-white rounded-xl">
                        {/* Post Header */}
                        <div className="space-y-2 border-b pb-6">
                            <h1 className="text-4xl font-bold text-gray-900">{post.title}</h1>
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-y-1 text-sm text-gray-600">
                                <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-xs sm:text-sm font-semibold">@{post.author.username}</span>
                                <span className="text-sm text-gray-500">
                                    {new Date(post.createdAt).toLocaleString(undefined, {
                                        dateStyle: 'medium',
                                        timeStyle: 'short',
                                    })}
                                </span>
                            </div>
                        </div>

                        {/* Post Content */}
                        <div className="space-y-6 bg-gray-100 rounded-xl">
                            {post.content && (
                                <p className="text-base md:text-lg leading-relaxed text-gray-800 whitespace-pre-line bg-gray-200 p-4 rounded-xl">
                                    {post.content}
                                </p>
                            )}
                            {post.imageUrl && (
                                <img
                                    src={post.imageUrl}
                                    alt="Post Visual"
                                    className="rounded-lg w-full max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto h-auto border shadow"
                                />
                            )}
                        </div>

                        {/* Add Comment */}
                        <div className="border-t pt-8 space-y-4">
                            <h2 className="text-2xl font-semibold text-gray-800">Leave a Comment</h2>

                            <div className="bg-gray-50 border border-gray-300 rounded-xl shadow-sm p-4 space-y-3">
                                <textarea
                                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm resize-none min-h-[100px] bg-white"
                                    placeholder="Write your comment here..."
                                    rows={4}
                                    value={commentInput}
                                    onChange={(e) => setCommentInput(e.target.value)}
                                />

                                <div className="flex justify-end">
                                    <button
                                        onClick={handleCommentSubmit}
                                        disabled={commentLoading || !commentInput.trim()}
                                            className="flex gap-x-2 bg-[#c7b73a] text-black border-2 font-bold px-4 py-2 rounded-lg shadow hover:bg-[#c7b63ada] transition-all duration-200 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {commentLoading ? (
                                            <>
                                                <Loader2 className="animate-spin" size={16} />
                                                Posting...
                                            </>
                                        ) : (
                                            "Post Comment"
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>


                        {/* Comments */}
                        <div className="space-y-6 p-2 md:p-6 border-t bg-gray-100 rounded-xl">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Comments</h2>

                            {comments.length === 0 ? (
                                <p className="text-gray-500">No comments yet. Be the first to comment!</p>
                            ) : (
                                comments.map((comment) => (
                                    <div key={comment._id} className="bg-white border border-gray-200 rounded-xl p-4 space-y-4 shadow-sm">

                                        {/* Comment Header */}
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-600">
                                            <span className="font-semibold text-blue-700">@{comment.author.username}</span>
                                            <span className="text-xs text-gray-400">
                                                {dayjs(comment.createdAt).format('MMM D, YYYY h:mm A')}
                                            </span>
                                        </div>

                                        {/* Comment Body */}
                                        <p className="text-gray-800 text-sm sm:text-base whitespace-pre-wrap">{comment.content}</p>

                                        {/* Replies */}
                                        {comment.replies.length > 0 && (
                                            <div className="ml-4 border-l-2 border-gray-300 pl-4 space-y-4 pt-2">
                                                {comment.replies.map((reply) => (
                                                    <div key={reply._id} className="bg-gray-50 border border-gray-200 rounded-lg p-3 space-y-1">
                                                        <div className="flex justify-between text-sm text-gray-600">
                                                            <span className="font-medium text-blue-700">@{reply.author.username}</span>
                                                            <span className="text-xs text-gray-400">
                                                                {dayjs(reply.createdAt).format('MMM D, YYYY h:mm A')}
                                                            </span>
                                                        </div>
                                                        <p className="text-gray-700 text-sm whitespace-pre-wrap">{reply.content}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {/* Reply Toggle */}
                                        <div>
                                            <button
                                                onClick={() =>
                                                    setReplyInputs((prev) => ({
                                                        ...prev,
                                                        [comment._id]: prev[comment._id] === undefined ? '' : undefined,
                                                    }))
                                                }
                                                className="text-sm text-blue-600 hover:underline"
                                            >
                                                {replyInputs[comment._id] === undefined ? 'Reply' : 'Cancel'}
                                            </button>
                                        </div>

                                        {/* Reply Input */}
                                        {replyInputs[comment._id] !== undefined && (
                                            <div className="ml-2 sm:ml-4 mt-2 space-y-2 bg-gray-50 border border-gray-300 rounded-lg p-3">
                                                <textarea
                                                    className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400 resize-none min-h-[80px] bg-white"
                                                    rows={2}
                                                    placeholder="Reply to this comment..."
                                                    value={replyInputs[comment._id]}
                                                    onChange={(e) =>
                                                        setReplyInputs((prev) => ({
                                                            ...prev,
                                                            [comment._id]: e.target.value,
                                                        }))
                                                    }
                                                />
                                                <div className="flex justify-end">
                                                    <button
                                                        onClick={() => handleReplySubmit(comment._id)}
                                                        disabled={replyLoading[comment._id] || !replyInputs[comment._id]?.trim()}
                                                        className="bg-gray-800 hover:bg-gray-900 text-white px-3 py-1 rounded-md text-sm flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                                    >
                                                        {replyLoading[comment._id] ? (
                                                            <>
                                                                <Loader2 className="animate-spin" size={14} />
                                                                Replying...
                                                            </>
                                                        ) : (
                                                            "Submit Reply"
                                                        )}
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))
                            )}
                        </div>

                    </div>
                )
            )}
        </div>
    );

}


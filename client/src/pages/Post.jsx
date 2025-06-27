import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import dayjs from 'dayjs'; // Optional: for pretty date formatting

export default function Post() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [commentInput, setCommentInput] = useState('');
    const [comments, setComments] = useState([]);
    const [replyInputs, setReplyInputs] = useState({});
    const token = localStorage.getItem('token');

    useEffect(() => {
        fetchPostandComments();
    }, [id]);

    const fetchPostandComments = async () => {
        try {
            const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/posts/${id}`);
            setPost(res.data.post);
            setComments(res.data.comments);
        } catch (err) {
            console.error('Failed to fetch post:', err);
        }
    };

    const handleCommentSubmit = async () => {
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
        }
    };

    const handleReplySubmit = async (commentId) => {
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
        }
    };

    if (!post) return <div className="text-center mt-20 text-gray-500">Loading...</div>;

    return (
        <div className="max-w-4xl mx-auto p-8 space-y-10 bg-white rounded-xl">
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
            <div className="space-y-6 pb-4 bg-gray-100 rounded-xl">
                {post.content && (
                    <p className="text-base sm:text-lg leading-relaxed text-gray-800 whitespace-pre-line bg-gray-200 p-4 rounded-t-xl">
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
            <div className="space-y-3 border-t pt-6">
                <h2 className="text-2xl font-semibold">Leave a Comment</h2>
                <textarea
                    className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={3}
                    value={commentInput}
                    onChange={(e) => setCommentInput(e.target.value)}
                    placeholder="Write your comment here..."
                />
                <button
                    onClick={handleCommentSubmit}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md transition"
                >
                    Post Comment
                </button>
            </div>

            {/* Comments */}
            <div className="space-y-6 p-2 md:p-6 border-t bg-gray-200 rounded-xl">
                <h2 className="text-2xl font-semibold mb-2">Comments</h2>
                {comments.length === 0 ? (
                    <p className="text-gray-500">No comments yet. Be the first to comment!</p>
                ) : (
                    comments.map((comment) => (
                        <div key={comment._id} className="border-b pb-4 space-y-3">
                            {/* Comment */}
                            <div className='flex gap-2'>
                                <p className="bg-blue-200 text-blue-700 px-4 py-1 rounded-full text-sm sm:text-sm font-semibold">
                                    @   {comment.author.username}{' '}
                                    <span className="text-xs text-gray-400 ml-2">
                                        {dayjs(comment.createdAt).format('MMM D, YYYY h:mm A')}
                                    </span>
                                </p>
                                <p className="text-gray-800">{comment.content}</p>
                            </div>

                            {/* Replies */}
                            <div className="ml-4 space-y-3">
                                {comment.replies.map((reply) => (
                                    <div
                                        key={reply._id}
                                        className="ml-4 pl-4 border-l-2 border-gray-500 space-y-1"
                                    >
                                        <p className="text-sm font-medium text-blue-700">
                                            {reply.author.username}{' '}
                                            <span className="text-xs text-gray-400 ml-2">
                                                {dayjs(reply.createdAt).format('MMM D, YYYY h:mm A')}
                                            </span>
                                        </p>
                                        <p className="text-gray-700 text-sm">{reply.content}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Reply Toggle Button */}
                            <div className="ml-6">
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

                            {/* Conditional Reply Box */}
                            {replyInputs[comment._id] !== undefined && (
                                <div className="ml-6 mt-2 space-y-2">
                                    <textarea
                                        className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
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
                                    <button
                                        onClick={() => handleReplySubmit(comment._id)}
                                        className="bg-gray-800 hover:bg-gray-900 text-white px-3 py-1 rounded-md text-sm"
                                    >
                                        Submit Reply
                                    </button>
                                </div>
                            )}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

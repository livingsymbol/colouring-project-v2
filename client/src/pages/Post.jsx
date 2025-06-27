import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

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
            const res = await axios.get(`/api/posts/${id}`);
            setPost(res.data.post);
            setComments(res.data.comments);
        } catch (err) {
            console.error('Failed to fetch post:', err);
        }
    };

    const handleCommentSubmit = async () => {
        try {
            const res = await axios.post(
                '/api/comments/add',
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
            const res = await axios.post(
                `/api/comments/reply/${commentId}`,
                { content: replyInputs[commentId] },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setReplyInputs((prev) => ({ ...prev, [commentId]: '' }));
            fetchPostandComments();
        } catch (err) {
            alert(err.response?.data?.message || 'Error submitting reply');
        }
    };

    if (!post) return <div>Loading...</div>;

    return (
        <div className="max-w-3xl mx-auto p-4 space-y-6">
            <h1 className="text-3xl font-bold">{post.title}</h1>

            {post.content && (
                <p className="text-lg text-gray-800 whitespace-pre-line">{post.content}</p>
            )}

            {post.image && (
                <img src={post.image} alt="Post Visual" className="rounded-lg max-w-full h-auto" />
            )}

            <div className="mt-6 space-y-4">
                <textarea
                    className="w-full border border-gray-300 rounded p-2"
                    rows={3}
                    value={commentInput}
                    onChange={(e) => setCommentInput(e.target.value)}
                    placeholder="Add a comment..."
                />
                <button
                    onClick={handleCommentSubmit}
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                    Post Comment
                </button>
            </div>

            <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Comments</h2>
                {comments.length === 0 && <p className="text-gray-500">No comments yet.</p>}
                {comments.map((comment) => (
                    <div key={comment._id} className="mb-6 border-b pb-4">
                        <p className="font-medium">{comment.author.username}</p>
                        <p className="text-gray-700">{comment.content}</p>

                        <div className="ml-4 mt-3 space-y-3">
                            {comment.replies.map((reply) => (
                                <div key={reply._id} className="ml-4 border-l pl-4">
                                    <p className="text-sm font-medium">{reply.author.username}</p>
                                    <p className="text-sm text-gray-700">{reply.content}</p>
                                </div>
                            ))}

                            <textarea
                                className="w-full border border-gray-200 rounded p-1 text-sm"
                                rows={2}
                                placeholder="Reply..."
                                value={replyInputs[comment._id] || ''}
                                onChange={(e) =>
                                    setReplyInputs((prev) => ({ ...prev, [comment._id]: e.target.value }))
                                }
                            />
                            <button
                                onClick={() => handleReplySubmit(comment._id)}
                                className="bg-gray-800 text-white px-3 py-1 text-sm rounded"
                            >
                                Reply
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

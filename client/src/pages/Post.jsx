import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';

export default function Post() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);
    const [commentText, setCommentText] = useState('');
    const [replies, setReplies] = useState({});
    const [replyText, setReplyText] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/posts/${id}`);
            setPost(res.data.post);
            setComments(res.data.comments);
        };
        fetchData();
    }, [id]);

    const handleCommentSubmit = async () => {
        await axios.post(`${import.meta.env.VITE_BACKEND_URL}/comments`, { postId: id, content: commentText });
        setCommentText('');
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/posts/${id}`);
        setComments(res.data.comments);
    };

    const handleReplySubmit = async (commentId) => {
        await axios.post(`${import.meta.env.VITE_BACKEND_URL}/comments/${commentId}/reply`, {
            postId: id,
            content: replyText[commentId],
            parentComment: commentId,
        });
        setReplyText((prev) => ({ ...prev, [commentId]: '' }));
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/posts/${id}`);
        setComments(res.data.comments);
    };

    if (!post) return <p className="text-center p-4">Loading...</p>;

    return (
        <div className="max-w-3xl mx-auto p-4">
            <div className="bg-white p-4 border rounded-lg shadow">
                <p className="text-gray-800 font-medium">@{post.author.username}</p>
                <p className="my-2 whitespace-pre-wrap">{post.content}</p>
                {post.imageUrl && (
                    <img
                        src={post.imageUrl}
                        alt="Post"
                        className="max-h-96 w-full object-contain rounded"
                    />
                )}
            </div>

            <div className="mt-6">
                <h2 className="text-lg font-semibold mb-2">Comments</h2>
                <textarea
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    rows={3}
                    className="w-full border p-2 rounded mb-2"
                    placeholder="Write a comment..."
                />
                <button
                    onClick={handleCommentSubmit}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Post Comment
                </button>

                <div className="mt-6 space-y-4">
                    {comments.map((comment) => (
                        <div key={comment._id} className="border rounded p-3 bg-gray-50">
                            <p className="text-sm font-medium">@{comment.author.username}</p>
                            <p className="text-sm mb-2">{comment.content}</p>
                            <div className="ml-4 mt-2 space-y-2">
                                {comment.replies.map((reply) => (
                                    <div key={reply._id} className="border-l-2 pl-3">
                                        <p className="text-xs font-medium">@{reply.author.username}</p>
                                        <p className="text-xs">{reply.content}</p>
                                    </div>
                                ))}
                                <textarea
                                    rows={2}
                                    className="w-full text-sm border p-1 rounded"
                                    placeholder="Reply..."
                                    value={replyText[comment._id] || ''}
                                    onChange={(e) =>
                                        setReplyText((prev) => ({ ...prev, [comment._id]: e.target.value }))
                                    }
                                />
                                <button
                                    onClick={() => handleReplySubmit(comment._id)}
                                    className="text-xs text-white bg-green-600 px-3 py-1 rounded hover:bg-green-700 mt-1"
                                >
                                    Reply
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

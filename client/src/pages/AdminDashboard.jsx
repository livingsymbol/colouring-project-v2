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
        <div className="border p-4 rounded-lg shadow mb-4">
            <div className="text-sm text-gray-600 mb-1">by {post.author?.username}</div>
            {post.image && <img src={post.image} alt="post" className="w-full max-h-64 object-cover mb-2 rounded" />}
            <p className="text-base mb-2 whitespace-pre-wrap">{post.content}</p>
            <div className="flex gap-3">
                {showApprove && (
                    <button
                        className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                        onClick={() => handleApprove('posts', post._id)}
                    >
                        Approve
                    </button>
                )}
                {showDelete && (
                    <button
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                        onClick={() => handleDelete('posts', post._id)}
                    >
                        Delete
                    </button>
                )}
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
                <div className='p-6'>
                    {approvedPosts.length ? approvedPosts.map(post => (
                        <PostCard key={post._id} post={post} showApprove={false} showDelete={true} />
                    )) : <p>No approved posts found.</p>}
                </div>
            )
        },
        {
            label: `Pending Posts (${pendingPosts.length})`,
            content: (
                <div className='p-6'>
                    {pendingPosts.length ? pendingPosts.map(post => (
                        <PostCard key={post._id} post={post} showApprove={true} showDelete={true} />
                    )) : <p>No pending posts.</p>}
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

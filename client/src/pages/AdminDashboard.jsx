import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { toast } from "react-hot-toast";
import { Bell, BellOff } from "lucide-react";
import Tabs from "../components/Tabs";
import Heading from "../components/Heading";
import AdminNavbar from "../components/AdminNavbar";
import CircularProgress from "@mui/material/CircularProgress";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

// -------------------- Post Card --------------------
function PostCard({ post, onApprove, onDelete, approvalChanges, setApprovalChanges, loading }) {
    const updateApproval = (field, value) => {
        setApprovalChanges((prev) => ({
            ...prev,
            [post._id]: { ...prev[post._id], [field]: value },
        }));
    };

    return (
        <div className="p-5 sm:p-6 border border-gray-200 rounded-2xl shadow-md bg-white space-y-4">
            {/* Author + timestamp */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-600">
                <span className="font-semibold text-blue-700">@{post.author.username}</span>
                <span className="text-xs text-gray-500">
                    {new Date(post.createdAt).toLocaleString(undefined, {
                        dateStyle: "medium",
                        timeStyle: "short",
                    })}
                </span>
            </div>

            {/* Approval status */}
            <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                    <span className="font-medium">Content:</span>
                    <span className={post.isContentApproved ? "text-green-600" : "text-red-500"}>
                        {post.isContentApproved ? "✅" : "❌"}
                    </span>
                </div>
                {post.imageUrl && (
                    <div className="flex items-center gap-1">
                        <span className="font-medium">Image:</span>
                        <span className={post.isImageApproved ? "text-green-600" : "text-red-500"}>
                            {post.isImageApproved ? "✅" : "❌"}
                        </span>
                    </div>
                )}
            </div>

            {post.title && <h3 className="text-lg font-semibold text-[#404040]">{post.title}</h3>}
            <p className="text-gray-800 text-base leading-relaxed whitespace-pre-wrap">{post.content}</p>

            {post.imageUrl && (
                <div className="w-full overflow-hidden rounded-lg border border-gray-300">
                    <img src={post.imageUrl} alt="Post" className="max-h-[500px] w-full object-contain" />
                </div>
            )}

            {/* Admin actions */}
            <div className="flex gap-4 pt-2">
                {onApprove && (
                    <div className="bg-green-50 border border-green-200 p-4 rounded-xl space-y-2">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-gray-800">
                            <label className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    className="accent-green-600"
                                    checked={approvalChanges[post._id]?.approveContent ?? post.isContentApproved}
                                    disabled={post.isContentApproved}
                                    onChange={(e) => updateApproval("approveContent", e.target.checked)}
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
                                        onChange={(e) => updateApproval("approveImage", e.target.checked)}
                                    />
                                    <span className={post.isImageApproved ? "line-through text-gray-500" : ""}>
                                        Approve Image
                                    </span>
                                </label>
                            )}
                        </div>

                        <div className="text-center">
                            <button
                                className="bg-green-600 hover:bg-green-700 text-white font-medium px-4 py-2 rounded-md transition disabled:opacity-50"
                                onClick={() => onApprove(post._id)}
                                disabled={
                                    loading[post._id] ||
                                    !approvalChanges[post._id] ||
                                    (approvalChanges[post._id]?.approveContent === post.isContentApproved &&
                                        approvalChanges[post._id]?.approveImage === post.isImageApproved)
                                }
                            >
                                {loading[post._id] ? "Approving..." : "Confirm Approval"}
                            </button>
                        </div>
                    </div>
                )}

                {onDelete && (
                    <button
                        className="bg-red-600 py-1.5 text-white px-8 rounded-xl hover:bg-red-700 transition text-md disabled:opacity-50"
                        onClick={() => onDelete(post._id)}
                        disabled={loading[post._id]}
                    >
                        {loading[post._id] ? "Deleting..." : "Delete"}
                    </button>
                )}
            </div>
        </div>
    );
}

// -------------------- Comment Card --------------------
function CommentCard({ comment, onApprove, onDelete }) {
    return (
        <div className="border p-4 rounded-lg shadow mb-4">
            <div className="text-sm text-gray-600 mb-1">by {comment.author?.username}</div>
            <p className="text-base mb-2 whitespace-pre-wrap">{comment.content}</p>
            <p className="text-xs italic text-gray-500 mb-2">
                On post: {comment.post?.content?.slice(0, 100)}...
            </p>
            <div className="flex gap-3">
                {onApprove && (
                    <button
                        className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                        onClick={() => onApprove(comment._id)}
                    >
                        Approve
                    </button>
                )}
                {onDelete && (
                    <button
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                        onClick={() => onDelete(comment._id)}
                    >
                        Delete
                    </button>
                )}
            </div>
        </div>
    );
}

// -------------------- Dashboard --------------------
export default function AdminDashboard() {
    const [data, setData] = useState({
        approvedPosts: [],
        partiallyApprovedPosts: [],
        pendingPosts: [],
        flaggedComments: [],
        approvedComments: [],
    });
    const [approvalChanges, setApprovalChanges] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [actionLoading, setActionLoading] = useState({});
    const [notificationsEnabled, setNotificationsEnabled] = useState(false);
    const [isToggling, setIsToggling] = useState(false);
    const navigate = useNavigate();

    // Fetch initial state
    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                const res = await axios.get(
                    `${import.meta.env.VITE_BACKEND_URL}/admin/notifications`,
                    {
                        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
                    }
                );
                setNotificationsEnabled(res.data.notificationsEnabled);
            } catch (err) {
                toast.error("Failed to fetch notifications state");
                console.error(err);
            }
        };
        fetchNotifications();
    }, []);

    const toggleNotifications = async () => {
        setIsToggling(true);
        try {
            const res = await axios.patch(
                `${import.meta.env.VITE_BACKEND_URL}/admin/notifications`,
                { enabled: !notificationsEnabled },
                {
                    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
                }
            );

            setNotificationsEnabled(res.data.notificationsEnabled);

            if (res.data.notificationsEnabled) {
                toast.success("Email notifications enabled");
            } else {
                toast("Email notifications disabled", { icon: "🔕" });
            }
        } catch (err) {
            toast.error("Failed to toggle notifications");
            console.error(err);
        } finally {
            setIsToggling(false);
        }
    };


    const fetchData = useCallback(async () => {
        try {
            setIsLoading(true);
            const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/admin/dashboard`, {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
            });
            setData(res.data);
        } catch (err) {
            console.error("Failed to fetch dashboard data", err);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const handleApprove = async (type, id) => {
        setActionLoading((prev) => ({ ...prev, [id]: true }));
        try {
            await axios.patch(
                `${import.meta.env.VITE_BACKEND_URL}/admin/${type}/${id}`,
                approvalChanges[id],
                { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
            );
            await fetchData(); // refresh without reload
        } catch (err) {
            console.error("Approve failed", err);
        } finally {
            setActionLoading((prev) => ({ ...prev, [id]: false }));
        }
    };

    const handleDelete = async (type, id) => {
        setActionLoading((prev) => ({ ...prev, [id]: true }));
        try {
            await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/admin/${type}/${id}`, {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
            });
            await fetchData(); // refresh without reload
        } catch (err) {
            console.error("Delete failed", err);
        } finally {
            setActionLoading((prev) => ({ ...prev, [id]: false }));
        }
    };

    const tabConfig = [
        {
            label: `Approved Posts (${data.approvedPosts.length})`,
            items: data.approvedPosts,
            render: (post) => (
                <PostCard
                    post={post}
                    onDelete={(id) => handleDelete("posts", id)}
                    loading={actionLoading}
                    approvalChanges={approvalChanges}
                    setApprovalChanges={setApprovalChanges}
                />
            ),
        },
        {
            label: `Partially Approved Posts (${data.partiallyApprovedPosts.length})`,
            items: data.partiallyApprovedPosts,
            render: (post) => (
                <PostCard
                    post={post}
                    onApprove={(id) => handleApprove("posts", id)}
                    onDelete={(id) => handleDelete("posts", id)}
                    loading={actionLoading}
                    approvalChanges={approvalChanges}
                    setApprovalChanges={setApprovalChanges}
                />
            ),
        },
        {
            label: `Pending Posts (${data.pendingPosts.length})`,
            items: data.pendingPosts,
            render: (post) => (
                <PostCard
                    post={post}
                    onApprove={(id) => handleApprove("posts", id)}
                    onDelete={(id) => handleDelete("posts", id)}
                    loading={actionLoading}
                    approvalChanges={approvalChanges}
                    setApprovalChanges={setApprovalChanges}
                />
            ),
        },
        {
            label: `Approved Comments (${data.approvedComments.length})`,
            items: data.approvedComments,
            render: (comment) => (
                <CommentCard comment={comment} onDelete={(id) => handleDelete("comments", id)} />
            ),
        },
        {
            label: `Flagged Comments (${data.flaggedComments.length})`,
            items: data.flaggedComments,
            render: (comment) => (
                <CommentCard
                    comment={comment}
                    onApprove={(id) => handleApprove("comments", id)}
                    onDelete={(id) => handleDelete("comments", id)}
                />
            ),
        },
    ];

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center text-xl text-blue-600 font-semibold">
                <Loader2 className="animate-spin" size={24} />
                Loading dashboard...
            </div>
        );
    }

    return (
        <div className="w-full min-h-screen bg-gradient">
            <AdminNavbar />
            <div className="p-4">
                <Heading>Admin Dashboard</Heading>

                <div className="flex items-center gap-4 my-6">
                    {isToggling ? (
                        <CircularProgress size={24} />
                    ) : (
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={notificationsEnabled}
                                    onChange={toggleNotifications}
                                    color="primary"
                                />
                            }
                            label={
                                <span className="flex items-center gap-2 text-gray-700 text-sm">
                                    {notificationsEnabled ? (
                                        <>
                                            <Bell size={16} /> Email notifications enabled
                                        </>
                                    ) : (
                                        <>
                                            <BellOff size={16} /> Email notifications disabled
                                        </>
                                    )}
                                </span>
                            }
                        />
                    )}
                </div>


                <Tabs
                    items={tabConfig.map((tab) => ({
                        label: tab.label,
                        content: (
                            <div className="max-w-5xl mx-auto px-4 py-6">
                                <h2 className="text-3xl font-bold text-[#404040] mb-6">{tab.label}</h2>
                                <div className="space-y-6">
                                    {tab.items.length === 0 ? (
                                        <p className="text-gray-600 text-center">No items found.</p>
                                    ) : (
                                        tab.items.map((item) => <div key={item._id}>{tab.render(item)}</div>)
                                    )}
                                </div>
                            </div>
                        ),
                    }))}
                />
            </div>
        </div>
    );
}

import Post from '../models/Post.js';
import Comment from '../models/Comment.js';
import sendEmail from '../utils/sendEmail.js';

export async function getDashboardData(req, res) {
    try {
        // 1. Unapproved posts
        const pendingPosts = await Post.find({ isApproved: false })
            .populate('author', 'username')
            .sort({ createdAt: -1 });

        // 2. Flagged comments (including flagged replies)
        const flaggedComments = await Comment.find({ isFlagged: true })
            .populate('author', 'username')
            .populate('post', 'content')
            .sort({ createdAt: -1 });

        // Optional stats
        const totalPosts = await Post.countDocuments();
        const totalComments = await Comment.countDocuments();

        res.json({
            stats: {
                totalPosts,
                totalComments,
                unapprovedPosts: pendingPosts.length,
                flaggedComments: flaggedComments.length,
            },
            pendingPosts,
            flaggedComments,
        });
    } catch (err) {
        res.status(500).json({ message: 'Failed to load dashboard data', error: err.message });
    }
}

// Delete a flagged comment
export const deleteComment = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Comment.findByIdAndDelete(id);
        if (!deleted) return res.status(404).json({ message: 'Comment not found' });
        res.json({ message: 'Comment deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Failed to delete comment', error: err.message });
    }
};

export const getPendingPosts = async (req, res) => {
    try {
        const posts = await Post.find({ isApproved: false }).populate('author', 'username');
        res.json(posts);
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch pending posts', error: err.message });
    }
};

// Approve a post
export const approvePost = async (req, res) => {
    const { id } = req.params;
    try {
        const post = await Post.findById(id).populate('author');

        if (!post) return res.status(404).json({ message: 'Post not found' });

        post.isApproved = true;
        await post.save();

        //! Optional email to real users
        if (process.env.USE_CREDENTIAL_AUTH) {
            if (post.author?.email) {
                await sendEmail({
                    to: post.author.email,
                    subject: 'Your post has been approved',
                    text: `Hi ${post.author.username}, your post "${post.content.slice(0, 30)}..." has been approved and is now live!`,
                });
            }
        }

        res.json({ message: 'Post approved', post });
    } catch (err) {
        res.status(500).json({ message: 'Failed to approve post', error: err.message });
    }
};

// Reject (delete) a post
export const rejectPost = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Post.findByIdAndDelete(id);
        if (!deleted) return res.status(404).json({ message: 'Post not found' });

        // Also delete related comments
        await Comment.deleteMany({ post: id });

        res.json({ message: 'Post and associated comments deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Failed to delete post', error: err.message });
    }
};
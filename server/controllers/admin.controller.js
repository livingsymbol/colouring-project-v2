import Post from '../models/Post.js';
import Comment from '../models/Comment.js';
import sendEmail from '../utils/sendEmail.js';
import Page from '../models/Page.js';

export async function getDashboardData(req, res) {
    try {
        // 1. Fully approved posts
        const approvedPosts = await Post.find({ isApproved: true })
            .populate('author', 'username')
            .sort({ createdAt: -1 });

        // 2. Fully unapproved posts (neither content nor image approved)
        const pendingPosts = await Post.find({
            isApproved: false,
            isContentApproved: false,
            isImageApproved: false,
        })
            .populate('author', 'username')
            .sort({ createdAt: -1 });

        // 3. Partially approved posts (only one of content/image approved)
        const partiallyApprovedPosts = await Post.find({
            isApproved: false,
            $or: [
                { isContentApproved: true, isImageApproved: false },
                { isContentApproved: false, isImageApproved: true },
            ],
        })
            .populate('author', 'username')
            .sort({ createdAt: -1 });

        // 4. Flagged comments (including replies)
        const flaggedComments = await Comment.find({ isFlagged: true })
            .populate('author', 'username')
            .populate('post', 'content')
            .sort({ createdAt: -1 });

        // 5. Flagged comments (including replies)
        const approvedComments = await Comment.find({ isApproved: true })
            .populate('author', 'username')
            .populate('post', 'content')
            .sort({ createdAt: -1 });

        // 6. Optional stats
        const totalPosts = await Post.countDocuments();
        const totalComments = await Comment.countDocuments();

        res.json({
            stats: {
                totalPosts,
                totalComments,
                unapprovedPosts: pendingPosts.length,
                partiallyApprovedPosts: partiallyApprovedPosts.length,
                approvedPosts: approvedPosts.length,
                flaggedComments: flaggedComments.length,
                approvedComments: approvedComments.length,
            },
            approvedPosts,
            pendingPosts,
            partiallyApprovedPosts,
            flaggedComments,
            approvedComments,
        });
    } catch (err) {
        res.status(500).json({ message: 'Failed to load dashboard data', error: err.message });
    }
}

// Approve a comment
export const approveComment = async (req, res) => {
    const { id } = req.params;
    try {
        const comment = await Comment.findById(id).populate('author');

        if (!comment) return res.status(404).json({ message: 'Comment not found' });

        comment.isFlagged = false;
        comment.isApproved = true;
        await comment.save();

        res.json({ message: 'Comment approved', comment });
    } catch (err) {
        res.status(500).json({ message: 'Failed to approve comment', error: err.message });
    }
};

// Delete a flagged comment
export const deleteComment = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Comment.findByIdAndDelete(id);
        if (!deleted) return res.status(404).json({ message: 'Comment not found' });

        // Also delete related replies
        await Comment.deleteMany({ parentComment: id });
        res.json({ message: 'Comment and replies deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Failed to delete comment', error: err.message });
    }
};

// Approve a post
export const approvePost = async (req, res) => {
    const { id } = req.params;
    const { approveImage, approveContent } = req.body;

    try {
        const post = await Post.findById(id).populate('author');
        if (!post) return res.status(404).json({ message: 'Post not found' });

        if (approveImage !== undefined) post.isImageApproved = approveImage;
        if (approveContent !== undefined) post.isContentApproved = approveContent;

        post.isApproved = post.isImageApproved && post.isContentApproved;

        await post.save();

        if (post.isApproved && process.env.USE_CREDENTIAL_AUTH === 'true' && post.author?.email) {
            await sendEmail({
                to: post.author.email,
                subject: 'Your post has been approved',
                text: `Hi ${post.author.username}, your post "${post.content.slice(0, 30)}..." has been approved and is now live!`,
            });
        }

        res.json({ message: 'Post aproved', post });
    } catch (err) {
        res.status(500).json({ message: 'Failed to approve post part', error: err.message });
    }
};

// Reject (delete) a post
export const deletePost = async (req, res) => {
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

// Get relevent tab content by label and page
export const getTabByLabel = async (req, res) => {
    const { slug, label } = req.params;
    const locale = req.query.locale || 'en';

    try {
        const page = await Page.findOne({ slug, locale });

        if (!page) return res.status(404).json({ error: 'Page not found' });

        const tab = page.sections.find(section => section.label === label);
        if (!tab) return res.status(404).json({ error: 'Tab not found' });

        res.json(tab);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

// PATCH tab content by label and page
export const patchTabByLabel = async (req, res) => {
    const { slug, label } = req.params;
    const locale = req.query.locale || 'en';
    const { content } = req.body;

    if (!content) {
        return res.status(400).json({ error: 'Content is required' });
    }

    try {
        const page = await Page.findOne({ slug, locale });

        if (!page) return res.status(404).json({ error: 'Page not found' });

        const tabIndex = page.sections.findIndex(section => section.label === label);
        if (tabIndex === -1) return res.status(404).json({ error: 'Tab not found' });

        page.sections[tabIndex].content = content;
        await page.save();

        res.json({ message: 'Tab content updated successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};
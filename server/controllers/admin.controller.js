import Post from '../models/Post.js';
import Comment from '../models/Comment.js';
import sendEmail from '../utils/sendEmail.js';
import Page from '../models/Page.js';
import User from '../models/User.js';
import PublishedImage from '../models/PublishedImage.js';
import cloudinary from '../utils/cloudinary.utils.js';

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

        const approvedImages = await PublishedImage.find({
            $and: [
                { isCommentApproved: true },
                { isImageApproved: true },
            ],
        })
            .sort({ createdAt: -1 });

        // 6. Fully unapproved published images (neither comment nor image approved)
        const pendingImages = await PublishedImage.find({
            isCommentApproved: false,
            isImageApproved: false,
        })
            .populate('author', 'username')
            .sort({ createdAt: -1 });

        // 7. Partially approved published images (only one of comment/image approved)
        const partiallyApprovedImages = await PublishedImage.find({
            $or: [
                { isCommentApproved: true, isImageApproved: false },
                { isCommentApproved: false, isImageApproved: true },
            ],
        })
            .sort({ createdAt: -1 });

        res.json({
            approvedPosts,
            pendingPosts,
            partiallyApprovedPosts,
            flaggedComments,
            approvedComments,
            approvedImages,
            pendingImages,
            partiallyApprovedImages,
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

        const comment = await Comment.findById(id);
        if (!comment) {
            return res.status(404).json({ message: 'Comment not found' });
        }

        // If it's a reply (has a parentComment), just delete it
        if (comment.parentComment) {
            await Comment.findByIdAndDelete(id);
            return res.json({ message: 'Reply deleted successfully' });
        }

        // If it's a top-level comment, delete it and all its replies
        await Comment.findByIdAndDelete(id);
        await Comment.deleteMany({ parentComment: id });

        res.json({ message: 'Comment and its replies deleted successfully' });
    } catch (err) {
        res.status(500).json({
            message: 'Failed to delete comment',
            error: err.message,
        });
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

        if (post.imageUrl) {
            post.isApproved = post.isContentApproved && post.isImageApproved;
        } else {
            post.isApproved = post.isContentApproved;
        }

        await post.save();

        if (process.env.USE_CREDENTIAL_AUTH === 'true' && post.isApproved && post.author?.email) {
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

// Approve a image
export const approveImage = async (req, res) => {
    const { id } = req.params;
    const { approveImage, approveComment, tab, comment } = req.body;

    try {
        const image = await PublishedImage.findById(id).populate('author');
        if (!image) return res.status(404).json({ message: 'Image not found' });

        if (approveImage !== undefined) image.isImageApproved = approveImage;
        if (approveComment !== undefined) image.isCommentApproved = approveComment;
        if (tab !== undefined) image.tab = tab;
        if (comment !== undefined) image.comment = comment;

        await image.save();

        if (process.env.USE_CREDENTIAL_AUTH === 'true' && image.isImageApproved && image.author?.email) {
            await sendEmail({
                to: image.author.email,
                subject: 'Your image has been approved',
                text: `Hi ${image.author.username}, your image has been approved and is now live!`,
            });
        }

        res.json({ message: 'Image aproved', image });
    } catch (err) {
        res.status(500).json({ message: 'Failed to approve image part', error: err.message });
    }
};

// Reject (delete) a image
export const deleteImage = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await PublishedImage.findByIdAndDelete(id);
        if (!deleted) return res.status(404).json({ message: 'Image not found' });

        res.json({ message: 'Image and associated comment deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Failed to delete image', error: err.message });
    }
};

// Get relevent tab content by label and page
export const getTabByLabel = async (req, res) => {
    const { slug, label } = req.params;
    const locale = req.query.locale || 'en';

    try {
        const page = await Page.findOne({ slug, locale });

        if (!page) return res.status(404).json({ error: 'Page not found' });

        const tab = page.tabs.find(tab => tab.label === label);
        if (!tab) return res.status(404).json({ error: 'Tab not found' });

        res.json(tab);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

// PATCH tab content by label and page
// export const patchTabByLabel = async (req, res) => {
//     const { slug, label } = req.params;
//     const locale = req.query.locale || 'en';
//     const { content } = req.body;
//     console.log('slug, label, content', slug, label, content)
//     if (!content) {
//         return res.status(400).json({ error: 'Content is required' });
//     }

//     try {
//         const page = await Page.findOne({ slug, locale });
//         if (!page) return res.status(404).json({ error: 'Page not found' });

//         const tabIndex = page.tabs.findIndex(tab => tab.label === label);
//         if (tabIndex === -1) return res.status(404).json({ error: 'Tab not found' });

//         page.tabs[tabIndex].content = content;
//         await page.save();

//         console.log("4")
//         res.json({ message: 'Tab content updated successfully' });
//     } catch (err) {
//         res.status(500).json({ error: 'Server error' });
//     }
// };

export const patchTabByLabel = async (req, res) => {
    try {
        const { slug } = req.params;
        // decodeURIComponent ensures spaces, commas, & etc. are correctly parsed
        const label = decodeURIComponent(req.params.label);
        const locale = req.query.locale || 'en';
        const { content } = req.body;

        console.log('slug, label, content:', slug, label, content);

        if (!content) {
            return res.status(400).json({ error: 'Content is required' });
        }

        // Find the page
        const page = await Page.findOne({ slug, locale });
        if (!page) {
            return res.status(404).json({ error: 'Page not found' });
        }

        if (!Array.isArray(page.tabs)) {
            return res.status(400).json({ error: 'This page has no tabs defined' });
        }

        // Locate the tab
        const tabIndex = page.tabs.findIndex(tab => tab.label === label);
        if (tabIndex === -1) {
            return res.status(404).json({ error: `Tab with label "${label}" not found` });
        }

        // Update content
        page.tabs[tabIndex].content = content;

        await page.save();

        res.json({ message: 'Tab content updated successfully' });
    } catch (err) {
        console.error('Error updating tab content:', err);
        res.status(500).json({ error: 'Server error' });
    }
};

//fetch admin notifications status
export const getNotificationsEnabled = async (req, res) => {
    try {
        const admin = await User.findById(req.user.id).select("email notificationsEnabled");
        if (!admin) {
            return res.status(404).json({ message: "Admin not found" });
        }

        res.json({
            email: admin.email,
            notificationsEnabled: admin.notificationsEnabled || false,
        });
    } catch (err) {
        console.error("Error fetching profile:", err);
        res.status(500).json({ message: "Server error" });
    }
}

//toggle admin notifications on posts/comments approval
export const toggleNotifications = async (req, res) => {
    try {
        const adminId = req.user.id;
        const { enabled } = req.body;

        if (typeof enabled !== "boolean") {
            return res.status(400).json({ message: "enabled must be a boolean" });
        }

        const updatedAdmin = await User.findByIdAndUpdate(
            adminId,
            { notificationsEnabled: enabled },
            { new: true }
        );

        res.json({
            message: `Notifications ${enabled ? "enabled" : "disabled"}`,
            notificationsEnabled: updatedAdmin.notificationsEnabled,
        });
    } catch (err) {
        console.error("Error updating notifications:", err);
        res.status(500).json({ message: "Server error" });
    }
}

// GET all images from a folder
export const getGalleryImages = async (req, res) => {
    try {
        const { folder } = req.params;
        const result = await cloudinary.search
            .expression(`folder=colouring-project/${folder}`)
            .sort_by("public_id", "desc")
            .execute();

        res.json({
            success: true,
            resources: result.resources,
            total: result.total_count
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            error: "Error fetching images",
            resources: []
        });
    }
};

// UPLOAD images
export const uploadGalleryImage = async (req, res) => {
    try {
        const { folder, images } = req.body; // images is now array of base64 strings
        if (!Array.isArray(images) || !folder) {
            return res.status(400).json({ success: false, message: "Invalid request" });
        }

        const uploadResults = [];
        for (const img of images) {
            if (img && img.startsWith("data:image/")) {
                try {
                    const uploaded = await cloudinary.uploader.upload(img, {
                        folder: `colouring-project/${folder}`,
                    });
                    uploadResults.push(uploaded);
                } catch (uploadErr) {
                    console.error("Cloudinary Upload Error:", uploadErr);
                }
            }
        }

        if (!uploadResults.length) {
            return res.status(500).json({ success: false, message: "No images uploaded" });
        }

        res.json({
            success: true,
            message: "Images uploaded successfully",
            data: uploadResults,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            error: "Error uploading images",
        });
    }
};


// DELETE image
export const deleteGalleryImage = async (req, res) => {
    try {
        const { folder, publicId } = req.params;
        const result = await cloudinary.uploader.destroy(
            `colouring-project/${folder}/${publicId}`
        );
        if (result.result === 'ok') {
            res.json({
                success: true,
                message: "Image deleted successfully",
                data: result
            });
        }
        else {
            res.status(404).json({
                success: false,
                message: result,
                data: result
            });

        }
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            error: "Error deleting image"
        });
    }
};
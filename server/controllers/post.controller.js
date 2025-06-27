import Post from '../models/Post.js';
import Comment from '../models/Comment.js';
import cloudinary from "../utils/cloudinary.utils.js";

export const createPost = async (req, res) => {
    try {
        const { title, content, image } = req.body;

        if (!title && !content && !image) {
            return res.status(400).json({ message: "Content or image is required." });
        }

        let imageUrl = null;

        if (image && image.startsWith("data:image/")) {
            try {
                const uploadResult = await cloudinary.uploader.upload(image, {
                    folder: "colouring-project/posts/images",
                });
                imageUrl = uploadResult.secure_url;
            } catch (uploadErr) {
                console.error("Cloudinary Upload Error:", uploadErr);
                return res.status(500).json({ message: "Image upload failed." });
            }
        }

        const newPost = new Post({
            author: req.user.id,
            title,
            content,
            imageUrl,
            isApproved: false,
        });

        await newPost.save();

        res.status(201).json({ message: 'Post submitted for review', post: { _id: newPost._id, title: newPost.title, content: newPost.content, imageUrl: newPost.imageUrl } });

    } catch (err) {
        res.status(500).json({ message: 'Failed to create post', error: err.message });
    }
};

export const getAllApprovedPosts = async (req, res) => {
    try {
        const posts = await Post.find({ isApproved: true }).populate('author', 'username').sort({ createdAt: -1 });
        res.json(posts);
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch posts', error: err.message });
    }
};

export const getPostWithComments = async (req, res) => {
    try {
        const { id } = req.params;

        const post = await Post.findOne({ _id: id, isApproved: true }).populate('author', 'username');
        if (!post) return res.status(404).json({ message: 'Post not found or not approved' });

        const comments = await Comment.find({ post: id, parentComment: null, isFlagged: false })
            .populate('author', 'username')
            .lean();

        for (const comment of comments) {
            comment.replies = await Comment.find({ parentComment: comment._id, isFlagged: false })
                .populate('author', 'username')
                .lean();
        }

        res.json({ post, comments });
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch post/comments', error: err.message });
    }
};

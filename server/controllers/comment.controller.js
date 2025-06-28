import Post from '../models/Post.js';
import Comment from '../models/Comment.js';
import { isClean } from '../utils/comment.utils.js';

export const addComment = async (req, res) => {
    try {
        const { postId, content } = req.body;

        const postExists = await Post.findById(postId);
        if (!postExists) return res.status(404).json({ message: 'Post not found or unapproved' });

        const isFlagged = await isClean(content);
        const comment = new Comment({
            post: postId,
            author: req.user.id,
            content,
            isFlagged
        });
        await comment.save();

        if (!isFlagged) {
            res.status(201).json({ message: 'Comment added', comment });
        }
        else {
            res.status(400).json({ message: 'Foul language detected, comment sent for review', comment });
        }
    } catch (err) {
        res.status(500).json({ message: 'Failed to add comment', error: err.message });
    }
};

export const replyToComment = async (req, res) => {
    try {
        const { content } = req.body;
        const { commentId } = req.params;

        const parent = await Comment.findById(commentId);
        if (!parent) return res.status(404).json({ message: 'Parent comment not found' });

        const isFlagged = await isClean(content);

        const reply = new Comment({
            post: parent.post,
            author: req.user.id,
            content,
            parentComment: parent._id,
            isFlagged
        });
        await reply.save();

        if (!isFlagged) {
            res.status(201).json({ message: 'Reply added', reply });
        }
        else {
            res.status(400).json({ message: 'Foul language detected, reply sent for review', reply });
        }
    } catch (err) {
        res.status(500).json({ message: 'Failed to add reply', error: err.message });
    }
};

export const getCommentsWithReplies = async (req, res) => {
    try {
        const { postId } = req.params;

        const comments = await Comment.find({ post: postId, parentComment: null })
            .populate('author', 'username')
            .lean();

        for (const comment of comments) {
            comment.replies = await Comment.find({ parentComment: comment._id })
                .populate('author', 'username')
                .lean();
        }

        res.json(comments);
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch comments', error: err.message });
    }
};

import Post from '../models/Post.js';
import Comment from '../models/Comment.js';
import cloudinary from "../utils/cloudinary.utils.js";

//using multer

// export const createPost = async (req, res) => {
//     try {
//         const { title, content } = req.body;

//         if (!title && !content && !req.file) {
//             return res.status(400).json({ message: "Content or image is required." });
//         }

//         let imageUrl = null;

//         if (req.file) {
//             try {
//                 const uploadResult = cloudinary.uploader.upload_stream(
//                     { folder: 'colouring-project/posts/images' },
//                     (error, result) => {
//                         if (error) {
//                             console.error("Cloudinary upload error:", error);
//                             return res.status(500).json({ message: "Image upload failed" });
//                         }

//                         imageUrl = result.secure_url;

//                         // Save post after upload
//                         const newPost = new Post({
//                             author: req.user.id,
//                             title,
//                             content,
//                             imageUrl,
//                             isApproved: false,
//                         });

//                         newPost.save().then(() => {
//                             return res.status(201).json({
//                                 message: 'Post submitted for review',
//                                 post: {
//                                     _id: newPost._id,
//                                     title: newPost.title,
//                                     content: newPost.content,
//                                     imageUrl: newPost.imageUrl,
//                                 },
//                             });
//                         }).catch(err => {
//                             return res.status(500).json({ message: 'Failed to save post', error: err.message });
//                         });
//                     }
//                 );

//                 // Pipe file buffer to Cloudinary stream
//                 uploadResult.end(req.file.buffer);
//                 return;

//             } catch (err) {
//                 console.error("Cloudinary error:", err);
//                 return res.status(500).json({ message: "Image upload failed" });
//             }
//         } else {
//             // No image case
//             const newPost = new Post({
//                 author: req.user.id,
//                 title,
//                 content,
//                 imageUrl: null,
//                 isApproved: false,
//             });

//             await newPost.save();

//             return res.status(201).json({
//                 message: 'Post submitted for review',
//                 post: {
//                     _id: newPost._id,
//                     title: newPost.title,
//                     content: newPost.content,
//                     imageUrl: null,
//                 },
//             });
//         }
//     } catch (err) {
//         res.status(500).json({ message: 'Failed to create post', error: err.message });
//     }
// };

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
        const posts = await Post.find({
            $or: [{ isApproved: true }, { isContentApproved: true }, { isImageApproved: true }]
        })
            .populate('author', 'username')
            .sort({ createdAt: -1 });

        const filteredPosts = posts
            .map(post => {
                const postData = {
                    _id: post._id,
                    title: post.title,
                    createdAt: post.createdAt,
                    author: post.author,
                };

                if (post.isContentApproved) {
                    postData.content = post.content;
                }

                if (post.isImageApproved) {
                    postData.imageUrl = post.imageUrl;
                }

                if (postData.content || postData.imageUrl) {
                    return postData;
                }

                return null;
            })
            .filter(Boolean);

        res.json(filteredPosts);
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch posts', error: err.message });
    }
};

export const getPostWithComments = async (req, res) => {
    try {
        const { id } = req.params;

        const postDoc = await Post.findOne({
            _id: id,
            $or: [{ isApproved: true }, { isContentApproved: true }, { isImageApproved: true }]
        }).populate('author', 'username');

        if (!postDoc) {
            return res.status(404).json({ message: 'Post not found or not approved' });
        }

        // Create a filtered version of the post object with only approved fields
        const post = {
            _id: postDoc._id,
            title: postDoc.title,
            createdAt: postDoc.createdAt,
            author: postDoc.author
        };

        if (postDoc.isContentApproved) {
            post.content = postDoc.content;
        }

        if (postDoc.isImageApproved) {
            post.imageUrl = postDoc.imageUrl;
        }

        if (!post.content && !post.imageUrl) {
            return res.status(403).json({ message: 'Post not visible (not approved)' });
        }

        const comments = await Comment.find({ post: id, parentComment: null, isFlagged: false })
            .populate('author', 'username')
            .lean();

        for (const comment of comments) {
            comment.replies = await Comment.find({
                parentComment: comment._id,
                isFlagged: false
            })
                .populate('author', 'username')
                .lean();
        }

        res.json({ post, comments });
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch post/comments', error: err.message });
    }
};

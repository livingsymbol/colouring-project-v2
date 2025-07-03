import { Router } from 'express';
const router = Router();
import verifyToken from '../middlewares/verifyToken.js';
import { createPost, getAllApprovedPosts, getPostWithComments } from '../controllers/post.controller.js';
import { upload } from '../utils/multer.utils.js';

router.post('/', verifyToken, upload.single('image'), createPost);
router.get('/', getAllApprovedPosts);
router.get('/:id', getPostWithComments);

export default router;

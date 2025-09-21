import { Router } from 'express';
const router = Router();
import verifyToken from '../middlewares/verifyToken.js';
import { createPost, getAllApprovedPosts, getAllPublishedImagesByUser, getPostWithComments, publishImage } from '../controllers/post.controller.js';
import { upload } from '../utils/multer.utils.js';

router.post('/', verifyToken, upload.single('image'), createPost);
router.post('/image', verifyToken, upload.single('image'), publishImage);

router.get('/', getAllApprovedPosts);
router.get('/image', verifyToken, getAllPublishedImagesByUser);

router.get('/:id', getPostWithComments);

export default router;

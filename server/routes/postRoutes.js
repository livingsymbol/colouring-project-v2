import { Router } from 'express';
const router = Router();
import verifyToken from '../middlewares/verifyToken.js';
import { createPost, getAllApprovedPosts, getPostWithComments } from '../controllers/post.controller.js';

router.post('/', verifyToken, createPost);
router.get('/', getAllApprovedPosts);
router.get('/:id', getPostWithComments);

export default router;

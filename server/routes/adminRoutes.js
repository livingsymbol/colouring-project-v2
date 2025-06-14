import { Router } from 'express';
const router = Router();
import verifyToken from '../middlewares/verifyToken.js';
import requireAdmin from '../middlewares/requireAdmin.js';
import { getDashboardData, approveComment, deleteComment, getPendingPosts, approvePost, deletePost } from '../controllers/admin.controller.js';

router.get('/dashboard', verifyToken, requireAdmin, getDashboardData);

router.patch('/comments/:id', verifyToken, requireAdmin, approveComment);
router.delete('/comments/:id', verifyToken, requireAdmin, deleteComment);

// router.get('/posts/pending', verifyToken, requireAdmin, getPendingPosts);

router.patch('/posts/:id', verifyToken, requireAdmin, approvePost);
router.delete('/posts/:id', verifyToken, requireAdmin, deletePost);

export default router;

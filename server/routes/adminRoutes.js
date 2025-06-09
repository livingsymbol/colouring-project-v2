import { Router } from 'express';
const router = Router();
import verifyToken from '../middlewares/verifyToken.js';
import requireAdmin from '../middlewares/requireAdmin.js';
import { getDashboardData, deleteComment, getPendingPosts, approvePost, rejectPost } from '../controllers/admin.controller.js';

router.get('/dashboard', verifyToken, requireAdmin, getDashboardData);
router.delete('/comments/:id', verifyToken, requireAdmin, deleteComment);
router.get('/posts/pending', verifyToken, requireAdmin, getPendingPosts);
router.patch('/posts/:id', verifyToken, requireAdmin, approvePost);
router.delete('/posts/:id', verifyToken, requireAdmin, rejectPost);

export default router;

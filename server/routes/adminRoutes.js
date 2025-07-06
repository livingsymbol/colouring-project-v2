import { Router } from 'express';
const router = Router();
import verifyToken from '../middlewares/verifyToken.js';
import requireAdmin from '../middlewares/requireAdmin.js';
import { getDashboardData, approveComment, deleteComment, approvePost, deletePost, getTabByLabel, patchTabByLabel } from '../controllers/admin.controller.js';

router.get('/dashboard', verifyToken, requireAdmin, getDashboardData);

router.patch('/comments/:id', verifyToken, requireAdmin, approveComment);
router.delete('/comments/:id', verifyToken, requireAdmin, deleteComment);

router.patch('/posts/:id', verifyToken, requireAdmin, approvePost);
router.delete('/posts/:id', verifyToken, requireAdmin, deletePost);

router.get('/page/:slug/:label', getTabByLabel);
router.patch('/page/:slug/:label', patchTabByLabel);

export default router;

import { Router } from 'express';
const router = Router();
import verifyToken from '../middlewares/verifyToken.js';
import requireAdmin from '../middlewares/requireAdmin.js';
import { getDashboardData, approveComment, deleteComment, approvePost, deletePost, approveImage, deleteImage, getTabByLabel, patchTabByLabel, toggleNotifications, getNotificationsEnabled } from '../controllers/admin.controller.js';

router.get('/dashboard', verifyToken, requireAdmin, getDashboardData);

router.patch('/comments/:id', verifyToken, requireAdmin, approveComment);
router.delete('/comments/:id', verifyToken, requireAdmin, deleteComment);

router.patch('/posts/:id', verifyToken, requireAdmin, approvePost);
router.delete('/posts/:id', verifyToken, requireAdmin, deletePost);

router.patch('/image/:id', verifyToken, requireAdmin, approveImage);
router.delete('/image/:id', verifyToken, requireAdmin, deleteImage);

router.get('/page/:slug/:label', getTabByLabel);
router.patch('/page/:slug/:label', patchTabByLabel);

router.get('/notifications', verifyToken, requireAdmin, getNotificationsEnabled);
router.patch('/notifications', verifyToken, requireAdmin, toggleNotifications);

export default router;

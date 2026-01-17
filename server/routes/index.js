import { Router } from "express";
import authRoutes from './authRoutes.js'
import postRoutes from './postRoutes.js'
import commentRoutes from './commentRoutes.js'
import adminRoutes from './adminRoutes.js'
import pageRoutes from './pageRoutes.js'

const router = Router();

router.use('/auth', authRoutes)
router.use('/posts', postRoutes)
router.use('/comments', commentRoutes)
router.use('/admin', adminRoutes);
router.use('/page', pageRoutes);
router.get('/health', (_, res) => res.sendStatus(200))

export default router;
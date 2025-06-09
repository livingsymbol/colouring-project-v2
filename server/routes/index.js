import { Router } from "express";
import authRoutes from './authRoutes.js'
import postRoutes from './postRoutes.js'
import commentRoutes from './commentRoutes.js'
import adminRoutes from './adminRoutes.js'

const router = Router();

router.use('/auth', authRoutes)
router.use('/posts', postRoutes)
router.use('/comment', commentRoutes)
router.use('/admin', adminRoutes);

export default router;
import { Router } from 'express';
const router = Router();
import verifyToken from '../middlewares/verifyToken.js';
import { addComment, replyToComment, getCommentsWithReplies } from '../controllers/comment.controller.js';

router.post('/', verifyToken, addComment);
router.post('/:commentId/reply', verifyToken, replyToComment);
router.get('/:postId', getCommentsWithReplies);

export default router;

import express from 'express';
import { guestLogin, adminLogin, credentialLogin, register, getCurrentUser } from '../controllers/auth.controller.js';
import verifyToken from '../middlewares/verifyToken.js';

const router = express.Router();

router.post('/login/guest', guestLogin);
router.post('/login/admin', adminLogin);
router.post('/login', credentialLogin);
router.post('/register', register);
router.get('/me', verifyToken, getCurrentUser);

export default router;

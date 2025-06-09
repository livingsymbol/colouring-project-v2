import express from 'express';
import { guestLogin, adminLogin, credentialLogin, register } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/login/guest', guestLogin);
router.post('/login/admin', adminLogin);
router.post('/login', credentialLogin);
router.post('/register', register);

export default router;

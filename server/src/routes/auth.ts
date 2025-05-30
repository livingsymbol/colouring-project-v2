import { Hono } from 'hono';
import { z } from 'zod';
import { zValidator } from '@hono/zod-validator';
import { basicAuth } from 'hono/basic-auth';
import {
    issueGuestToken,
    issueUserToken,
    getAdminAuthValidator,
} from '../lib/auth';
import { v4 as uuidv4 } from 'uuid';
import { Bindings } from '..';

const app = new Hono<{ Bindings: Bindings }>();

// Guest login
app.get('/guest', async (c) => {
    const token = await issueGuestToken(c);
    return c.json({ success: true, type: 'guest', token });
});

// Admin login using Hono basic-auth middleware
app.use('/admin/login', async (c, next) => {
    return basicAuth({
        verifyUser: (username, password, c) => {
            const validator = getAdminAuthValidator(c.env);
            return validator(username, password);
        }
    })(c, next);
});

app.get('/admin/login', async (c) => {
    const token = await issueUserToken(c.env.ADMIN_EMAIL, c.env.JWT_SECRET);
    return c.json({ success: true, type: 'admin', token });
});

// Credential-based user login (future)
app.post(
    '/login',
    zValidator(
        'json',
        z.object({
            email: z.string().email(),
            password: z.string().min(4),
        })
    ),
    async (c) => {
        if (c.env.ENABLE_CREDENTIAL_AUTH !== 'true') {
            return c.json({ success: false, message: 'Credential login is disabled' }, 403);
        }

        const { email, password } = await c.req.json();

        // Fix 2: Use D1 database syntax correctly
        const result = await c.env.DB.prepare(
            'SELECT * FROM users WHERE email = ? AND password_hash = ?'
        )
            .bind(email, password)
            .first();

        if (!result) return c.json({ success: false, message: 'Invalid credentials' }, 401);

        const token = await issueUserToken(email, c.env.JWT_SECRET);
        return c.json({ success: true, type: 'user', token });
    }
);

// Credential registration (future)
app.post(
    '/register',
    zValidator(
        'json',
        z.object({
            email: z.string().email(),
            password: z.string().min(4),
        })
    ),
    async (c) => {
        if (c.env.ENABLE_CREDENTIAL_AUTH !== 'true') {
            return c.json({ success: false, message: 'Registration is disabled' }, 403);
        }

        const { email, password } = await c.req.json();

        const existing = await c.env.DB.prepare('SELECT id FROM users WHERE email = ?')
            .bind(email)
            .first();

        if (existing) {
            return c.json({ success: false, message: 'Email already in use' }, 409);
        }

        const id = uuidv4();
        await c.env.DB.prepare('INSERT INTO users (id, email, password_hash) VALUES (?, ?, ?)')
            .bind(id, email, password)
            .run();

        const token = await issueUserToken(email, c.env.JWT_SECRET);
        return c.json({ success: true, type: 'user', token });
    }
);

export default app;
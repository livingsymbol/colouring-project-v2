// lib/auth.ts
import { sign, verify } from 'hono/jwt';
import { setCookie } from 'hono/cookie';
import { v4 as uuidv4 } from 'uuid';

export async function issueGuestToken(c: any) {
    const guestId = uuidv4();
    const token = await sign({ type: 'guest', id: guestId }, c.env.JWT_SECRET);
    setCookie(c, 'token', token, {
        httpOnly: true,
        secure: true,
        path: '/',
        maxAge: 604800, // 7 days
    });
    return token;
}

export async function issueUserToken(email: string, secret: string) {
    return await sign({ type: 'user', email }, secret);
}

export async function verifyToken(token: string, secret: string) {
    try {
        return await verify(token, secret);
    } catch {
        return null;
    }
}

export function getAdminAuthValidator(env: { ADMIN_EMAIL: string; ADMIN_PASSWORD_HASH: string }) {
    return async (username: string, password: string) => {
        return username === env.ADMIN_EMAIL && password === env.ADMIN_PASSWORD_HASH;
    };
}
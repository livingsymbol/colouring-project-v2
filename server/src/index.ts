import { Hono } from 'hono'
import authRoutes from "./routes/auth"

export type Bindings = {
  DB: D1Database;
  JWT_SECRET: string;
  ENABLE_CREDENTIAL_AUTH: 'true' | 'false';
  ADMIN_EMAIL: string;
  ADMIN_PASSWORD_HASH: string;
};

const app = new Hono<{ Bindings: Bindings }>()

app.get('/test', (c) => {
  return c.text("HELP!!!")
})

app.route('/auth', authRoutes);

export default app
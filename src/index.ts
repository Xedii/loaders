import { Hono } from 'hono';
import { Env } from './types';

// Utwórz nową aplikację Hono z typami dla Cloudflare Workers
const app = new Hono<{ Bindings: Env }>();

// Middleware do sprawdzania autoryzacji (przykład użycia secrets)
app.use('/api/*', async (c, next) => {
  const apiKey = c.req.header('X-API-Key');

  // Dostęp do secrets przez c.env
  if (apiKey && apiKey === c.env.API_KEY) {
    await next();
  } else {
    return c.json({ error: 'Unauthorized' }, 401);
  }
});

// Route główny
app.get('/', (c) => {
  return c.json({
    message: 'Witaj w Hono.js na Cloudflare Workers!',
    environment: c.env.ENVIRONMENT,
    apiVersion: c.env.API_VERSION,
  });
});

// Route pokazujący jak używać environment variables
app.get('/env-info', (c) => {
  return c.json({
    environment: c.env.ENVIRONMENT,
    apiVersion: c.env.API_VERSION,
    // NIE zwracaj secrets w response!
    hasApiKey: !!c.env.API_KEY,
    hasDatabaseUrl: !!c.env.DATABASE_URL,
    hasJwtSecret: !!c.env.JWT_SECRET,
  });
});

// Protected API route (wymaga API key)
app.get('/api/protected', (c) => {
  return c.json({
    message: 'To jest chroniony endpoint',
    user: 'authenticated-user',
  });
});

// Przykład użycia database URL (jeśli jest ustawiony)
app.get('/api/database-status', async (c) => {
  if (!c.env.DATABASE_URL) {
    return c.json({ error: 'Database URL not configured' }, 500);
  }

  // Tutaj możesz używać c.env.DATABASE_URL do połączenia z bazą
  return c.json({
    status: 'connected',
    message: 'Database connection available',
  });
});

// Health check endpoint
app.get('/health', (c) => {
  return c.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// 404 handler
app.notFound((c) => {
  return c.json({ error: 'Not Found' }, 404);
});

// Error handler
app.onError((err, c) => {
  console.error(`${err}`);
  return c.json({ error: 'Internal Server Error' }, 500);
});

// Export dla Cloudflare Workers
export default app;

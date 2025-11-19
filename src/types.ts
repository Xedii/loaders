// Definicja typów dla Cloudflare Workers Environment Bindings

export interface Env {
  // Zmienne środowiskowe (non-sensitive)
  ENVIRONMENT: string;
  API_VERSION: string;

  // Secrets (sensitive data)
  // Te zmienne są ustawiane przez: wrangler secret put <NAME>
  API_KEY?: string;
  DATABASE_URL?: string;
  JWT_SECRET?: string;
  THIRD_PARTY_API_KEY?: string;
  STRIPE_SECRET_KEY?: string;
  SENDGRID_API_KEY?: string;

  // Cloudflare bindings (opcjonalne)
  // KV Namespace
  // MY_KV?: KVNamespace;

  // D1 Database
  // DB?: D1Database;

  // R2 Bucket
  // MY_BUCKET?: R2Bucket;

  // Durable Objects
  // MY_DURABLE_OBJECT?: DurableObjectNamespace;
}

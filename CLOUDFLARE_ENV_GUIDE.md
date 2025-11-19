# Cloudflare Workers - Przewodnik Environment Variables

## 🎯 Kluczowe Różnice: Cloudflare vs Tradycyjne .env

### Tradycyjne Aplikacje (Node.js, etc.)
```bash
# .env
DATABASE_URL=postgresql://...
API_KEY=secret123
```
Wszystko w jednym pliku `.env`, używając `dotenv` package.

### Cloudflare Workers ✨
**3 różne mechanizmy:**

1. **`.dev.vars`** - tylko dla local development
2. **`wrangler.toml [vars]`** - non-sensitive, commitowane do git
3. **`wrangler secret put`** - sensitive data, zapisane w Cloudflare

## 📊 Porównanie

| Typ | Plik | Sensitive? | Commitować? | Gdzie działa? |
|-----|------|-----------|-------------|---------------|
| Dev Variables | `.dev.vars` | Tak | ❌ NIE | Tylko lokalnie |
| Public Vars | `wrangler.toml` | Nie | ✅ TAK | Wszędzie |
| Secrets | CLI command | Tak | ❌ NIE | Tylko produkcja |

## 🔑 Kiedy użyć czego?

### `.dev.vars` - Development lokalny
```bash
# .dev.vars (NIE commituj!)
API_KEY=dev-key-123
DATABASE_URL=postgresql://localhost:5432/dev
JWT_SECRET=dev-secret
```

**Użyj gdy:**
- Pracujesz lokalnie z `wrangler dev`
- Potrzebujesz testowych wartości
- Chcesz szybko zmieniać wartości

### `wrangler.toml [vars]` - Non-sensitive config
```toml
# wrangler.toml (commituj!)
[vars]
ENVIRONMENT = "production"
API_VERSION = "v1"
LOG_LEVEL = "info"
MAX_RETRIES = "3"
```

**Użyj dla:**
- Wartości publicznych
- Feature flags
- Wartości konfiguracyjnych
- Nie-wrażliwych ustawień

### `wrangler secret put` - Production secrets
```bash
wrangler secret put API_KEY
wrangler secret put DATABASE_URL
wrangler secret put JWT_SECRET
```

**Użyj dla:**
- API keys
- Database credentials
- JWT secrets
- OAuth tokens
- Encryption keys

## 🛠️ Praktyczny Workflow

### Setup Development
```bash
# 1. Skopiuj template
cp .env.example .dev.vars

# 2. Wypełnij lokalne wartości
nano .dev.vars

# 3. Uruchom dev server
wrangler dev
```

### Setup Production
```bash
# 1. Zaloguj się
wrangler login

# 2. Ustaw secrets
wrangler secret put API_KEY
wrangler secret put DATABASE_URL
wrangler secret put JWT_SECRET

# 3. Zweryfikuj
wrangler secret list

# 4. Deploy
wrangler deploy
```

## 💡 Best Practices

### ✅ Dobre praktyki

```typescript
// 1. Zawsze definiuj typy dla Env
export interface Env {
  API_KEY: string;
  DATABASE_URL: string;
  ENVIRONMENT: string;
}

// 2. Używaj type-safe dostępu
app.get('/api', (c) => {
  const apiKey = c.env.API_KEY; // TypeScript wie o tym!
});

// 3. Sprawdzaj czy secret istnieje
if (!c.env.API_KEY) {
  return c.json({ error: 'API_KEY not configured' }, 500);
}

// 4. NIE loguj secrets
console.log('API Key:', c.env.API_KEY); // ❌ ŹLE!
console.log('Has API Key:', !!c.env.API_KEY); // ✅ OK!
```

### ❌ Unikaj

```typescript
// NIE zwracaj secrets w response
app.get('/debug', (c) => {
  return c.json({
    apiKey: c.env.API_KEY, // ❌ BARDZO ŹLE!
    dbUrl: c.env.DATABASE_URL // ❌ BARDZO ŹLE!
  });
});

// NIE hardcoduj secrets
const API_KEY = "secret123"; // ❌ ŹLE!

// NIE commituj .dev.vars
git add .dev.vars // ❌ ŹLE!
```

## 🔄 Migration z tradycyjnej .env

Jeśli migrujujesz z tradycyjnej aplikacji Node.js:

```bash
# Stara aplikacja (Node.js + .env)
API_KEY=secret123
DATABASE_URL=postgresql://...
ENVIRONMENT=production
LOG_LEVEL=info
```

### Krok 1: Podziel zmienne

**Non-sensitive → `wrangler.toml`:**
```toml
[vars]
ENVIRONMENT = "production"
LOG_LEVEL = "info"
```

**Sensitive → Secrets:**
```bash
wrangler secret put API_KEY
wrangler secret put DATABASE_URL
```

### Krok 2: Aktualizuj kod

```typescript
// Stary kod (Node.js)
import dotenv from 'dotenv';
dotenv.config();
const apiKey = process.env.API_KEY;

// Nowy kod (Cloudflare Workers)
// Dostęp przez c.env w Hono
app.get('/api', (c) => {
  const apiKey = c.env.API_KEY;
});
```

## 🎓 Przykłady

### Przykład 1: Autoryzacja API

```typescript
app.use('/api/*', async (c, next) => {
  const providedKey = c.req.header('X-API-Key');

  if (providedKey === c.env.API_KEY) {
    await next();
  } else {
    return c.json({ error: 'Unauthorized' }, 401);
  }
});
```

### Przykład 2: Database Connection

```typescript
import { Client } from '@planetscale/database';

app.get('/users', async (c) => {
  const client = new Client({
    url: c.env.DATABASE_URL
  });

  const result = await client.execute('SELECT * FROM users');
  return c.json(result.rows);
});
```

### Przykład 3: Multiple Environments

```toml
# wrangler.toml

# Production
[vars]
ENVIRONMENT = "production"
API_URL = "https://api.example.com"

# Staging
[env.staging]
name = "app-staging"
[env.staging.vars]
ENVIRONMENT = "staging"
API_URL = "https://staging-api.example.com"

# Development
[env.dev]
name = "app-dev"
[env.dev.vars]
ENVIRONMENT = "development"
API_URL = "http://localhost:3000"
```

Deploy:
```bash
wrangler deploy              # production
wrangler deploy --env staging
wrangler deploy --env dev
```

## 📚 Cheatsheet

```bash
# LOCAL DEVELOPMENT
wrangler dev                 # Używa .dev.vars
wrangler dev --remote        # Używa production secrets

# SECRETS MANAGEMENT
wrangler secret put NAME     # Dodaj/zaktualizuj
wrangler secret list         # Pokaż wszystkie
wrangler secret delete NAME  # Usuń

# DEPLOYMENT
wrangler deploy              # Production
wrangler deploy --env staging # Staging
wrangler deploy --dry-run    # Test bez deployu

# LOGS
wrangler tail                # Live logs
wrangler tail --format pretty # Ładniejszy format

# INFO
wrangler whoami              # Sprawdź konto
wrangler deployments list    # Historia deploymentów
```

## 🔒 Security Checklist

- [ ] `.dev.vars` w `.gitignore`
- [ ] `.env` w `.gitignore`
- [ ] Secrets tylko przez `wrangler secret put`
- [ ] NIE commituj secrets do gita
- [ ] NIE loguj secrets
- [ ] NIE zwracaj secrets w API
- [ ] Używaj TypeScript types dla Env
- [ ] Rotuj secrets regularnie
- [ ] Różne secrets dla dev/staging/prod

## 🆘 Debugging

### Secret nie działa na produkcji

```bash
# 1. Sprawdź czy secret istnieje
wrangler secret list

# 2. Sprawdź deployment
wrangler deployments list

# 3. Zobacz logi
wrangler tail

# 4. Sprawdź w kodzie
app.get('/debug', (c) => {
  return c.json({
    hasApiKey: !!c.env.API_KEY,
    hasDbUrl: !!c.env.DATABASE_URL
  });
});
```

### Secret nie działa lokalnie

```bash
# Upewnij się że używasz .dev.vars
cat .dev.vars

# Restart dev server
wrangler dev
```

## 🎉 Gotowe!

Teraz wiesz wszystko o environment variables w Cloudflare Workers!

Pamiętaj: **`.dev.vars` lokalnie, `[vars]` dla publicznych, `wrangler secret` dla secrets!**

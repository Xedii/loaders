# Hono.js na Cloudflare Workers - Konfiguracja Environment Variables

Kompletny przewodnik konfiguracji zmiennych środowiskowych dla aplikacji Hono.js deployowanej na Cloudflare Workers.

## 📋 Spis treści

- [Instalacja](#instalacja)
- [Konfiguracja Environment Variables](#konfiguracja-environment-variables)
- [Development Lokalny](#development-lokalny)
- [Deployment na Cloudflare](#deployment-na-cloudflare)
- [Bezpieczeństwo](#bezpieczeństwo)

## 🚀 Instalacja

```bash
# Zainstaluj zależności
npm install

# Lub z pnpm
pnpm install

# Lub z yarn
yarn install
```

## ⚙️ Konfiguracja Environment Variables

### Różnica między zmiennymi a secrets

W Cloudflare Workers rozróżniamy:

1. **Variables (non-sensitive)** - Definiowane w `wrangler.toml` w sekcji `[vars]`
2. **Secrets (sensitive)** - Ustawiane przez CLI: `wrangler secret put <NAME>`

### Typ 1: Variables (Non-Sensitive)

Edytuj `wrangler.toml`:

```toml
[vars]
ENVIRONMENT = "production"
API_VERSION = "v1"
```

### Typ 2: Secrets (Sensitive Data)

**NIE umieszczaj secrets w wrangler.toml!**

Użyj Wrangler CLI:

```bash
# Ustaw pojedynczy secret
wrangler secret put API_KEY
# Zostaniesz poproszony o wprowadzenie wartości

# Dla innych secrets:
wrangler secret put DATABASE_URL
wrangler secret put JWT_SECRET
wrangler secret put STRIPE_SECRET_KEY
```

Lista wszystkich secrets:

```bash
wrangler secret list
```

Usuń secret:

```bash
wrangler secret delete API_KEY
```

## 💻 Development Lokalny

### 1. Skopiuj plik .env.example

```bash
cp .env.example .dev.vars
```

### 2. Wypełnij prawdziwe wartości w .dev.vars

```bash
# .dev.vars
ENVIRONMENT=development
API_VERSION=v1
API_KEY=twoj-lokalny-api-key
DATABASE_URL=postgresql://localhost:5432/mydb
JWT_SECRET=twoj-lokalny-jwt-secret
```

**UWAGA:** Plik `.dev.vars` jest używany przez `wrangler dev` i NIE POWINIEN być commitowany do gita!

### 3. Uruchom serwer developerski

```bash
npm run dev
```

Aplikacja będzie dostępna pod: `http://localhost:8787`

## 🌐 Deployment na Cloudflare

### Krok 1: Zaloguj się do Cloudflare

```bash
wrangler login
```

### Krok 2: Ustaw Account ID

Znajdź swój Account ID w dashboardzie Cloudflare i dodaj do `wrangler.toml`:

```toml
account_id = "twoj-account-id-tutaj"
```

### Krok 3: Skonfiguruj Production Secrets

```bash
# Ustaw wszystkie wymagane secrets
wrangler secret put API_KEY
wrangler secret put DATABASE_URL
wrangler secret put JWT_SECRET
wrangler secret put STRIPE_SECRET_KEY
```

### Krok 4: Deploy!

```bash
npm run deploy
```

Lub bezpośrednio:

```bash
wrangler deploy
```

## 🔐 Bezpieczeństwo

### ✅ DOBRZE

- ✅ Używaj `wrangler secret put` dla sensitive data
- ✅ Dodaj `.env` i `.dev.vars` do `.gitignore`
- ✅ Commituj `.env.example` jako template
- ✅ Non-sensitive variables w `wrangler.toml` sekcji `[vars]`

### ❌ ŹLE

- ❌ NIE commituj plików `.env` lub `.dev.vars`
- ❌ NIE umieszczaj secrets w `wrangler.toml`
- ❌ NIE hardcoduj secrets w kodzie
- ❌ NIE zwracaj secrets w API responses

## 📝 Struktura Projektu

```
.
├── src/
│   ├── index.ts          # Główna aplikacja Hono
│   └── types.ts          # Definicje typów dla Env
├── .dev.vars             # Lokalne env vars (GIT IGNORED)
├── .env.example          # Template dla env vars
├── .gitignore            # Lista ignorowanych plików
├── package.json          # Zależności projektu
├── tsconfig.json         # Konfiguracja TypeScript
├── wrangler.toml         # Konfiguracja Cloudflare Workers
└── README.md             # Ten plik
```

## 🔍 Testowanie Environment Variables

### Test lokalny

```bash
# Uruchom dev server
npm run dev

# W innym terminalu:
curl http://localhost:8787/env-info
```

### Test na produkcji

```bash
curl https://twoja-domena.workers.dev/env-info
```

## 🎯 Dostęp do Environment Variables w kodzie

```typescript
import { Hono } from 'hono';
import { Env } from './types';

const app = new Hono<{ Bindings: Env }>();

app.get('/example', (c) => {
  // Dostęp do zmiennych przez c.env
  const environment = c.env.ENVIRONMENT;
  const apiKey = c.env.API_KEY;
  const dbUrl = c.env.DATABASE_URL;

  return c.json({ environment });
});
```

## 🛠️ Komendy Pomocnicze

```bash
# Development
npm run dev              # Uruchom lokalny dev server

# Deployment
npm run deploy           # Deploy na Cloudflare

# Secrets Management
wrangler secret list     # Lista wszystkich secrets
wrangler secret put NAME # Dodaj/zaktualizuj secret
wrangler secret delete NAME # Usuń secret

# Tail Logs (live)
wrangler tail           # Zobacz logi w czasie rzeczywistym

# Info o deploymencie
wrangler deployments list
```

## 🌍 Multiple Environments

Możesz definiować różne environemnty w `wrangler.toml`:

```toml
# Production (default)
name = "hono-app"
[vars]
ENVIRONMENT = "production"

# Staging
[env.staging]
name = "hono-app-staging"
[env.staging.vars]
ENVIRONMENT = "staging"

# Development
[env.development]
name = "hono-app-dev"
[env.development.vars]
ENVIRONMENT = "development"
```

Deploy do konkretnego environmentu:

```bash
wrangler deploy --env staging
wrangler deploy --env development
```

## 📚 Dodatkowe Zasoby

- [Hono Documentation](https://hono.dev/)
- [Cloudflare Workers Docs](https://developers.cloudflare.com/workers/)
- [Wrangler CLI Docs](https://developers.cloudflare.com/workers/wrangler/)
- [Environment Variables Guide](https://developers.cloudflare.com/workers/configuration/environment-variables/)

## 🆘 Troubleshooting

### Problem: Secrets nie działają lokalnie

**Rozwiązanie:** Upewnij się, że używasz `.dev.vars` zamiast `.env` dla local development.

### Problem: "Error: Unknown variable XYZ"

**Rozwiązanie:** Sprawdź czy zmienna jest zdefiniowana w:
- `wrangler.toml` dla non-sensitive vars
- Ustawiona przez `wrangler secret put` dla secrets
- `.dev.vars` dla local development

### Problem: Deploy fails z "account_id not set"

**Rozwiązanie:** Dodaj `account_id` do `wrangler.toml`:
```toml
account_id = "twoj-account-id"
```

## 📄 Licencja

MIT

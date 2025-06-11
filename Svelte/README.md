# ⚡️ SvelteKit Advanced Starter Template

A production-ready, scalable, and structured SvelteKit starter with all batteries included: testing, linting, CI/CD enforcement, TailwindCSS, Docker, and Playwright E2E support.

---

## 📦 Features

- ✅ TypeScript
- 🎨 TailwindCSS + CSS architecture
- 🧪 Unit & E2E Testing (Vitest + Playwright)
- 🐳 Docker & Docker Compose
- ✅ Commit linting & pre-push branch validation
- 📁 Structured file architecture
- 🌍 SEO-ready with `sitemap.xml` & `robots.txt`
- 🔒 Git branch naming & push protection

---

## 🛠️ Installation

```bash
git clone https://github.com/ShivShankarKushwaha/templates my-app
cd my-app/Svelte
npm install
```

or with bun:

```bash
bun install
```

---

## 🚀 Development

Start the development server:

```bash
npm run dev
# or
bun run dev
```

Open [http://localhost:5173](http://localhost:5173)

---

## 🧪 Testing

### Unit Tests (Vitest)

```bash
npm run test
# or
bun run test
```

### E2E Tests (Playwright)

```bash
npx playwright install
npm run test:e2e
```

---

## 🐳 Docker

### Build Docker Image

```bash
docker build -t sveltekit-app .
```

### Run with Docker Compose

```bash
docker-compose up --build
```

---

## 🚢 Deployment

### Static Export

```bash
npm run build
```

Deploy `build/` to your static hosting (Vercel, Netlify, etc.).

For Docker deployment:

```bash
docker-compose up --build -d
```

---

## ✅ Commit & Push Guidelines

### ✔️ Commit Format (Enforced via CommitLint)

Your commits must follow this format:

```
<type>: <commit message>
```

**Allowed Types**:
`ci`, `chore`, `docs`, `ticket`, `feat`, `add`, `fix`, `perf`, `refactor`, `revert`, `style`

Example:

```bash
feat: add OAuth support
```

---

### 🔒 Git Push Rules (via Husky Hook)

1. ❌ **Push is blocked** to these protected branches: `master`, `integration`, `develop`
2. 🧠 **Branch name must match** the regex:
   ```
   ^(ci|chore|docs|add|ticket|feat|fix|pref|refactor|revert|style)/[a-zA-Z0-9._-]+$
   ```

Bad example (rejected):

```
feature/test123
```

Good example (accepted):

```
feat/user-auth
```

---

## 🗂️ Project Structure Overview

```
├── src/                   # Core source code
│   ├── routes/            # SvelteKit routes
│   ├── components/        # Reusable UI components
│   ├── stores/            # Svelte stores
│   ├── lib/               # Utilities & helpers
│   ├── styles/            # CSS & Tailwind setup
│   └── scripts/           # Bash/Docker scripts
├── static/                # Static assets
├── tests/                 # Unit & E2E tests
├── coverage/              # Test coverage reports
```

---

## 🤝 Contributing

Make sure to create feature branches with correct naming, write clean commits, and run tests before submitting a PR.

---

## 📄 License

MIT – Go build something amazing 💥
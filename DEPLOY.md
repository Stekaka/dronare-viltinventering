# Deployment Guide

## Vercel (Rekommenderat för Next.js)

### Steg 1: Pusha till GitHub

1. **Skapa en GitHub repository** (om du inte redan har en):
   - Gå till https://github.com/new
   - Skapa en ny repository (t.ex. `dronare-viltinventering`)

2. **Initialisera git och pusha** (om inte redan gjort):
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Drönare viltinventering presentation"
   git branch -M main
   git remote add origin https://github.com/DITT-ANVÄNDARNAMN/dronare-viltinventering.git
   git push -u origin main
   ```

### Steg 2: Deploya till Vercel

1. **Gå till Vercel**: https://vercel.com
2. **Logga in** med ditt GitHub-konto
3. **Klicka på "Add New Project"**
4. **Importera din GitHub repository**
5. **Vercel kommer automatiskt att:**
   - Detektera att det är ett Next.js-projekt
   - Konfigurera build-inställningar
   - Deploya projektet

6. **Klicka på "Deploy"** - det tar ca 1-2 minuter!

### Steg 3: Efter deployment

- Du får en URL som: `https://dronare-viltinventering.vercel.app`
- Varje push till `main` branch deployar automatiskt
- Du kan konfigurera custom domain i Vercel dashboard

---

## GitHub Pages (Alternativ)

För GitHub Pages behöver du konfigurera Next.js för static export:

1. **Uppdatera `next.config.ts`**:
   ```typescript
   const nextConfig = {
     output: 'export',
     images: {
       unoptimized: true
     }
   }
   ```

2. **Lägg till deploy script i `package.json`**:
   ```json
   "scripts": {
     "export": "next build"
   }
   ```

3. **Skapa GitHub Actions workflow** (`.github/workflows/deploy.yml`):
   ```yaml
   name: Deploy to GitHub Pages
   on:
     push:
       branches: [ main ]
   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: '20'
         - run: npm install
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./out
   ```

---

## Snabbaste vägen: Vercel

Vercel är enklast för Next.js:
- ✅ Automatisk deployment
- ✅ Gratis hosting
- ✅ Automatisk HTTPS
- ✅ CDN globalt
- ✅ Ingen extra konfiguration behövs

Bara pusha till GitHub och koppla till Vercel!


# 🚀 Tutorial: Deploy na Render.com

## 📋 Spis treści

1. [Przygotowanie projektu](#przygotowanie-projektu)
2. [Konfiguracja na Render](#konfiguracja-na-render)
3. [Deploy i monitorowanie](#deploy-i-monitorowanie)
4. [Rozwiązywanie problemów](#rozwiązywanie-problemów)

## 🔧 Przygotowanie projektu

### 1. Sprawdź czy wszystkie pliki są gotowe

Twój projekt już ma wszystkie potrzebne pliki:

- ✅ `Dockerfile` - gotowy
- ✅ `render.yaml` - gotowy
- ✅ `.dockerignore` - gotowy
- ✅ `frontend/package.json` - ma script "start"

### 2. Commit i push do GitHub

```bash
git add .
git commit -m "Add Render deployment configuration"
git push origin main
```

### 3. Sprawdź strukturę projektu

```
NoirAtelier-1/
├── Dockerfile
├── render.yaml
├── .dockerignore
└── frontend/
    ├── package.json
    ├── src/
    └── dist/ (utworzy się po build)
```

## 🌐 Konfiguracja na Render

### 1. Utwórz konto na Render

- Idź na [render.com](https://render.com)
- Zarejestruj się przez GitHub (polecane)

### 2. Połącz GitHub

- W dashboard kliknij "New +"
- Wybierz "Web Service"
- Połącz swoje konto GitHub
- Wybierz repository "NoirAtelier-1"

### 3. Konfiguracja Web Service

#### Podstawowe ustawienia:

- **Name**: `noiratelier-frontend`
- **Runtime**: `Docker`
- **Region**: `Frankfurt (EU Central)` (najbliżej Polski)
- **Branch**: `main`

#### Docker ustawienia:

- **Dockerfile Path**: `./Dockerfile`
- **Docker Context**: `./`

#### Zaawansowane ustawienia:

- **Auto-Deploy**: `Yes` (automatyczny deploy przy push)
- **Health Check Path**: `/`

### 4. Zmienne środowiskowe (Environment Variables)

Dodaj w sekcji "Environment":

- `NODE_ENV` = `production`

### 5. Plan

- **Free Plan**: 0$/miesiąc (ograniczenia: 750h/miesiąc, sleep po 15min nieaktywności)
- **Starter Plan**: 7$/miesiąc (polecany dla produkcji)

## 🚀 Deploy i monitorowanie

### 1. Rozpocznij deploy

- Kliknij "Create Web Service"
- Render automatycznie:
  1. Sklonuje repo
  2. Zbuduje Docker image
  3. Uruchomi kontener
  4. Przydzieli domenę

### 2. Monitoruj postęp

W zakładce "Logs" zobaczysz:

```
==> Cloning from https://github.com/TWOJE_USERNAME/NoirAtelier-1...
==> Downloading cache...
==> Building with Dockerfile...
==> Step 1/15 : FROM node:20-alpine AS builder
==> Running: ['/bin/bash', '-c', 'npm ci']
==> Running: ['/bin/bash', '-c', 'npm run build']
==> Step 12/15 : EXPOSE 3000
==> Build successful!
==> Starting service...
==> Your service is live 🎉
```

### 3. Otrzymasz URL

Format: `https://noiratelier-frontend.onrender.com`

## 🔍 Rozwiązywanie problemów

### Problem: Build fails

**Przyczyna**: Błędy w kodzie lub brakujące dependencje
**Rozwiązanie**:

1. Sprawdź logi w Render
2. Przetestuj lokalnie: `npm run build` w folderze frontend
3. Napraw błędy i push ponownie

### Problem: Site loads but shows errors

**Przyczyna**: Problemy z routing w SPA
**Rozwiązanie**: Dodaj do `render.yaml`:

```yaml
routes:
  - type: rewrite
    source: /*
    destination: /index.html
```

### Problem: Service sleeps (Free Plan)

**Przyczyna**: Brak ruchu przez 15min
**Rozwiązanie**:

- Upgrade do Starter Plan
- Lub użyj zewnętrznego monitora (np. UptimeRobot)

### Problem: Docker build timeout

**Przyczyna**: Za duże pliki/dependencje
**Rozwiązanie**: Popraw `.dockerignore` i usuń niepotrzebne pliki

## 📝 Dodatkowe konfiguracje

### Custom Domain

1. W Render dashboard → Settings → Custom Domains
2. Dodaj swoją domenę
3. Skonfiguruj DNS CNAME na `noiratelier-frontend.onrender.com`

### SSL Certificate

- Render automatycznie generuje SSL (Let's Encrypt)
- Dla custom domain również automatyczne

### Environment Variables dla różnych środowisk

```yaml
envVars:
  - key: NODE_ENV
    value: production
  - key: REACT_APP_API_URL
    value: https://api.example.com
```

## 🎯 Checklist przed Go-Live

- [ ] Build lokalnie działa bez błędów
- [ ] Wszystkie assets są dostępne
- [ ] Routing działa poprawnie
- [ ] Responsywność sprawdzona
- [ ] Performance zoptymalizowana
- [ ] SSL certificate aktywny
- [ ] Custom domain skonfigurowana (opcjonalnie)
- [ ] Monitoring ustawiony
- [ ] Backup plan przygotowany

## 🔧 Komendy pomocne

### Lokalne testowanie Docker

```bash
# Build image
docker build -t noiratelier-test .

# Run kontener
docker run -p 3000:3000 noiratelier-test

# Sprawdź w przeglądarce: http://localhost:3000
```

### Git workflows

```bash
# Deploy nowej wersji
git add .
git commit -m "Update: opis zmian"
git push origin main
# Render automatycznie zrobi redeploy

# Rollback do poprzedniej wersji (w Render dashboard)
# Deploys → Previous Deploy → Redeploy
```

## 📞 Wsparcie

- [Render Documentation](https://render.com/docs)
- [Render Community](https://community.render.com)
- [GitHub Issues](https://github.com/renderinc/render-community/issues)

---

**Powodzenia z deployem! 🎉**

Po wykonaniu tych kroków Twoja aplikacja będzie dostępna publicznie na internecie.

# NoirAtelier - Instrukcja uruchomienia projektu

## 📋 Wymagania

- Node.js (wersja 18 lub wyższa)
- npm (wersja 8 lub wyższa)
- Docker (opcjonalnie, do uruchomienia lokalnie z Dockerem)

## 🚀 Uruchomienie lokalnie

### 1. Klonowanie repozytorium
```bash
git clone <url-repozytorium>
cd NoirAtelier-1
```

### 2. Instalacja zależności
```bash
cd frontend
npm install
```

### 3. Uruchomienie w trybie deweloperskim
```bash
npm run dev
```

Aplikacja będzie dostępna pod adresem: `http://localhost:1111`

### 4. Budowanie produkcyjne
```bash
npm run build
npm run start
```

## 🐳 Uruchomienie z Dockerem (lokalnie)

### 1. Budowanie obrazu Docker
```bash
# W głównym katalogu projektu
docker build -t noiratelier .
```

### 2. Uruchomienie kontera
```bash
docker run -p 3000:3000 noiratelier
```

Aplikacja będzie dostępna pod adresem: `http://localhost:3000`

## 🌐 Deploy na Render

### Opcja 1: Automatyczny deploy (zalecane)

1. **Przygotuj repozytorium GitHub:**
   - Zacommituj wszystkie zmiany
   - Wypchnij kod na GitHub

2. **Utwórz nowy Web Service na Render:**
   - Zaloguj się na [render.com](https://render.com)
   - Kliknij "New" → "Web Service"
   - Połącz swoje repozytorium GitHub
   - Render automatycznie wykryje plik `render.yaml`

3. **Konfiguracja zostanie załadowana automatycznie:**
   - Nazwa: `noiratelier-frontend`
   - Environment: `Docker`
   - Plan: `Free`

### Opcja 2: Manualna konfiguracja

1. **Utwórz nowy Web Service:**
   - Environment: `Docker`
   - Build Command: `docker build -t noiratelier .`
   - Start Command: `serve -s dist -l 3000`

2. **Zmienne środowiskowe:**
   - `NODE_ENV`: `production`

## 📁 Struktura plików dla deploy

```
NoirAtelier-1/
├── Dockerfile              # Konfiguracja Docker
├── .dockerignore           # Pliki ignorowane przez Docker
├── render.yaml             # Konfiguracja Render
├── README.md              # Ta instrukcja
└── frontend/
    ├── package.json       # Zależności i skrypty
    ├── vite.config.js     # Konfiguracja Vite
    └── src/               # Kod źródłowy
```

## 🔧 Dostępne skrypty

W katalogu `frontend/`:

- `npm run dev` - Uruchomienie w trybie deweloperskim
- `npm run build` - Budowanie wersji produkcyjnej
- `npm run start` - Uruchomienie wersji produkcyjnej
- `npm run preview` - Podgląd wersji produkcyjnej (Vite)
- `npm run lint` - Sprawdzenie kodu (ESLint)

## 🌟 Funkcje

- ⚡ Vite - szybki bundler
- ⚛️ React 19 - najnowsza wersja
- 🎨 Framer Motion - animacje
- 🧭 React Router - routing
- 📱 Responsive design
- 🎯 Gotowy do produkcji

## 🆘 Rozwiązywanie problemów

### Problem z portami
- Lokalnie: aplikacja działa na porcie 1111
- Docker: aplikacja działa na porcie 3000
- Render: automatycznie przypisuje port

### Problemy z buildem
```bash
# Wyczyść cache i reinstaluj
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Problemy z Dockerem
```bash
# Sprawdź logi
docker logs <container-id>

# Wejdź do kontenera
docker exec -it <container-id> /bin/sh
```

## 📞 Wsparcie

W przypadku problemów z deployem:
1. Sprawdź logi na Render Dashboard
2. Upewnij się, że wszystkie pliki są zacommitowane
3. Zweryfikuj konfigurację w `render.yaml`

---

**Powodzenia z deployem! 🎉**

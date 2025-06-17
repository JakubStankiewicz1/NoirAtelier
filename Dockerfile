# Multi-stage build dla optymalizacji
# Stage 1: Build
FROM node:20-alpine AS builder

# Ustawiamy katalog roboczy
WORKDIR /app

# Kopiujemy package.json i package-lock.json z katalogu frontend
COPY frontend/package*.json ./

# Instalujemy wszystkie zależności (włącznie z devDependencies)
RUN npm ci

# Kopiujemy cały kod źródłowy z katalogu frontend
COPY frontend/ .

# Budujemy aplikację
RUN npm run build

# Stage 2: Production
FROM node:20-alpine AS production

# Instalujemy serve globalnie
RUN npm install -g serve

# Tworzymy użytkownika non-root
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Ustawiamy katalog roboczy
WORKDIR /app

# Kopiujemy zbudowaną aplikację z pierwszego stage
COPY --from=builder --chown=nextjs:nodejs /app/dist ./dist

# Zmieniamy na użytkownika non-root
USER nextjs

# Eksponujemy port 3000
EXPOSE 3000

# Healthcheck
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000 || exit 1

# Uruchamiamy aplikację
CMD ["serve", "-s", "dist", "-l", "3000"]

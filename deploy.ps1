# Deploy script for NoirAtelier

Write-Host "🚀 NoirAtelier Deploy Script" -ForegroundColor Cyan
Write-Host "==============================" -ForegroundColor White

# Check if we're in the right directory
if (-not (Test-Path "frontend/package.json")) {
    Write-Host "❌ Błąd: Nie znaleziono package.json w katalogu frontend!" -ForegroundColor Red
    Write-Host "Upewnij się, że uruchamiasz skrypt z głównego katalogu projektu." -ForegroundColor Yellow
    exit 1
}

Write-Host "📦 Instalowanie zależności..." -ForegroundColor Yellow
Set-Location frontend
npm install

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Błąd podczas instalacji zależności!" -ForegroundColor Red
    exit 1
}

Write-Host "🔨 Budowanie aplikacji..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Błąd podczas budowania aplikacji!" -ForegroundColor Red
    exit 1
}

Set-Location ..

Write-Host "✅ Projekt jest gotowy do deployu!" -ForegroundColor Green
Write-Host "" -ForegroundColor White
Write-Host "Następne kroki:" -ForegroundColor Cyan
Write-Host "1. Zacommituj wszystkie zmiany do Git" -ForegroundColor White
Write-Host "2. Wypchnij kod na GitHub" -ForegroundColor White
Write-Host "3. Połącz repozytorium z Render" -ForegroundColor White
Write-Host "4. Render automatycznie zbuduje i uruchomi aplikację" -ForegroundColor White
Write-Host "" -ForegroundColor White
Write-Host "🌐 Link do Render: https://render.com" -ForegroundColor Blue
Write-Host "📖 Szczegółowa instrukcja w README.md" -ForegroundColor Blue

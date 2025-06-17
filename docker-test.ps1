# Skrypt do lokalnego testowania Docker buildu (Windows PowerShell)

Write-Host "🐳 Budowanie obrazu Docker..." -ForegroundColor Cyan
docker build -t noiratelier .

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Build zakończony pomyślnie!" -ForegroundColor Green
    Write-Host "🚀 Uruchamianie kontenera na porcie 3000..." -ForegroundColor Yellow
    Write-Host "Aplikacja będzie dostępna pod adresem: http://localhost:3000" -ForegroundColor Blue
    docker run -p 3000:3000 noiratelier
} else {
    Write-Host "❌ Build nie powiódł się!" -ForegroundColor Red
    exit 1
}

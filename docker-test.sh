#!/bin/bash

# Skrypt do lokalnego testowania Docker buildu

echo "🐳 Budowanie obrazu Docker..."
docker build -t noiratelier .

if [ $? -eq 0 ]; then
    echo "✅ Build zakończony pomyślnie!"
    echo "🚀 Uruchamianie kontenera na porcie 3000..."
    docker run -p 3000:3000 noiratelier
else
    echo "❌ Build nie powiódł się!"
    exit 1
fi

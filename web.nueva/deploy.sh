#!/usr/bin/env sh

# quitamos los errores
set -e

echo "🚀 Iniciando proceso de despliegue en joseluisgs.dev..."

# Limpieza inicial
echo "🧹 Limpiando compilaciones anteriores..."
rm -rf src/.vuepress/dist

# Generación del sitio estático
echo "🏗️  Compilando el sitio con VuePress 2..."
npm run docs:build

# Preparación de archivos legales y de dominio
echo "📄 Copiando archivos de configuración (CNAME, README, LICENSE)..."
cp README.md src/.vuepress/dist
cp LICENSE src/.vuepress/dist
cp CNAME src/.vuepress/dist

# Navegación al directorio de salida
cd src/.vuepress/dist

# Preparación del repositorio temporal para GitHub Pages
echo "📦 Inicializando repositorio local para el despliegue..."
git init
git add -A
date=`date +%Y-%m-%d_%H:%M:%S`
git commit -m "deploy ${date} 🚀"
git branch -M main

# Subida forzada al repositorio de producción
echo "📤 Subiendo cambios a GitHub Pages (joseluisgs.github.io)..."
git remote add origin https://github.com/joseluisgs/joseluisgs.github.io.git
git push -u -f origin main

# Limpieza final del entorno local
echo "✨ Limpiando archivos temporales de compilación..."
cd -
rm -rf src/.vuepress/dist

echo "✅ ¡Despliegue realizado correctamente! 👍"
echo "🌐 Visita tu web en: https://joseluisgs.dev 🚀"
echo "🎉 Proceso de despliegue finalizado con éxito."


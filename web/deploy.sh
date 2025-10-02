#!/usr/bin/env sh

# quitamos los errores
set -e

# borramos
rm -rf public

# build
npm run build

# copiamos readme y license
cp README.md public
cp LICENSE public
cp CNAME public

# cambiamos al directorio
cd public

# Inicializamos el reposotorio
git init

# Añadimos los ficheros y hacemos comit en main
git add -A
date=`date +%Y-%m-%d_%H:%M:%S`
git commit -m "deploy ${date}"
git branch -M main

# Nos conectamos a remoto y subimos
git remote add origin https://github.com/joseluisgs/joseluisgs.github.io.git
git push -u -f origin main
# git push -u origin main

# Eliminamos los cambios
rm -rf .git
cd -
rm -rf public

echo "Deploy realizado correctamente 👍"
echo "Visita: https://joseluisgs.github.io 🚀"


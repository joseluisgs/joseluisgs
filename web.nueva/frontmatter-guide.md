# Guía de Frontmatter para Artículos y Documentos

Este documento sirve como referencia rápida para configurar el frontmatter en VuePress Theme Hope.

---

## 📝 Artículos/Blog

```yaml
---
title: "Título del artículo"
shortTitle: "Título corto (navbar/sidebar)"
description: "Descripción breve para SEO (150-160 caracteres)"
icon: "fa-solid fa-icono"  # Icono FontAwesome
author: "José Luis González Sánchez"  # O: { name: "...", url: "...", email: "..." }
date: "2026-04-17"  # Fecha de escritura (YYYY-MM-DD)
category: "Desarrollo"  # O: ["Desarrollo", "Tutorial"]
tag: "Vue.js"  # O: ["Vue.js", "Tutorial"]
cover: "/img/cover-articulo.jpg"  # Imagen de portada
isOriginal: true  # Si es artículo original
article: true  # Incluir en lista de artículos
timeline: true  # Incluir en timeline
sticky: true  # O: sticky: 1 (prioridad)
star: false  # O: star: 1
---
```

---

## 📚 Documentación

```yaml
---
title: "Título del documento"
shortTitle: "Título corto"
description: "Descripción para SEO"
icon: "fa-solid fa-icono"
order: 1  # Orden en sidebar (número positivo = al inicio)
dir:
  text: "Nombre del grupo"
  icon: "fa-solid fa-icono"
  collapsible: true
  link: true
  index: true
pageInfo:  # Elementos a mostrar en info de página
  - Author
  - Date
  - Category
  - Tag
  - ReadingTime
  - Word
  - PageView
breadcrumb: true
breadcrumbIcon: true
toc: true  # O: toc: { levels: [2, 3] }
navbar: true
sidebar: true  # O: sidebar: [] (solo slots)
prev: "/docs/anterior/"
next: "/docs/siguiente/"
editLink: true
contributors: true
lastUpdated: true
changelog: true
footer: true  # O: footer: "Contenido custom"
copyright: "CC BY 4.0"  # O: copyright: false
backToTop: true
containerClass: "clase-personalizada"
---
```

---

## 🏠 Blog Home

```yaml
---
home: true
layout: Blog
icon: "fa-solid fa-house"
title: "Home"
heroImage: "/img/hero.png"
heroImageDark: "/img/hero-dark.png"
heroText: "Hola, soy..."
tagline: "Descripción breve"
heroFullScreen: true
projects:
  - name: "Proyecto"
    desc: "Descripción"
    link: "https://..."
    icon: "fab fa-github"
---
```

---

## ✅ Resumen por Tipo de Contenido

| Campo | Artículos | Docs | Home |
|-------|-----------|------|------|
| `title` | ✅ Obligatorio | ✅ | ✅ |
| `description` | ✅ SEO | ✅ SEO | - |
| `icon` | ✅ | ✅ | ✅ |
| `author` | ✅ | - | - |
| `date` | ✅ | - | - |
| `category/tag` | ✅ | - | - |
| `cover` | ✅ | - | - |
| `order` | - | ✅ | - |
| `pageInfo` | - | ✅ | - |
| `heroImage` | - | - | ✅ |
| `projects` | - | - | ✅ |

---

## 📌 Valores pageInfo disponibles

- `"Author"` - Autor
- `"Date"` - Fecha de escritura
- `"Category"` - Categoría
- `"Tag"` - Etiquetas
- `"ReadingTime"` - Tiempo de lectura (auto)
- `"Word"` - Conteo de palabras (auto)
- `"PageView"` - Visitas (requiere Waline)

---

## 🎨 Iconos (FontAwesome)

Usar clases FontAwesome: `fa-solid`, `fa-brands`, etc.

Ejemplos:
- `fa-solid fa-code`
- `fa-brands fa-github`
- `fa-solid fa-book`
- `fa-solid fa-home`

---

## 📅 Formato de Fechas

- `YYYY-MM-DD` (recomendado)
- `YYYY-MM-DD hh:mm:ss`

Ejemplo: `date: 2026-04-17`
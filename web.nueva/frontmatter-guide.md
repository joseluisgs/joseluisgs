# Guía de Frontmatter para VuePress 2

Este documento es una guía completa de frontmatter para VuePress 2, combinando los campos del núcleo de VuePress y vuepress-theme-hope.

---

## 📦 FRONTMATTER DEL NÚCLEO DE VUEPRESS

Estos campos son parte del núcleo de VuePress y funcionan en cualquier tema.

### Campos Básicos

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `title` | `string` | Título de la página. Si no se especifica, usa el primer `#` |
| `description` | `string` | Descripción para SEO y meta tags |
| `layout` | `string` | Layout de la página (proporcionado por el tema) |
| `permalink` | `string \| null` | URL personalizada. Si es `null`, desactiva el permalink |
| `date` | `string` | Fecha de creación (YYYY-MM-DD) |
| `lang` | `string` | Idioma de la página |
| `head` | `HeadConfig[]` | Etiquetas extra en `<head>` |

### Ejemplo de head:

```yaml
---
head:
  - - meta
    - name: description
      content: Mi descripción
  - - link
    - rel: canonical
      href: https://ejemplo.com
---
```

### Permalinks

| Pattern | Descripción |
|---------|-------------|
| `:year` | Año de la fecha |
| `:month` | Mes de la fecha |
| `:day` | Día de la fecha |
| `:slug` | Slug del nombre del archivo |
| `:raw` | Ruta raw |

```yaml
---
permalinkPattern: :year/:month/:day/:slug.html
---
```

---

## 🎨 FRONTMATTER DE VUEPRESS THEME HOPE

Campos específicos del tema Hope (el que usamos).

### 📝 Artículos/Blog

```yaml
---
title: "Título del artículo"
icon: "fa-solid fa-pen"
author: "José Luis González Sánchez"
date: "2026-04-17"
category:
  - Desarrollo
tag:
  - Vue.js
  - JavaScript
sticky: true        # Fijar artículo (true o número para prioridad)
star: true          # Marcar como destacado
article: true       # Incluir en lista de artículos
timeline: true     # Incluir en timeline
isOriginal: true   # Marcar como contenido original
---
```

### 📚 Documentación

```yaml
---
title: "Título del documento"
shortTitle: "Título corto"
description: "Descripción para SEO"
icon: "fa-solid fa-book"
order: 3           # Orden en el sidebar (número)
dir:
  text: "Nombre del grupo"
  icon: "fa-solid fa-folder"
  collapsible: true
  link: true
  index: true
---
```

### 🏠 Blog Home (Portada)

```yaml
---
home: true
layout: Blog
icon: "fa-solid fa-house"
title: "Home"
heroImage: "/img/hero.png"
heroImageDark: "/img/hero-dark.png"
heroText: "Hola, soy José Luis"
tagline: "Desarrollador y profesor"
heroFullScreen: true
projects:
  - name: "Proyecto 1"
    desc: "Descripción"
    link: "https://github.com/..."
    icon: "fab fa-github
---
```

---

## 📋 INFO DE PÁGINA

### pageInfo - Elementos a mostrar

```yaml
pageInfo:
  - Author      # Autor
  - Date        # Fecha
  - Category    # Categoría
  - Tag         # Etiquetas
  - ReadingTime # Tiempo de lectura (auto)
  - Word        # Conteo de palabras (auto)
  - PageView    # Visitas (requiere Waline)
```

### Ocultar info de página

```yaml
pageInfo: false    # Ocultar todo
```

---

## 🍞 BREADCRUMB (Migas de pan)

```yaml
breadcrumb: true       # Mostrar breadcrumb
breadcrumbIcon: true   # Mostrar iconos en breadcrumb
breadcrumb: false      # Ocultar
```

---

## 📑 TABLA DE CONTENIDOS (TOC)

```yaml
toc: true        # Mostrar TOC
toc: false       # Ocultar TOC
```

---

## 🧭 NAVEGACIÓN

```yaml
navbar: true     # Mostrar navbar
sidebar: true    # Mostrar sidebar
prev: "/docs/anterior/"
next: "/docs/siguiente/"
prev: false      # Ocultar anterior
next: false      # Ocultar siguiente
```

### Configuración de Sidebar (por página)

```yaml
sidebar: false   # Ocultar sidebar en esta página
```

---

## ⚙️ FUNCIONALIDADES

| Campo | Descripción |
|-------|-------------|
| `editLink` | Enlace "Editar esta página" |
| `contributors` | Mostrar contribuidores |
| `lastUpdated` | Mostrar fecha de última actualización |
| `changelog` | Mostrar changelog |
| `comment` | Habilitar/deshabilitar comentarios |
| `backToTop` | Mostrar botón "Volver arriba" |

```yaml
editLink: true
contributors: true
lastUpdated: true
changelog: true
comment: true      # Activar comentarios
backToTop: true

# Para desactivar
comment: false
lastUpdated: false
```

---

## 🦶 FOOTER

```yaml
footer: "Contenido del pie de página"
copyright: "CC BY 4.0"
footer: false      # Ocultar footer
footer: true       # Footer por defecto
```

---

## 🔙 BOTÓN VOLVER ARRIBA

```yaml
backToTop: true     # Mostrar botón
backToTop: false    # Ocultar botón
```

---

## 📑 TABLA DE CONTENIDOS (TOC)

```yaml
toc: true        # Mostrar TOC (default)
toc: false       # Ocultar TOC

# Configuración avanzada
toc:
  levels: 3       # Mostrar niveles h2-h4 (default: deep = h2-h6)
  levels: [2, 4] # Mostrar desde h2 hasta h4
  levels: false  # Ocultar
```

---

## 📊 ORDEN EN SIDEBAR

```yaml
order: 1         # Número positivo = aparece al inicio
order: -1         # Número negativo = aparece al final
```

---

## 📁 GRUPO EN SIDEBAR (dir)

```yaml
dir:
  text: "Desarrollo Web"      # Nombre del grupo
  icon: "fa-solid fa-code"   # Icono del grupo
  collapsible: true         # Grupo colapsable
  link: true                 # El grupo es clickeable
  index: false               # No indexar en sidebar
  order: 1                   # Orden del grupo
```

---

## ⏩ NAVEGACIÓN (prev/next)

```yaml
prev: "/docs/anterior/"           # Enlace simple
next: false                        # Ocultar siguiente

# Con icono y texto personalizado
prev:
  text: "Artículo anterior"
  icon: "fa-solid fa-arrow-left"
  link: "/docs/anterior/"

next:
  text: "Siguiente artículo"
  icon: "fa-solid fa-arrow-right"
  link: "/docs/siguiente/"
```

---

## 🚫 EXCLUIR DE BREADCRUMB

```yaml
breadcrumbExclude: true   # Excluir de las migas de pan
```

---

## 🎨 ESTILO Y EXTRAS

```yaml
icon: "fa-solid fa-code"     # Icono (FontAwesome)
cover: "/img/portada.jpg"    # Imagen de portada
banner: "/img/banner.jpg"    # Banner de la página
containerClass: "mi-clase"   # Clase CSS adicional
```

---

## 👤 AUTOR (Formato avanzado)

```yaml
# Opción 1: Solo nombre
author: "José Luis González Sánchez"

# Opción 2: Varios autores
author:
  - "Autor 1"
  - "Autor 2"

# Opción 3: Con información completa
author:
  - name: "José Luis González Sánchez"
    url: "https://joseluisgs.dev"
    email: "email@ejemplo.com"

# Opción 4: Ocultar autor por defecto
author: false
```

---

## 📄 LICENCIA Y COPYRIGHT

```yaml
license: "CC BY 4.0"      # Licencia de la página
copyright: false           # Ocultar copyright
copyright: "MIT License"  # Copyright personalizado
```

---

## 👁️ VISTAS DE PÁGINA (PageView)

```yaml
pageview: true      # Mostrar contador de vistas
pageview: false     # Ocultar contador
```

> **Nota:** Requiere configuración de Waline como servicio de comentarios.

---

## 📌 ARTÍCULOS ESPECIALES

```yaml
# Fijar artículo (true o número para prioridad)
sticky: true
sticky: 1           # Mayor número = más arriba

# Marcar como destacado
star: true
star: 1             # Mayor número = más arriba

# Es contenido original
isOriginal: true

# Incluir en lista de artículos
article: true       # (default: true)

# Incluir en timeline
timeline: true     # (default: true)
```

---

## 🖼️ IMÁGENES DE PÁGINA

```yaml
cover: "/img/portada.jpg"   # Imagen de portada
banner: "/img/banner.jpg"    # Banner
```

---

## 🚫 OCULTAR ELEMENTOS

Para ocultar elementos específicos en una página:

```yaml
---
sidebar: false       # Ocultar sidebar
breadcrumb: false   # Ocultar breadcrumb
pageInfo: false     # Ocultar info de página (autor, fecha, etc.)
contributors: false # Ocultar contribuidores
editLink: false     # Ocultar enlace "Editar esta página"
lastUpdated: false  # Ocultar "Última actualización"
prev: false         # Ocultar artículo anterior
next: false         # Ocultar artículo siguiente
comment: false      # Ocultar comentarios (Giscus)
backToTop: false    # Ocultar botón "Volver arriba"
toc: false          # Ocultar tabla de contenidos
---
```

---

## 🎨 ICONOS (FontAwesome)

Usar clases FontAwesome: `fa-solid`, `fa-brands`, `fa-regular`, etc.

### Iconos populares:

| Categoría | Ejemplos |
|-----------|----------|
| General | `fa-solid fa-home`, `fa-solid fa-code`, `fa-solid fa-book` |
| Redes | `fa-brands fa-github`, `fa-brands fa-twitter`, `fa-brands fa-linkedin` |
| UI | `fa-solid fa-bars`, `fa-solid fa-search`, `fa-solid fa-cog` |
| Desarrollo | `fa-brands fa-js`, `fa-brands fa-vuejs`, `fa-brands fa-python` |

---

## 📅 FORMATO DE FECHAS

- **Recomendado:** `YYYY-MM-DD`
- **Completo:** `YYYY-MM-DD hh:mm:ss`

```yaml
date: 2026-04-17
date: 2026-04-17T14:30:00
```

---

## 🔇 DESACTIVAR COMENTARIOS (Giscus)

**En una página específica:**

```yaml
---
comment: false
---
```

**En todo el sitio** (editar `theme.ts`):

```ts
comment: {
  provider: "Giscus",
  repo: "joseluisgs/joseluisgs.github.io",
  repoId: "MDEwOlJlcG9zaXRvcnkzMjg3NzQ4OTU=",
  category: "General",
  categoryId: "DIC_kwDOE5i0784CTUPm",
  mode: "disabled",  // Desactivar globalmente
},
```

O simplemente eliminar la sección `comment` de `theme.ts`.

---

## 🔒 PLUGIN COPYRIGHT (Protección de contenido)

```yaml
# Configuración por página
copy:
  triggerLength: 100    # Mínimas palabras para mostrar copyright
  disableCopy: false    # Desactivar copiar
  disableSelection: false  # Desactivar selección
```

---

## 📡 PLUGIN FEED (RSS)

```yaml
feed:
  title: "Título del artículo para RSS"
  description: "Descripción para RSS"
  content: "Contenido completo para RSS"
  author:
    name: "José Luis González Sánchez"
    email: "email@ejemplo.com"
    url: "https://joseluisgs.dev"
    avatar: "/img/avatar.png"
  contributor:
    - name: "Contribuidor 1"
      email: "email@ejemplo.com"
  guid: "identificador-unico"
```

---

## 🗺️ PLUGIN SITEMAP

```yaml
sitemap:
  changefreq: "weekly"   # Frecuencia: always, hourly, daily, weekly, monthly, yearly, never
  exclude: false        # Excluir del sitemap
  priority: 0.8        # Prioridad (0-1)
```

---

## 🏠 HOME PROJECT (Portada de Proyecto)

```yaml
---
home: true
layout: Project
title: "Mi Proyecto"
heroText: "Título del Hero"
tagline: "Descripción corta del proyecto"
tagline: false           # Ocultar tagline
heroImage: "/img/logo.png"
heroImageDark: "/img/logo-dark.png"
heroAlt: "Logo del proyecto"
heroImageStyle:
  width: 200px
  background: white
bgImage: "/img/bg.png"
bgImageDark: "/img/bg-dark.png"
bgImageStyle:
  opacity: 0.3
heroStyle:
  background: transparent
heroFullScreen: true
---
```

### 🎯 ACTIONS (Botones de acción)

```yaml
actions:
  - text: "Ver Demo"
    link: "https://demo.ejemplo.com"
    type: "primary"      # Botón primario

  - text: "GitHub"
    link: "https://github.com/..."
    type: "default"      # Botón secundario
```

### ✨ FEATURES (Características)

```yaml
features:
  - title: "Característica 1"
    details: "Descripción de la característica"
    icon: "fa-solid fa-code"
    link: "/docs/feature1/

  - title: "Característica 2"
    details: "Descripción de la característica"
    icon: "fa-solid fa-rocket"
    link: "/docs/feature2/
```

### 🚀 HIGHLIGHTS (Destacados)

```yaml
highlights:
  - header: "Ventajas"
    description: " mengapa elegir este proyecto"
    type: "un-order"    # unordered, order, no-order
    highlights:
      - title: "Rápido"
        details: "Optimizado para rendimiento"
        icon: "fa-solid fa-bolt"
      - title: "Seguro"
        details: "Built-in security features"
        icon: "fa-solid fa-shield"
```

---

## 💼 HOME PORTFOLIO (Portada de Portfolio)

```yaml
---
portfolio: true
home: true
name: "José Luis González"
avatar: "/img/avatar.png"
avatarDark: "/img/avatar-dark.png"
avatarAlt: "Mi foto de perfil"
titles:
  - "Desarrollador"
  - "Profesor"
  - "Investigador"
avatarStyle:
  border-radius: 50%
  border: 3px solid #7289da
bgImage: "/img/bg-portfolio.png"
bgImageDark: "/img/bg-portfolio-dark.png"
bgImageStyle:
  opacity: 0.2
welcome: "👋 Hola, soy"
content: "portfolio"    # portfolio, doc, none
---
```

### 📱 MEDIAS (Redes sociales)

```yaml
medias:
  - icon: "fa-brands fa-github"
    name: "GitHub"
    link: "https://github.com/joseluisgs"

  - icon: "fa-brands fa-twitter"
    name: "Twitter"
    link: "https://twitter.com/JoseLuisGSDev"

  - icon: "fa-brands fa-linkedin"
    name: "LinkedIn"
    link: "https://linkedin.com/in/joseluisgs"

  - icon: "fa-brands fa-youtube"
    name: "YouTube"
    link: "https://youtube.com/@joseluisgs"
```

### 📝 TIPOS DE CONTENIDO

```yaml
content: "portfolio"   # Estilo portfolio
content: "doc"        # Estilo documento
content: "none"       # Sin contenido
```

---

## 📝 HOME BLOG (Blog Home - Nuestra Configuración)

```yaml
---
home: true
layout: Blog
title: "Home"
icon: "fa-solid fa-house"
heroText: "👋 Hola, soy José Luis González"
tagline: "Enseñando el arte del desarrollo de software día a día 👨🏻‍💻"
heroImage: "/img/web-intro.svg"
heroImageDark: "/img/web-intro.svg"
heroImageStyle:
  width: 100%
heroAlt: "José Luis González"
bgImage: false           # Sin fondo o ruta a imagen
bgImageDark: false
bgImageStyle:
  opacity: 0.1
heroFullScreen: true
---
```

### 📁 PROYECTOS EN BLOG HOME

```yaml
projects:
  - name: "Proyecto 1"
    desc: "Descripción del proyecto"
    link: "https://proyecto1.com"
    icon: "fa-brands fa-github"

  - name: "Proyecto 2"
    desc: "Otro proyecto"
    link: "https://proyecto2.com"
    icon: "fa-solid fa-globe"

  - name: "Documentación"
    desc: "Docs"
    link: "/docs/"
    icon: "fa-solid fa-book"

  - name: "Blog"
    desc: "Artículos"
    link: "/blog/"
    icon: "fa-solid fa-pen"
```

> **Nota:** Esta es la configuración actual de nuestra web (web.nueva/README.md)

---

## 📌 RESUMEN RÁPIDO

| Uso | Frontmatter clave |
|-----|-------------------|
| Artículo blog | `title`, `date`, `category`, `tag`, `sticky`, `star` |
| Documentación | `title`, `shortTitle`, `description`, `order`, `dir`, `toc` |
| Home | `home`, `layout`, `heroImage`, `heroText`, `heroFullScreen` |
| SEO | `title`, `description`, `head` |
| Navegación | `navbar`, `sidebar`, `prev`, `next` |
| Ocultar todo | `sidebar: false`, `comment: false`, `pageInfo: false` |
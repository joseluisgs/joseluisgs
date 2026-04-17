# Guía de Frontmatter para Artículos y Documentos

Este documento sirve como referencia rápida para configurar el frontmatter en VuePress Theme Hope.

---

## 📝 Artículos/Blog

```yaml
---
title: "Título del artículo"
icon: "fa-solid fa-icono"
author: "José Luis González Sánchez"
date: "2026-04-17"
category:
  - Desarrollo
tag:
  - Vue.js
sticky: true
star: true
footer: "Contenido del pie"
copyright: "CC BY 4.0"
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
order: 3
dir:
  text: "Nombre del grupo"
  icon: "fa-solid fa-icono"
  collapsible: true
  link: true
  index: true
pageInfo:
  - Author
  - Date
  - Category
  - Tag
  - ReadingTime
  - Word
  - PageView
breadcrumb: true
breadcrumbIcon: true
toc: true
navbar: true
sidebar: true
prev: "/docs/anterior/"
next: "/docs/siguiente/"
editLink: true
contributors: true
lastUpdated: true
changelog: true
footer: true
copyright: "CC BY 4.0"
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

## ❌ Ocultar Elementos (todos false)

Para ocultar elementos en una página concreta:

```yaml
---
sidebar: false        # Ocultar sidebar
breadcrumb: false     # Ocultar breadcrumb (migas de pan)
pageInfo: false       # Ocultar info de página (autor, fecha, etc.)
contributors: false  # Ocultar contribuidores
editLink: false      # Ocultar enlace "Editar esta página"
lastUpdated: false   # Ocultar "Última actualización"
prev: false          # Ocultar artículo anterior
next: false          # Ocultar artículo siguiente
comment: false       # Ocultar comentarios (Giscus)
backToTop: false     # Ocultar botón "Volver arriba"
---
```

---

## 📖 Explicación de Campos

### Contenido General
| Campo | Descripción |
|-------|-------------|
| `title` | Título de la página (obligatorio) |
| `shortTitle` | Título corto para navbar/sidebar |
| `description` | Descripción para SEO y meta tags |
| `icon` | Icono de la página (FontAwesome) |
| `cover` | Imagen de portada/artículo |
| `author` | Autor del contenido |
| `date` | Fecha de escritura (YYYY-MM-DD) |

### Organización
| Campo | Descripción |
|-------|-------------|
| `category` | Categoría del artículo |
| `tag` | Etiquetas del artículo |
| `order` | Orden en el sidebar (número) |
| `dir` | Configuración de grupo en sidebar |

### Artículos/Blog
| Campo | Descripción |
|-------|-------------|
| `article` | Incluir en lista de artículos (true/false) |
| `timeline` | Incluir en timeline (true/false) |
| `sticky` | Fijar artículo (true o número para prioridad) |
| `star` | Marcar como destacado (true o número) |
| `isOriginal` | Marcar como contenido original |

### Info de Página
| Campo | Descripción |
|-------|-------------|
| `pageInfo` | Elementos a mostrar (Author, Date, Category, Tag, ReadingTime, Word, PageView) |
| `breadcrumb` | Mostrar breadcrumb (migas de pan) |
| `breadcrumbIcon` | Mostrar iconos en breadcrumb |

### Navegación
| Campo | Descripción |
|-------|-------------|
| `navbar` | Mostrar navbar |
| `sidebar` | Mostrar sidebar |
| `prev` | Enlace a página anterior |
| `next` | Enlace a página siguiente |

### Funcionalidades
| Campo | Descripción |
|-------|-------------|
| `toc` | Mostrar tabla de contenidos |
| `editLink` | Enlace "Editar esta página" |
| `contributors` | Mostrar contribuidores |
| `lastUpdated` | Mostrar fecha de última actualización |
| `changelog` | Mostrar changelog |
| `comment` | Habilitar/deshabilitar comentarios |
| `backToTop` | Mostrar botón volver arriba |

### Footer
| Campo | Descripción |
|-------|-------------|
| `footer` | Contenido del pie de página |
| `copyright` | Información de copyright |

### Extra
| Campo | Descripción |
|-------|-------------|
| `containerClass` | Clase CSS adicional para el contenedor |
| `layout` | Layout personalizado |

---

## 🔇 Cómo Quitar los Comentarios (Giscus)

Para **desactivar los comentarios** en una página específica:

```yaml
---
comment: false
---
```

Para **desactivar los comentarios en todo el sitio**, editar `theme.ts`:

```ts
comment: {
  provider: "Giscus",
  repo: "joseluisgs/joseluisgs.github.io",
  repoId: "MDEwOlJlcG9zaXRvcnkzMjg3NzQ4OTU=",
  category: "General",
  categoryId: "DIC_kwDOE5i0784CTUPm",
  mode: "strict",  //Cambiar a "disabled" para desactivar globalmente
},
```

O simplemente eliminar la sección `comment` de `theme.ts`.

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
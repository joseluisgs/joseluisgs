# Proyecto: Migración y Rediseño - JoseLuisGS Web (VP1 a VP2)

Este documento sirve como contexto maestro para retomar la sesión de desarrollo. El objetivo es portar la web antigua (VuePress 1 + Reco) a la nueva arquitectura (VuePress 2 + vuepress-theme-hope) bajo una estética **Deep Navy Discord** personalizada.

## 🎯 Objetivo Principal
Migrar el contenido y funcionalidades de `web/` a `web.nueva/` usando **VuePress 2.0.0-rc.28** y **vuepress-theme-hope 2.0.0-rc.106**, evitando cualquier modificación en `node_modules` y utilizando componentes/slots en `.vuepress/`.

## 🎨 Identidad Visual Definida (Deep Navy & Neon Glow)
Se ha establecido una paleta de colores quirúrgica para eliminar grises y potenciar el contraste:

- **Fondo Principal (Página):** `#011627` (Azul Noche profundo, tipo Night Owl).
- **Fondo Secundario (Tarjetas/Sidebar):** `#051e33` (Azul marino muy sutilmente más claro para contraste elegante).
- **Color de Acento (Vibrante):** `#7289da` (Violeta/Blurple original de Discord/Kotlin).
- **Bordes:** `#142d44` (Azul acero muy sutil).
- **Efecto Glow:** Sombra exterior violeta (`rgba(114, 137, 218, 0.2)`) y bordes que se iluminan al violeta full en `hover`.
- **Tipografía:** Ubuntu (vía Google Fonts).

## ✅ Tareas Realizadas

### 1. Configuración Técnica
- **Plugins Propietarios (config.ts):** Google Analytics (`G-103H05W8P8`) gestionado fuera del tema para evitar conflictos.
- **Plugins del Tema (theme.ts):** Feed (RSS) y Sitemap configurados bajo la propiedad del tema para correcta generación de metadatos.
- **Limpieza de Depreciaciones:** Movida toda la configuración de `mdEnhance` a la propiedad raíz `markdown` del tema.
- **Giscus Nativo:** Configurado con los IDs reales extraídos del backup (`repoId: MDE9zaXRvcnkzMjg3NzQ4OTU=`, `categoryId: DIC_kwDOE5i0784CTUPm`).
- **SEO Personalizado:** Configurado con imagen (`/img/web-social.png`) y Twitter (`@JoseLuisGSDev`).
- **SlimSearch:** Añadido para búsqueda integrada.
- **Mermaid:** Instalado y configurado para diagramas.
- **Copyright:** Plugin añadido para proteger contenido.
- **Markdown Enhanced:** plantuml, mermaid, codeTabs, component, demo, figure, imgLazyload, imgSize, include, mark, spoiler.

### 2. Componentes Portados (Vue 3 Composition API)
- `FriendLinks.vue`: Recreado usando `VPCard` nativo con la lista completa de webs amigas.
- `LicenseCC.vue`: Portado con iconografía FontAwesome y estilo consistente.
- `ReposPinned.vue`: Portado usando la API de Deno para repositorios destacados de GitHub.

### 3. Estilos (index.scss)
- Implementada lógica de alta especificidad (`html[data-theme="dark"]`) y uso de `!important` en variables `--vp-c-bg` para sobreescribir los grises por defecto del tema Hope.
- Fondo principal: `#010c18` (Deep Navy equilibrio)
- Fondo tarjetas: `#011221`
- Acento: `#7289da` (Discord Blurple)
- Avatarblogger: circular (8rem), borde accent, hover scale.
- Scrollbar: tamaño 10px, thumb color `#7289da`.

### 4. Configuración del Tema
- **Navbar:** Limpiada (eliminados GitHub, TimeLine).
- **Footer:** Personalizado con autor, redes sociales (X, LinkedIn, Instagram, YouTube), tecnologías (Vue.js, Markdown), cookies.
- **Redes Sociales:** Actualizadas URLs de X e LinkedIn.
- **Fullscreen y Print:** Botones habilitados.
- **Iconos:** FontAwesome con brands.

### 5. Contenido
- **Home (README.md):** Rediseñado con `layout: Blog`, `title: Home`, `heroFullScreen`.
- **Avatar:** Descargado y configurado (`/img/avatar.png`).
- **404:** ⚠ Pendiente de implementar (intentos fallidos con slots).

## 🚀 Próximos Pasos (Pendiente)
1. **Verificación deEnlaces:** Asegurar que las rutas `/docs/info/personal/`, etc., funcionan correctamente con el nuevo `sidebar.ts` y `navbar.ts`.
2. **Página 404:** Encontrar forma correcta de añadir imagen GIF animada.
3. **Migración de Contenido:** Portar los archivos Markdown de `web/blogs/` y `web/docs/` a `web.nueva/src/`.
4. **Refinamiento de Frontmatter:** Ajustar los encabezados de los MD portados.

---

**Prompt de Reinicio:**
"Hola, soy Jose Luis. Vamos a continuar con la migración de mi web. Lee el archivo `tasks.md` para recuperar todo el contexto técnico, la paleta de colores Deep Navy (#011627) y el estado de los componentes portados. No toques `node_modules`. Sigamos con [insertar siguiente tarea]."

---

## 📋 TAREA: Layout Hero FullScreen 40/60

### Objetivo

Hacer que el hero de la página principal tenga:
- **Desktop (≥1024px):** Imagen a la izquierda (40%), texto a la derecha (60%)
- **Letras progresivas:** Crecer según la resolución (≥1024, ≥1800, ≥2400)
- **Imagen progresiva:** Crecer según la resolución (≥1024, ≥1800, ≥2400)
- **Tablet/Móvil:** Imagen arriba, texto debajo, sin desbordarse

### Especificaciones

#### Progresión de imagen:
| Resolución | Altura |
|------------|--------|
| ≥1024px | 85vh (default) |
| ≥1800px | 90vh |
| ≥2400px | 95vh |

#### Progresión de texto:
| Resolución | h1 (título) | h2 (descripción) | p |
|------------|-------------|------------------|---|
| ≥1024px | default | default | default |
| ≥1800px | 3rem | 1.5rem | 1.2rem |
| ≥2400px | 4rem | 2rem | 1.4rem |

### Problemas encontrados

| # | Problema | Causa |
|---|----------|-------|
| 1 | CSS no se aplicaba | Selectores incorrectos (`.vp-blog-mask`, `.vp-hero-info-wrapper`) |
| 2 | Hero se sale de pantalla | Altura fija (400px, 340px) demasiado grande en tablet/móvil |
| 3 | Imagen duplicada | Theme Hope usa `.light` y `.dark` para modo claro/oscuro |
| 4 | Animaciones rotas | Cambiar `display` rompiendo transiciones DropTransition del tema |
| 5 | Saltos bruscos | Al cambiar de resolución había saltos de tamaño no graduales |
| 6 | Cambios rompían todo | Cada cambio muy grande = perder todo el trabajo anterior |

### Estado actual

**CSS original funciona** → La web se ve bien con el estilo por defecto de Theme Hope, pero:
- ❌ No hay layout 40/60 personalizado
- ❌ No hay progresión de letras
- ❌ No hay progresión de imagen

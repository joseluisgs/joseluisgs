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
- **404:** ✅ Implementado con GIF escalable y diseño responsivo basado en `vh`.

## 🚀 Próximos Pasos (Pendiente)
1. **Banner de Cookies:** Añadir un banner funcional que gestione la aceptación de cookies con diseño Deep Navy Discord.
2. **Verificación de Enlaces:** Asegurar que las rutas `/docs/info/personal/`, etc., funcionan correctamente con el nuevo `sidebar.ts` y `navbar.ts`.
3. **Migración de Contenido:** Portar los archivos Markdown de `web/blogs/` y `web/docs/` a `web.nueva/src/`.
4. **Refinamiento de Frontmatter:** Ajustar los encabezados de los MD portados.

---

## 📋 TAREA: Layout Hero FullScreen 40/60 (COMPLETADA ✅)

### Resultado Final
- **Layout Horizontal:** Logrado mediante `flex-direction: row` en `.vp-blog-hero`.
- **Desbloqueo de Escala:** Se identificó y eliminó la restricción `max-height: 15rem` del contenedor `.vp-blog-hero-image`, permitiendo escalado real.
- **Proporcionalidad:** Uso de `max-height: 85vh/90vh/95vh` con `width: auto` para evitar deformaciones.
- **Estilo Reco:** Integrados `border-radius: 1rem` y `box-shadow` originales.
- **Modo Claro/Oscuro:** Respetado mediante la eliminación de `display: block !important` en las imágenes.

### Especificaciones Cumplidas
- **Resolución ≥1024px:** 85vh imagen, h1 2.5rem.
- **Resolución ≥1800px:** 90vh imagen, h1 3rem, desc 1.5rem.
- **Resolución ≥2400px:** 95vh imagen, h1 4rem, desc 2rem.

---

## 📋 TAREA: Página 404 (COMPLETADA ✅)

### Resultado Final
- **Layout:** Centrado total usando `flexbox` y `min-height: 70vh`.
- **Escalado de GIF:** `max-height: 50vh` asegurando visibilidad en todas las resoluciones.
- **Estilo:** Diseño sobrio, sin sombras ni bordes innecesarios, con botón estilo Discord (#7289da).

---

## 📋 TAREA: Banner de Cookies (PRÓXIMO PASO 🚀)

### Objetivo
Añadir un banner de cookies al estilo original de web.back que:
- Aparece al pie de página (fondo `#011221`, borde/botón `#7289da`).
- Usa `localStorage` para persistencia.
- Registrado en `client.ts` vía `rootComponents`.

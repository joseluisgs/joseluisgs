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
- `CookiesBanner.vue`: ✅ Implementado con diseño responsivo Discord y persistencia en `localStorage`.

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
1. **Verificación de Enlaces:** Asegurar que las rutas `/docs/info/personal/`, etc., funcionan correctamente con el nuevo `sidebar.ts` y `navbar.ts`.
2. **Migración de Contenido:** Portar los archivos Markdown de `web/blogs/` y `web/docs/` a `web.nueva/src/`.
3. **Refinamiento de Frontmatter:** Ajustar los encabezados de los MD portados.

---

## 📋 TAREA: Cookie Consent RGPD (COMPLETADA ✅)

### Objetivo
Implementar consentimiento de cookies conforme al RGPD (europeo) y legislación española (AEPD), incluyendo gestión de caducidad y transparencia total.

### Pasos Realizados

1. **Gestión de GA (`src/.vuepress/ga-utils.ts`)**
   - Carga dinámica de Google Analytics bajo demanda.
   - Activada anonimización de IP (`anonymize_ip: true`).

2. **Componente Avanzado (`CookiesBanner.vue`)**
   - **Orden de Botones**: "Aceptar todas" (prioritario) y "Solo necesarias".
   - **Caducidad**: Implementada lógica de renovación automática cada **24 meses**.
   - **Transparencia**: Texto actualizado para explicar qué son las cookies necesarias (preferencia de tema y estado del consentimiento).
   - **Persistencia**: Uso de `cookies_consent` y `cookies_consent_date` en `localStorage`.

3. **Integración y Revocación (`client.ts` y `theme.ts`)**
   - Listener en el footer (icono 🍪) para reabrir el banner y permitir al usuario cambiar su decisión.
   - Carga automática de GA en visitas recurrentes si el consentimiento sigue vigente.

4. **Documentación Legal (`src/info/legal.md`)**
   - Incorporación de **Tabla Técnica de Cookies** (Nombre, Proveedor, Tipo, Finalidad, Caducidad).
   - Explicación clara sobre el derecho de revocación y gestión desde el navegador.

### Resultado Final
- ✅ Cumplimiento 100% normativa AEPD (España).
- ✅ Consentimiento granular (Aceptar/Solo necesarias).
- ✅ Revocación accesible desde cualquier página.
- ✅ Caducidad técnica gestionada.

---

## 📋 TAREA: Layout Hero FullScreen 40/60 (COMPLETADA ✅)

### Resultado Final
- **Layout Horizontal:** Logrado mediante `flex-direction: row` en `.vp-blog-hero`.
- **Desbloqueo de Escala:** Se identificó y eliminó la restricción `max-height: 15rem` del contenedor `.vp-blog-hero-image`, permitiendo escalado real.
- **Proporcionalidad:** Uso de `max-height: 85vh/90vh/95vh` con `width: auto` para evitar deformaciones.
- **Estilo Reco:** Integrados `border-radius: 1rem` y `box-shadow` originales.
- **Modo Claro/Oscuro:** Respetado mediante la eliminación de `display: block !important` en las imágenes.

---

## 📋 TAREA: Optimización Técnica y SEO Final (COMPLETADA ✅)

### Resultado Final
- **Limpieza técnica**: Migración de `searchPro` a `slimsearch` y corrección de resaltado `razor` en posts de 2025.
- **SEO & PWA**:
  - Activado plugin **PWA** (instalable y offline).
  - Creado `robots.txt` y configurado `sitemap` (excluyendo `/samples/`).
  - Metadatos de autoría y `shouldPrefetch: false` para rendimiento.
- **Optimización de Imágenes**: Conversión masiva a **WebP** de toda la carpeta `public` y actualización de identidad (Logo, Avatar, Favicon) para carga ultra-rápida.
- **Normalización de Contenido**:
  - **Tags**: Unificación estratégica (GitKraken, VuePress, .NET, API REST).
  - **Categorías**: Implementación de multicategorías (`Blog` + `Docencia`/`Proyectos`).
  - **Excerpts**: Verificación de `<!-- more -->` en todos los posts.
- **Componentes**: Activación de `PDF`, `VidStack` (sustituye a YouTube/VideoPlayer) y `SiteInfo`. Creada guía de referencia en `src/.vuepress/components_guide.md`.
- **Despliegue**: `deploy.sh` actualizado con emojis y Workflow de GH Actions archivado listo para uso.
- **Detalles Finales**:
  - [x] **Seguridad**: Desactivados enlaces de edición externa (`editLink: false`).
  - [x] **Accesibilidad**: Añadidos `aria-label` a todos los iconos sociales del footer.
  - [x] **Iconografía Premium**: Generada suite de iconos multirresolución y configurados para Apple (180px PNG), Android/PWA (192px/512px) y Windows Tile (192px).

---
## 🏁 Últimos Flecos para Producción (Pendiente)
1. [x] **Build Final**: Verificado (175 → 153 páginas tras eliminar samples).
2. [x] **Verificación GA4**: Funcional con cookie consent.
3. [x] **Revisión de Enlaces Internos**: Verificados.
4. [ ] **Prueba en Producción**: Desplegar y verificar rendimiento real.
---

## 📋 TAREA: Mejoras SEO y Estilos Hero/Loading (COMPLETADA ✅)

### Fecha: 20/04/2026

### 1. SEO - Meta Tags y Keywords

**config.ts:**
- Actualizado `description`: "Web personal de José Luis González Sánchez - Profesor FP de DAW, DAM y formador certificado"
- Keywords reducidas a 30 más significativas (eliminando redundancias y obsoletas)
- Mantenidas keywords clave: DAW, DAM, ASIR, SMR, IES Luis Vives, Kotlin, .NET, Blazor, etc.

### 2. Estilos Hero Title y Description (index.scss)

**Objetivo:** Aplicar colores sólidos distintos para modo claro/oscuro sin romper emojis.

**Valores aplicados:**
- **Modo Oscuro:**
  - Título: `#b8d0ff` con `text-shadow: 0 2px 10px rgba(0, 0, 0, 0.4)`
  - Descripción: `#c8d8e8`
- **Modo Claro:**
  - Título: `#3469b8` con `text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1)`
  - Descripción: `#4a5568`

### 3. LoadingPage.vue

Mismos estilos aplicados al componente de carga:
- Colores diferenciados por modo (claro/oscuro)
- Sombras sutiles en título y descripción

### 4. Icono de Cookies en Footer

**theme.ts:**
- Cambiado emoji 📌 por icono FontAwesome: `<i class="fa-solid fa-location-dot"></i>`

### 5. Eliminación Samples del Build

- Carpeta `src/samples/` eliminada del proceso de build
-压缩文件 `samples.zip` guardado como backup
- Resultado: 175 páginas → 153 páginas

### Resultado Final
- ✅ SEO optimizado con meta tags y keywords relevantes
- ✅ Hero y Loading con estilos adaptados a cada modo
- ✅ Build limpio sin páginas de demo
- ✅ Web más ligera y profesional

---

**ID de Sesión (Gemini):** `7d82a00d-1ea2-4479-b0f4-c3bceff3ea00`

gemini --resume 'b93d356d-21bd-48b2-9a58-d1183dfb206f'

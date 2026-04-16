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

### 2. Componentes Portados (Vue 3 Composition API)
- `FriendLinks.vue`: Recreado usando `VPCard` nativo con la lista completa de webs amigas.
- `LicenseCC.vue`: Portado con iconografía FontAwesome y estilo consistente.
- `ReposPinned.vue`: Portado usando la API de Deno para repositorios destacados de GitHub.

### 3. Estilos (index.scss)
- Implementada lógica de alta especificidad (`html[data-theme="dark"]`) y uso de `!important` en variables `--vp-c-bg` para sobreescribir los grises por defecto del tema Hope.

## 🚀 Próximos Pasos (Pendiente)
1. **Migración de Contenido:** Portar los archivos Markdown de `web/blogs/` y `web/docs/` a `web.nueva/src/`.
2. **Refinamiento de Frontmatter:** Ajustar los encabezados de los MD portados (iconos, giscus: true, etc.) al estándar de Hope.
3. **Página de Inicio (Home):** Rediseñar la `index.md` principal para que aproveche las características de "Theme Hope" con la nueva estética azul.
4. **Verificación de Enlaces:** Asegurar que las rutas `/docs/info/personal/`, etc., funcionan correctamente con el nuevo `sidebar.ts` y `navbar.ts`.

---

**Prompt de Reinicio:**
"Hola, soy Jose Luis. Vamos a continuar con la migración de mi web. Lee el archivo `tasks.md` para recuperar todo el contexto técnico, la paleta de colores Deep Navy (#011627) y el estado de los componentes portados. No toques `node_modules`. Sigamos con [insertar siguiente tarea]."

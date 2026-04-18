# Guía de Componentes Avanzados (Hope Theme)

Esta guía contiene ejemplos de uso de los nuevos componentes activados en `joseluisgs.dev`.

---

## 📄 Visor de PDF
Ideal para mostrar el Currículum o documentos de investigación directamente en la página.
El archivo debe estar en `src/.vuepress/public/`.

```markdown
<PDF url="/files/tu-documento.pdf" />
```

---

## 🎥 Vídeos de YouTube
Inserta vídeos de forma optimizada y responsive (se adaptan a móviles).
Solo necesitas el ID del vídeo (lo que va después de `v=` en la URL).

```markdown
<YouTube id="uXfJpI_2mZw" />
```

---

## 🔗 Tarjetas de Enlaces (Site Info)
Muestra enlaces externos como tarjetas visuales con icono, título y descripción automática. Muy útil para enlazar repositorios de GitHub o webs de referencia.

```markdown
<SiteInfo url="https://github.com/joseluisgs" />
```

---

## 🎞️ Reproductor de Vídeo Local
Si tienes un vídeo `.mp4` guardado en tu carpeta `public/assets/videos/`.

```markdown
<VideoPlayer src="/assets/videos/demo.mp4" />
```

---

## 📛 Badges (Insignias)
Para resaltar estados o versiones en tus posts de docencia.

```markdown
<Badge text="Nuevo" type="tip" />
<Badge text="Importante" type="warning" />
<Badge text="Error" type="danger" />
<Badge text="v2.0" color="#7289da" />
```

---

## 🃏 Tarjetas de Proyecto (VPCard)
Si quieres crear una cuadrícula de proyectos manual en cualquier página:

```markdown
<VPCard
  title="Mi Proyecto"
  desc="Descripción breve del proyecto."
  logo="/img/logo.png"
  link="https://github.com/joseluisgs/mi-proyecto"
  background="rgba(114, 137, 218, 0.15)"
/>
```

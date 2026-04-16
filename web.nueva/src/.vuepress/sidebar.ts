import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: "Info",
      icon: "circle-info",
      prefix: "docs/info/",
      children: "structure",
    },
    {
      text: "Docencia",
      icon: "chalkboard-user",
      prefix: "docs/docencia/",
      children: "structure",
    },
    {
      text: "Proyectos",
      icon: "diagram-project",
      prefix: "docs/proyectos/",
      children: "structure",
    },
  ],
});

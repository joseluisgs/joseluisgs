import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/info/": [
    {
      text: "Página Principal",
      icon: "home",
      link: "/info/",
    },
    {
      text: "Personal",
      icon: "address-card",
      link: "/info/personal",
    },
    {
      text: "Investigación",
      icon: "flask",
      link: "/info/investigacion",
    },
    {
      text: "Docencia",
      icon: "chalkboard-user",
      link: "/info/docencia",
    },
    {
      text: "Proyectos",
      icon: "code",
      link: "/info/proyectos",
    },
  ],
});
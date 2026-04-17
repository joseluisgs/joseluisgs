import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "Info",
    icon: "circle-info",
    children: [
      { text: "Personal", link: "/info/personal", icon: "address-card" },
      { text: "Investigación", link: "/info/investigacion", icon: "flask" },
    ],
  },
  { text: "Docencia", link: "info/docencia", icon: "chalkboard-user" },
  { text: "Proyectos", link: "info/proyectos", icon: "diagram-project" },
  {
    text: "Contacto",
    icon: "envelope",
    children: [
      { text: "Ayuda", link: "https://forms.gle/V2m42qiW1s6X4oNt8", icon: "circle-question" },
      { text: "X", link: "https://x.com/JoseLuisGSDev", icon: "fa-brands fa-x-twitter" },
      { text: "LinkedIn", link: "https://www.linkedin.com/in/joseluisgsdev", icon: "fa-brands fa-linkedin" },
      { text: "Instagram", link: "https://www.instagram.com/joseluisgs.dev", icon: "fa-brands fa-instagram" },
      { text: "YouTube", link: "https://www.youtube.com/@joseluisgs", icon: "fa-brands fa-youtube" },
    ],
  },
]);

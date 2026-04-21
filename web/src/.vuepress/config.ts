import { defineUserConfig } from "vuepress";
// import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "es-ES",
  title: "José Luis González",
  description: "Web personal de José Luis González Sánchez - Profesor FP de DAW, DAM y formador certificado",

  cleanUrls: true,

  shouldPrefetch: false,

  head: [
    ["link", { rel: "icon", href: "/assets/icon/favicon-32x32.webp" }],
    ["link", { rel: "manifest", href: "/manifest.webmanifest" }],
    ["meta", { name: "theme-color", content: "#5c92d1" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    ["link", { rel: "apple-touch-icon", href: "/assets/icon/apple-icon-180-180x180.png" }],
    [
      "meta",
      {
        name: "msapplication-TileImage",
        content: "/assets/icon/chrome-192-192x192.png",
      },
    ],
    ["meta", { name: "msapplication-TileColor", content: "#ffffff" }],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
    ["meta", { name: "author", content: "José Luis González Sánchez" }],
    [
      "meta",
      {
        name: "application-name",
        content: "José Luis González Sánchez. Web Personal",
      },
    ],
[
      "meta",
      {
        name: "keywords",
        content:
          "Profesor Informática FP, Formador Kotlin Certificación JetBrains, Desarrollador Full Stack, Docente Desarrollo Web, C# .NET, ASP.NET Core, Blazor, Entity Framework Core, Programación Orientada Objetos, POO, Testing Unitarios, TDD, Docker, Microservicios, REST API, JWT, Clean Code, SOLID, GitHub, Leganés Madrid, DAW Desarrollo Aplicaciones Web, DAM Desarrollo Aplicaciones Multiplataforma, ASIR Administración Sistemas Informáticos Redes, SMR Sistemas Microinformáticos Redes, Formación Profesional, Instituto IES Luis Vives, Instructor Certificado JetBrains, Instructor GitHub Campus Advisor, Doctor en Informática",
      },
    ],

    // Google Search
    [
      "meta",
      {
        name: "google-site-verification",
        content: "6faOYM6NoaSKvkuz4Qexps8JgYe65lIQukYB5eScb90",
      },
    ],
    // Algolia Search
    ["meta", { name: "algolia-site-verification", content: "134D8D65FF9C0375" }],

    // Twitter Card
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { name: "twitter:image", content: "https://joseluisgs.dev/img/web-social.png" }],
    ["meta", { name: "twitter:title", content: "José Luis González" }],
    ["meta", { name: "twitter:description", content: "Web personal de José Luis González Sánchez - Profesor FP de DAW, DAM y formador certificado" }],

    // Google Fonts: Ubuntu
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap",
      },
    ],
  ],

  theme,

  // plugins: [
  //   googleAnalyticsPlugin({
  //     id: "G-103H05W8P8",
  //   }),
  // ],
});
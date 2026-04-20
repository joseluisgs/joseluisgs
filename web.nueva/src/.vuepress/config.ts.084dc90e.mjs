// src/.vuepress/config.ts
import { defineUserConfig } from "vuepress";

// src/.vuepress/theme.ts
import { hopeTheme } from "vuepress-theme-hope";

// src/.vuepress/navbar.ts
import { navbar } from "vuepress-theme-hope";
var navbar_default = navbar([
  "/",
  {
    text: "Info",
    icon: "circle-info",
    children: [
      { text: "Personal", link: "/info/personal", icon: "address-card" },
      { text: "Investigaci\xF3n", link: "/info/investigacion", icon: "flask" }
    ]
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
      { text: "YouTube", link: "https://www.youtube.com/@joseluisgs", icon: "fa-brands fa-youtube" }
    ]
  }
]);

// src/.vuepress/sidebar.ts
import { sidebar } from "vuepress-theme-hope";
var sidebar_default = sidebar({
  "/info/": [
    {
      text: "P\xE1gina Principal",
      icon: "home",
      link: "/info/"
    },
    {
      text: "Personal",
      icon: "address-card",
      link: "/info/personal"
    },
    {
      text: "Investigaci\xF3n",
      icon: "flask",
      link: "/info/investigacion"
    },
    {
      text: "Docencia",
      icon: "chalkboard-user",
      link: "/info/docencia"
    },
    {
      text: "Proyectos",
      icon: "code",
      link: "/info/proyectos"
    }
  ]
});

// src/.vuepress/theme.ts
var theme_default = hopeTheme({
  hostname: "https://joseluisgs.dev",
  fullscreen: true,
  print: true,
  logo: "/img/logo.webp",
  author: {
    name: "Jos\xE9 Luis Gonz\xE1lez S\xE1nchez",
    url: "https://joseluisgs.dev"
  },
  docsDir: "src",
  // navbar
  navbar: navbar_default,
  // sidebar
  sidebar: sidebar_default,
  footer: `
    <div class="footer-wrapper">
      <div class="footer-author">
        <i class="fa-solid fa-code" aria-hidden="true"></i>
        <a href="/info/personal" aria-label="Sobre Jos\xE9 Luis Gonz\xE1lez S\xE1nchez">Jos\xE9 Luis Gonz\xE1lez S\xE1nchez</a> &copy; ${(/* @__PURE__ */ new Date()).getFullYear()}
      </div>
      <div class="footer-icons">
        <div class="footer-group socials">
          <a href="https://github.com/joseluisgs" target="_blank" rel="noopener noreferrer" aria-label="GitHub de Jos\xE9 Luis Gonz\xE1lez S\xE1nchez"><i class="fa-brands fa-github"></i></a>
          <a href="https://x.com/JoseLuisGSDev" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter) de Jos\xE9 Luis Gonz\xE1lez S\xE1nchez"><i class="fa-brands fa-x-twitter"></i></a>
          <a href="https://www.linkedin.com/in/joseluisgsdev" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de Jos\xE9 Luis Gonz\xE1lez S\xE1nchez"><i class="fa-brands fa-linkedin"></i></a>
          <a href="https://www.instagram.com/joseluisgs.dev" target="_blank" rel="noopener noreferrer" aria-label="Instagram de Jos\xE9 Luis Gonz\xE1lez S\xE1nchez"><i class="fa-brands fa-instagram"></i></a>
          <a href="https://www.youtube.com/@joseluisgs" target="_blank" rel="noopener noreferrer" aria-label="YouTube de Jos\xE9 Luis Gonz\xE1lez S\xE1nchez"><i class="fa-brands fa-youtube"></i></a>
        </div>
        <div class="footer-group tech">
          <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer" aria-label="Vue.js"><i class="fa-brands fa-vuejs"></i></a>
          /
          <a href="https://vuepress.vuejs.org/" target="_blank" rel="noopener noreferrer" aria-label="VuePress"><i class="fa-brands fa-markdown"></i></a>
          <a href="javascript:void(0)" class="cookie-manage" aria-label="Gestionar cookies"><i class="fa-solid fa-cookie-bite"></i></a>
        </div>
      </div>
    </div>
  `,
  editLink: false,
  contributors: false,
  lastUpdated: true,
  blog: {
    avatar: "/img/avatar.webp",
    description: 'PhD - Profesor<br>Kotlin Trainer Certified by JetBrains<br>GitHub Campus Advisor<br><br><i class="fa-solid fa-location-dot"></i> I.E.S. Luis Vives, Legan\xE9s, Madrid',
    intro: "/info/personal",
    medias: {
      GitHub: "https://github.com/joseluisgs",
      Twitter: "https://x.com/JoseLuisGSDev",
      Linkedin: "https://www.linkedin.com/in/joseluisgsdev",
      Instagram: "https://www.instagram.com/joseluisgs.dev",
      Youtube: "https://www.youtube.com/@joseluisgs"
    }
  },
  metaLocales: {
    editLink: "Edit this page on GitHub"
  },
  markdown: {
    align: true,
    attrs: true,
    codeTabs: true,
    component: true,
    demo: true,
    figure: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    mark: true,
    math: true,
    mermaid: true,
    plantuml: true,
    spoiler: true,
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em") {
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended"
            };
          }
        }
      }
    ],
    sub: true,
    sup: true,
    tabs: true,
    vPre: true
  },
  plugins: {
    copyright: true,
    slimsearch: {
      indexContent: false,
      hotKeys: [
        { key: "k", ctrl: true },
        { key: "/", ctrl: false }
      ],
      customFields: [
        {
          getter: (page) => page.title,
          formatter: "Buscar en: [[title]]"
        }
      ]
    },
    blog: {
      filter: (page) => {
        return page.frontmatter.article ?? (Boolean(page.filePathRelative) && !page.frontmatter.home);
      }
    },
    comment: {
      provider: "Giscus",
      repo: "joseluisgs/joseluisgs.github.io",
      repoId: "MDEwOlJlcG9zaXRvcnkzMjg3NzQ4OTU=",
      category: "General",
      categoryId: "DIC_kwDOE5i0784CTUPm"
    },
    components: {
      components: ["Badge", "VPCard", "PDF", "VidStack", "SiteInfo"]
    },
    icon: {
      assets: "fontawesome-with-brands"
    },
    pwa: {
      favicon: "/assets/icon/favicon-32x32.webp",
      cacheHTML: true,
      cachePic: true,
      appendBase: true,
      apple: {
        icon: "/assets/icon/apple-icon-180-180x180.png",
        statusBarColor: "black"
      },
      msTile: {
        image: "/assets/icon/chrome-192-192x192.png",
        color: "#ffffff"
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-512-512x512.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "/assets/icon/chrome-192-192x192.png",
            sizes: "192x192",
            type: "image/png"
          }
        ],
        shortcuts: [
          {
            name: "Docencia",
            short_name: "Docencia",
            url: "/info/docencia",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png"
              }
            ]
          }
        ]
      }
    },
    feed: {
      rss: true,
      atom: true,
      json: true,
      hostname: "https://joseluisgs.dev",
      author: {
        name: "Jos\xE9 Luis Gonz\xE1lez S\xE1nchez",
        email: "joseluis@joseluisgs.dev"
      }
    },
    sitemap: {
      hostname: "https://joseluisgs.dev",
      changefreq: "weekly",
      priority: 0.8,
      excludePaths: ["/404.html", "/samples/"]
    }
  },
  seo: {
    hostname: "https://joseluisgs.dev",
    author: "Jos\xE9 Luis Gonz\xE1lez S\xE1nchez",
    twitterID: "JoseLuisGSDev",
    canonical: (page) => `https://joseluisgs.dev${page.path}`,
    default_image: "/img/web-social.png",
    twitterUsername: "@JoseLuisGSDev"
  }
});

// src/.vuepress/config.ts
var config_default = defineUserConfig({
  base: "/",
  lang: "es-ES",
  title: "Jos\xE9 Luis Gonz\xE1lez",
  description: "Web personal de Jos\xE9 Luis Gonz\xE1lez S\xE1nchez - Profesor FP de DAW, DAM y formador certificado",
  cleanUrls: true,
  shouldPrefetch: false,
  head: [
    ["link", { rel: "icon", href: "/assets/icon/favicon-32x32.webp" }],
    ["link", { rel: "manifest", href: "/manifest.webmanifest" }],
    ["meta", { name: "theme-color", content: "#5c92d1" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" }
    ],
    ["link", { rel: "apple-touch-icon", href: "/assets/icon/apple-icon-180-180x180.png" }],
    [
      "meta",
      {
        name: "msapplication-TileImage",
        content: "/assets/icon/chrome-192-192x192.png"
      }
    ],
    ["meta", { name: "msapplication-TileColor", content: "#ffffff" }],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no"
      }
    ],
    ["meta", { name: "author", content: "Jos\xE9 Luis Gonz\xE1lez S\xE1nchez" }],
    [
      "meta",
      {
        name: "application-name",
        content: "Jos\xE9 Luis Gonz\xE1lez S\xE1nchez. Web Personal"
      }
    ],
    [
      "meta",
      {
        name: "keywords",
        content: "Profesor Inform\xE1tica FP, Formador Kotlin Certificaci\xF3n JetBrains, Desarrollador Full Stack, Docente Desarrollo Web, C# .NET, ASP.NET Core, Blazor, Entity Framework Core, Programaci\xF3n Orientada Objetos, POO, Testing Unitarios, TDD, Docker, Microservicios, REST API, JWT, Clean Code, SOLID, GitHub, Legan\xE9s Madrid, DAW Desarrollo Aplicaciones Web, DAM Desarrollo Aplicaciones Multiplataforma, ASIR Administraci\xF3n Sistemas Inform\xE1ticos Redes, SMR Sistemas Microinform\xE1ticos Redes, Formaci\xF3n Profesional, Instituto IES Luis Vives, Instructor Certificado JetBrains, Instructor GitHub Campus Advisor, Doctor en Inform\xE1tica"
      }
    ],
    // Google Search
    [
      "meta",
      {
        name: "google-site-verification",
        content: "6faOYM6NoaSKvkuz4Qexps8JgYe65lIQukYB5eScb90"
      }
    ],
    // Google Fonts: Ubuntu
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
      }
    ]
  ],
  theme: theme_default
  // plugins: [
  //   googleAnalyticsPlugin({
  //     id: "G-103H05W8P8",
  //   }),
  // ],
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjLy52dWVwcmVzcy9jb25maWcudHMiLCAic3JjLy52dWVwcmVzcy90aGVtZS50cyIsICJzcmMvLnZ1ZXByZXNzL25hdmJhci50cyIsICJzcmMvLnZ1ZXByZXNzL3NpZGViYXIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOi9Vc2Vycy9qb3NlbHVpc2dzL1Byb2plY3RzL2pvc2VsdWlzZ3Mvd2ViLm51ZXZhL3NyYy8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGpvc2VsdWlzZ3NcXFxcUHJvamVjdHNcXFxcam9zZWx1aXNnc1xcXFx3ZWIubnVldmFcXFxcc3JjXFxcXC52dWVwcmVzc1xcXFxjb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL2pvc2VsdWlzZ3MvUHJvamVjdHMvam9zZWx1aXNncy93ZWIubnVldmEvc3JjLy52dWVwcmVzcy9jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVVc2VyQ29uZmlnIH0gZnJvbSBcInZ1ZXByZXNzXCI7XG4vLyBpbXBvcnQgeyBnb29nbGVBbmFseXRpY3NQbHVnaW4gfSBmcm9tIFwiQHZ1ZXByZXNzL3BsdWdpbi1nb29nbGUtYW5hbHl0aWNzXCI7XG5cbmltcG9ydCB0aGVtZSBmcm9tIFwiLi90aGVtZS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVVc2VyQ29uZmlnKHtcbiAgYmFzZTogXCIvXCIsXG5cbiAgbGFuZzogXCJlcy1FU1wiLFxuICB0aXRsZTogXCJKb3NcdTAwRTkgTHVpcyBHb256XHUwMEUxbGV6XCIsXG4gIGRlc2NyaXB0aW9uOiBcIldlYiBwZXJzb25hbCBkZSBKb3NcdTAwRTkgTHVpcyBHb256XHUwMEUxbGV6IFNcdTAwRTFuY2hleiAtIFByb2Zlc29yIEZQIGRlIERBVywgREFNIHkgZm9ybWFkb3IgY2VydGlmaWNhZG9cIixcblxuICBjbGVhblVybHM6IHRydWUsXG5cbiAgc2hvdWxkUHJlZmV0Y2g6IGZhbHNlLFxuXG4gIGhlYWQ6IFtcbiAgICBbXCJsaW5rXCIsIHsgcmVsOiBcImljb25cIiwgaHJlZjogXCIvYXNzZXRzL2ljb24vZmF2aWNvbi0zMngzMi53ZWJwXCIgfV0sXG4gICAgW1wibGlua1wiLCB7IHJlbDogXCJtYW5pZmVzdFwiLCBocmVmOiBcIi9tYW5pZmVzdC53ZWJtYW5pZmVzdFwiIH1dLFxuICAgIFtcIm1ldGFcIiwgeyBuYW1lOiBcInRoZW1lLWNvbG9yXCIsIGNvbnRlbnQ6IFwiIzVjOTJkMVwiIH1dLFxuICAgIFtcIm1ldGFcIiwgeyBuYW1lOiBcImFwcGxlLW1vYmlsZS13ZWItYXBwLWNhcGFibGVcIiwgY29udGVudDogXCJ5ZXNcIiB9XSxcbiAgICBbXG4gICAgICBcIm1ldGFcIixcbiAgICAgIHsgbmFtZTogXCJhcHBsZS1tb2JpbGUtd2ViLWFwcC1zdGF0dXMtYmFyLXN0eWxlXCIsIGNvbnRlbnQ6IFwiYmxhY2tcIiB9LFxuICAgIF0sXG4gICAgW1wibGlua1wiLCB7IHJlbDogXCJhcHBsZS10b3VjaC1pY29uXCIsIGhyZWY6IFwiL2Fzc2V0cy9pY29uL2FwcGxlLWljb24tMTgwLTE4MHgxODAucG5nXCIgfV0sXG4gICAgW1xuICAgICAgXCJtZXRhXCIsXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwibXNhcHBsaWNhdGlvbi1UaWxlSW1hZ2VcIixcbiAgICAgICAgY29udGVudDogXCIvYXNzZXRzL2ljb24vY2hyb21lLTE5Mi0xOTJ4MTkyLnBuZ1wiLFxuICAgICAgfSxcbiAgICBdLFxuICAgIFtcIm1ldGFcIiwgeyBuYW1lOiBcIm1zYXBwbGljYXRpb24tVGlsZUNvbG9yXCIsIGNvbnRlbnQ6IFwiI2ZmZmZmZlwiIH1dLFxuICAgIFtcbiAgICAgIFwibWV0YVwiLFxuICAgICAge1xuICAgICAgICBuYW1lOiBcInZpZXdwb3J0XCIsXG4gICAgICAgIGNvbnRlbnQ6IFwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MSx1c2VyLXNjYWxhYmxlPW5vXCIsXG4gICAgICB9LFxuICAgIF0sXG4gICAgW1wibWV0YVwiLCB7IG5hbWU6IFwiYXV0aG9yXCIsIGNvbnRlbnQ6IFwiSm9zXHUwMEU5IEx1aXMgR29uelx1MDBFMWxleiBTXHUwMEUxbmNoZXpcIiB9XSxcbiAgICBbXG4gICAgICBcIm1ldGFcIixcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJhcHBsaWNhdGlvbi1uYW1lXCIsXG4gICAgICAgIGNvbnRlbnQ6IFwiSm9zXHUwMEU5IEx1aXMgR29uelx1MDBFMWxleiBTXHUwMEUxbmNoZXouIFdlYiBQZXJzb25hbFwiLFxuICAgICAgfSxcbiAgICBdLFxuW1xuICAgICAgXCJtZXRhXCIsXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwia2V5d29yZHNcIixcbiAgICAgICAgY29udGVudDpcbiAgICAgICAgICBcIlByb2Zlc29yIEluZm9ybVx1MDBFMXRpY2EgRlAsIEZvcm1hZG9yIEtvdGxpbiBDZXJ0aWZpY2FjaVx1MDBGM24gSmV0QnJhaW5zLCBEZXNhcnJvbGxhZG9yIEZ1bGwgU3RhY2ssIERvY2VudGUgRGVzYXJyb2xsbyBXZWIsIEMjIC5ORVQsIEFTUC5ORVQgQ29yZSwgQmxhem9yLCBFbnRpdHkgRnJhbWV3b3JrIENvcmUsIFByb2dyYW1hY2lcdTAwRjNuIE9yaWVudGFkYSBPYmpldG9zLCBQT08sIFRlc3RpbmcgVW5pdGFyaW9zLCBUREQsIERvY2tlciwgTWljcm9zZXJ2aWNpb3MsIFJFU1QgQVBJLCBKV1QsIENsZWFuIENvZGUsIFNPTElELCBHaXRIdWIsIExlZ2FuXHUwMEU5cyBNYWRyaWQsIERBVyBEZXNhcnJvbGxvIEFwbGljYWNpb25lcyBXZWIsIERBTSBEZXNhcnJvbGxvIEFwbGljYWNpb25lcyBNdWx0aXBsYXRhZm9ybWEsIEFTSVIgQWRtaW5pc3RyYWNpXHUwMEYzbiBTaXN0ZW1hcyBJbmZvcm1cdTAwRTF0aWNvcyBSZWRlcywgU01SIFNpc3RlbWFzIE1pY3JvaW5mb3JtXHUwMEUxdGljb3MgUmVkZXMsIEZvcm1hY2lcdTAwRjNuIFByb2Zlc2lvbmFsLCBJbnN0aXR1dG8gSUVTIEx1aXMgVml2ZXMsIEluc3RydWN0b3IgQ2VydGlmaWNhZG8gSmV0QnJhaW5zLCBJbnN0cnVjdG9yIEdpdEh1YiBDYW1wdXMgQWR2aXNvciwgRG9jdG9yIGVuIEluZm9ybVx1MDBFMXRpY2FcIixcbiAgICAgIH0sXG4gICAgXSxcblxuICAgIC8vIEdvb2dsZSBTZWFyY2hcbiAgICBbXG4gICAgICBcIm1ldGFcIixcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJnb29nbGUtc2l0ZS12ZXJpZmljYXRpb25cIixcbiAgICAgICAgY29udGVudDogXCI2ZmFPWU02Tm9hU0t2a3V6NFFleHBzOEpnWWU2NWxJUXVrWUI1ZVNjYjkwXCIsXG4gICAgICB9LFxuICAgIF0sXG5cbiAgICAvLyBHb29nbGUgRm9udHM6IFVidW50dVxuICAgIFtcbiAgICAgIFwibGlua1wiLFxuICAgICAge1xuICAgICAgICByZWw6IFwic3R5bGVzaGVldFwiLFxuICAgICAgICBocmVmOiBcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9VWJ1bnR1Oml0YWwsd2dodEAwLDMwMDswLDQwMDswLDUwMDswLDcwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDcwMCZkaXNwbGF5PXN3YXBcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgXSxcblxuICB0aGVtZSxcblxuICAvLyBwbHVnaW5zOiBbXG4gIC8vICAgZ29vZ2xlQW5hbHl0aWNzUGx1Z2luKHtcbiAgLy8gICAgIGlkOiBcIkctMTAzSDA1VzhQOFwiLFxuICAvLyAgIH0pLFxuICAvLyBdLFxufSk7IiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOi9Vc2Vycy9qb3NlbHVpc2dzL1Byb2plY3RzL2pvc2VsdWlzZ3Mvd2ViLm51ZXZhL3NyYy8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGpvc2VsdWlzZ3NcXFxcUHJvamVjdHNcXFxcam9zZWx1aXNnc1xcXFx3ZWIubnVldmFcXFxcc3JjXFxcXC52dWVwcmVzc1xcXFx0aGVtZS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvam9zZWx1aXNncy9Qcm9qZWN0cy9qb3NlbHVpc2dzL3dlYi5udWV2YS9zcmMvLnZ1ZXByZXNzL3RoZW1lLnRzXCI7aW1wb3J0IHsgaG9wZVRoZW1lIH0gZnJvbSBcInZ1ZXByZXNzLXRoZW1lLWhvcGVcIjtcblxuaW1wb3J0IG5hdmJhciBmcm9tIFwiLi9uYXZiYXIuanNcIjtcbmltcG9ydCBzaWRlYmFyIGZyb20gXCIuL3NpZGViYXIuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgaG9wZVRoZW1lKHtcbiAgaG9zdG5hbWU6ICdodHRwczovL2pvc2VsdWlzZ3MuZGV2JyxcblxuICBmdWxsc2NyZWVuOiB0cnVlLFxuICBwcmludDogdHJ1ZSxcblxuICBsb2dvOiAnL2ltZy9sb2dvLndlYnAnLFxuXG4gIGF1dGhvcjoge1xuICAgIG5hbWU6ICdKb3NcdTAwRTkgTHVpcyBHb256XHUwMEUxbGV6IFNcdTAwRTFuY2hleicsXG4gICAgdXJsOiAnaHR0cHM6Ly9qb3NlbHVpc2dzLmRldicsXG4gIH0sXG5cbiAgZG9jc0RpcjogJ3NyYycsXG5cbiAgLy8gbmF2YmFyXG4gIG5hdmJhcixcblxuICAvLyBzaWRlYmFyXG4gIHNpZGViYXIsXG5cbiAgZm9vdGVyOiBgXG4gICAgPGRpdiBjbGFzcz1cImZvb3Rlci13cmFwcGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyLWF1dGhvclwiPlxuICAgICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWNvZGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgIDxhIGhyZWY9XCIvaW5mby9wZXJzb25hbFwiIGFyaWEtbGFiZWw9XCJTb2JyZSBKb3NcdTAwRTkgTHVpcyBHb256XHUwMEUxbGV6IFNcdTAwRTFuY2hlelwiPkpvc1x1MDBFOSBMdWlzIEdvbnpcdTAwRTFsZXogU1x1MDBFMW5jaGV6PC9hPiAmY29weTsgJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXItaWNvbnNcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvb3Rlci1ncm91cCBzb2NpYWxzXCI+XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9qb3NlbHVpc2dzXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIGFyaWEtbGFiZWw9XCJHaXRIdWIgZGUgSm9zXHUwMEU5IEx1aXMgR29uelx1MDBFMWxleiBTXHUwMEUxbmNoZXpcIj48aSBjbGFzcz1cImZhLWJyYW5kcyBmYS1naXRodWJcIj48L2k+PC9hPlxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3guY29tL0pvc2VMdWlzR1NEZXZcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgYXJpYS1sYWJlbD1cIlggKFR3aXR0ZXIpIGRlIEpvc1x1MDBFOSBMdWlzIEdvbnpcdTAwRTFsZXogU1x1MDBFMW5jaGV6XCI+PGkgY2xhc3M9XCJmYS1icmFuZHMgZmEteC10d2l0dGVyXCI+PC9pPjwvYT5cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2pvc2VsdWlzZ3NkZXZcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgYXJpYS1sYWJlbD1cIkxpbmtlZEluIGRlIEpvc1x1MDBFOSBMdWlzIEdvbnpcdTAwRTFsZXogU1x1MDBFMW5jaGV6XCI+PGkgY2xhc3M9XCJmYS1icmFuZHMgZmEtbGlua2VkaW5cIj48L2k+PC9hPlxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2pvc2VsdWlzZ3MuZGV2XCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIGFyaWEtbGFiZWw9XCJJbnN0YWdyYW0gZGUgSm9zXHUwMEU5IEx1aXMgR29uelx1MDBFMWxleiBTXHUwMEUxbmNoZXpcIj48aSBjbGFzcz1cImZhLWJyYW5kcyBmYS1pbnN0YWdyYW1cIj48L2k+PC9hPlxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9Aam9zZWx1aXNnc1wiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiBhcmlhLWxhYmVsPVwiWW91VHViZSBkZSBKb3NcdTAwRTkgTHVpcyBHb256XHUwMEUxbGV6IFNcdTAwRTFuY2hlelwiPjxpIGNsYXNzPVwiZmEtYnJhbmRzIGZhLXlvdXR1YmVcIj48L2k+PC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvb3Rlci1ncm91cCB0ZWNoXCI+XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdnVlanMub3JnL1wiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiBhcmlhLWxhYmVsPVwiVnVlLmpzXCI+PGkgY2xhc3M9XCJmYS1icmFuZHMgZmEtdnVlanNcIj48L2k+PC9hPlxuICAgICAgICAgIC9cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly92dWVwcmVzcy52dWVqcy5vcmcvXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIGFyaWEtbGFiZWw9XCJWdWVQcmVzc1wiPjxpIGNsYXNzPVwiZmEtYnJhbmRzIGZhLW1hcmtkb3duXCI+PC9pPjwvYT5cbiAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgY2xhc3M9XCJjb29raWUtbWFuYWdlXCIgYXJpYS1sYWJlbD1cIkdlc3Rpb25hciBjb29raWVzXCI+PGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1jb29raWUtYml0ZVwiPjwvaT48L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGAsXG5cbiAgZWRpdExpbms6IGZhbHNlLFxuICBjb250cmlidXRvcnM6IGZhbHNlLFxuICBsYXN0VXBkYXRlZDogdHJ1ZSxcblxuICBibG9nOiB7XG4gICAgYXZhdGFyOiAnL2ltZy9hdmF0YXIud2VicCcsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnUGhEIC0gUHJvZmVzb3I8YnI+S290bGluIFRyYWluZXIgQ2VydGlmaWVkIGJ5IEpldEJyYWluczxicj5HaXRIdWIgQ2FtcHVzIEFkdmlzb3I8YnI+PGJyPjxpIGNsYXNzPVwiZmEtc29saWQgZmEtbG9jYXRpb24tZG90XCI+PC9pPiBJLkUuUy4gTHVpcyBWaXZlcywgTGVnYW5cdTAwRTlzLCBNYWRyaWQnLFxuICAgIGludHJvOiAnL2luZm8vcGVyc29uYWwnLFxuICAgIG1lZGlhczoge1xuICAgICAgR2l0SHViOiAnaHR0cHM6Ly9naXRodWIuY29tL2pvc2VsdWlzZ3MnLFxuICAgICAgVHdpdHRlcjogJ2h0dHBzOi8veC5jb20vSm9zZUx1aXNHU0RldicsXG4gICAgICBMaW5rZWRpbjogJ2h0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9qb3NlbHVpc2dzZGV2JyxcbiAgICAgIEluc3RhZ3JhbTogJ2h0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vam9zZWx1aXNncy5kZXYnLFxuICAgICAgWW91dHViZTogJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL0Bqb3NlbHVpc2dzJyxcbiAgICB9LFxuICB9LFxuXG4gIG1ldGFMb2NhbGVzOiB7XG4gICAgZWRpdExpbms6ICdFZGl0IHRoaXMgcGFnZSBvbiBHaXRIdWInLFxuICB9LFxuXG4gIG1hcmtkb3duOiB7XG4gICAgYWxpZ246IHRydWUsXG4gICAgYXR0cnM6IHRydWUsXG4gICAgY29kZVRhYnM6IHRydWUsXG4gICAgY29tcG9uZW50OiB0cnVlLFxuICAgIGRlbW86IHRydWUsXG4gICAgZmlndXJlOiB0cnVlLFxuICAgIGltZ0xhenlsb2FkOiB0cnVlLFxuICAgIGltZ1NpemU6IHRydWUsXG4gICAgaW5jbHVkZTogdHJ1ZSxcbiAgICBtYXJrOiB0cnVlLFxuICAgIG1hdGg6IHRydWUsXG4gICAgbWVybWFpZDogdHJ1ZSxcbiAgICBwbGFudHVtbDogdHJ1ZSxcbiAgICBzcG9pbGVyOiB0cnVlLFxuICAgIHN0eWxpemU6IFtcbiAgICAgIHtcbiAgICAgICAgbWF0Y2hlcjogJ1JlY29tbWVuZGVkJyxcbiAgICAgICAgcmVwbGFjZXI6ICh7IHRhZyB9KSA9PiB7XG4gICAgICAgICAgaWYgKHRhZyA9PT0gJ2VtJykge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgdGFnOiAnQmFkZ2UnLFxuICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiAndGlwJyB9LFxuICAgICAgICAgICAgICBjb250ZW50OiAnUmVjb21tZW5kZWQnLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIF0sXG4gICAgc3ViOiB0cnVlLFxuICAgIHN1cDogdHJ1ZSxcbiAgICB0YWJzOiB0cnVlLFxuICAgIHZQcmU6IHRydWUsXG4gIH0sXG5cbiAgcGx1Z2luczoge1xuICAgIGNvcHlyaWdodDogdHJ1ZSxcblxuICAgIHNsaW1zZWFyY2g6IHtcbiAgICAgIGluZGV4Q29udGVudDogZmFsc2UsXG4gICAgICBob3RLZXlzOiBbXG4gICAgICAgIHsga2V5OiAnaycsIGN0cmw6IHRydWUgfSxcbiAgICAgICAgeyBrZXk6ICcvJywgY3RybDogZmFsc2UgfSxcbiAgICAgIF0sXG4gICAgICBjdXN0b21GaWVsZHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGdldHRlcjogKHBhZ2UpID0+IHBhZ2UudGl0bGUsXG4gICAgICAgICAgZm9ybWF0dGVyOiAnQnVzY2FyIGVuOiBbW3RpdGxlXV0nLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuXG4gICAgYmxvZzoge1xuICAgICAgZmlsdGVyOiAocGFnZSkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIHBhZ2UuZnJvbnRtYXR0ZXIuYXJ0aWNsZSA/PyAoQm9vbGVhbihwYWdlLmZpbGVQYXRoUmVsYXRpdmUpICYmICFwYWdlLmZyb250bWF0dGVyLmhvbWUpXG4gICAgICAgICk7XG4gICAgICB9LFxuICAgIH0sXG5cbiAgICBjb21tZW50OiB7XG4gICAgICBwcm92aWRlcjogJ0dpc2N1cycsXG4gICAgICByZXBvOiAnam9zZWx1aXNncy9qb3NlbHVpc2dzLmdpdGh1Yi5pbycsXG4gICAgICByZXBvSWQ6ICdNREV3T2xKbGNHOXphWFJ2Y25rek1qZzNOelE0T1RVPScsXG4gICAgICBjYXRlZ29yeTogJ0dlbmVyYWwnLFxuICAgICAgY2F0ZWdvcnlJZDogJ0RJQ19rd0RPRTVpMDc4NENUVVBtJyxcbiAgICB9LFxuXG4gICAgY29tcG9uZW50czoge1xuICAgICAgY29tcG9uZW50czogWydCYWRnZScsICdWUENhcmQnLCAnUERGJywgJ1ZpZFN0YWNrJywgJ1NpdGVJbmZvJ10sXG4gICAgfSxcblxuICAgIGljb246IHtcbiAgICAgIGFzc2V0czogJ2ZvbnRhd2Vzb21lLXdpdGgtYnJhbmRzJyxcbiAgICB9LFxuXG4gICAgcHdhOiB7XG4gICAgICBmYXZpY29uOiAnL2Fzc2V0cy9pY29uL2Zhdmljb24tMzJ4MzIud2VicCcsXG4gICAgICBjYWNoZUhUTUw6IHRydWUsXG4gICAgICBjYWNoZVBpYzogdHJ1ZSxcbiAgICAgIGFwcGVuZEJhc2U6IHRydWUsXG4gICAgICBhcHBsZToge1xuICAgICAgICBpY29uOiAnL2Fzc2V0cy9pY29uL2FwcGxlLWljb24tMTgwLTE4MHgxODAucG5nJyxcbiAgICAgICAgc3RhdHVzQmFyQ29sb3I6ICdibGFjaycsXG4gICAgICB9LFxuICAgICAgbXNUaWxlOiB7XG4gICAgICAgIGltYWdlOiAnL2Fzc2V0cy9pY29uL2Nocm9tZS0xOTItMTkyeDE5Mi5wbmcnLFxuICAgICAgICBjb2xvcjogJyNmZmZmZmYnLFxuICAgICAgfSxcbiAgICAgIG1hbmlmZXN0OiB7XG4gICAgICAgIGljb25zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL2Fzc2V0cy9pY29uL2Nocm9tZS01MTItNTEyeDUxMi5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICc1MTJ4NTEyJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL2Fzc2V0cy9pY29uL2Nocm9tZS0xOTItMTkyeDE5Mi5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICcxOTJ4MTkyJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIHNob3J0Y3V0czogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdEb2NlbmNpYScsXG4gICAgICAgICAgICBzaG9ydF9uYW1lOiAnRG9jZW5jaWEnLFxuICAgICAgICAgICAgdXJsOiAnL2luZm8vZG9jZW5jaWEnLFxuICAgICAgICAgICAgaWNvbnM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNyYzogJy9hc3NldHMvaWNvbi9ndWlkZS1tYXNrYWJsZS5wbmcnLFxuICAgICAgICAgICAgICAgIHNpemVzOiAnMTkyeDE5MicsXG4gICAgICAgICAgICAgICAgcHVycG9zZTogJ21hc2thYmxlJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgfSxcblxuICAgIGZlZWQ6IHtcbiAgICAgIHJzczogdHJ1ZSxcbiAgICAgIGF0b206IHRydWUsXG4gICAgICBqc29uOiB0cnVlLFxuICAgICAgaG9zdG5hbWU6ICdodHRwczovL2pvc2VsdWlzZ3MuZGV2JyxcbiAgICAgIGF1dGhvcjoge1xuICAgICAgICBuYW1lOiAnSm9zXHUwMEU5IEx1aXMgR29uelx1MDBFMWxleiBTXHUwMEUxbmNoZXonLFxuICAgICAgICBlbWFpbDogJ2pvc2VsdWlzQGpvc2VsdWlzZ3MuZGV2JyxcbiAgICAgIH0sXG4gICAgfSxcblxuICAgIHNpdGVtYXA6IHtcbiAgICAgIGhvc3RuYW1lOiAnaHR0cHM6Ly9qb3NlbHVpc2dzLmRldicsXG4gICAgICBjaGFuZ2VmcmVxOiAnd2Vla2x5JyxcbiAgICAgIHByaW9yaXR5OiAwLjgsXG4gICAgICBleGNsdWRlUGF0aHM6IFsnLzQwNC5odG1sJywgJy9zYW1wbGVzLyddLFxuICAgIH0sXG4gIH0sXG5cbiAgc2VvOiB7XG4gICAgaG9zdG5hbWU6ICdodHRwczovL2pvc2VsdWlzZ3MuZGV2JyxcbiAgICBhdXRob3I6ICdKb3NcdTAwRTkgTHVpcyBHb256XHUwMEUxbGV6IFNcdTAwRTFuY2hleicsXG4gICAgdHdpdHRlcklEOiAnSm9zZUx1aXNHU0RldicsXG4gICAgY2Fub25pY2FsOiAocGFnZSkgPT4gYGh0dHBzOi8vam9zZWx1aXNncy5kZXYke3BhZ2UucGF0aH1gLFxuICAgIGRlZmF1bHRfaW1hZ2U6ICcvaW1nL3dlYi1zb2NpYWwucG5nJyxcbiAgICB0d2l0dGVyVXNlcm5hbWU6ICdASm9zZUx1aXNHU0RldicsXG4gIH0sXG59KTsiLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6L1VzZXJzL2pvc2VsdWlzZ3MvUHJvamVjdHMvam9zZWx1aXNncy93ZWIubnVldmEvc3JjLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcam9zZWx1aXNnc1xcXFxQcm9qZWN0c1xcXFxqb3NlbHVpc2dzXFxcXHdlYi5udWV2YVxcXFxzcmNcXFxcLnZ1ZXByZXNzXFxcXG5hdmJhci50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvam9zZWx1aXNncy9Qcm9qZWN0cy9qb3NlbHVpc2dzL3dlYi5udWV2YS9zcmMvLnZ1ZXByZXNzL25hdmJhci50c1wiO2ltcG9ydCB7IG5hdmJhciB9IGZyb20gXCJ2dWVwcmVzcy10aGVtZS1ob3BlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IG5hdmJhcihbXG4gIFwiL1wiLFxuICB7XG4gICAgdGV4dDogXCJJbmZvXCIsXG4gICAgaWNvbjogXCJjaXJjbGUtaW5mb1wiLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7IHRleHQ6IFwiUGVyc29uYWxcIiwgbGluazogXCIvaW5mby9wZXJzb25hbFwiLCBpY29uOiBcImFkZHJlc3MtY2FyZFwiIH0sXG4gICAgICB7IHRleHQ6IFwiSW52ZXN0aWdhY2lcdTAwRjNuXCIsIGxpbms6IFwiL2luZm8vaW52ZXN0aWdhY2lvblwiLCBpY29uOiBcImZsYXNrXCIgfSxcbiAgICBdLFxuICB9LFxuICB7IHRleHQ6IFwiRG9jZW5jaWFcIiwgbGluazogXCJpbmZvL2RvY2VuY2lhXCIsIGljb246IFwiY2hhbGtib2FyZC11c2VyXCIgfSxcbiAgeyB0ZXh0OiBcIlByb3llY3Rvc1wiLCBsaW5rOiBcImluZm8vcHJveWVjdG9zXCIsIGljb246IFwiZGlhZ3JhbS1wcm9qZWN0XCIgfSxcbiAge1xuICAgIHRleHQ6IFwiQ29udGFjdG9cIixcbiAgICBpY29uOiBcImVudmVsb3BlXCIsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHsgdGV4dDogXCJBeXVkYVwiLCBsaW5rOiBcImh0dHBzOi8vZm9ybXMuZ2xlL1YybTQycWlXMXM2WDRvTnQ4XCIsIGljb246IFwiY2lyY2xlLXF1ZXN0aW9uXCIgfSxcbiAgICAgIHsgdGV4dDogXCJYXCIsIGxpbms6IFwiaHR0cHM6Ly94LmNvbS9Kb3NlTHVpc0dTRGV2XCIsIGljb246IFwiZmEtYnJhbmRzIGZhLXgtdHdpdHRlclwiIH0sXG4gICAgICB7IHRleHQ6IFwiTGlua2VkSW5cIiwgbGluazogXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vam9zZWx1aXNnc2RldlwiLCBpY29uOiBcImZhLWJyYW5kcyBmYS1saW5rZWRpblwiIH0sXG4gICAgICB7IHRleHQ6IFwiSW5zdGFncmFtXCIsIGxpbms6IFwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9qb3NlbHVpc2dzLmRldlwiLCBpY29uOiBcImZhLWJyYW5kcyBmYS1pbnN0YWdyYW1cIiB9LFxuICAgICAgeyB0ZXh0OiBcIllvdVR1YmVcIiwgbGluazogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9Aam9zZWx1aXNnc1wiLCBpY29uOiBcImZhLWJyYW5kcyBmYS15b3V0dWJlXCIgfSxcbiAgICBdLFxuICB9LFxuXSk7XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6L1VzZXJzL2pvc2VsdWlzZ3MvUHJvamVjdHMvam9zZWx1aXNncy93ZWIubnVldmEvc3JjLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcam9zZWx1aXNnc1xcXFxQcm9qZWN0c1xcXFxqb3NlbHVpc2dzXFxcXHdlYi5udWV2YVxcXFxzcmNcXFxcLnZ1ZXByZXNzXFxcXHNpZGViYXIudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL2pvc2VsdWlzZ3MvUHJvamVjdHMvam9zZWx1aXNncy93ZWIubnVldmEvc3JjLy52dWVwcmVzcy9zaWRlYmFyLnRzXCI7aW1wb3J0IHsgc2lkZWJhciB9IGZyb20gXCJ2dWVwcmVzcy10aGVtZS1ob3BlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHNpZGViYXIoe1xuICBcIi9pbmZvL1wiOiBbXG4gICAge1xuICAgICAgdGV4dDogXCJQXHUwMEUxZ2luYSBQcmluY2lwYWxcIixcbiAgICAgIGljb246IFwiaG9tZVwiLFxuICAgICAgbGluazogXCIvaW5mby9cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6IFwiUGVyc29uYWxcIixcbiAgICAgIGljb246IFwiYWRkcmVzcy1jYXJkXCIsXG4gICAgICBsaW5rOiBcIi9pbmZvL3BlcnNvbmFsXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiBcIkludmVzdGlnYWNpXHUwMEYzblwiLFxuICAgICAgaWNvbjogXCJmbGFza1wiLFxuICAgICAgbGluazogXCIvaW5mby9pbnZlc3RpZ2FjaW9uXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiBcIkRvY2VuY2lhXCIsXG4gICAgICBpY29uOiBcImNoYWxrYm9hcmQtdXNlclwiLFxuICAgICAgbGluazogXCIvaW5mby9kb2NlbmNpYVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogXCJQcm95ZWN0b3NcIixcbiAgICAgIGljb246IFwiY29kZVwiLFxuICAgICAgbGluazogXCIvaW5mby9wcm95ZWN0b3NcIixcbiAgICB9LFxuICBdLFxufSk7Il0sCiAgIm1hcHBpbmdzIjogIjtBQUE4VyxTQUFTLHdCQUF3Qjs7O0FDQW5DLFNBQVMsaUJBQWlCOzs7QUNBeEIsU0FBUyxjQUFjO0FBRXJZLElBQU8saUJBQVEsT0FBTztBQUFBLEVBQ3BCO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sVUFBVTtBQUFBLE1BQ1IsRUFBRSxNQUFNLFlBQVksTUFBTSxrQkFBa0IsTUFBTSxlQUFlO0FBQUEsTUFDakUsRUFBRSxNQUFNLG9CQUFpQixNQUFNLHVCQUF1QixNQUFNLFFBQVE7QUFBQSxJQUN0RTtBQUFBLEVBQ0Y7QUFBQSxFQUNBLEVBQUUsTUFBTSxZQUFZLE1BQU0saUJBQWlCLE1BQU0s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

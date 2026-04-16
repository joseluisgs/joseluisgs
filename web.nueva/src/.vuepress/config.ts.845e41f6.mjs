// src/.vuepress/config.ts
import { defineUserConfig } from "vuepress";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";

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
      { text: "Personal", link: "/docs/info/personal/", icon: "address-card" },
      { text: "Investigaci\xF3n", link: "/docs/info/investigacion/", icon: "flask" }
    ]
  },
  { text: "Docencia", link: "/docs/docencia/", icon: "chalkboard-user" },
  { text: "Proyectos", link: "/docs/proyectos/", icon: "diagram-project" },
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
  "/": [
    {
      text: "Info",
      icon: "circle-info",
      prefix: "docs/info/",
      children: "structure"
    },
    {
      text: "Docencia",
      icon: "chalkboard-user",
      prefix: "docs/docencia/",
      children: "structure"
    },
    {
      text: "Proyectos",
      icon: "diagram-project",
      prefix: "docs/proyectos/",
      children: "structure"
    }
  ]
});

// src/.vuepress/theme.ts
var theme_default = hopeTheme({
  hostname: "https://joseluisgs.dev",
  fullscreen: true,
  print: true,
  logo: "/img/logo.png",
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
      <span>
        <i class="fa-solid fa-code"></i>
        <a href="/docs/info/personal/">Jos\xE9 Luis Gonz\xE1lez S\xE1nchez</a> &copy; ${(/* @__PURE__ */ new Date()).getFullYear()}
      </span>
      &nbsp;&nbsp;
      <span>
        <a href="https://github.com/joseluisgs" target="_blank"><i class="fa-brands fa-github"></i></a>
        <a href="https://x.com/JoseLuisGSDev" target="_blank"><i class="fa-brands fa-x-twitter"></i></a>
        <a href="https://www.linkedin.com/in/joseluisgsdev" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
        <a href="https://www.instagram.com/joseluisgs.dev" target="_blank"><i class="fa-brands fa-instagram"></i></a>
        <a href="https://www.youtube.com/@joseluisgs" target="_blank"><i class="fa-brands fa-youtube"></i></a>
      </span>
      &nbsp;&nbsp;
      <span>
        <a href="https://vuejs.org/" target="_blank"><i class="fa-brands fa-vuejs"></i></a>
        /
        <a href="https://vuepress.vuejs.org/" target="_blank"><i class="fa-brands fa-markdown"></i></a>
      </span>
      &nbsp;&nbsp;
      <span>
        <a href="/docs/legal/"><i class="fa-solid fa-cookie-bite"></i></a>
      </span>
    </div>
  `,
  copyright: false,
  displayFooter: true,
  blog: {
    avatar: "/img/avatar.png",
    description: "PhD - Profesor - Investigador - Desarrollador",
    intro: "/intro.html",
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
    slimsearch: true,
    blog: true,
    comment: {
      provider: "Giscus",
      repo: "joseluisgs/joseluisgs.github.io",
      repoId: "MDEwOlJlcG9zaXRvcnkzMjg3NzQ4OTU=",
      category: "General",
      categoryId: "DIC_kwDOE5i0784CTUPm"
    },
    components: {
      components: ["Badge", "VPCard"]
    },
    icon: {
      assets: "fontawesome-with-brands"
    },
    feed: {
      rss: true,
      hostname: "https://joseluisgs.dev"
    },
    sitemap: {
      hostname: "https://joseluisgs.dev"
    }
  },
  seo: {
    default_image: "/img/web-social.png",
    twitterUsername: "@JoseLuisGSDev"
  }
});

// src/.vuepress/config.ts
var config_default = defineUserConfig({
  base: "/",
  lang: "es-ES",
  title: "Jos\xE9 Luis Gonz\xE1lez",
  description: "Web personal de Jos\xE9 Luis Gonz\xE1lez S\xE1nchez",
  head: [
    ["link", { rel: "icon", href: "/favicon.png" }],
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
        content: "Jos\xE9 Luis Gonz\xE1lez S\xE1nchez, Profesor, Formador, Desarrollador, Investigador, Desarrollo de Aplicaciones, Web, Multiplataforma, FP, Formaci\xF3n Profesional, Kotlin, Trainer, Certificaci\xF3n, Jetbrains, C#, csharp, .net, asp, razor, blazor, Embajador, GIT, GitKraken, Vuejs, m\xF3vil, jetbrains, intellij, hyperskill, docker, mongodb, nodejs, node, android, compose, backend, java, spring, springboot, instituto, test, pruebas, calidad, Luis Vives, Legan\xE9s, Madrid, Universidad de Granada, Jugabilidad, Videojuegos"
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
  theme: theme_default,
  plugins: [
    googleAnalyticsPlugin({
      id: "G-103H05W8P8"
    })
  ]
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjLy52dWVwcmVzcy9jb25maWcudHMiLCAic3JjLy52dWVwcmVzcy90aGVtZS50cyIsICJzcmMvLnZ1ZXByZXNzL25hdmJhci50cyIsICJzcmMvLnZ1ZXByZXNzL3NpZGViYXIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOi9Vc2Vycy9qb3NlbHVpc2dzL1Byb2plY3RzL2pvc2VsdWlzZ3Mvd2ViLm51ZXZhL3NyYy8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGpvc2VsdWlzZ3NcXFxcUHJvamVjdHNcXFxcam9zZWx1aXNnc1xcXFx3ZWIubnVldmFcXFxcc3JjXFxcXC52dWVwcmVzc1xcXFxjb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL2pvc2VsdWlzZ3MvUHJvamVjdHMvam9zZWx1aXNncy93ZWIubnVldmEvc3JjLy52dWVwcmVzcy9jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVVc2VyQ29uZmlnIH0gZnJvbSBcInZ1ZXByZXNzXCI7XG5pbXBvcnQgeyBnb29nbGVBbmFseXRpY3NQbHVnaW4gfSBmcm9tIFwiQHZ1ZXByZXNzL3BsdWdpbi1nb29nbGUtYW5hbHl0aWNzXCI7XG5cbmltcG9ydCB0aGVtZSBmcm9tIFwiLi90aGVtZS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVVc2VyQ29uZmlnKHtcbiAgYmFzZTogXCIvXCIsXG5cbiAgbGFuZzogXCJlcy1FU1wiLFxuICB0aXRsZTogXCJKb3NcdTAwRTkgTHVpcyBHb256XHUwMEUxbGV6XCIsXG4gIGRlc2NyaXB0aW9uOiBcIldlYiBwZXJzb25hbCBkZSBKb3NcdTAwRTkgTHVpcyBHb256XHUwMEUxbGV6IFNcdTAwRTFuY2hlelwiLFxuXG4gIGhlYWQ6IFtcbiAgICBbXCJsaW5rXCIsIHsgcmVsOiBcImljb25cIiwgaHJlZjogXCIvZmF2aWNvbi5wbmdcIiB9XSxcbiAgICBbXG4gICAgICBcIm1ldGFcIixcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJ2aWV3cG9ydFwiLFxuICAgICAgICBjb250ZW50OiBcIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTEsdXNlci1zY2FsYWJsZT1ub1wiLFxuICAgICAgfSxcbiAgICBdLFxuICAgIFtcIm1ldGFcIiwgeyBuYW1lOiBcImF1dGhvclwiLCBjb250ZW50OiBcIkpvc1x1MDBFOSBMdWlzIEdvbnpcdTAwRTFsZXogU1x1MDBFMW5jaGV6XCIgfV0sXG4gICAgW1xuICAgICAgXCJtZXRhXCIsXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiYXBwbGljYXRpb24tbmFtZVwiLFxuICAgICAgICBjb250ZW50OiBcIkpvc1x1MDBFOSBMdWlzIEdvbnpcdTAwRTFsZXogU1x1MDBFMW5jaGV6LiBXZWIgUGVyc29uYWxcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgICBbXG4gICAgICBcIm1ldGFcIixcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJrZXl3b3Jkc1wiLFxuICAgICAgICBjb250ZW50OlxuICAgICAgICAgIFwiSm9zXHUwMEU5IEx1aXMgR29uelx1MDBFMWxleiBTXHUwMEUxbmNoZXosIFByb2Zlc29yLCBGb3JtYWRvciwgRGVzYXJyb2xsYWRvciwgSW52ZXN0aWdhZG9yLCBEZXNhcnJvbGxvIGRlIEFwbGljYWNpb25lcywgV2ViLCBNdWx0aXBsYXRhZm9ybWEsIEZQLCBGb3JtYWNpXHUwMEYzbiBQcm9mZXNpb25hbCwgS290bGluLCBUcmFpbmVyLCBDZXJ0aWZpY2FjaVx1MDBGM24sIEpldGJyYWlucywgQyMsIGNzaGFycCwgLm5ldCwgYXNwLCByYXpvciwgYmxhem9yLCBFbWJhamFkb3IsIEdJVCwgR2l0S3Jha2VuLCBWdWVqcywgbVx1MDBGM3ZpbCwgamV0YnJhaW5zLCBpbnRlbGxpaiwgaHlwZXJza2lsbCwgZG9ja2VyLCBtb25nb2RiLCBub2RlanMsIG5vZGUsIGFuZHJvaWQsIGNvbXBvc2UsIGJhY2tlbmQsIGphdmEsIHNwcmluZywgc3ByaW5nYm9vdCwgaW5zdGl0dXRvLCB0ZXN0LCBwcnVlYmFzLCBjYWxpZGFkLCBMdWlzIFZpdmVzLCBMZWdhblx1MDBFOXMsIE1hZHJpZCwgVW5pdmVyc2lkYWQgZGUgR3JhbmFkYSwgSnVnYWJpbGlkYWQsIFZpZGVvanVlZ29zXCIsXG4gICAgICB9LFxuICAgIF0sXG5cbiAgICAvLyBHb29nbGUgU2VhcmNoXG4gICAgW1xuICAgICAgXCJtZXRhXCIsXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiZ29vZ2xlLXNpdGUtdmVyaWZpY2F0aW9uXCIsXG4gICAgICAgIGNvbnRlbnQ6IFwiNmZhT1lNNk5vYVNLdmt1ejRRZXhwczhKZ1llNjVsSVF1a1lCNWVTY2I5MFwiLFxuICAgICAgfSxcbiAgICBdLFxuXG4gICAgLy8gR29vZ2xlIEZvbnRzOiBVYnVudHVcbiAgICBbXG4gICAgICBcImxpbmtcIixcbiAgICAgIHtcbiAgICAgICAgcmVsOiBcInN0eWxlc2hlZXRcIixcbiAgICAgICAgaHJlZjogXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVVidW50dTppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MCw1MDA7MCw3MDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw3MDAmZGlzcGxheT1zd2FwXCIsXG4gICAgICB9LFxuICAgIF0sXG4gIF0sXG5cbiAgdGhlbWUsXG5cbiAgcGx1Z2luczogW1xuICAgIGdvb2dsZUFuYWx5dGljc1BsdWdpbih7XG4gICAgICBpZDogXCJHLTEwM0gwNVc4UDhcIixcbiAgICB9KSxcbiAgXSxcbn0pOyIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzovVXNlcnMvam9zZWx1aXNncy9Qcm9qZWN0cy9qb3NlbHVpc2dzL3dlYi5udWV2YS9zcmMvLnZ1ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxqb3NlbHVpc2dzXFxcXFByb2plY3RzXFxcXGpvc2VsdWlzZ3NcXFxcd2ViLm51ZXZhXFxcXHNyY1xcXFwudnVlcHJlc3NcXFxcdGhlbWUudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL2pvc2VsdWlzZ3MvUHJvamVjdHMvam9zZWx1aXNncy93ZWIubnVldmEvc3JjLy52dWVwcmVzcy90aGVtZS50c1wiO2ltcG9ydCB7IGhvcGVUaGVtZSB9IGZyb20gXCJ2dWVwcmVzcy10aGVtZS1ob3BlXCI7XG5cbmltcG9ydCBuYXZiYXIgZnJvbSBcIi4vbmF2YmFyLmpzXCI7XG5pbXBvcnQgc2lkZWJhciBmcm9tIFwiLi9zaWRlYmFyLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGhvcGVUaGVtZSh7XG4gIGhvc3RuYW1lOiBcImh0dHBzOi8vam9zZWx1aXNncy5kZXZcIixcblxuICBmdWxsc2NyZWVuOiB0cnVlLFxuICBwcmludDogdHJ1ZSxcblxuICBsb2dvOiBcIi9pbWcvbG9nby5wbmdcIixcblxuICBhdXRob3I6IHtcbiAgICBuYW1lOiBcIkpvc1x1MDBFOSBMdWlzIEdvbnpcdTAwRTFsZXogU1x1MDBFMW5jaGV6XCIsXG4gICAgdXJsOiBcImh0dHBzOi8vam9zZWx1aXNncy5kZXZcIixcbiAgfSxcblxuICBkb2NzRGlyOiBcInNyY1wiLFxuXG4gIC8vIG5hdmJhclxuICBuYXZiYXIsXG5cbiAgLy8gc2lkZWJhclxuICBzaWRlYmFyLFxuXG4gIGZvb3RlcjogYFxuICAgIDxkaXYgY2xhc3M9XCJmb290ZXItd3JhcHBlclwiPlxuICAgICAgPHNwYW4+XG4gICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtY29kZVwiPjwvaT5cbiAgICAgICAgPGEgaHJlZj1cIi9kb2NzL2luZm8vcGVyc29uYWwvXCI+Sm9zXHUwMEU5IEx1aXMgR29uelx1MDBFMWxleiBTXHUwMEUxbmNoZXo8L2E+ICZjb3B5OyAke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX1cbiAgICAgIDwvc3Bhbj5cbiAgICAgICZuYnNwOyZuYnNwO1xuICAgICAgPHNwYW4+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vam9zZWx1aXNnc1wiIHRhcmdldD1cIl9ibGFua1wiPjxpIGNsYXNzPVwiZmEtYnJhbmRzIGZhLWdpdGh1YlwiPjwvaT48L2E+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3guY29tL0pvc2VMdWlzR1NEZXZcIiB0YXJnZXQ9XCJfYmxhbmtcIj48aSBjbGFzcz1cImZhLWJyYW5kcyBmYS14LXR3aXR0ZXJcIj48L2k+PC9hPlxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2pvc2VsdWlzZ3NkZXZcIiB0YXJnZXQ9XCJfYmxhbmtcIj48aSBjbGFzcz1cImZhLWJyYW5kcyBmYS1saW5rZWRpblwiPjwvaT48L2E+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2pvc2VsdWlzZ3MuZGV2XCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGkgY2xhc3M9XCJmYS1icmFuZHMgZmEtaW5zdGFncmFtXCI+PC9pPjwvYT5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL0Bqb3NlbHVpc2dzXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGkgY2xhc3M9XCJmYS1icmFuZHMgZmEteW91dHViZVwiPjwvaT48L2E+XG4gICAgICA8L3NwYW4+XG4gICAgICAmbmJzcDsmbmJzcDtcbiAgICAgIDxzcGFuPlxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly92dWVqcy5vcmcvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGkgY2xhc3M9XCJmYS1icmFuZHMgZmEtdnVlanNcIj48L2k+PC9hPlxuICAgICAgICAvXG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3Z1ZXByZXNzLnZ1ZWpzLm9yZy9cIiB0YXJnZXQ9XCJfYmxhbmtcIj48aSBjbGFzcz1cImZhLWJyYW5kcyBmYS1tYXJrZG93blwiPjwvaT48L2E+XG4gICAgICA8L3NwYW4+XG4gICAgICAmbmJzcDsmbmJzcDtcbiAgICAgIDxzcGFuPlxuICAgICAgICA8YSBocmVmPVwiL2RvY3MvbGVnYWwvXCI+PGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1jb29raWUtYml0ZVwiPjwvaT48L2E+XG4gICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG4gIGAsXG5cbiAgY29weXJpZ2h0OiBmYWxzZSxcblxuICBkaXNwbGF5Rm9vdGVyOiB0cnVlLFxuXG5ibG9nOiB7XG4gICAgYXZhdGFyOiBcIi9pbWcvYXZhdGFyLnBuZ1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBoRCAtIFByb2Zlc29yIC0gSW52ZXN0aWdhZG9yIC0gRGVzYXJyb2xsYWRvclwiLFxuICAgIGludHJvOiBcIi9pbnRyby5odG1sXCIsXG4gICAgbWVkaWFzOiB7XG4gICAgICBHaXRIdWI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2pvc2VsdWlzZ3NcIixcbiAgICAgIFR3aXR0ZXI6IFwiaHR0cHM6Ly94LmNvbS9Kb3NlTHVpc0dTRGV2XCIsXG4gICAgICBMaW5rZWRpbjogXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vam9zZWx1aXNnc2RldlwiLFxuICAgICAgSW5zdGFncmFtOiBcImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vam9zZWx1aXNncy5kZXZcIixcbiAgICAgIFlvdXR1YmU6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vQGpvc2VsdWlzZ3NcIixcbiAgICB9LFxuICB9LFxuXG4gIG1ldGFMb2NhbGVzOiB7XG4gICAgZWRpdExpbms6IFwiRWRpdCB0aGlzIHBhZ2Ugb24gR2l0SHViXCIsXG4gIH0sXG5cbiAgbWFya2Rvd246IHtcbiAgICBhbGlnbjogdHJ1ZSxcbiAgICBhdHRyczogdHJ1ZSxcbiAgICBjb2RlVGFiczogdHJ1ZSxcbiAgICBjb21wb25lbnQ6IHRydWUsXG4gICAgZGVtbzogdHJ1ZSxcbiAgICBmaWd1cmU6IHRydWUsXG4gICAgaW1nTGF6eWxvYWQ6IHRydWUsXG4gICAgaW1nU2l6ZTogdHJ1ZSxcbiAgICBpbmNsdWRlOiB0cnVlLFxuICAgIG1hcms6IHRydWUsXG4gICAgbWVybWFpZDogdHJ1ZSxcbiAgICBwbGFudHVtbDogdHJ1ZSxcbiAgICBzcG9pbGVyOiB0cnVlLFxuICAgIHN0eWxpemU6IFtcbiAgICAgIHtcbiAgICAgICAgbWF0Y2hlcjogXCJSZWNvbW1lbmRlZFwiLFxuICAgICAgICByZXBsYWNlcjogKHsgdGFnIH0pID0+IHtcbiAgICAgICAgICBpZiAodGFnID09PSBcImVtXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHRhZzogXCJCYWRnZVwiLFxuICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRpcFwiIH0sXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IFwiUmVjb21tZW5kZWRcIixcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBdLFxuICAgIHN1YjogdHJ1ZSxcbiAgICBzdXA6IHRydWUsXG4gICAgdGFiczogdHJ1ZSxcbiAgICB2UHJlOiB0cnVlLFxuICB9LFxuXG4gIHBsdWdpbnM6IHtcbiAgICBjb3B5cmlnaHQ6IHRydWUsXG5cbiAgICBzbGltc2VhcmNoOiB0cnVlLFxuXG4gICAgYmxvZzogdHJ1ZSxcblxuICAgIGNvbW1lbnQ6IHtcbiAgICAgIHByb3ZpZGVyOiBcIkdpc2N1c1wiLFxuICAgICAgcmVwbzogXCJqb3NlbHVpc2dzL2pvc2VsdWlzZ3MuZ2l0aHViLmlvXCIsXG4gICAgICByZXBvSWQ6IFwiTURFd09sSmxjRzl6YVhSdmNua3pNamczTnpRNE9UVT1cIixcbiAgICAgIGNhdGVnb3J5OiBcIkdlbmVyYWxcIixcbiAgICAgIGNhdGVnb3J5SWQ6IFwiRElDX2t3RE9FNWkwNzg0Q1RVUG1cIixcbiAgICB9LFxuXG4gICAgY29tcG9uZW50czoge1xuICAgICAgY29tcG9uZW50czogW1wiQmFkZ2VcIiwgXCJWUENhcmRcIl0sXG4gICAgfSxcblxuICAgIGljb246IHtcbiAgICAgIGFzc2V0czogXCJmb250YXdlc29tZS13aXRoLWJyYW5kc1wiLFxuICAgIH0sXG5cbiAgICBmZWVkOiB7XG4gICAgICByc3M6IHRydWUsXG4gICAgICBob3N0bmFtZTogXCJodHRwczovL2pvc2VsdWlzZ3MuZGV2XCIsXG4gICAgfSxcblxuICAgIHNpdGVtYXA6IHtcbiAgICAgIGhvc3RuYW1lOiBcImh0dHBzOi8vam9zZWx1aXNncy5kZXZcIixcbiAgICB9LFxuICB9LFxuXG4gIHNlbzoge1xuICAgIGRlZmF1bHRfaW1hZ2U6IFwiL2ltZy93ZWItc29jaWFsLnBuZ1wiLFxuICAgIHR3aXR0ZXJVc2VybmFtZTogXCJASm9zZUx1aXNHU0RldlwiLFxuICB9LFxufSk7IiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOi9Vc2Vycy9qb3NlbHVpc2dzL1Byb2plY3RzL2pvc2VsdWlzZ3Mvd2ViLm51ZXZhL3NyYy8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGpvc2VsdWlzZ3NcXFxcUHJvamVjdHNcXFxcam9zZWx1aXNnc1xcXFx3ZWIubnVldmFcXFxcc3JjXFxcXC52dWVwcmVzc1xcXFxuYXZiYXIudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL2pvc2VsdWlzZ3MvUHJvamVjdHMvam9zZWx1aXNncy93ZWIubnVldmEvc3JjLy52dWVwcmVzcy9uYXZiYXIudHNcIjtpbXBvcnQgeyBuYXZiYXIgfSBmcm9tIFwidnVlcHJlc3MtdGhlbWUtaG9wZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBuYXZiYXIoW1xuICBcIi9cIixcbiAge1xuICAgIHRleHQ6IFwiSW5mb1wiLFxuICAgIGljb246IFwiY2lyY2xlLWluZm9cIixcbiAgICBjaGlsZHJlbjogW1xuICAgICAgeyB0ZXh0OiBcIlBlcnNvbmFsXCIsIGxpbms6IFwiL2RvY3MvaW5mby9wZXJzb25hbC9cIiwgaWNvbjogXCJhZGRyZXNzLWNhcmRcIiB9LFxuICAgICAgeyB0ZXh0OiBcIkludmVzdGlnYWNpXHUwMEYzblwiLCBsaW5rOiBcIi9kb2NzL2luZm8vaW52ZXN0aWdhY2lvbi9cIiwgaWNvbjogXCJmbGFza1wiIH0sXG4gICAgXSxcbiAgfSxcbiAgeyB0ZXh0OiBcIkRvY2VuY2lhXCIsIGxpbms6IFwiL2RvY3MvZG9jZW5jaWEvXCIsIGljb246IFwiY2hhbGtib2FyZC11c2VyXCIgfSxcbiAgeyB0ZXh0OiBcIlByb3llY3Rvc1wiLCBsaW5rOiBcIi9kb2NzL3Byb3llY3Rvcy9cIiwgaWNvbjogXCJkaWFncmFtLXByb2plY3RcIiB9LFxuICB7XG4gICAgdGV4dDogXCJDb250YWN0b1wiLFxuICAgIGljb246IFwiZW52ZWxvcGVcIixcbiAgICBjaGlsZHJlbjogW1xuICAgICAgeyB0ZXh0OiBcIkF5dWRhXCIsIGxpbms6IFwiaHR0cHM6Ly9mb3Jtcy5nbGUvVjJtNDJxaVcxczZYNG9OdDhcIiwgaWNvbjogXCJjaXJjbGUtcXVlc3Rpb25cIiB9LFxuICAgICAgeyB0ZXh0OiBcIlhcIiwgbGluazogXCJodHRwczovL3guY29tL0pvc2VMdWlzR1NEZXZcIiwgaWNvbjogXCJmYS1icmFuZHMgZmEteC10d2l0dGVyXCIgfSxcbiAgICAgIHsgdGV4dDogXCJMaW5rZWRJblwiLCBsaW5rOiBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9qb3NlbHVpc2dzZGV2XCIsIGljb246IFwiZmEtYnJhbmRzIGZhLWxpbmtlZGluXCIgfSxcbiAgICAgIHsgdGV4dDogXCJJbnN0YWdyYW1cIiwgbGluazogXCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2pvc2VsdWlzZ3MuZGV2XCIsIGljb246IFwiZmEtYnJhbmRzIGZhLWluc3RhZ3JhbVwiIH0sXG4gICAgICB7IHRleHQ6IFwiWW91VHViZVwiLCBsaW5rOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL0Bqb3NlbHVpc2dzXCIsIGljb246IFwiZmEtYnJhbmRzIGZhLXlvdXR1YmVcIiB9LFxuICAgIF0sXG4gIH0sXG5dKTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzovVXNlcnMvam9zZWx1aXNncy9Qcm9qZWN0cy9qb3NlbHVpc2dzL3dlYi5udWV2YS9zcmMvLnZ1ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxqb3NlbHVpc2dzXFxcXFByb2plY3RzXFxcXGpvc2VsdWlzZ3NcXFxcd2ViLm51ZXZhXFxcXHNyY1xcXFwudnVlcHJlc3NcXFxcc2lkZWJhci50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvam9zZWx1aXNncy9Qcm9qZWN0cy9qb3NlbHVpc2dzL3dlYi5udWV2YS9zcmMvLnZ1ZXByZXNzL3NpZGViYXIudHNcIjtpbXBvcnQgeyBzaWRlYmFyIH0gZnJvbSBcInZ1ZXByZXNzLXRoZW1lLWhvcGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgc2lkZWJhcih7XG4gIFwiL1wiOiBbXG4gICAge1xuICAgICAgdGV4dDogXCJJbmZvXCIsXG4gICAgICBpY29uOiBcImNpcmNsZS1pbmZvXCIsXG4gICAgICBwcmVmaXg6IFwiZG9jcy9pbmZvL1wiLFxuICAgICAgY2hpbGRyZW46IFwic3RydWN0dXJlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiBcIkRvY2VuY2lhXCIsXG4gICAgICBpY29uOiBcImNoYWxrYm9hcmQtdXNlclwiLFxuICAgICAgcHJlZml4OiBcImRvY3MvZG9jZW5jaWEvXCIsXG4gICAgICBjaGlsZHJlbjogXCJzdHJ1Y3R1cmVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6IFwiUHJveWVjdG9zXCIsXG4gICAgICBpY29uOiBcImRpYWdyYW0tcHJvamVjdFwiLFxuICAgICAgcHJlZml4OiBcImRvY3MvcHJveWVjdG9zL1wiLFxuICAgICAgY2hpbGRyZW46IFwic3RydWN0dXJlXCIsXG4gICAgfSxcbiAgXSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE4VyxTQUFTLHdCQUF3QjtBQUMvWSxTQUFTLDZCQUE2Qjs7O0FDRHNVLFNBQVMsaUJBQWlCOzs7QUNBeEIsU0FBUyxjQUFjO0FBRXJZLElBQU8saUJBQVEsT0FBTztBQUFBLEVBQ3BCO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sVUFBVTtBQUFBLE1BQ1IsRUFBRSxNQUFNLFlBQVksTUFBTSx3QkFBd0IsTUFBTSxlQUFlO0FBQUEsTUFDdkUsRUFBRSxNQUFNLG9CQUFpQixNQUFNLDZCQUE2QixNQUFNLFFBQVE7QUFBQSxJQUM1RTtBQUFBLEVBQ0Y7QUFBQSxFQUNBLEVBQUUsTUFBTSxZQUFZLE1BQU0sbUJBQW1CLE1BQU0sa0JBQWtCO0FBQUEsRUFDckUsRUFBRSxNQUFNLGFBQWEsTUFBTSxvQkFBb0IsTUFBTSxrQkFBa0I7QUFBQSxFQUN2RTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sVUFBVTtBQUFBLE1BQ1IsRUFBRSxNQUFNLFNBQVMsTUFBTSx1Q0FBdUMsTUFBTSxrQkFBa0I7QUFBQSxNQUN0RixFQUFFLE1BQU0sS0FBSyxNQUFNLCtCQUErQixNQUFNLHlCQUF5QjtBQUFBLE1BQ2pGLEVBQUUsTUFBTSxZQUFZLE1BQU0sNkNBQTZDLE1BQU0sd0JBQXdCO0FBQUEsTUFDckcsRUFBRSxNQUFNLGFBQWEsTUFBTSw0Q0FBNEMsTUFBTSx5QkFBeUI7QUFBQSxNQUN0RyxFQUFFLE1BQU0sV0FBVyxNQUFNLHVDQUF1QyxNQUFNLHVCQUF1QjtBQUFBLElB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

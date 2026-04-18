import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: 'https://joseluisgs.dev',

  fullscreen: true,
  print: true,

  logo: '/img/logo.png',

  author: {
    name: 'José Luis González Sánchez',
    url: 'https://joseluisgs.dev',
  },

  docsDir: 'src',

  // navbar
  navbar,

  // sidebar
  sidebar,

  footer: `
    <div class="footer-wrapper">
      <div class="footer-author">
        <i class="fa-solid fa-code"></i>
        <a href="/info/personal">José Luis González Sánchez</a> &copy; ${new Date().getFullYear()}
      </div>
      <div class="footer-icons">
        <div class="footer-group socials">
          <a href="https://github.com/joseluisgs" target="_blank"><i class="fa-brands fa-github"></i></a>
          <a href="https://x.com/JoseLuisGSDev" target="_blank"><i class="fa-brands fa-x-twitter"></i></a>
          <a href="https://www.linkedin.com/in/joseluisgsdev" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
          <a href="https://www.instagram.com/joseluisgs.dev" target="_blank"><i class="fa-brands fa-instagram"></i></a>
          <a href="https://www.youtube.com/@joseluisgs" target="_blank"><i class="fa-brands fa-youtube"></i></a>
        </div>
        <div class="footer-group tech">
          <a href="https://vuejs.org/" target="_blank"><i class="fa-brands fa-vuejs"></i></a>
          /
          <a href="https://vuepress.vuejs.org/" target="_blank"><i class="fa-brands fa-markdown"></i></a>
          <a href="/info/legal"><i class="fa-solid fa-cookie-bite"></i></a>
        </div>
      </div>
    </div>
  `,

  copyright: false,

  displayFooter: true,

  blog: {
    avatar: '/img/avatar.png',
    description: 'PhD - Profesor<br>Investigador - Desarrollador',
    intro: '/info/personal',
    medias: {
      GitHub: 'https://github.com/joseluisgs',
      Twitter: 'https://x.com/JoseLuisGSDev',
      Linkedin: 'https://www.linkedin.com/in/joseluisgsdev',
      Instagram: 'https://www.instagram.com/joseluisgs.dev',
      Youtube: 'https://www.youtube.com/@joseluisgs',
    },
  },

  metaLocales: {
    editLink: 'Edit this page on GitHub',
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
        matcher: 'Recommended',
        replacer: ({ tag }) => {
          if (tag === 'em') {
            return {
              tag: 'Badge',
              attrs: { type: 'tip' },
              content: 'Recommended',
            };
          }
        },
      },
    ],
    sub: true,
    sup: true,
    tabs: true,
    vPre: true,
  },

  plugins: {
    copyright: true,

    slimsearch: {
      indexContent: false,
      filter: (page) => !page.path.startsWith("/samples/"),
      hotKeys: [
        { key: 'k', ctrl: true },
        { key: '/', ctrl: false },
      ],
      customFields: [
        {
          getter: (page) => page.title,
          formatter: 'Buscar en: [[title]]',
        },
      ],
    },

    blog: {
      filter: (page) => {
        if (page.path.startsWith('/samples/')) return false;
        return page.frontmatter.article ?? (Boolean(page.filePathRelative) && !page.frontmatter.home);
      },
    },

    comment: {
      provider: 'Giscus',
      repo: 'joseluisgs/joseluisgs.github.io',
      repoId: 'MDEwOlJlcG9zaXRvcnkzMjg3NzQ4OTU=',
      category: 'General',
      categoryId: 'DIC_kwDOE5i0784CTUPm',
    },

    components: {
      components: ['Badge', 'VPCard'],
    },

    icon: {
      assets: 'fontawesome-with-brands',
    },

    pwa: {
      favicon: "/favicon.png",
      cacheHTML: true,
      cachePic: true,
      appendBase: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
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
                type: "image/png",
              },
            ],
          },
        ],
      },
    },

    feed: {
      rss: true,
      atom: true,
      json: true,
      hostname: 'https://joseluisgs.dev',
      author: {
        name: 'José Luis González Sánchez',
        email: 'joseluis@joseluisgs.dev',
      },
    },

    sitemap: {
      hostname: 'https://joseluisgs.dev',
      changefreq: 'weekly',
      priority: 0.8,
      excludePaths: ["/404.html", "/samples/"],
    },
  },

  seo: {
    hostname: "https://joseluisgs.dev",
    author: "José Luis González Sánchez",
    twitterID: "JoseLuisGSDev",
    canonical: (page) => `https://joseluisgs.dev${page.path}`,
    default_image: '/img/web-social.png',
    twitterUsername: '@JoseLuisGSDev',
  },
});
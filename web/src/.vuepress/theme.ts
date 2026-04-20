import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: 'https://joseluisgs.dev',

  fullscreen: true,
  print: true,

  logo: '/img/logo.webp',

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
        <i class="fa-solid fa-code" aria-hidden="true"></i>
        <a href="/info/personal" aria-label="Sobre José Luis González Sánchez">José Luis González Sánchez</a> &copy; ${new Date().getFullYear()}
      </div>
      <div class="footer-icons">
        <div class="footer-group socials">
          <a href="https://github.com/joseluisgs" target="_blank" rel="noopener noreferrer" aria-label="GitHub de José Luis González Sánchez"><i class="fa-brands fa-github"></i></a>
          <a href="https://x.com/JoseLuisGSDev" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter) de José Luis González Sánchez"><i class="fa-brands fa-x-twitter"></i></a>
          <a href="https://www.linkedin.com/in/joseluisgsdev" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de José Luis González Sánchez"><i class="fa-brands fa-linkedin"></i></a>
          <a href="https://www.instagram.com/joseluisgs.dev" target="_blank" rel="noopener noreferrer" aria-label="Instagram de José Luis González Sánchez"><i class="fa-brands fa-instagram"></i></a>
          <a href="https://www.youtube.com/@joseluisgs" target="_blank" rel="noopener noreferrer" aria-label="YouTube de José Luis González Sánchez"><i class="fa-brands fa-youtube"></i></a>
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
    avatar: '/img/avatar.webp',
    description:
      'PhD - Profesor<br>Kotlin Trainer Certified by JetBrains<br>GitHub Campus Advisor<br><br><i class="fa-solid fa-location-dot"></i> I.E.S. Luis Vives, Leganés, Madrid',
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

    docsearch: {
      appId: 'FAAIQ0MAJO',
      apiKey: '5ca491da0aeaa904f8e03bcdbfa497bc',
      indexName: 'joseluisgs_dev_faaiq0majo_pages',
      searchParameters: {
        facetFilters: [],
      },
      locales: {
        "/": {
          placeholder: "Buscar",
          translations: {
            button: { buttonText: "Buscar" },
          },
        },
      },
    },

    blog: {
      filter: (page) => {
        return (
          page.frontmatter.article ?? (Boolean(page.filePathRelative) && !page.frontmatter.home)
        );
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
      components: ['Badge', 'VPCard', 'PDF', 'VidStack', 'SiteInfo'],
    },

    icon: {
      assets: 'fontawesome-with-brands',
    },

    pwa: {
      favicon: '/assets/icon/favicon-32x32.webp',
      cacheHTML: true,
      cachePic: true,
      appendBase: true,
      apple: {
        icon: '/assets/icon/apple-icon-180-180x180.png',
        statusBarColor: 'black',
      },
      msTile: {
        image: '/assets/icon/chrome-192-192x192.png',
        color: '#ffffff',
      },
      manifest: {
        icons: [
          {
            src: '/assets/icon/chrome-512-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/assets/icon/chrome-192-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
        ],
        shortcuts: [
          {
            name: 'Docencia',
            short_name: 'Docencia',
            url: '/info/docencia',
            icons: [
              {
                src: '/assets/icon/guide-maskable.png',
                sizes: '192x192',
                purpose: 'maskable',
                type: 'image/png',
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
      excludePaths: ['/404.html', '/samples/'],
    },
  },

  seo: {
    hostname: 'https://joseluisgs.dev',
    author: 'José Luis González Sánchez',
    twitterID: 'JoseLuisGSDev',
    canonical: (page) => `https://joseluisgs.dev${page.path}`,
    default_image: '/img/web-social.png',
    twitterUsername: '@JoseLuisGSDev',
  },
});
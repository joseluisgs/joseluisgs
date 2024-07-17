// web del tema
// https://vuepress-theme-reco.recoluan.com/en/
// iconos: https://vuepress-theme-reco.recoluan.com/en/views/1.x/configJs.html#icon

module.exports = {
  // Datos del sitio web
  title: 'José Luis González',
  description: 'Web personal de José Luis González Sánchez',
  dest: 'public',

  // Head y metadatos
  head: [
    ['link', { rel: 'icon', href: 'favicon.png' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ['meta', { name: 'author', content: 'José Luis González Sánchez' }],
    ['meta', { name: 'application-name', content: 'José Luis González Sánchez. Web Personal' }],
    [
      'meta',
      {
        name: 'keywords',
        content:
          'José Luis González Sánchez, Profesor, Formador, Desarrollador, Investigador, Desarrollo de Aplicaciones, Web, Multiplataforma, FP, Formación Profesional, Kotlin, Trainer, Certificación, Jetbrains, Embajador, GIT, GitKraken, Vuejs, móvil, jetbrains, intellij, hyperskill, docker, mongodb, nodejs, node, android, compose, backend, java, spring, springboot, instituto, test, pruebas, calidad, Luis Vives, Leganés, Madrid, Universidad de Granada, Jugabilidad, Videojuegos',
      },
    ],

    // Google Search
    [
      'meta',
      { name: 'google-site-verification', content: '6faOYM6NoaSKvkuz4Qexps8JgYe65lIQukYB5eScb90' },
    ],

    // Google analytics
    [
      'script',
      {
        async: true,
        src: 'https://www.googletagmanager.com/gtag/js?id=G-103H05W8P8',
      },
    ],

    // Se pone la ` para poder escribir en varias líenas
    [
      'script',
      {},
      `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
      
          gtag('config', 'G-103H05W8P8');
    `,
    ],

    // Iconify
    [
      'script',
      {
        async: true,
        src: 'https://code.iconify.design/2/2.2.1/iconify.min.js',
      },
    ],

    // Giscus
    [
      'script',
      {
        type: 'module',
        async: true,
        src: 'https://unpkg.com/giscus?module',
      },
    ],
  ],

  // Configuración del tema
  theme: 'reco',
  // Idioma
  locales: {
    '/': {
      lang: 'es-ES',
    },
  },

  themeConfig: {
    // Navegación
    nav: [
      { text: 'Home', link: '/', icon: 'reco-home' },

      {
        text: 'Info',
        icon: 'reco-account',
        items: [
          { text: 'Personal', link: '/docs/info/personal/', icon: 'reco-theme' },
          { text: 'Investigación', link: '/docs/info/investigacion/', icon: 'reco-blog' },
        ],
      },

      { text: 'Docencia', link: '/docs/docencia/', icon: 'reco-suggestion' }, // reco-blog reco-other
      { text: 'Proyectos', link: '/docs/proyectos/', icon: 'reco-api' },
      { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },

      {
        text: 'Contacto',
        icon: 'reco-message',
        items: [
          { text: 'Ayuda', link: 'https://forms.gle/V2m42qiW1s6X4oNt8', icon: 'mdi:help-circle' },
          { text: 'GitHub', link: 'https://github.com/joseluisgs', icon: 'mdi:github' },
          { text: 'Twitter', link: 'https://twitter.com/JoseLuisGS_', icon: 'mdi:twitter' },
          {
            text: 'LinkedIn',
            link: 'https://www.linkedin.com/in/joseluisgonsan',
            icon: 'mdi:linkedin',
          },
          { text: 'Google Dev', link: 'https://g.dev/joseluisgs', icon: 'raphael:code' },
          {
            text: 'YouTube',
            link: 'https://www.youtube.com/@joseluisgs',
            icon: 'mdi:youtube',
          },
        ],
      },
    ],

    // Sidebars propios ya sean simples o en grupo
    sidebar: {
      '/info/personal/': ['', 'formacion', 'tecnologias'],
      '/info/investigacion/': [
        '',
        //'formacion',
        'tesis',
      ],
    },

    // Configuración del blog, si no se pone que es del tipo blog, por defecto es doc
    type: 'blog',
    // Muestra la barra de navegación al lado de las entradas que las necesiten
    subSidebar: 'auto',
    // Blog configuration
    blogConfig: {
      category: {
        location: 5, // The position occupied in the navigation bar menu, default to 2
        text: 'Categorías', // Text default to "Category"
      },
      tag: {
        location: 6, // The position occupied in the navigation bar menu, default to 3
        text: 'Etiquetas', // Text default to "Tag"
      },
      socialLinks: [
        // Information bar displays social information
        { icon: 'mdi:github', link: 'https://github.com/joseluisgs', color: '#fffff' },
        { icon: 'mdi:twitter', link: 'https://twitter.com/JoseLuisGS_', color: '#1DA1F2' },
        {
          icon: 'mdi:linkedin',
          link: 'https://www.linkedin.com/in/joseluisgonsan',
          color: '#0077B5',
        },
        { icon: 'raphael:code', link: 'https://g.dev/joseluisgs', color: '#e81055' },
        {
          icon: 'mdi:youtube',
          link: 'https://www.youtube.com/@joseluisgs',
          color: '#E62117',
        },
      ],
    },

    // Otros enlaces de webs amigas
    friendLink: [
      {
        title: 'IES Luis Vives',
        desc: 'Instituto de Educación Secundaria Luis Vives, Leganés.',
        email: 'ies.luisvives.leganes@educa.madrid.org',
        link: 'https://iesluisvives.es',
        logo: 'https://www.iesluisvives.es/Design/Themes/IESluisvivies/Images/logo.png',
      },
      {
        title: 'CIFP Virgen de Gracia',
        desc: 'Centro Integrado de Formación Profesional Virgen de Gracia, Puertollano.',
        email: 'info@cifpvirgendegracia.com',
        link: 'https://cifpvirgendegracia.com',
        logo: 'https://cifpvirgendegracia.com/wp-content/uploads/2019/11/LogoIcon.png',
      },
      {
        title: 'Kotlin',
        desc: 'Página web de Kotlin by Jetbrains ',
        link: 'https://kotlinlang.org/',
        logo: 'https://cdn.worldvectorlogo.com/logos/kotlin-2.svg',
      },
      {
        title: 'GitHub',
        desc: 'Página web de GitHub. ',
        link: 'https://github.com',
        logo: 'https://cdn.worldvectorlogo.com/logos/github-icon-1.svg',
      },
      {
        title: 'GitKraken',
        desc: 'El mejor cliente para Git y GitHub.',
        link: 'https://www.gitkraken.com/',
        logo: 'https://cdn.worldvectorlogo.com/logos/gitkraken.svg',
      },
      {
        title: 'Jetbrains Academy',
        desc: 'El mejor lugar para aprender programación.',
        link: 'https://www.jetbrains.com/es-es/academy/',
        logo: 'https://cdn.worldvectorlogo.com/logos/jetbrains-1.svg',
      },
      {
        title: 'Hyperskill',
        desc: 'Todo lo que necesitea aprender está aquí.',
        link: 'https://hyperskill.org/tracks/',
        logo: 'https://styles.redditmedia.com/t5_16kxt3/styles/communityIcon_whsnivfzm6ha1.png',
      },
      {
        title: 'Tabnine',
        desc: 'Mejora la productividad en tu código.',
        link: 'https://www.tabnine.com/',
        logo: 'https://avatars.githubusercontent.com/u/73937337?s=280&v=4',
      },
      {
        title: 'DevExperto',
        desc: 'El mejor lugar para aprender Android.',
        link: 'https://devexperto.com/',
        logo: 'https://static-1.ivoox.com/canales/6/4/6/8/5351456308646_XXL.jpg',
      },
      {
        title: 'KotlinExpert',
        desc: 'El mejor lugar para aprender Kotlin.',
        link: 'https://kotlinexpert.com/',
        logo: 'https://github.com/joseluisgs/KotlinExpert/raw/main/images/logo-grande-png.png',
      },
      {
        title: 'Escuela Vue',
        desc: 'El mejor lugar para aprender Vue.js.',
        link: 'https://escuelavue.es/',
        logo: 'https://pbs.twimg.com/profile_images/1231637295687720960/GX8p-Q-a_400x400.jpg',
      },
    ],
    // Sidebars propios ya sean simples o en grupo
    sidebar: {
      '/docs/info/personal/': ['', 'formacion', 'tecnologias'],
      '/docs/info/investigacion/': [
        '',
        //'formacion',
        'tesis',
      ],
    },

    logo: '/img/logo.png',
    search: true,
    searchMaxSuggestions: 10,
    noFoundPageByTencent: false,
    lastUpdated: 'Actualizado',
    author: 'José Luis González',
    authorAvatar: '/img/avatar.jpeg',
    titlePage: 'JoseLuisGS',
    record: 'v2.0',
    startYear: '2021',
    jobs: 'PhD - Profesor - Investigador - Desarrollador',
    jobsLine1: 'PhD - Profesor',
    jobsLine2: 'Investigador - Desarrollador',
    kotlin: 'Kotlin Trainer certified by Jetbrains',
    github: 'Github Campus Advisor',
    gitkraken: 'GitKraken Ambassador',
  },
  markdown: {
    lineNumbers: true,
  },

  // Plugins
  plugins: [
    // Plugin SEO
    // https://github.com/limdongjin/vuepress-plugin-simple-seo
    [
      '@limdongjin/vuepress-plugin-simple-seo',
      {
        default_image: '/img/web-social.png',
        root_url: 'https://joseluisgs.dev',
        default_site_name: 'José Luis González - Web',
        default_title: 'José Luis González - Web',
        default_description: 'Página web de José Luis González Sánchez, PhD.',
        default_image_type: 'image/png',
        default_twitter_card: 'summary_large_image',
        default_twitter_creator: '@JoseLuisGS_',
        twitter_site: '@JoseLuisGS_',
      },
    ],

    // Plugin SiteMap
    // https://github.com/ekoeryanto/vuepress-plugin-sitemap
    [
      'sitemap',
      {
        hostname: 'https://joseluisgs.dev/',
      },
    ],

    // Feed
    [
      '@vuepress-reco/vuepress-plugin-rss',
      {
        site_url: 'https://joseluisgs.dev',
        copyright: `Copyright © ${new Date().getFullYear()} José Luis González`,
        count: 10,
      },
    ],

    // Reading Time
    ['vuepress-plugin-reading-time'],
  ],
};

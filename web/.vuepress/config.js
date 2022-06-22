// web del tema
// https://vuepress-theme-reco.recoluan.com/en/
// iconos: https://vuepress-theme-reco.recoluan.com/en/views/1.x/configJs.html#icon

module.exports = {
  // Datos del sitio web
  "title": 'José Luis González',
  "description": 'Web personal de José Luis González Sánchez',
  "dest": "public",
  // Head y metadatos
  "head": [
    ['link', { rel: 'icon', href: '/img/favicon.png' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ['meta', { name: 'author', content: 'José Luis González Sánchez' }],
    ['meta', { name: 'application-name', content: 'José Luis González Sánchez. Web Personal' }],
    ['meta', { name: 'keywords', content: 'José Luis González Sánchez, Profesor, Formador, Desarrollador, Investigador, Desarrollo de Apliaciones, Web, Multiplataforma, FP, Formación Profesional, Kotlin, Trainer, Certificación, Jetbrains, Embajador, GIT, GitKraken, vuejs, vue, móvil, docker, mongodb, nodejs, node, kotlin, java, spring, springboot, Luis Vives, Leganes, Madrid, Universidad de Granada, Jugabilidad, Videojuegos' }],

    // Google Search
    ['meta', { name: 'google-site-verification', content: '6faOYM6NoaSKvkuz4Qexps8JgYe65lIQukYB5eScb90' }],

    // Google analytics
    ['script', {
      async: true,
      src: 'https://www.googletagmanager.com/gtag/js?id=G-103H05W8P8'
    }],

    // Se pone la ` para poder escribir en varias líenas
    ['script', {}, `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
      
          gtag('config', 'G-103H05W8P8');
    `],

    // Iconify
    ['script', {
      async: true,
      src: 'https://code.iconify.design/2/2.0.4/iconify.min.js'
    }],
  ],

  // Configuración del tema
  "theme": "reco",
  // Idioma
  locales: {
    '/': {
      lang: 'es-ES'
    },
  },

  "themeConfig": {



    // Navegación
    "nav": [
      { text: 'Home', link: '/', icon: 'reco-home' },

      {
        text: 'Info', icon: 'reco-account',
        items: [
          { text: 'Personal', link: '/docs/info/personal/', icon: 'reco-theme' },
          { text: 'Investigación', link: '/docs/info/investigacion/', icon: 'reco-blog' }
        ],
      },

      { text: 'Docencia', link: '/docs/docencia/', icon: 'reco-suggestion' }, // reco-blog reco-other 
      { text: 'Proyectos', link: '/docs/proyectos/', icon: 'reco-api' },
      { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },

      {
        text: 'Contacto', icon: 'reco-message',
        items: [
          { text: 'Ayuda', link: 'https://forms.gle/V2m42qiW1s6X4oNt8', icon: 'reco-faq' },
          { text: 'GitHub', link: 'https://github.com/joseluisgs', icon: 'reco-github' },
          { text: 'Twitter', link: 'https://twitter.com/joseluisgonsan', icon: 'reco-twitter' },
          { text: 'LinkedIn', link: 'https://www.linkedin.com/in/joseluisgonsan', icon: 'reco-linkedin' },
          { text: 'Discord', link: 'https://discordapp.com/users/joseluisgs#3560', icon: 'reco-wechat' },
        ],
      },
    ],

    // Sidebars propios ya sean simples o en grupo
    "sidebar": {
      '/info/personal/': [
        '',
        'formacion',
        'tecnologias',
      ],
      '/info/investigacion/': [
        '',
        //'formacion',
        'tesis',
      ],
    },

    // Configuración del blog, si no se pone que es del tipo blog, por defecto es doc
    "type": "blog",
    // Muestra la barra de navegación al lado de las entradas que las necesiten
    "subSidebar": 'auto',
    // Blog configuration
    "blogConfig": {
      category: {
        location: 5,     // The position occupied in the navigation bar menu, default to 2
        text: 'Categorías' // Text default to "Category"
      },
      tag: {
        location: 6,     // The position occupied in the navigation bar menu, default to 3
        text: 'Etiquetas'      // Text default to "Tag"
      },
      socialLinks: [     // Information bar displays social information
        { icon: 'reco-github', link: 'https://github.com/joseluisgs' },
        { icon: 'reco-twitter', link: 'https://twitter.com/joseluisgonsan' },
        { icon: 'reco-linkedin', link: 'https://www.linkedin.com/in/joseluisgonsan' },
        { icon: 'reco-wechat', link: 'https://discordapp.com/users/joseluisgs#3560' },
      ]
    },

    // Otros enlaces de webs amigas
    "friendLink": [
      {
        title: 'IES Luis Vives',
        desc: 'Instituto de Educación Secundaria Luis Vives, Leganés.',
        email: 'ies.luisvives.leganes@educa.madrid.org',
        link: 'https://iesluisvives.es'
      },
      {
        title: 'CIFP Virgen de Gracia',
        desc: 'Centro Integrado de Formación Profesional Virgen de Gracia, Puertollano.',
        email: 'info@cifpvirgendegracia.com',
        link: 'https://cifpvirgendegracia.com'
      },
      {
        title: 'Dpto. Informática y Comunicaciones',
        desc: 'Dpto. Inormática y Comunicaciones. CIFP Virgen de Gracia, Puertollano.',
        email: 'informatica@cifpvirgendegracia.com',
        link: 'https://informaticacifpvg.netlify.app/'
      },
      {
        title: 'Kotlin',
        desc: 'Página web de Kotlin by Jetbrains ',
        link: 'https://kotlinlang.org/'
      },
      {
        title: 'GitHub',
        desc: 'Página web de GitHub',
        link: 'https://github.com'
      },
      {
        title: 'GitKraken',
        desc: 'El mejor cliente para Git y GitHub',
        link: 'https://www.gitkraken.com/'
      },
      {
        title: 'Tabnine',
        desc: 'Mejora la productividad en tu código.',
        link: 'https://www.tabnine.com/'
      },
      {
        title: 'DevExperto',
        desc: 'El mejor lugar para aprender.',
        link: 'https://devexperto.com/'
      },
      {
        title: 'DevExperto',
        desc: 'El mejor lugar para aprender Android.',
        link: 'https://devexperto.com/'
      },
      {
        title: 'KotlinExpert',
        desc: 'El mejor lugar para aprender Kotlin.',
        link: 'https://kotlinexpert.com/'
      },
      {
        title: 'Escuela Vue',
        desc: 'El mejor lugar para aprender Vue.js.',
        link: 'https://escuelavue.es/'
      },
    ],
    // Sidebars propios ya sean simples o en grupo
    sidebar: {
      '/docs/info/personal/': [
        '',
        'formacion',
        'tecnologias',
      ],
      '/docs/info/investigacion/': [
        '',
        //'formacion',
        'tesis',
      ],
    },

    "logo": "/img/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "noFoundPageByTencent": false,
    "lastUpdated": "Actualizado",
    "author": "Jose Luis González",
    "authorAvatar": "/img/avatar.jpeg",
    "record": "v1.5",
    "startYear": "2021",
    "jobs": 'Profesor - Formador - Investigador - Desarrollador',
    "jobsLine1": 'Profesor - Formador',
    "jobsLine2": 'Investigador - Desarrollador',
  },
  "markdown": {
    "lineNumbers": true
  },

  // Plugins
  "plugins": [
    // Plugin SEO
    // https://github.com/limdongjin/vuepress-plugin-simple-seo
    ['@limdongjin/vuepress-plugin-simple-seo', {
      default_image: 'img/web01.png',
      root_url: 'https://joseluisgs.github.io',
      default_site_name: 'José Luis González',
    }],
  ]
}
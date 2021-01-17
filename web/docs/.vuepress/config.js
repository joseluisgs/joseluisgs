module.exports = {
  // Configuraciṕn general del módulo
  // Metadatos
  title: 'José Luis González',
  description: 'Web Personal de José Luis González',

  // Head y metadatos
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],

    // FontAwasome
    // ['script', {
    //   src: 'https://kit.fontawesome.com/46f8ac5714.js',
    //   crossorigin:'anonymous'
    // }],

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
  ],

  // Tema
  theme: 'reco',
  locales: {
    '/': {
      lang: 'es-ES'
    },
  },

  // Configuración del tema: https://vuepress-theme-reco.recoluan.com/en/
  themeConfig: {
    // Tipo de página, si no pones nada es documentación
    type: 'blog',
    // codeTheme: 'okaidia', // default 'tomorrow'
    // Configuraciones globales
    noFoundPageByTencent: false,
    // Barra de navegacion
    logo: '/favicon.png',
    
    // iconos: https://vuepress-theme-reco.recoluan.com/en/views/1.x/configJs.html#icon

    // Navegacion
    nav: [
      { text: 'Home', link: '/', icon: 'reco-home' },
      { text: 'Info', link: '/info/', icon: 'reco-account' },
      { text: 'Docencia', link: '/docencia/', icon: 'reco-suggestion' }, // reco-blog reco-other 
      { text: 'Proyectos', link: '/proyectos/', icon: 'reco-api' },
      { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },

      {
        text: 'Contacto', icon: 'reco-message',
        items: [
          { text: 'GitHub', link: 'https://github.com/joseluisgs', icon: 'reco-github' },
          { text: 'Twitter', link: 'https://twitter.com/joseluisgonsan', icon: 'reco-twitter' },
          { text: 'LinkedIn', link: 'https://www.linkedin.com/in/joseluisgonsan', icon: 'reco-linkedin' },
          // { text: 'Docker Hub', link: 'https://hub.docker.com/u/joseluisgs', icon: 'reco-juejin' },
        ],
      },
    ],

    // Otras opciones
    subSidebar: 'auto', //auto generate sidebar in all pages    
    // Buscador y otros
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: 'Actualizado', // Traducción

    // Datos del autor y versiones.
    authorAvatar: 'https://avatars0.githubusercontent.com/u/47913953?s=460&u=225a157fde1cb059c0541fd76f8230682b5cf130&v=4',
    author: 'José Luis González Sánchez',
    record: '1.0.0',
    startYear: '2021',
    jobs: 'Profesor | Formador | Investigador',

    // Blog configuration
    blogConfig: {
      category: {
        location: 5,     // The position occupied in the navigation bar menu, default to 2
        text: 'Category' // Text default to "Category"
      },
      tag: {
        location: 6,     // The position occupied in the navigation bar menu, default to 3
        text: 'Tag'      // Text default to "Tag"
      },
      socialLinks: [     // Information bar displays social information
        { icon: 'reco-github', link: 'https://github.com/joseluisgs' },
        { icon: 'reco-twitter', link: 'https://twitter.com/joseluisgonsan' },
        { icon: 'reco-linkedin', link: 'https://www.linkedin.com/in/joseluisgonsan' },
        // { icon: 'reco-juejin', link: 'https://hub.docker.com/u/joseluisgs' },
      ]
    },

    // Otros enlaces de webs amigas
    friendLink: [
      {
        title: 'CIFP Virgen de Gracia',
        desc: 'Centro Integrado de Formación Profesional Virgen de Gracia, Puertollano.',
        email: 'info@cifpvirgendegracia.com',
        link: 'https://cifpvirgendegracia.com'
      },
    ],

    // Sidebars propios ya sean simples o en grupo
    sidebar: {
      '/info/': [
        '',
        'tecnologias',
        'formacion',
      ],
      // '/sidebargroup/': [
      //   {
      //     title: '基础',
      //     collapsable: true,
      //     children: [
      //       '',
      //       'bar1'
      //     ]
      //   },
      //   {
      //     title: '进阶',
      //     collapsable: true,
      //     children: [
      //       'bar2'
      //     ]
      //   },
      // ]
    },
  },

  // Plugins
  plugins: [
    // Plugin de waku, el perro
    ['@vuepress-reco/vuepress-plugin-kan-ban-niang',
      {
        theme: ['wanko'],
        clean: true,
        // messages: {
        //   welcome: 'Hola Bienvenid@ a mi web',
        //   home: 'Hola, ¿qué tal?',
        //   theme: 'Espero que estés bien',
        //   close: '¡Nos vemos!'
        // },
        modelStyle: {
          right: '50px',
          bottom: '-50px',
          opacity: '0.9'
        }
      }
    ],
    // ['minimal-analytics', { ga: 'G-103H05W8P8' }],
    // ['@vuepress/google-analytics',
    //   {
    //     'ga': 'G-103H05W8P8' // UA-00000000-0
    //   }
    // ],
    // ['@vuepress-reco/vuepress-plugin-screenfull'],
    // ['@vuepress-reco/vuepress-plugin-extract-code'],
    // ['@vuepress-reco/vuepress-plugin-bulletin-popover',
    //   {
    //     body: [
    //       {
    //         type: 'title',
    //         content: 'Hola',
    //         style: 'text-aligin: center;'
    //       },
    //       {
    //         type: 'image',
    //         src: 'img/qr-code.png',
    //       }
    //     ],
    //     footer: [
    //       {
    //         type: 'button',
    //         text: '打赏',
    //         link: '/donate'
    //       },
    //       {
    //         type: 'button',
    //         text: '打赏',
    //         link: '/donate'
    //       }
    //     ]
    //   }
    // ],
  
  ],
}

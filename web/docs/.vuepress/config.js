module.exports = {
  // Metadatos
  title: 'José Luis González',
  description: 'Web Personal de José Luis González',
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ['meta', { name: 'google-site-verification', content: '6faOYM6NoaSKvkuz4Qexps8JgYe65lIQukYB5eScb90' }]
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
    // Tipo de pagna, si no pones nada es documentación
    type: 'blog',
    // codeTheme: 'okaidia', // default 'tomorrow'
    // Configuraciones globales
    noFoundPageByTencent: false,
    // Barra de navegacion
    logo: '/favicon.png',
    // iconos: https://vuepress-theme-reco.recoluan.com/en/views/1.x/configJs.html#icon
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
        ]
      },
    ],

    subSidebar: 'auto', //auto generate sidebar in all pages    
    // Buscador y otros
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: 'Actualizado',

    // autopr
    authorAvatar: 'https://avatars0.githubusercontent.com/u/47913953?s=460&u=225a157fde1cb059c0541fd76f8230682b5cf130&v=4',
    author: 'José Luis González Sánchez',
    record: '1.0.0',
    startYear: '2021',

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
        { icon: 'reco-docker', link: 'https://hub.docker.com/u/joseluisgs' },
      ]
    },

    // Otros enlaces
    friendLink: [
      {
        title: 'CIFP Virgen de Gracia',
        desc: 'Centro Integrado de Formación Profesional Virgen de Gracia, Puertollano.',
        email: 'info@cifpvirgendegracia.com',
        link: 'https://cifpvirgendegracia.com'
      },
    ],
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
    ['minimal-analytics', { ga: 'G-103H05W8P8' }],
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
  
  ],
}

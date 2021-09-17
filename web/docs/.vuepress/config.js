// Para compartir en likedin
const extendsNetworks = {
  linkedin: {
    sharer:
      'http://www.linkedin.com/shareArticle?mini=true&url=@url&title=@title&summary=@description',
    type: 'popup',
    color: '#1786b1',
    icon:
      '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M910.336 0H113.664A114.005333 114.005333 0 0 0 0 113.664v796.672A114.005333 114.005333 0 0 0 113.664 1024h796.672A114.005333 114.005333 0 0 0 1024 910.336V113.664A114.005333 114.005333 0 0 0 910.336 0zM352.256 796.330667H207.189333V375.466667h145.066667z m-72.021333-477.866667a77.824 77.824 0 0 1-81.237334-74.069333A77.824 77.824 0 0 1 280.234667 170.666667a77.824 77.824 0 0 1 81.237333 73.728 77.824 77.824 0 0 1-81.237333 73.386666z m582.314666 477.866667H716.8v-227.669334c0-46.762667-18.432-93.525333-73.045333-93.525333a84.992 84.992 0 0 0-81.237334 94.549333v226.304h-140.629333V375.466667h141.653333v60.757333a155.989333 155.989333 0 0 1 136.533334-71.338667c60.416 0 163.498667 30.378667 163.498666 194.901334z" /></svg>',
  },
};


module.exports = {
  // Configuraciṕn general del módulo
  // Metadatos
  title: 'José Luis González',
  description: 'Web personal de José Luis González Sánchez. Dr. en Informática. Profesor de Secundaria en FP de DAM/DAW/ASIR. GitHub Campus Advisor y embajador de GitKraken',

  // Head y metadatos
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ['meta', { name: 'author', content: 'José Luis González Sánchez' }],
    ['meta', { name: 'application-name', content: 'José Luis González Sánchez. Web Personal' }],
    ['meta', { name: 'keywords', content: 'José Luis González Sánchez, Profesor, Formador, Investigador, Desarrollo de Apliaciones, Web, Multiplataforma, FP, Formación Profesional, Embajador, GIT, GitKraken, vuejs, vue, móvil, docker, mongodb, nodejs, node, kotlin, java, spring, springboot, Luis Vives, Leganes, Madrid, Universidad de Granada, Jugabilidad, Videojuegos' }],

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

  // Tema
  theme: 'reco',
  locales: {
    '/': {
      lang: 'es-ES'
    },
  },

  // numeros de líneas en el código markdown
  lineNumbers: true,

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

      {
        text: 'Info', icon: 'reco-account',
        items: [
          { text: 'Personal', link: '/info/personal/', icon: 'reco-theme' },
          { text: 'Investigación', link: '/info/investigacion/', icon: 'reco-blog' }
        ],
      },

      { text: 'Docencia', link: '/docencia/', icon: 'reco-suggestion' }, // reco-blog reco-other 
      { text: 'Proyectos', link: '/proyectos/', icon: 'reco-api' },
      { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },

      {
        text: 'Contacto', icon: 'reco-message',
        items: [
          { text: 'Ayuda', link: 'https://forms.gle/V2m42qiW1s6X4oNt8', icon: 'reco-faq' },
          { text: 'GitHub', link: 'https://github.com/joseluisgs', icon: 'reco-github' },
          { text: 'Twitter', link: 'https://twitter.com/joseluisgonsan', icon: 'reco-twitter' },
          { text: 'LinkedIn', link: 'https://www.linkedin.com/in/joseluisgonsan', icon: 'reco-linkedin' },
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
      {
        title: 'Dpto. Informática y Comunicaciones',
        desc: 'Dpto. Inormática y Comunicaciones. CIFP Virgen de Gracia, Puertollano.',
        email: 'informatica@cifpvirgendegracia.com',
        link: 'https://informaticacifpvg.netlify.app/'
      },
    ],

    // Sidebars propios ya sean simples o en grupo
    sidebar: {
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
    // Lazy lading para imagenes y formas de usar la imagenes con loading: https://z3by.github.io/vuepress-tools/plugins/vuepress-plugin-image.html
    ['image'],
    // share
    ['social-share',
      {
        networks: ['twitter', 'facebook', 'email', 'whatsapp', 'telegram', 'linkedin'],
        email: 'admin@website.com',
        twitterUser: 'joseluisgonsan',
        autoQuote: true,
        extendsNetworks,
      },
    ],
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

    // Plugin SEO
    // https://github.com/limdongjin/vuepress-plugin-simple-seo
    ['@limdongjin/vuepress-plugin-simple-seo', {
      default_image: '/favicon.png',
      root_url: 'https://joseluisgs.github.io/',
      default_site_name: 'José Luis González',
    }],

    // Plugin SiteMap
    // https://github.com/ekoeryanto/vuepress-plugin-sitemap
    // Añade esto al package.json scripts
    //  "postbuild": "vuepress-sitemap -H https://joseluisgs.github.io -d docs/.vuepress/dist",
    // "docs:map": "vuepress-sitemap -H https://joseluisgs.github.io -d docs/.vuepress/dist",
    // "map": "vuepress-sitemap -H https://joseluisgs.github.io -d docs/.vuepress/dist",
    // ['sitemap',
    //   {
    //     hostname: 'https://joseluisgs.github.io/',
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


};
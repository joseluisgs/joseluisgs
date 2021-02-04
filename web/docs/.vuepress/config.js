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
    // Lazy lading para imagenes
    ['img-lazy'],
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


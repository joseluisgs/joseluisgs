module.exports = {
  title: 'José Luis González',
  description: 'Web Personal de José Luis González',
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  themeConfig: {
    // Tipo de pagna, si no pones nada es documentación
    type: 'blog',
    // codeTheme: 'okaidia', // default 'tomorrow'
    // Configuraciones globales
    noFoundPageByTencent: false,
    // Barra de navegacion
    logo: '/favicon.png',
    nav: [
      { text: 'Home', link: '/', icon: 'reco-home' },
      { text: 'Info', link: '/info/', icon: 'reco-account' },
      { text: 'Docencia', link: '/docencia/', icon: 'reco-document' },
      { text: 'Proyectos', link: '/proyectos/', icon: 'reco-api' },
      { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
      { text: 'sidebar', link: '/sidebar/' },
      { text: 'sidebar', link: '/sidebargroup/' },

      { text: 'Contacto',
        items: [
          { text: 'GitHub', link: 'https://github.com/joseluisgs', icon: 'reco-github'},
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
        location: 2,     // The position occupied in the navigation bar menu, default to 2
        text: 'Category' // Text default to "Category"
      },
      tag: {
        location: 3,     // The position occupied in the navigation bar menu, default to 3
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
        email: '1156743527@qq.com',
        link: 'https://cifpvirgendegracia.com'
      },
    ],
    sidebar: {
      '/sidebar/': [
        '',
        'bar1',
        'bar2'
      ],
      '/sidebargroup/': [
        {
          title: '基础',
          collapsable: true,
          children: [
            '',
            'bar1'
          ]
        },
        {
          title: '进阶',
          collapsable: true,
          children: [
            'bar2'
          ]
        },
      ]
    },
  },
}

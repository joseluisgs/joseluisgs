module.exports = {
  title: 'José Luis González',
  description: 'Web Personal de José Luis González',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Info', link: '/info/' },
      { text: 'GitHub', link: 'https://github.com/joseluisgs' },
      { text: 'Twitter', link: 'https://twitter.com/joseluisgonsan' }
    ],
    sidebar: {
      '/info/': [
        '',
        'masinfo'
      ],
    }
  }
}

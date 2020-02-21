module.exports = {
  title: 'Lekima-ui',
  // 设置输出目录
  dest: './dist',
  // 设置站点根路径，如果你在访问的地址是 'www.xxxx.com/wxDocs' 那么就设置成 '/wxDocs/'  
  base: '/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '导航1', link: '/dh1/' },
      {
        text: '导航2',
        items: [
          { text: '导航2-1', link: '/dh21/' },
          { text: '导航2-2', link: '/dh22/' }
        ]
      },
      {
        text: '帮助',
        items: [
          { text: 'vuepress官网', link: 'https://vuepress.vuejs.org/zh/config/' }
        ]
      }
    ],
    sidebar: {
      '/dh2/dh21/': [
        'H5和app对接文档',
        '管理后台开发文档'
      ],
      '/dh2/dh22/': [
        'H5开发规范',
        'H5版本管理规范'
      ]
    }
  }
}
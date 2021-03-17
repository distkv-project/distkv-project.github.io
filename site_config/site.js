// 全局的一些配置
export default {
  rootPath: '/product', // 发布到服务器的根目录，需以/开头但不能有尾/，如果只有/，请填写空字符串
  port: 8080, // 本地开发服务器的启动端口
  domain: 'distkv-project.github.io', // 站点部署域名，无需协议和path等
  defaultLanguage: 'en-us',
  'en-us': {  
    pageMenu: [
      {
        key: 'home', // 用作顶部菜单的选中
        text: 'HOME',
        link: '/en-us/index.html',
      },
      {
        key: 'docs',
        text: 'DOCS',
        link: '/en-us/docs/index.html',
      },
      {
        key: 'download',
        text: 'DOWNLOAD',
        link: '/en-us/docs/download.html',
      },
      {
        key: 'blog',
        text: 'BLOG',
        link: '/en-us/blog/index.html',
      },
      {
        key: 'community',
        text: 'COMMUNITY',
        link: '/en-us/community/index.html',
      },
     
    ],
    disclaimer: {
      title: 'Getting Involved',
      content: 'Thank you for your attention to the Distkv project. If you have any questions, you can create a new issue in our github issues list. ',
    },
    documentation: {
      title: 'Documentation',
      list: [
        {
          text: 'Overview',
          link: '/en-us/docs/index.html',
        },
        {
          text: 'Install',
          link: '/en-us/docs/install.html',
        },
        {
          text: 'Download',
          link: '/en-us/docs/download.html',
        },
      ],
    },
    resources: {
      title: 'Resources',
      list: [
        {
          text: 'Blog',
          link: '/en-us/blog/index.html',
        },
        {
          text: 'Community',
          link: '/en-us/community/index.html',
        },
      ],
    },
  },
  'zh-cn': {  
    pageMenu: [
      {
        key: 'home', // 用作顶部菜单的选中
        text: 'HOME',
        link: '/en-us/index.html',
      },
      {
        key: 'docs',
        text: 'DOCS',
        link: '/en-us/docs/index.html',
      },
      {
        key: 'download',
        text: 'DOWNLOAD',
        link: '/en-us/docs/download.html',
      },
      {
        key: 'blog',
        text: 'BLOG',
        link: '/en-us/blog/index.html',
      },
      {
        key: 'community',
        text: 'COMMUNITY',
        link: '/en-us/community/index.html',
      },
     
    ],
    disclaimer: {
      title: 'Getting Involved',
      content: 'Thank you for your attention to the Distkv project. If you have any questions, you can create a new issue in our github issues list. ',
    },
    documentation: {
      title: 'Documentation',
      list: [
        {
          text: 'Overview',
          link: '/en-us/docs/index.html',
        },
        {
          text: 'Install',
          link: '/en-us/docs/install.html',
        },
        {
          text: 'Download',
          link: '/en-us/docs/download.html',
        },
      ],
    },
    resources: {
      title: 'Resources',
      list: [
        {
          text: 'Blog',
          link: '/en-us/blog/index.html',
        },
        {
          text: 'Community',
          link: '/en-us/community/index.html',
        },
      ],
    },
  },
};

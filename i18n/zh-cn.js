export default {
  blog: {
    barText: '博客',
    postsTitle: '所有文章',
    list: []
  },
  community: {
    barText: '社区',
    events: {
      title: '事件 & 新闻',
        list: [
          {
            img: '/images/distkv-logo.png',
            title: '',
            content: '',
            dateStr: '',
            link: '',
          },
      ]
    },
    contacts: {
      title: '联系我们',
      desc: '有问题需要反馈？请通过一下方式联系我们。',
      list: [
        {
          img: '/images/channels/mailinglist.png',
          imgHover: '/images/channels/mailinglist_hover.png',
          title: 'Mailing List',
          link: 'mailto:kingchin1218@gmail.com'
        },
      ],
    },
    contributorGuide: {
      title: '贡献指南',
      desc: '欢迎为 Distkv 做贡献！',
      list: [
        {
          img: '/images/channels/email_gray.svg',
          title: '邮件列表',
          content: '加入我们的邮件列表。',
          link: ''
        },
        {
          img: '/images/channels/github_gray.svg',
          title: '报告问题',
          content: '提交新问题',
          link: "https://github.com/distkv-project/distkv/issues/new"
        },
        {
          img: '/images/documents.png',
          title: '改进文档',
          content: '改进文档',
          link: "https://github.com/distkv-project/distkv-project.github.io"
        },
        {
          img: '/images/pullrequest.png',
          title: '提交 PR',
          content: '创建一个PR',
          link: "https://github.com/distkv-project/distkv/pulls"
        },
      ],
    }
  },
  develop: {
    sidemenu: [
      {
        title: '提交者列表',
        children: [
          {
            title: '提交者',
            link: '/zh-cn/docs/developers/developers_dev.html',
          },
        ],
      },
    ],
    barText: '贡献者',
  },
  docs: {
    sidemenu: [
      {
        title: '概述',
        children: [
          {
            title: 'Distkv 是做什么的？',
            link: '/zh-cn/docs/overview/what-is-distkv.html',
          },
          {
            title: 'FAQ',
            link: '/zh-cn/docs/overview/faq.html',
          }
        ],
      },
      {
        title: '用户文档',
        children: [
        ],
      },

      {
        title: '贡献者指南',
        children: [

        ],
      },
    ],
    barText: '文档',
  },
  home: {
    brand: {
      brandName: 'Distkv 社区是做什么的?',
      briefIntroduction: '',
      buttons: [
        {
          text: '快速开始',
          link: '/zh-cn/docs/overview/what-is-distkv.html',
          type: 'primary',
        },
        {
          text: 'Github',
          link: 'https://github.com/distkv-project/distkv',
          type: 'normal',
        },
      ],
    },
    features: {
      title: '社区介绍',
      list: [
        {
          icon: 'feature-1',
          title: 'xxxx',
          content: '',
        },
        {
          icon: 'feature-2',
          title: 'xxx',
          content: '',
        }
      ],
    },
  },
  site: {
    pageMenu: [
      {
        key: 'home',
        text: '首页',
        link: '/zh-cn/index.html',
      },
      {
        key: 'docs',
        text: '文档',
        link: '/zh-cn/docs/overview/what-is-distkv.html',
      },
      {
        key: 'developers',
        text: '贡献者',
        link: '/zh-cn/docs/developers/developers_dev.html',
      },
      {
        key: 'blog',
        text: '博客',
        link: '/zh-cn/blog/index.html',
      },
      {
        key: 'community',
        text: '社区',
        link: '/zh-cn/community/index.html',
      }
    ],
    vision: {
      title: '愿景',
      content: '',
    },
    documentation: {
      title: '文档',
      list: [
        {
          text: 'Distkv 项目是干什么的？',
          link: '/zh-cn/docs/overview/what-is-distkv.html',
        },
        {
          text: '快速开始',
          link: '/zh-cn/docs/dev/quickstart.html',
        },
        {
          text: '报告文档问题',
          link: 'https://github.com/distkv-project/distkv-project.github.io/issues/new',
        },
        {
          text: '在Github上编辑此文档',
          link: 'https://github.com/distkv-project/distkv-project.github.io',
        }
      ],
    },
    resources: {
      title: '资源',
      list: [
        {
          text: '博客',
          link: '/zh-cn/blog/index.html',
        },
        {
          text: '社区',
          link: '/zh-cn/community/index.html',
        },
      ],
    },
    copyright: 'Copyright © 2020 Distkv',

    statistics: {
      title: '访问统计',
      page_pv: '本文总访问量：',
      site_pv: '本站总访问量：',
      site_uv: '本站总访客量：'
    }
  }
}

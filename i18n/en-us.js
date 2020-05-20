export default {
  blog: {
    barText: 'Blog',
    postsTitle: 'All posts',
    list: []
  },
  community: {
    barText: 'Community',
    events: {
      title: 'Events & News',
      list: [
        {
          img: '/images/distkv-logo.png',
          title: '',
          content: '',
          dateStr: '',
          link: '',
        },
      ],
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
      title: 'Contributor Guide',
      desc: 'You can always contribute to Distkv.',
      list: [
        {
          img: '/images/channels/email_gray.svg',
          title: 'Mailing List',
          content: 'Join our mailing list.',
          link: ''
        },
        {
          img: '/images/channels/github_gray.svg',
          title: 'Issue',
          content: 'Submit a new issue',
          link: "https://github.com/distkv-project/distkv/issues/new"
        },
        {
          img: '/images/documents.png',
          title: 'Documentation',
          content: 'Improve the documentation',
          link: "https://github.com/distkv-project/distkv-project.github.io"
        },
        {
          img: '/images/pullrequest.png',
          title: 'Pull Request',
          content: 'Create a brilliant pull request',
          link: "https://github.com/distkv-project/distkv/pulls"
        },
      ],
    },
  },
  develop: {
    sidemenu: [
      {
        title: 'Developers List',
        children: [

          {
            title: 'Developers',
            link: '/en-us/docs/developers/developers_dev.html',
          },
        ],
      },
    ],
    barText: 'Developers',
  },
  docs: {
    sidemenu: [
      {
        title: 'Overview',
        children: [
          {
            title: 'What is Distkv?',
            link: '/en-us/docs/overview/what-is-distkv.html',
          },
          {
            title: 'FAQ',
            link: '/en-us/docs/overview/faq.html',
          }
        ],
      },

      {
        title: 'User Doc',
        children: [

        ],
      },
      {
        title: 'Developer Guide',
        children: [

        ],
      },
    ],
    barText: 'Documentation'
  },
  home: {
    brand: {
      brandName: 'What is the community of distkv ?',
      briefIntroduction: '',
      buttons: [
        {
          text: 'Get Started',
          link: '/en-us/docs/overview/what-is-distkv.html',
          type: 'primary',
        },
        {
          text: 'Github',
          link: 'https://github.com/distkv-project/distkv',
          type: 'normal',
        }
      ],
    },
    features: {
      title: 'Community Introduction',
      list: [
        {
          icon: 'feature-1',
          title: 'COVID-19 Information Platform',
          content: '',
        },
        {
          icon: 'feature-2',
          title: 'Distkv Community',
          content: '',
        }
      ],
    },
  },
  site: {
    pageMenu: [
      {
        key: 'home', // 用作顶部菜单的选中
        text: 'HOME',
        link: '/en-us/index.html',
      },
      {
        key: 'docs',
        text: 'DOCS',
        link: '/en-us/docs/overview/what-is-distkv.html',
      },
      {
        key: 'developers',
        text: 'CONTRIBUTORS',
        link: '/en-us/docs/developers/developers_dev.html',
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
      }
    ],
    vision: {
      title: 'Vision',
      content: '',
    },
    documentation: {
      title: 'Documentation',
      list: [
        {
          text: 'What is Distkv ?',
          link: '/en-us/docs/overview/what-is-distkv.html',
        },
        {
          text: 'Quick Start',
          link: '/en-us/docs/dev/quickstart.html',
        },
        {
          text: 'Report a doc issue',
          link: 'https://github.com/distkv-project/distkv-project.github.io/issues/new',
        },
        {
          text: 'Edit This Page on GitHub',
          link: 'https://github.com/distkv-project/distkv-project.github.io',
        }
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
    copyright: 'Copyright © 2020 Distkv',
    statistics: {
      title: 'Statistics',
      page_pv: 'Total Visits to This Page: ',
      site_pv: 'Total Visits to This Site: ',
      site_uv: 'Total Guests to This Site: '
    }
  }
}

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
          img: '/images/distkv_logo.png',
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
          link: "https://github.com/distkv-project/distkv.github.io"
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
            title: 'What is Wuahan2020?',
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
      briefIntroduction: 'What we are doing now is: to establish a real-time and synchronous data service for hospitals, factories, procurement and other information, and to convene all those who want to contribute to the anti-virus campaign, so that everyone with relevant skills can participate in the development of related topics, and complete it in a self-organized and collaborative way with open source community culture.',
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
        },
        {
          text: 'Platform for Wuhan COVID-19 Epidemic Prevention',
          link: 'https://wh.opensource-service.cn/',
          type: 'normal',
        },
      ],
    },
    features: {
      title: 'Community Introduction',
      list: [
        {
          icon: 'feature-1',
          title: 'COVID-19 Information Platform',
          content: 'An information system developed by the community. Facilitate the information exchange between resource providers (medical resource donors, logistics companies, hotels, free clinic resources) and those who need help (hospitals, people in the disaster area), so as to facilitate and quickly help the people in the disaster area.',
        },
        {
          icon: 'feature-2',
          title: 'Distkv Community',
          content: 'At present, there are more than 3000 volunteers from different countries in Wuhan 2020 community. There are programmers, product managers, designers, project managers, data analysts, information collectors, translators, media workers, students, etc. Through the establishment of information system, data analysis and prediction, it makes contribution to the resistance of new coronavirus.',
        }
      ],
    },
  },
  project: {
    barText: 'Projects',
    sectionDescription: "The community has released the following open-sourced projects",
    projects: {
      list: [
        {
          img: '/images/blog/distkv.png',
          title: 'Wuhan Novel Coronavirus Outbreak Prevention Information Collection Platform',
          repoLink:'https://github.com/distkv-project/distkv',
          description: "Distkv information service website is a comprehensive information service platform for connecting resources related to the epidemic created by programmers and developers. With the focus on the data platform as the core, it can solve the problems such as the shortage of supplies, the confusion of medical information and the inability of people in different places to solve the problems caused by uneven information and opaque information under extreme emergency conditions. Mainly for the government, public welfare organizations, enterprises and institutions, medical institutions, patients, donors and other relevant institutions and groups. With the help of technical tools and digital platforms, developers can make use of the advantages of digital platforms to realize the digitalization of supply and demand, improve information transparency, and enable the supply and demand parties to conduct distributed self-service docking to improve efficiency. Many developers involved in distkv are doing what they can with their own technologies to cope with this war.",
          link: 'https://wh.opensource-service.cn/',
        },
        {
          img: '/images/blog/distkv.png',
          title: '2020 Wuhan Rescue',
          repoLink: 'https://github.com/distkv/data-sync',
          description: 'Our goal is to establish a real-time data service platform with information on hospitals, factories and procurement, allowing anyone with relevant skills to participate in the initiative. We would like to call for anyone who wishes to contribute to the fight against the COVID-19.',
          link: 'https://distkv.kaiyuanshe.cn/',
        },
        {
          img: '/images/blog/distkv.png',
          title: 'Distkv Open Source Community Official Website',
          repoLink: 'https://github.com/distkv-project/distkv.github.io',
          description: 'Distkv open source community is a community independently built by developers during the outbreak of COVID-19. The community provides a platform for technical exchange and practice for developers. The community culture of open source is completed in a way of self-organization and collaboration, helping wuhan to carry out self-organization rescue work more effectively and accurately. Since its launch, the community has attracted more than 3,000 volunteers from different countries and made contributions to the resistance against the new coronavirus through the establishment of information system, data analysis and prediction. So far, several projects have been successfully incubated, including "new coronavirus epidemic prevention information collection platform", "2020 assistance to wuhan", "Distkv open source community website", and "covid-19-nav epidemic information navigation".',
          link: 'https://community.distkv.org.cn/',
        },
        {
          img: '/images/blog/distkv.png',
          title: 'COVID-19 Outbreak Navigation Site',
          repoLink: 'https://github.com/distkv/COVID-19-Nav',
          description: 'COVID-19 navigation site provides the public with a convenient and comprehensive information portal with online resources and archival information related to COVID-19.',
          link: 'http://nav.werty.cn',
        },
      ],
    },
  },
  job: {
    barText: 'Recruitment',
    sectionDescription: 'Recruitment information release specifications',
    purpose: {
      title: "The original intention of the recruitment module",
      desc: "This community was established when the New Coronary Pneumonia raged. In the process of establishing sites and organizing community activities, many volunteers showed strong professional abilities and professional qualities. We found that many companies want to send recruitment information in the community without a suitable place. At the same time, many college students and volunteers are actively contributing to the community. The \"recruitment\" module came into being."
    },
    volunteers: {
      title: "Community composition",
      desc: "We are a community initiated by a crisis, and the community members are relatively complex. Among them: 75% technology, including: front-end and back-end development, employees in various positions such as big data, ai, operation and maintenance, DBA; 5% translators; 5% product managers; 2.5% coordination and management; Control and legal affairs; 5% publicity; 5% information entry; 1.5% others."
    },
    method: {
      title: "Release method",
      desc: "The employer directly publishes the job information in the comment area under the comment article, and the applicant can comment on the reply. For illegal or false information, the community administrator will delete posts and reserve the right to appeal to the publisher."
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
          link: 'https://github.com/distkv-project/distkv.github.io/issues/new',
        },
        {
          text: 'Edit This Page on GitHub',
          link: 'https://github.com/distkv-project/distkv.github.io',
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

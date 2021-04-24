import React from 'react';

export default {
  'zh-cn': {
    brand: {
      brandName: 'Distkv',
      briefIntroduction: 'A light weight distributed key-value database system with table concept.',
      buttons: [
        {
          text: 'Quick Start',
          link: 'http://distkv.kairbon.xyz/',
          type: 'primary',
        },
        {
          text: 'View on Github',
          link: 'https://github.com/distkv-project/distkv',
          type: 'normal',
        },
      ],
    },
    introduction: {
      title: 'abstract',
      desc: 'Distkv project is a distributed key-value database system. Besides these features, Distkv supports table concept which looks like tables in relational databases.',
      img: '/img/architecture.png',
    },
    features: {
      title: 'Feature List',
      list: [
        {
          img: '/img/feature_transpart.png',
          title: 'easy use',
          content: 'Redis-like data structure',
        },
        {
          img: '/img/feature_loadbalances.png',
          title: 'table',
          content: 'Table concept based on kv store',
        },
        {
          img: '/img/feature_service.png',
          title: 'consistency',
          content: 'Strong consistency model',
        },
        {
          img: '/img/feature_hogh.png',
          title: 'client',
          content: 'Easy to use clients',
        },
        {
          img: '/img/feature_runtime.png',
          title: 'web',
          content: 'Strong ecosystem for Web application and micro-service',
        }
      ]
    },
    start: {
      title: 'Quick start',
      desc: 'Learn by doing',
      img: '/img/quick_start.png',
      button: {
        text: 'READ MORE',
        link: '/en-us/docs/index.html',
      },
    },
    users: {
      title: 'users',
      desc: <span>Who is using</span>,
      list: [
        '/img/who_is_using_logos/yige_logo.png',
      ],
    },
  },
  'en-us': {
    brand: {
      brandName: 'Distkv',
      briefIntroduction: 'A light weight distributed key-value database system with table concept.',
      buttons: [
        {
          text: 'Quick Start',
          link: 'http://distkv.kairbon.xyz/',
          type: 'primary',
        },
        {
          text: 'View on Github',
          link: 'https://github.com/distkv-project/distkv',
          type: 'normal',
        },
      ],
    },
    introduction: {
      title: 'abstract',
      desc: 'Distkv project is a distributed key-value database system. Besides these features, Distkv supports table concept which looks like tables in relational databases.',
      img: '/img/architecture.png',
    },
    features: {
      title: 'Feature List',
      list: [
        {
          img: '/img/feature_transpart.png',
          title: 'easy use',
          content: 'Redis-like data structure',
        },
        {
          img: '/img/feature_loadbalances.png',
          title: 'table',
          content: 'Table concept based on kv store',
        },
        {
          img: '/img/feature_service.png',
          title: 'consistency',
          content: 'Strong consistency model',
        },
        {
          img: '/img/feature_hogh.png',
          title: 'client',
          content: 'Easy to use clients',
        },
        {
          img: '/img/feature_runtime.png',
          title: 'web',
          content: 'Strong ecosystem for Web application and micro-service',
        }
      ]
    },
    start: {
      title: 'Quick start',
      desc: 'Learn by doing',
      img: '/img/quick_start.png',
      button: {
        text: 'READ MORE',
        link: '/en-us/docs/index.html',
      },
    },
    users: {
      title: 'users',
      desc: <span>Who is using</span>,
      list: [
        '/img/who_is_using_logos/yige_logo.png',
      ],
    },
  },
};

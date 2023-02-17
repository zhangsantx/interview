// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')
const editUrl = 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/'

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '前端面试指南',
  tagline: '',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans']
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // id: 'html',
          // path: 'docs',
          // routeBasePath: 'docs',
          editUrl
        },
        blog: {
          id: 'blog',
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      })
    ]
  ],
  // 自定义多文档实例
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs-computer',
        path: 'docs-computer',
        routeBasePath: 'docs-computer',
        sidebarPath: require.resolve('./sidebars.js'),
        editUrl
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs-data',
        path: 'docs-data',
        routeBasePath: 'docs-data',
        sidebarPath: require.resolve('./sidebars.js'),
        editUrl
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs-algo',
        path: 'docs-algo',
        routeBasePath: 'docs-algo',
        sidebarPath: require.resolve('./sidebars.js'),
        editUrl
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs-interview',
        path: 'docs-interview',
        routeBasePath: 'docs-interview',
        sidebarPath: require.resolve('./sidebars.js'),
        editUrl
      }
    ]
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '前端面试指南',
        logo: {
          alt: '前端面试指南',
          src: 'img/logo1.svg'
        },
        items: [
          {
            docId: 'intro',
            type: 'doc',
            position: 'left',
            label: '文档'
          },
          // 自定义多文档实例路由
          {
            to: 'docs-computer/intro',
            label: '计算机网络',
            position: 'left'
          },
          {
            to: 'docs-data/认识数据结构',
            label: '数据结构',
            position: 'left'
          },
          {
            to: 'docs-algo/intro',
            label: '算法',
            position: 'left'
          },
          {
            to: 'docs-interview/intro',
            label: '前端八股文',
            position: 'left'
          },
          // {
          //   to: 'docs-css/css',
          //   label: 'CSS',
          //   position: 'left',
          //   activeBaseRegex: `/docs-css/`
          // },
          // {
          //   to: 'docs-javascript/javascript',
          //   label: 'JavaScript',
          //   position: 'left',
          //   activeBaseRegex: `/docs-javascript/`
          // },
          { to: '/blog', label: '博客', position: 'left' },
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          //   icon: ''
          // },
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'Gitee',
          //   position: 'right'
          // },
          // {
          //   href: 'https://www.scoder.cc',
          //   label: '个人网站',
          //   position: 'right'
          // },
          {
            type: 'search',
            position: 'right'
          }
        ]
      },
      footer: {
        style: 'light',
        // links: [
        //   {
        //     title: 'Docs',
        //     items: [
        //       {
        //         label: 'Tutorial',
        //         to: '/docs/intro'
        //       }
        //     ]
        //   },
        //   {
        //     title: 'Community',
        //     items: [
        //       {
        //         label: 'Stack Overflow',
        //         href: 'https://stackoverflow.com/questions/tagged/docusaurus'
        //       },
        //       {
        //         label: 'Discord',
        //         href: 'https://discordapp.com/invite/docusaurus'
        //       },
        //       {
        //         label: 'Twitter',
        //         href: 'https://twitter.com/docusaurus'
        //       }
        //     ]
        //   },
        //   {
        //     title: 'More',
        //     items: [
        //       {
        //         label: 'Blog',
        //         to: '/blog'
        //       },
        //       {
        //         label: 'GitHub',
        //         href: 'https://github.com/facebook/docusaurus'
        //       }
        //     ]
        //   }
        // ],
        copyright: `Copyright © ${new Date().getFullYear()} 张三同学(www.scoder.cc)-前端面试指南. Built with Docusaurus.`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      }
    }),
  // 离线搜索配置
  themes: [
    // ... Your other themes.
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        language: ['zh', 'en']
        // ```
      })
    ]
  ]
}

module.exports = config

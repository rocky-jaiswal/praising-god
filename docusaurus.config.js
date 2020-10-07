module.exports = {
  title: 'Praising God for life',
  tagline: '',
  url: 'https://praising-god-for-life.web.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'rocky-jaiswal', // Usually your GitHub org/user name.
  projectName: 'praising-god', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Praising God for life',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      items: [{ to: 'blog', label: 'Posts', position: 'left' }],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'More',
          items: [
            {
              label: 'Posts',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/rocky-jaiswal/praising-god',
            },
          ],
        },
      ],
      copyright: `Jesus 🥰 you`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/rocky-jaiswal/praising-god/tree/master',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/rocky-jaiswal/praising-god/tree/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
}

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Anasoid',
  tagline: 'Anasoid open source',
  url: 'https://www.anasoid.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'anasoid', // Usually your GitHub org/user name.
  projectName: 'anasoid', // Usually your repo name.

  themeConfig: {
    gtag: {
      trackingID: 'G-CLR0F7M45Z',
      anonymizeIP: true,
    },
    navbar: {
      title: 'anasoid.org',
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://github.com/anasoid/jmeter-as-code',
          label: 'Jmeter as code',
          position: 'left',
        },
        {
          href: 'https://github.com/anasoid',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Projects',
          items: [
            {
              label: 'Jmeter as code',
              href: 'https://github.com/anasoid/jmeter-as-code',
            },
          ],
        },
        {
          title: 'Doc',
          items: [
            {
              label: 'Jmeter as code',
              href: 'https://github.com/anasoid/jmeter-as-code',
            },
          ],
        },

      ],
      copyright: `Copyright © ${new Date().getFullYear()} anasoid.org`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {

        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          trailingSlash: false,
        },
      },
    ],
  ],
};

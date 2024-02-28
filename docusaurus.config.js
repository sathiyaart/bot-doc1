// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'BOTVFX Documentation HUB',
  tagline: '(for Artist and Dev Team)',
  favicon: 'img/favicon.ico',

 

    

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Home',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },

       
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Master weblinks',
          },
          {to: '/blog', label: 'Testing Blog', position: 'left'},
          {
            href: 'https://botvfx.com/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },

      
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Floor Plans',
            items: [
              {
                label: 'Atlanta',
                to: '/hello-react',
              },

              {
                label: 'Chennai',
                to: '/hello-react',
              },

              {
                label: 'Coimbatore',
                to: '/hello-react',
              },

              {
                label: 'Pune',
                to: '/hello-react',
              },

              {
                label: 'Hyderabad',
                to: '/hello-react',
              },
            ],
          },

          
          {
            title: 'Community',
            items: [
              {
                label: 'Bot Circle',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Bot Spot Awards',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Bot Innovations',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'TownHall Awards',
                href: 'https://twitter.com/docusaurus',
              },

              {
                label: 'Social wellbeing Projects',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Emergency Contact(24/7)',
                to: '/blog',
              },
              {
                label: 'Fire Safety Protocol',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Botvfx, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;

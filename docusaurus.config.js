// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Start Digital Developer Documentation",
  tagline: "Website Development Documentation & Guidelines",
  favicon: "img/favicon.ico",

  url: "https://startdigitalau.github.io",
  baseUrl: "/website-documentation/",

  // GitHub pages deployment config.
  organizationName: "startdigitalau", // Your GitHub org/user name.
  projectName: "website-documentation", // Your repo name.
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/start.png",
      navbar: {
        logo: {
          alt: "Start Logo",
          src: "img/start.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "right",
            label: "Documentation",
          },
          {
            href: "https://github.com/startdigitalau",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Documentation",
            items: [
              {
                label: "Websites",
                to: "/docs/websites",
              },
              {
                label: "Deployment",
                to: "/docs/deployment",
              },
              {
                label: "Packages",
                to: "/docs/packages",
              },
            ],
          },
          {
            title: "Resources",
            items: [
              {
                label: "Coding Standards",
                to: "/docs/standards",
              },
              {
                label: "Tutorials",
                to: "/docs/tutorials",
              },
            ],
          },
          {
            title: "Start Digital",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/startdigitalau",
              },
              {
                label: "Website",
                href: "https://startdigital.com.au",
              },
              {
                label: "Contact",
                href: "https://startdigital.com.au/contact",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Start Digital. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;

import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Problem 18',
  tagline: 'Learning game development, 18 days at a time.',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://problem-18-dev.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  deploymentBranch: 'deploy',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'problem-18-dev', // Usually your GitHub org/user name.
  projectName: 'problem-18-dev.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',

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
      {
        docs: false,
        blog: {
          routeBasePath: '/',
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          blogSidebarTitle: 'Blogs',
          blogSidebarCount: 'ALL',
          blogTitle: 'Problem 18 | Learning Game Development 18 days at a time',
          blogDescription:
            "Blog about learning game development, one game and 18 days at a time, made by Problem 18. You'll find my adventures, learnings and tutorials here!",
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
          authorsBasePath: 'authors',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    metadata: [
      {
        name: 'keywords',
        content:
          'Game Development, Indie Game Dev, Learning Game Development, Problem 18, Blog',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        property: 'twitter:domain',
        content: 'problem-18-dev.github.io',
      },
      {
        property: 'twitter:url',
        content: 'https://problem-18-dev.github.io',
      },
      {
        name: 'twitter:creator',
        content: '@Problem18Dev',
      },
      {
        name: 'twitter:site',
        content: '@Problem18Dev',
      },
      {
        name: 'twitter:image',
        content:
          'https://problem-18-dev.github.io/img/brand/problem-18-social-card.jpg',
      },
      {
        property: 'og:image',
        content:
          'https://problem-18-dev.github.io/img/brand/problem-18-social-card.jpg',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        name: 'google-site-verification',
        content: 'fQnN3qdrQ-H2F2Pk19zzRT4gIexYsmP_YZDrtSf6tis',
      },
    ],
    image: 'img/brand/problem-18-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
      defaultMode: 'dark',
    },
    navbar: {
      logo: {
        alt: 'Problem 18 Logo',
        src: 'img/logo-dark.svg',
        srcDark: 'img/logo.svg',
        style: { height: '40px' },
      },
      items: [
        {
          href: 'https://github.com/problem-18-dev/problem-18-dev.github.io',
          label: 'GitHub',
          position: 'right',
          'aria-label': 'Problem 18 GitHub Repository',
        },
        {
          href: 'https://problem-18.itch.io',
          label: 'Itch.io',
          position: 'right',
          'aria-label': 'Problem 18 Itch.io Page',
        },
        {
          href: 'https://x.com/Problem18Dev',
          label: 'X',
          position: 'right',
          'aria-label': 'Problem 18 X Page',
        },
        {
          href: 'https://bsky.app/profile/problem18dev.bsky.social',
          label: 'Bluesky',
          position: 'right',
          'aria-label': 'Problem 18 Bluesky Page',
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['gdscript'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

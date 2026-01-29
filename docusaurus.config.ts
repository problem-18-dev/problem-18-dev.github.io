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
          blogTitle: 'Problem 18 Blog',
          blogDescription:
            'Blog about learning my journey into game development.',
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
    ],
    announcementBar: {
      id: 'work-in-progress',
      content:
        "This site is still a work in progress. Feel free to reach out through <a target='_blank' rel='noopener noreferrer' href='https://x.com/Problem18Dev'>X</a> or <a target='_blank' rel='noopener noreferrer' href='https://bsky.app/profile/problem18dev.bsky.social'>Bluesky</a>!",
      backgroundColor: '#100C08',
      textColor: '#EBEBD3',
      isCloseable: false,
    },
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

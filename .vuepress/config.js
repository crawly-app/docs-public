module.exports = {
  title: "Crawly Docs",
  description: "Uptime monitoring, certificate monitoring, assets",
  //   base: "/docs/",
  themeConfig: {
    lastUpdated: "Last Updated",
    docsDir: "docs",
    head: [
      ["link", { rel: "icon", sizes: "32x32", href: `/favicon.ico` }],
    ],
    nav: [
      { text: "Home", link: "/" },
      { text: "Landing", link: "https://crawly.app?ref=docs" },
      { text: "Login", link: "https://app.crawly.app/login/?ref=docs" },
    ],
    sidebar: [
      {
        title: 'Intro',   // required
        path: '/',      // optional, link of the title, which should be an absolute path and must exist
        collapsable: false, // optional, defaults to true
        sidebarDepth: 0,    // optional, defaults to 1
        children: []
      },
      {
        title: 'Account',   // required
        path: '/account/',      // optional, link of the title, which should be an absolute path and must exist
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          '/account/',
          '/account/notifications',
        ]
      },
      {
        title: 'Team',   // required
        path: '/team/',      // optional, link of the title, which should be an absolute path and must exist
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          '/team/',
          '/team/users',
          '/team/integrations',
          '/team/billing',
        ]
      },
      {
        title: 'API',   // required
        path: '/api/',      // optional, link of the title, which should be an absolute path and must exist
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          '/api/',
          '/api/authentication',
        ]
      },
    ],
    // algolia: {
    //   apiKey: '<API_KEY>',
    //   indexName: '<INDEX_NAME>'
    // }
    // Assumes GitHub. Can also be a full GitLab url.
    repo: "crawly-app/docs-public",
    repoLabel: "Contribute on Github",
    docsRepo: "crawly-app/docs-public",
    // defaults to false, set to true to enable
    editLinks: false,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: "Help us improve this page!"
  },
  extraWatchFiles: ["**/*.md", "**/*.vue"],
  extendMarkdown(md) {
    lineNumbers: true;
  },
  plugins: [
    ["@vuepress/google-analytics", { ga: "UA-120470331-1" }],
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: true
      }
    ]
  ]
};

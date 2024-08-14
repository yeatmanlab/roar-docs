import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress/cli";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
import { viteBundler } from "@vuepress/bundler-vite";
import getChildren from "./childPageScript.js";

export default defineUserConfig({
  lang: "en-US",
  base: "/roar-docs/",

  title: "ROAR Developer Documentation",
  description: "Documentation for developers working on the ROAR - Rapid Online Assessment of Reading Project for Yeatmanlab at Stanford University.",

  // Add the head option to include the favicon
  head: [
    // ['link', { rel: 'icon', href: '/favicon.ico' }],
    // For PNG format:
    ['link', { rel: 'icon', type: 'image/png', href: 'https://vuejs.press/images/hero.png' }],
    // For SVG format:
    // ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }]
  ],

  theme: defaultTheme({
    logo: "https://vuejs.press/images/hero.png",
    navbar: [
      {
        text: "Documentation",
        children: [
          { text: "Databases", link: "/databases/" },
          { text: "Workflows", link: "/workflows/" },
          { text: "Application", link: "/application/" },
          { text: "Dashboard Components", link: "/dashboard-components/" },
          { text: "Cloud Functions", link: "/cloud-functions/" },
          { text: "Internationalization", link: "/internationalization/" },
          { text: "Integrating New Apps", link: "/integrating-new-apps/" },
          { text: "Optimizing Assets", link: "/assets-optimization/" },
          {text: "ROAR Redivis Instance", link: "/roar-redivis/"},
          {text: "Logging and Querying", link: "/logging-and-querying/"},
        ],
      },
    ],
    nextLinks: true,
    prevLinks: true,
    sidebar: [
      {
        text: "Databases",
        link: "/databases/",
        collapsable: false,
        children: getChildren("./docs/databases"),
      },
      {
        text: "Workflows",
        link: "/workflows/",
        collapsable: false,
        children: getChildren("./docs/workflows"),
      },
      {
        text: "Application",
        collapsable: false,
        children: [
          {
            text: "Auth",
            link: "/application/auth",
          }
        ]
      },
      {
        text: "Dashboard Components",
        link: "/dashboard-components/",
        collapsable: false,
        children: getChildren("./docs/dashboard-components"),
      },
      {
        text: "Cloud Functions",
        link: "/cloud-functions/",
        collapsable: false,
        children: [
      {
        text: "gse-roar-admin",
        link: "/cloud-functions/gse-roar-admin/",
        collapsable: false,
        children: getChildren("./docs/cloud-functions/gse-roar-admin")
      },
      {
        text: "gse-roar-assessment",
        link: "/cloud-functions/gse-roar-assessment/",
        collapsable: false,
        children: getChildren("./docs/cloud-functions/gse-roar-assessment"),
      },
        ],
      },
      {
        text: "Internationalization",
        link: "/internationalization/",
        collapsable: false,
        children: getChildren("./docs/internationalization"),
      },
      {
        text: "Integrating New Apps",
        link: "/integrating-new-apps/",
        collapsable: false,
        children: getChildren("./docs/integrating-new-apps"),
      },
      {
        text: "Assets Optimization",
        link: "/assets-optimization/",
        collapsable: false,
        children: getChildren("./docs/assets-optimization"),
      },
      {
          text: "ROAR Redivis Instance",
          link: "/roar-redivis/",
          collapsable: false,
          children: getChildren("./docs/roar-redivis"),
      },
      {
        text: "Logging and Querying",
        link: "/logging-and-querying-and-querying/",
        collapsable: false,
        children: getChildren("./docs/logging-and-querying"),
      },
    ],
  }),

  bundler: viteBundler(),

  plugins: [
    mdEnhancePlugin({
      // Enable mermaid
      mermaid: true,
    }),
  ],
});

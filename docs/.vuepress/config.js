import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress/cli";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
import { viteBundler } from "@vuepress/bundler-vite";
import getChildren from "./childPageScript.js";

export default defineUserConfig({
  lang: "en-US",
  base: "/roar-docs/",

  title: "ROAR Documentation",
  description:
    "Documentation for developers and researchers working on the ROAR - Rapid Online Assessment of Reading Project for Yeatmanlab at Stanford University.",

  head: [
    [
      "link",
      { rel: "icon", type: "image/png", href: "/roar-docs/assets/favicon.png" },
    ],
  ],

  theme: defaultTheme({
    logo: "/assets/roar-logo-short.svg",
    repo: "https://github.com/yeatmanlab/",
    navbar: [
      {
        text: "Developer",
        children: [
          { text: "Databases", link: "/developer/databases/" },
          { text: "Workflows", link: "/developer/workflows/" },
          { text: "Application", link: "/developer/application/" },
          { text: "GitHub Actions", link: "/developer/github-actions/" },
          {
            text: "Dashboard Components",
            link: "/developer/dashboard-components/",
          },
          {
            text: "Firebase App Check",
            link: "/developer/firebase-app-check/",
          },
          { text: "Cloud Functions", link: "/developer/cloud-functions/" },
          {
            text: "Internationalization",
            link: "/developer/internationalization/",
          },
          {
            text: "Integrating New Apps",
            link: "/developer/integrating-new-apps/",
          },
          {
            text: "Optimizing Assets",
            link: "/developer/assets-optimization/",
          },
          { text: "ROAR Redivis Instance", link: "/developer/roar-redivis/" },
          {
            text: "Logging and Querying",
            link: "/developer/logging-and-querying/",
          },
          { text: "Emulation", link: "/developer/emulation/" },
        ],
      },
      {
        text: "Researcher",
        children: [
          { text: "Data Guidelines", link: "/researcher/data-guidelines/" },
          { text: "Data Organization", link: "/researcher/data-organization/" },
          { text: "Data Requests", link: "/researcher/data-requests/" },
        ],
      },
    ],
    nextLinks: true,
    prevLinks: true,
    sidebar: {
      "/developer/": [
        {
          text: "Databases",
          link: "/developer/databases/",
          collapsable: false,
          children: getChildren("./docs/developer/databases"),
        },
        {
          text: "BigQuery",
          link: "/developer/bigquery/",
          collapsable: false,
          children: getChildren("./docs/developer/bigquery"),
        },
        {
          text: "Workflows",
          link: "/developer/workflows/",
          collapsable: false,
          children: getChildren("./docs/developer/workflows"),
        },
        {
          text: "Application",
          collapsable: false,
          children: [
            {
              text: "Auth",
              link: "/developer/application/auth",
            },
          ],
        },
        {
          text: "GitHub Actions",
          link: "/developer/github-actions/",
          collapsable: false,
          children: [
            {
              text: "ROAR Apps GitHub Actions",
              link: "/developer/github-actions/apps",
              collapsable: false,
              children: getChildren("./docs/developer/github-actions/apps"),
            },
            {
              text: "ROAR Dashboard GitHub Actions",
              link: "/developer/github-actions/dashboard",
              collapsable: false,
              children: getChildren(
                "./docs/developer/github-actions/dashboard"
              ),
            },
          ],
        },
        {
          text: "Dashboard Components",
          link: "/developer/dashboard-components/",
          collapsable: false,
          children: getChildren("./docs/developer/dashboard-components"),
        },
        {
          text: "Firebase App Check",
          link: "/developer/firebase-app-check/",
          collapsable: false,
          children: getChildren("./docs/developer/firebase-app-check"),
        },
        {
          text: "Cloud Functions",
          link: "/developer/cloud-functions/",
          collapsable: false,
          children: [
            {
              text: "gse-roar-admin",
              link: "/developer/cloud-functions/gse-roar-admin/",
              collapsable: false,
              children: getChildren(
                "./docs/developer/cloud-functions/gse-roar-admin"
              ),
            },
            {
              text: "gse-roar-assessment",
              link: "/developer/cloud-functions/gse-roar-assessment/",
              collapsable: false,
              children: getChildren(
                "./docs/developer/cloud-functions/gse-roar-assessment"
              ),
            },
          ],
        },
        {
          text: "Internationalization",
          link: "/developer/internationalization/",
          collapsable: false,
          children: getChildren("./docs/developer/internationalization"),
        },
        {
          text: "Integrating New Apps",
          link: "/developer/integrating-new-apps/",
          collapsable: false,
          children: getChildren("./docs/developer/integrating-new-apps"),
        },
        {
          text: "Assets Optimization",
          link: "/developer/assets-optimization/",
          collapsable: false,
          children: getChildren("./docs/developer/assets-optimization"),
        },
        {
          text: "ROAR Redivis Instance",
          link: "/developer/roar-redivis/",
          collapsable: false,
          children: getChildren("./docs/developer/roar-redivis"),
        },
        {
          text: "Logging and Querying",
          link: "/developer/logging-and-querying/",
          collapsable: false,
          children: getChildren("./docs/developer/logging-and-querying"),
        },
        {
          text: "Emulation",
          link: "/developer/emulation/",
          collapsable: false,
          children: [
            {
              text: "Running the Emulator",
              link: "/developer/emulation/running-the-emulator/",
              collapsable: false,
              children: getChildren(
                "./docs/developer/emulation/running-the-emulator"
              ),
            },
            {
              text: "Emulator Configuration Guide",
              link: "/developer/emulation/emulator-configuration-guide/",
              collapsable: false,
              children: getChildren(
                "./docs/developer/emulation/emulator-configuration-guide"
              ),
            },
          ],
        },
        {
          text: "Clowder Implementation",
          link: "/developer/clowder-implementation/",
          collapsable: false,
          children: getChildren("./docs/developer/clowder-implementation"),
        },
      ],
      "/researcher/": [
        {
          text: "Data Organization",
          link: "/researcher/data-organization/",
          collapsable: false,
          children: getChildren("./docs/researcher/data-organization"),
        },
        {
          text: "Data Guidelines",
          link: "/researcher/data-guidelines/",
          collapsable: false,
          children: getChildren("./docs/researcher/data-guidelines"),
        },
        {
          text: "Data Requests",
          link: "/researcher/data-requests/",
          collapsable: false,
          children: getChildren("./docs/researcher/data-requests"),
        },
      ],
    },
  }),

  bundler: viteBundler(),

  plugins: [
    mdEnhancePlugin({
      // Enable mermaid
      mermaid: true,
    }),
  ],
});

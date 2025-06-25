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
        collapsible: true,
        children: [
          { text: "Tech Specs", link: "/developer/tech-specs/" },
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
            text: "Backend Architecture",
            link: "/developer/backend-architecture/",
          },
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
        collapsible: true,
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
          text: "Tech Specs",
          link: "/developer/tech-specs/",
          collapsible: true,
          children: getChildren("./docs/developer/tech-specs"),
        },
        {
          text: "Databases",
          link: "/developer/databases/",
          collapsible: true,
          children: getChildren("./docs/developer/databases"),
        },
        {
          text: "BigQuery",
          link: "/developer/bigquery/",
          collapsible: true,
          children: getChildren("./docs/developer/bigquery"),
        },
        {
          text: "Workflows",
          link: "/developer/workflows/",
          collapsible: true,
          children: getChildren("./docs/developer/workflows"),
        },
        {
          text: "Application",
          collapsible: true,
          children: [
            {
              text: "Auth",
              link: "/developer/application/auth",
              collapsible: true,
            },
          ],
        },
        {
          text: "GitHub Actions",
          link: "/developer/github-actions/",
          collapsible: true,
          children: [
            {
              text: "ROAR Apps GitHub Actions",
              link: "/developer/github-actions/apps",
              collapsible: true,
              children: getChildren("./docs/developer/github-actions/apps"),
            },
            {
              text: "ROAR Dashboard GitHub Actions",
              link: "/developer/github-actions/dashboard",
              collapsible: true,
              children: getChildren(
                "./docs/developer/github-actions/dashboard"
              ),
            },
          ],
        },
        {
          text: "Dashboard Components",
          link: "/developer/dashboard-components/",
          collapsible: true,
          children: getChildren("./docs/developer/dashboard-components"),
        },
        {
          text: "Firebase App Check",
          link: "/developer/firebase-app-check/",
          collapsible: true,
          children: getChildren("./docs/developer/firebase-app-check"),
        },
        {
          text: "Backend Architecture",
          link: "/developer/backend-architecture/",
          collapsible: true,
          children: [
            {
              text: "Architecture",
              link: "/developer/backend-architecture/architecture/",
              collapsible: true,
              children: getChildren(
                "./docs/developer/backend-architecture/architecture"
              ),
            },
            {
              text: "API",
              link: "/developer/backend-architecture/api/",
              collapsible: true,
              children: [
                {
                  text: "Classes",
                  link: "/developer/backend-architecture/api/classes/",
                  collapsible: true,
                  children: getChildren(
                    "./docs/developer/backend-architecture/api/classes"
                  ),
                },
                {
                  text: "Enumerations",
                  link: "/developer/backend-architecture/api/enumerations/",
                  collapsible: true,
                  children: getChildren(
                    "./docs/developer/backend-architecture/api/enumerations"
                  ),
                },
                {
                  text: "Functions",
                  link: "/developer/backend-architecture/api/functions/",
                  collapsible: true,
                  children: getChildren(
                    "./docs/developer/backend-architecture/api/functions"
                  ),
                },
                {
                  text: "Interfaces",
                  link: "/developer/backend-architecture/api/interfaces/",
                  collapsible: true,
                  children: getChildren(
                    "./docs/developer/backend-architecture/api/interfaces"
                  ),
                },
                {
                  text: "Type Aliases",
                  link: "/developer/backend-architecture/api/type-aliases/",
                  collapsible: true,
                  children: getChildren(
                    "./docs/developer/backend-architecture/api/type-aliases"
                  ),
                },
                {
                  text: "Variables",
                  link: "/developer/backend-architecture/api/variables/",
                  collapsible: true,
                  children: getChildren(
                    "./docs/developer/backend-architecture/api/variables"
                  ),
                },
              ],
            },
            {
              text: "Examples",
              link: "/developer/backend-architecture/examples/",
              collapsible: true,
              children: getChildren(
                "./docs/developer/backend-architecture/examples"
              ),
            },
            {
              text: "Guides",
              link: "/developer/backend-architecture/guides/",
              collapsible: true,
              children: getChildren(
                "./docs/developer/backend-architecture/guides"
              ),
            },
          ],
        },
        {
          text: "Cloud Functions",
          link: "/developer/cloud-functions/",
          collapsible: true,
          children: [
            {
              text: "gse-roar-admin",
              link: "/developer/cloud-functions/gse-roar-admin/",
              collapsible: true,
              children: getChildren(
                "./docs/developer/cloud-functions/gse-roar-admin"
              ),
            },
            {
              text: "gse-roar-assessment",
              link: "/developer/cloud-functions/gse-roar-assessment/",
              collapsible: true,
              children: getChildren(
                "./docs/developer/cloud-functions/gse-roar-assessment"
              ),
            },
          ],
        },
        {
          text: "Internationalization",
          link: "/developer/internationalization/",
          collapsible: true,
          children: getChildren("./docs/developer/internationalization"),
        },
        {
          text: "Integrating New Apps",
          link: "/developer/integrating-new-apps/",
          collapsible: true,
          children: getChildren("./docs/developer/integrating-new-apps"),
        },
        {
          text: "Assets Optimization",
          link: "/developer/assets-optimization/",
          collapsible: true,
          children: getChildren("./docs/developer/assets-optimization"),
        },
        {
          text: "ROAR Redivis Instance",
          link: "/developer/roar-redivis/",
          collapsible: true,
          children: getChildren("./docs/developer/roar-redivis"),
        },
        {
          text: "Logging and Querying",
          link: "/developer/logging-and-querying/",
          collapsible: true,
          children: getChildren("./docs/developer/logging-and-querying"),
        },
        {
          text: "Emulation",
          link: "/developer/emulation/",
          collapsible: true,
          children: [
            {
              text: "Running the Emulator",
              link: "/developer/emulation/running-the-emulator/",
              collapsible: true,
              children: getChildren(
                "./docs/developer/emulation/running-the-emulator"
              ),
            },
            {
              text: "Emulator Configuration Guide",
              link: "/developer/emulation/emulator-configuration-guide/",
              collapsible: true,
              children: getChildren(
                "./docs/developer/emulation/emulator-configuration-guide"
              ),
            },
          ],
        },
        {
          text: "Clowder Implementation",
          link: "/developer/clowder-implementation/",
          collapsible: true,
          children: getChildren("./docs/developer/clowder-implementation"),
        },
      ],
      "/researcher/": [
        {
          text: "Data Organization",
          link: "/researcher/data-organization/",
          collapsible: true,
          children: getChildren("./docs/researcher/data-organization"),
        },
        {
          text: "Data Guidelines",
          link: "/researcher/data-guidelines/",
          collapsible: true,
          children: getChildren("./docs/researcher/data-guidelines"),
        },
        {
          text: "Data Requests",
          link: "/researcher/data-requests/",
          collapsible: true,
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

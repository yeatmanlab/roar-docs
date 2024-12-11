import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress/cli";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
import { viteBundler } from "@vuepress/bundler-vite";
import getChildren from "./childPageScript.js";

export default defineUserConfig({
  lang: "en-US",
  base: "/roar-docs/",

  title: "ROAR Developer Documentation",
  description:
    "Documentation for developers working on the ROAR - Rapid Online Assessment of Reading Project for Yeatmanlab at Stanford University.",

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
        text: "Documentation",
        children: [
          { text: "Databases", link: "/databases/" },
          { text: "Workflows", link: "/workflows/" },
          { text: "Application", link: "/application/" },
          { text: "GitHub Actions", link: "/github-actions/" },
          { text: "Dashboard Components", link: "/dashboard-components/" },
          { text: "Firebase App Check", link: "/firebase-app-check/" },
          { text: "Cloud Functions", link: "/cloud-functions/" },
          { text: "Internationalization", link: "/internationalization/" },
          { text: "Integrating New Apps", link: "/integrating-new-apps/" },
          { text: "Optimizing Assets", link: "/assets-optimization/" },
          { text: "ROAR Redivis Instance", link: "/roar-redivis/" },
          { text: "Logging and Querying", link: "/logging-and-querying/" },
          { text: "Emulation", link: "/emulation/" },
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
        text: "BigQuery",
        link: "/bigquery/",
        collapsable: false,
        children: getChildren("./docs/bigquery"),
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
          },
        ],
      },
      {
        text: "GitHub Actions",
        link: "/github-actions/",
        collapsable: false,
        children: [
          {
            text: "ROAR Apps GitHub Actions",
            link: "/github-actions/apps",
            collapsable: false,
            children: getChildren("./docs/github-actions/apps"),
          },
          {
            text: "ROAR Dashboard GitHub Actions",
            link: "/github-actions/dashboard",
            collapsable: false,
            children: getChildren("./docs/github-actions/dashboard"),
          },
        ],
      },
      {
        text: "Dashboard Components",
        link: "/dashboard-components/",
        collapsable: false,
        children: getChildren("./docs/dashboard-components"),
      },
      {
        text: "Firebase App Check",
        link: "/firebase-app-check/",
        collapsable: false,
        children: getChildren("./docs/firebase-app-check"),
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
            children: getChildren("./docs/cloud-functions/gse-roar-admin"),
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
        link: "/logging-and-querying/",
        collapsable: false,
        children: getChildren("./docs/logging-and-querying"),
      },
      {
        text: "Emulation",
        link: "/emulation/",
        collapsable: false,
        children: [
          {
            text: "Running the Emulator",
            link: "/emulation/running-the-emulator/",
            collapsable: false,
            children: getChildren("./docs/emulation/running-the-emulator"),
          },
          {
            text: "Emulator Configuration Guide",
            link: "/emulation/emulator-configuration-guide/",
            collapsable: false,
            children: getChildren(
              "./docs/emulation/emulator-configuration-guide"
            ),
          },
        ],
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

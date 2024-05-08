import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress/cli";
import { viteBundler } from "@vuepress/bundler-vite";
import getChildren from "./childPageScript.js";
// var getChildren = require("./childPageScript.js");

export default defineUserConfig({
  lang: "en-US",
  base: "roar-docs",

  title: "ROAR Developer Documentation",
  description: "Documentation for developers working on the ROAR - Rapid Online Assessment of Reading Project for Yeatmanlab at Stanford University.",

  theme: defaultTheme({
    logo: "https://vuejs.press/images/hero.png",
    navbar: ["/databases/", "/workflows/", "/cloud-functions/","/internationalization/", "/integrate-new-apps/"],
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
        text: "App Dashboard Integration",
        link: "/integrate-new-apps/",
        collapsable: false,
        children: getChildren("./docs/integrate-new-apps"),
      },
    ],
  }),

  bundler: viteBundler(),
});

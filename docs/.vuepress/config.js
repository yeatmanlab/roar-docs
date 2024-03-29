import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress/cli";
import { viteBundler } from "@vuepress/bundler-vite";
import getChildren from "./childPageScript.js";
// var getChildren = require("./childPageScript.js");

export default defineUserConfig({
  lang: "en-US",
  base: "roar-docs",

  title: "ROAR Developer Documentation",
  description: "Documentation for ROAR Developers",

  theme: defaultTheme({
    logo: "https://vuejs.press/images/hero.png",
    navbar: ["/databases/", "/workflows/", "/cloud-functions/","/internationalization/"],
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
        children: getChildren("./docs/cloud-functions"),
      },
      {
        text: "Internationalization",
        link: "/internationalization/",
        collapsable: false,
        children: getChildren("./docs/internationalization"),
      },
    ],
  }),

  bundler: viteBundler(),
});

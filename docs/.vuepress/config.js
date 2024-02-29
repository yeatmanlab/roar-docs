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

    navbar: ["/databases/", "/workflow/", "/cloud-functions/"],
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
        text: "Cloud Functions",
        link: "/cloud-functions/",
        collapsable: false,
        children: getChildren("./docs/cloud-functions"),
      },
    ],
  }),

  bundler: viteBundler(),
});

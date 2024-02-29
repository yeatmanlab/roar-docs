import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress/cli";
import { viteBundler } from "@vuepress/bundler-vite";
import getChildren from "./childPageScript.js";
// var getChildren = require("./childPageScript.js");

export default defineUserConfig({
  lang: "en-US",

  title: "ROAR Developer Documentation",
  description: "ROAR Developer Documentation",

  theme: defaultTheme({
    logo: "https://vuejs.press/images/hero.png",

    navbar: ["/", "/databases/", "/workflow/", "/cloud-functions/"],
    sidebar: [
      {
        text: "Databases",
        link: "/databases/",
        collapsable: false,
        children: getChildren("./docs/databases"),
      },
      {
        text: "Workflows",
        link: "/workflow/",
        collapsable: false,
        children: getChildren("./docs/workflow"),
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

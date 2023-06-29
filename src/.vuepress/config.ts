// @ts-ignore
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import {hopeTheme} from "vuepress-theme-hope";


export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "枫叶",
  description: "",

  theme,


  // Enable it with pwa
  // shouldPrefetch: false,
});

// @ts-ignore
import { navbar } from "vuepress-theme-hope";

// @ts-ignore
// @ts-ignore
// @ts-ignore
export default navbar([
  "/",
  "/demo/",
  {
    text: "自动化运维",
    //icon: "lightbulb",
    prefix: "/guide/",
    children: [
      {
        text: "自动化部署",
        icon: "note",
        prefix: "bar/",
        children: ["DevOps", { text: "", icon: "", link: "" },{ text: "", icon: "", link: "" }],
      },
      {
        text: "Foo",
        //icon: "light bulb",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "ellipsis", link: "" }],
      },
    ],
  },
  {
    text: "后端开发",
    prefix: "/guide/",
    children: [
      {
        text: "Bar",
        //icon: "lightbulb",
        prefix: "bar/",
        children: ["baz", { text: "...", icon: "ellipsis", link: "" }],
      },
      {
        text: "Foo",
        //icon: "lightbulb",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "ellipsis", link: "" }],
      },
    ],
  },
  {
    text: "前端开发",
    prefix: "/guide/",
    children: [
      {
        text: "Bar",
        //icon: "lightbulb",
        prefix: "bar/",
        children: ["baz", { text: "...", icon: "ellipsis", link: "" }],
      },
      {
        text: "Foo",
        //icon: "lightbulb",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "ellipsis", link: "" }],
      },
    ],
  },
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);

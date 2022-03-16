export default defineAppConfig({
  pages: ["pages/index/index", "pages/katex/index", "pages/katex-api/index"],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black"
  },
  components: ["components/katex/index"]
});

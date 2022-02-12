export default defineAppConfig({
  pages: ["pages/index/index", "pages/katex/index"],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black"
  },
  components: ["components/katex/index"]
});

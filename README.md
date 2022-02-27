# katex-weapp-taro-demo

基于 KaTeX 构建的 LaTeX 渲染组件（不依赖服务端渲染），Taro 版本 Demo

> 依赖微信小程序的 RichText 组件渲染，请注意小程序基础库 1.4.0 开始支持，低版本需做兼容处理。

## 在线 Demo

![在线 Demo](./assets/qrcode.jpg)

## 运行 demo

```bash
# clone 项目
git clone git@github.com:rojer95/katex-mini-taro-demo.git

# 项目根目录安装依赖
yarn

# 编译
yarn dev:weapp

```

编译后:

- 打开小程序开发者工具, 打开 dist 目录
- 可以修改文本框内容 Latex 公式，点击渲染查看效果

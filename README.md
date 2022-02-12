# katex-weapp

基于 KaTeX 使用 构建的小程序原生 LaTeX 渲染组件（不依赖服务端渲染）

> 依赖微信小程序的 RichText 组件渲染，请注意小程序基础库 1.4.0 开始支持，低版本需做兼容处理。

## 运行 demo

```bash
# clone 项目
git clone https://github.com/rojer95/katex-weapp.git

# 项目根目录安装依赖
yarn

# 编译
yarn dev:weapp

```

编译后:

- 打开小程序开发者工具, 打开 dist 目录
- 可以修改文本框内容 Latex 公式，点击渲染查看效果

## 在原生小程序项目中直接使用

```bash

# 在小程序中安装依赖
npm install @rojer/katex-mini-core

```

- 在小程序开发者工具中 - 工具 - 构建 npm
- 在 app.js 的 onLaunch 中加载 katex

```js
// app.js
// app.js
import { loadKatex } from "@rojer/katex-mini";
App({
  onLaunch() {
    // 通过动态方式加载katex代码，节省小程序包体大小
    wx.request({
      url: "https://lib.baomitu.com/KaTeX/latest/katex.min.js",
      success: ({ data: code }) => {
        loadKatex(code);
        wx.katex = true;
      }
    });
  }
});
```

- 在小程序中解析 latex

```js
// index.js
import parse from "@rojer/katex-mini";

Page({
  data: {
    nodes: [],
    latex:
      "\\displaystyle \\frac{1}{\\Bigl(\\sqrt{\\phi \\sqrt{5}}-\\phi\\Bigr) e^{\\frac25 \\pi}} = 1+\\frac{e^{-2\\pi}} {1+\\frac{e^{-4\\pi}} {1+\\frac{e^{-6\\pi}} {1+\\frac{e^{-8\\pi}} {1+\\cdots} } } }"
  },

  onInput: function(e) {
    this.setData({
      latex: e.detail.value
    });
  },

  renderLatex: function() {
    this.setData({
      nodes: parse(this.data.latex)
    });
  }
});
```

- 在页面中展示

```html
<!--index.wxml-->
<view class="container">
  <rich-text nodes="{{nodes}}"></rich-text>
  <textarea value="{{latex}}" bindinput="onInput" maxlength="1400"></textarea>
  <button bindtap="renderLatex">渲染</button>
</view>
```

Demo 详情见：[katex-mini-core/demo](https://github.com/rojer95/katex-mini-core/tree/master/demo)

## 在原生小程序项目中使用 Taro 编译好的组件【不推荐】

> 缺点：包含 Taro 各种依赖打包出来的结果比较大，不推荐

```bash
# clone 项目
git clone https://github.com/rojer95/katex-weapp.git

# 项目根目录安装依赖
yarn

# 编译组件
yarn build:weapp:components

```

组件编译后:

- 复制`dist`文件夹的到你的原生项目中，并改名为 `katex`
- 在 `[page].json` 中做组件声明

```json
{
  "usingComponents": {
    "katex": "../../katex/components/katex"
  }
}
```

- 在 `[page].wxml` 中使用

```xml
<!--index.wxml-->
<view class="container">
  <katex props="{{katexProps}}"></katex>
</view>
```

- 在 `[page].js` 中配置 props

```js
// index.js
Page({
  data: {
    katexProps: {
      latex: "x=a^2"
    }
  }
});
```

原生小程序中使用，详见 [Demo](./demo)

## 示例预览图

![示例预览图](./assets/demo-static.jpg)

## 缺点

- ~~占用体积较大 500k+~~（使用动态加载 KaTeX 与加载 CDN 字体包减少包体大小）

# animaUI(灵动UI)
[![GitHub issues](https://img.shields.io/github/issues/AnimaUI/wechat-miniprogram)](https://github.com/AnimaUI/wechat-miniprogram/issues)
[![GitHub forks](https://img.shields.io/github/forks/AnimaUI/wechat-miniprogram)](https://github.com/AnimaUI/wechat-miniprogram/network)
[![GitHub stars](https://img.shields.io/github/stars/AnimaUI/wechat-miniprogram)](https://github.com/AnimaUI/wechat-miniprogram/stargazers)
[![version](https://img.shields.io/badge/version-1.0.0-green)](https://github.com/AnimaUI/wechat-miniprogram)
[![node](https://img.shields.io/badge/node-v8.12.0-green)](http://nodejs.cn/)
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
小程序自定义组件开发模板：

* 支持使用 less 语法编写 wxss 文件
* 使用 webpack 构建 js
* 支持自定义组件单元测试
* 支持 eslint
* 支持多入口构建

## 使用

* 使用[命令行工具](https://github.com/wechat-miniprogram/miniprogram-cli)进行初始化
* 直接从 github 上 clone 下来

## 开发

1. 安装依赖：

```
npm install
```

2. 执行命令：

```
npm run dev
```

默认会在包根目录下生成 miniprogram\_dev 目录，src 中的源代码会被构建并生成到 miniprogram\_dev/components 目录下。如果需要监听文件变化动态构建，则可以执行命令：

```
npm run watch
```

> ps: 如果 minirpogram\_dev 目录下已存在小程序 demo，执行`npm run dev`则不会再将 tools 下的 demo 拷贝到此目录下。而执行`npm run watch`则会监听 tools 目录下的 demo 变动并进行拷贝。

3. 生成的 miniprogram\_dev 目录是一个小程序项目目录，以此目录作为小程序项目目录在开发者工具中打开即可查看自定义组件被使用的效果。

4. 进阶：

* 如果有额外的构建需求，可自行修改 tools 目录中的构建脚本。
* 内置支持 webpack、less 语法、sourcemap 等功能，默认关闭。如若需要可以自行修改 tools/config.js 配置文件中相关配置。
* 内置支持多入口构建，如若需要可自行调整 tools/config.js 配置文件的 entry 字段。
* 默认开启 eslint，可自行调整规则或在 tools/config.js 中注释掉 eslint-loader 行来关闭此功能。

## 发布

> ps: 发布前得确保已经执行构建，小程序 npm 包只有构建出来的目录是真正被使用到的。

1. 如果还没有 npm 帐号，可以到[ npm 官网](https://www.npmjs.com/)注册一个 npm 帐号。
2. 在本地登录 npm 帐号，在本地执行：

```
npm adduser
```

或者

```
npm login
```

3. 在已完成编写的 npm 包根目录下执行：

```
npm publish
```

到此，npm 包就成功发布到 npm 平台了。

> PS：一些开发者在开发过程中可能修改过 npm 的源，所以当进行登录或发布时需要注意要将源切回 npm 的源。

## 目录结构

以下为推荐使用的目录结构，如果有必要开发者也可以自行做一些调整:

```
|--miniprogram_dev // 开发环境构建目录
|--miniprogram_dist // 生产环境构建目录
|--src // 源码
|   |--components // 通用自定义组件
|   |--images // 图片资源
|   |
|   |--xxx.js/xxx.wxml/xxx.json/xxx.wxss // 暴露的 js 模块/自定义组件入口文件
|
|--test // 测试用例
|--tools // 构建相关代码
|   |--demo // demo 小程序目录，开发环境下会被拷贝生成到 miniprogram_dev 目录中
|   |--config.js // 构建相关配置文件
|
|--gulpfile.js
```

> PS：对外暴露的 js 模块/自定义组件请放在 src 目录下，不宜放置在过深的目录。另外新增的暴露模块需要在 tools/config.js 的 entry 字段中补充，不然不会进行构建。

## 测试

* 执行测试用例：

```
npm run test
```

* 执行测试用例并进入 node inspect 调试：

```
npm run test-debug
```

* 检测覆盖率：

```
npm run coverage
```

测试用例放在 test 目录下，使用 **miniprogram-simulate** 工具集进行测试，[点击此处查看](https://github.com/wechat-miniprogram/miniprogram-simulate/blob/master/README.md)使用方法。在测试中可能需要变更或调整工具集中的一些方法，可在 test/utils 下自行实现。

## 其他命令

* 清空 miniprogram_dist 目录：

```
npm run clean
```

* 清空 miniprogam_dev 目录：

```
npm run clean-dev
```

## 获取iconfont下的所有图标icon

```javascript
let li = document.getElementsByClassName('icon-code-show');
let len = li.length;
let iconArray = [];
for(let i = 0; i < len; i++) {
    iconArray.push(li[i].innerHTML);
}
```

> 按字母排序
```javascript
array.sort(function(a,b){return a.localeCompare(b)})
```

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://huarxia.github.io/blog/"><img src="https://avatars0.githubusercontent.com/u/11221788?v=4" width="100px;" alt=""/><br /><sub><b> 花夏</b></sub></a><br /><a href="#design-huarxia" title="Design">🎨</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
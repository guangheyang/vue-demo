# 安装脚手架

## 安装@vue/cli

node 版本要求： >8.9，推荐使用8.11.0 +。

关于旧版本：
如果在这之前已经全局安装了旧版本的vue-cli(1.x 或 2.x)，那么需要先卸载掉。
运行：``npm uninstall vue-cli -g`` 或 ``yarn global remove vue-cli``。

安装：

```js
npm install -g @vue/cli
# OR
yarn global add @vue/cli
```

安装之后，可以在命令行中访问vue命令。

检查版本是否正确：

```js
vue --version
```

## 快速原型开发(适用于学习阶段)

安装：

```js
npm install -g @vue/cli-service-global
# OR
yarn global add @vue/cli-service-global

# 使用
找到文件地址，打开命令行使用vue serve命令
```

## 安装vscode插件

名字：Vetur。用于高亮.vue文件代码
# 利用脚手架搭建项目

拉取 2.x 模板 (旧版本)

```js
npm install -g @vue/cli-init
# `vue init` 的运行效果将会跟 `vue-cli@2.x` 相同
vue init webpack my-project
```
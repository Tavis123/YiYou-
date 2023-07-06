const path = require("path");
const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  publicPath: './',
  transpileDependencies: true,
  lintOnSave: false,//关闭语法检查
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [
        path.resolve(__dirname, "src/assets/style/variable.less"),
        path.resolve(__dirname, "src/assets/style/mixin.less")
      ]
    }
  },
  pages: {
    index: {
      // page 的入口
      entry: "src/main.js",
      // 在 dist/index.html 的输出
      filename: "index.html"
    }
  },
  chainWebpack: config => {
    const svgRule = config.module.rule("svg");
      svgRule.uses.clear();
      svgRule
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
          symbolId: "icon-[name]"
    });
  },
})

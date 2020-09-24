const path = require("path");
const autoprefixer = require("autoprefixer");
const pxtorem = require("postcss-pxtorem");
const CompressionPlugin = require("compression-webpack-plugin")
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
  // outputDir: 在npm run build时 生成文件的目录 type:string, default:'dist'
  // outputDir: 'dist',
  // pages:{ type:Object,Default:undfind },
  // eslint-loader是否在保存的时候检查
  lintOnSave: true,
  // 是否使用包含运行时编译器的Vue核心的构建
  runtimeCompiler: false,
  // 默认情况下 babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来
  transpileDependencies: [],
  // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  productionSourceMap: false,
  devServer: {
    disableHostCheck: true, // 花生壳显示Invalid Host header让其不检查hostname。
    https: false, // https:{type:Boolean}
    open: true, // 配置自动启动浏览器
    // proxy: "http://localhost:9527" // 配置跨域处理,只有一个代理
    //端口
    port: 9527
    // host:'0.0.0.0', // 设置0.0.0.0则所有的地址都能访问
    // host: 'wxtest.com',
    // proxy: {
    // "/api": {
    //   target: "http://192.168.0.188:8080",// 设置调用的接口域名和端口号
    //   ws: true, // 代理websocket
    //   changeOrigin: true,
    //   pathRewrite: { // 路径重写
    //     "^/api": ""
    //   }
    // }
    // } // 配置多个代理,
  },
  // css相关配置
  css: {
    // 配置高于chainWebpack中关于css loader的配置
    // modules: true, // 是否开启支持‘foo.module.css’样式
    // extract: true, // 是否使用css分离插件 ExtractTextPlugin，采用独立样式文件载入，不采用<style>方式内联至html文件中
    sourceMap: false, // 是否在构建样式地图，false将提高构建速度
    loaderOptions: {
      css: {
        // options here will be passed to css-loader
      },
      // 给 sass-loader 传递选项
      less: {
        // @/ 是 src/ 的别名
        data: `@import "@/assets/less/color.scss";`
      },
      postcss: {
        plugins: [
          /*
           * 自适应：方式1
           * npm install postcss-px2rem --save
           * 需要在main.js 引入utils下  flexible.js 保存本地为了可以修改
           * 或者 npm install lib-flexible --save 在main.js 引入import 'lib-flexible'
           * */
          // require('postcss-px2rem')({
          //   // 以设计稿750为例， 750 / 10 = 75
          //   //remUnit通常我们是根据设计图来定这个值，
          //   //假如设计图给的宽度是750，我们通常就会把remUnit设置为75，这样我们写样式时，可以直接按照设计图标注的宽高来1:1还原开发。
          //   remUnit: 75
          // }),
          /*
           *  自适应：方式2
           *  amfe-flexible
           *  需要在 main.js 引入 amfe-flexible.js
           *  例如：设计稿 750px
           *  未使用第三方ui框架 rootValue为 75，1:1开发，设计稿宽高多少就多少
           *  使用第三方ui框架 rootValue为 37.5 更合适，则 开发中 样式设置为 设计稿样式px/2
           *
           * */

          autoprefixer(),
          pxtorem({
            rootValue: 37.5,
            propList: ["*"]
          })
        ]
      }
    }
  },
  // webpack相关配置
  // 如果这个值是一个对象，则会通过 webpack-merge 合并到最终的配置中。
  // 如果这个值是一个函数，则会接收被解析的配置作为参数。该函数及可以修改配置并不返回任何东西，也可以返回一个被克隆或合并过的配置版本。
  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      // 为生产环境修改配置...
      return {
        plugins: [
          new CompressionPlugin({
            test: /\.js$|\.css|\.less/, // 匹配文件名
            threshold: 10240, // 对超过10k的数据压缩
            deleteOriginalAssets: false // 不删除源文件
          })
        ]
      }
    } else {
      // 为开发环境修改配置...
    }
  },
  // Webpack配置另一种写法
  // 是一个函数，会接收一个基于 webpack-chain 的 ChainableConfig 实例。允许对内部的 webpack 配置进行更细粒度的修改。
  chainWebpack: config => {
    /*config.module
      .rule('images')
      .use('url-loader')
        .loader('url-loader')
        .tap(options => {
          // 修改它的选项...
          return options
        })*/
  },
  // PWA 插件相关配置
  pwa: {},
  // 第三方插件配置
  pluginOptions: {
    // ...
  }
};

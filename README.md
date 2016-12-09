# webpack-learning
my webpack projects, learning and demo

webpack 到底有多么优秀，和 gulp 相比，有点在哪里？

## 认识 webpack

webpack 也是构建工具，需要一个配置文件 webpack.config.js，改配置文件采用 es6 的 import 和 exports 方法，一个简单的配置文件信息如下：

```javascript
// webpack.config.js
module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  }
};
```

exports 的对象中有 entry 表示处理 main.js，然后输出文件是 bundle.js，在html 中直接调用 bundle.js 即可。

同时 webpack 提供一种不需要磁盘 IO ，通过内存方式来测试，比如运行 webpack-dev-server，浏览器输入 127.0.0.1:8080 访问的 bundle.js 此时是在内存中的。

[认识 webpack](https://github.com/songjinzhong/webpack-learning/tree/master/认识 webpack/)。

在之前比较流行的 gulp 中，所有 js 文件打包成一个文件，所有 css 文件打包成一个文件，减少了 http 请求，所有同类文件都要在一个文件中。

而 webpack 的诞生就是为了解决模块化开发和静态资源文件的处理。先来说说模块化开发，无论是 AMD 还是 CommonJS，甚至是 ES6 中的 module（即前面提到的 import 和 exports），都给予支持。正如大部分人认可的那样，webpack 的天生就涌来适配 react 的，打包图片和 css 文件，这不巧了吗。

## 多个入口

如前文的 demo，打包可以设置两个入口，单独打包两个文件，比如

```javascript
module.exports = {
  entry: {
    bundle1: './main1.js',
    bundle2: './main2.js'
  },
  output: {
    filename: '[name].js'
  }
};
```

这个样子之后，会生成两个文件，分别是 bundle1.js 和 bundle2.js，然后在使用的时候，就可以调用这两个文件。

[多个入口](https://github.com/songjinzhong/webpack-learning/tree/master/多个入口/)。

## 参考

>[ruanyf/webpack-demos](https://github.com/ruanyf/webpack-demos)
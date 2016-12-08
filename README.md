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

## 参考

>[ruanyf/webpack-demos](https://github.com/ruanyf/webpack-demos)
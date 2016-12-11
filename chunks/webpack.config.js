var webpack = require('webpack');

module.exports = {
  entry: {
    app: './main.js',
    vendor1: ['jquery'],
  },
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */'vendor1', /* filename= */'vendor.js')
  ]
};

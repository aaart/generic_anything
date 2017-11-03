var path = require('path')
var webpack = require('webpack')
//var _ = require('lodash');

module.exports = {
  entry: './app/app.js',
  output: {
    path: path.resolve(__dirname, './website-dev/js'),
    publicPath: '/js',
    filename: 'website.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      }
    ]
  },
  resolve: {
    alias: {
      'routes$': path.join(__dirname, 'app/routes.js'),
      'routed-components$': path.join(__dirname, 'app/routed-components.js'),
      // node_modules does not require path.join. They are automatically resolved in node_modules dir, or... it just looks like that :D
      'vue$': 'vue/dist/vue.esm.js',
      'vue-router$': 'vue-router/dist/vue-router.esm.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

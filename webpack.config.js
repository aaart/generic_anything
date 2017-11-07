var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin");
//var _ = require('lodash');

module.exports = {
  entry: {
    'application': './app/app.js', 
    'application-styles': "./app/css/timezones.css"
  },
  output: {
    path: path.resolve(__dirname, './website-dev/'),
    publicPath: '/',
    filename: '[name].js',
    sourceMapFilename: '[name].js.map'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: { }
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({ fallback: "style-loader", use: "css-loader" })
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/],
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
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
  devtool: '#eval-source-map',
  plugins: [
      new ExtractTextPlugin("[name].css")
  ]
}

var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var TsConfigPathsPlugin = require('awesome-typescript-loader').TsConfigPathsPlugin;
//var _ = require('lodash');

module.exports = {
  entry: {
    'application': './app/src/app.ts', 
    'application-styles': "./app/src/css/timezones.css"
  },
  output: {
    path: path.resolve(__dirname, './geany.dotnet_core/geany.dotnet_core/wwwroot/'),
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
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            'scss': 'vue-style-loader!css-loader!sass-loader',
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
          }
          // other vue-loader options go here
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
          appendTsSuffixTo: [/\.vue$/] //,
          //tscofconfigFile: "./tsconfig.json"
        }
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'],
    alias: {
      'lodash$': path.join(__dirname, 'node_modules/lodash/lodash.js'),
      'vue$': 'vue/dist/vue.esm.js',
      'vue-router$': 'vue-router/dist/vue-router.esm.js'
      
    },
    plugins: [
      new TsConfigPathsPlugin(/*{ tsconfig } /**/)
    ]
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  devtool: 'source-map',
  plugins: [
      new ExtractTextPlugin("[name].css")
  ]
}

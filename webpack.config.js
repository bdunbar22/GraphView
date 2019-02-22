const webpack = require("webpack")
const { resolve } = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    index: resolve(__dirname, './src/index.js'),
    vendor: ['react', 'react-dom']
  },
  output: {
    filename: "[name].[hash].js",
    path: resolve(__dirname, "./target"),
    publicPath: ""
  },
  node: {
    fs: "empty"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          cacheDirectory: true,
        },
      },
    ],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        "screw_ie8": true,
        "warnings": false,
        "unused": true,
        "dead_code": true,
      },
      output: {
        comments: false,
      },
      sourceMap: false,
    }),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, './src/index.html'),
      filename: 'index.html',
      inject: 'body',
    }),
  ]
}
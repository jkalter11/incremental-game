var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var root  = __dirname

module.exports = {
  context: root+'/browser',
  entry: {
    browser: root+'/browser/index.js',
  },
  output: {
    path: root+'/dist/public',
    filename: "[name].js",
    chunkFilename: "[id].js",
    publicPath: '/'
  },
  devtool: 'sourcemap',
  plugins: [
    new ExtractTextPlugin('[name].css')
  ],
  module: {
    loaders: [
      // {
      //   test: /\.json$/,
      //   loader: 'json-loader'
      // },
      {
        test: /.jsx?$/,
        include: [
          root+'/browser',
          root+'/lib'
        ],
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react', 'stage-0'],
          plugins: ['transform-runtime'],
          cacheDirectory: true
        }
      },
      {
        test: /\.sass$/,
        loader: ExtractTextPlugin.extract("style", "css!sass?sourceMap")
      }
    ]
  },
};



'use strict';

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const merge = require('webpack-merge');

const webpackCommon = {
  entry: {
    app: ['./app/initialize']
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.jst$/,
        loader: 'underscore-template-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      }
    ]
  },
  output: {
    filename: 'app.js',
    path: path.join(__dirname, './public'),
    publicPath: '/'
  },
  plugins: [
    new ExtractTextPlugin('app.css'),
    new CopyWebpackPlugin([{
      from: './app/assets/index.html',
      to: './index.html'
    },
      {
        from: './node_modules/bootstrap/dist/css/bootstrap.css',
        to: './bootstrap/bootstrap.min.css'
      }]),
    new webpack.ProvidePlugin({
      $: 'jquery',
      _: 'underscore',
      jQuery: 'jquery'
    })
  ],
  resolve: {
    root: path.join(__dirname, './app')
  },
  resolveLoader: {
    root: path.join(__dirname, './node_modules')
  }
};

switch (process.env.npm_lifecycle_event) {
  case 'start':
  case 'dev':
    module.exports = merge(webpackCommon, {
      devtool: '#inline-source-map',
      devServer: {
        inline: true
      }
    });
    break;
  default:
    module.exports = merge(webpackCommon, {
      devtool: 'source-map'
    });
    break;
}

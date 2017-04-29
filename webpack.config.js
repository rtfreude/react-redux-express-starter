const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/client/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  devServer: {
    inline: true,
    contentBase: path.join(__dirname, 'dist'),
    port: 4000
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        exclude: /(node_modules)/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}
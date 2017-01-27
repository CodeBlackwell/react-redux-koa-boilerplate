var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './main.js',
  output: { path: __dirname + "/build/", filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
       test: /\.scss$/,
       loader: ExtractTextPlugin.extract("style", "css!sass?")
     },
      {
        test: /\.json$/,
        loader: "json"
      },
     {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  },
  plugins: [
     new ExtractTextPlugin("main.css"),
     new CopyWebpackPlugin([
     {
       from: __dirname + '/index.html',
       to: __dirname + '/index.html'
     },
   ])
  ]
};

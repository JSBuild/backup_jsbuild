var webpack = require("webpack");
var fs = require("fs");
var path = require("path");
var prodConfig = require('./webpack.production.config.js');


module.exports = function(rootPath) {

  prodConfig.entry = path.resolve(rootPath, './src/main.js');
  prodConfig.output = {
    path: path.resolve(rootPath, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  };
}
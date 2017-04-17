const baseConfig = require('./webpack.base.config.js');

module.exports = baseConfig;

module.exports.devServer.hot = true;
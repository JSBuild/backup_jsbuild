var fs = require("fs");
var path = require("path");
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var devConfig = require('./webpack.development.config.js');

module.exports = (rootPath) => {

  devConfig.entry = path.resolve(rootPath, './src/main.js');
  devConfig.output = {
    path: path.resolve(rootPath, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  };

  const compiler = webpack(devConfig);

  var PORT = 8080;
  if (!PORT) {
    throw new Error('PORT and API_PORT must be set !')
  }

  const server = new WebpackDevServer(compiler, {
    contentBase: './',
    publicPath: '/dist/',
    stats: { colors: true },
  })

  server.listen(PORT, 'localhost', function () {
    console.log(`WebpackDevServer listening to port ${PORT}`)
  })
}

// module.exports = function(rootPath) {
//
//   devConfig.entry = path.resolve(rootPath, './src/main.js');
//   devConfig.output = {
//     path: path.resolve(rootPath, './dist'),
//     publicPath: '/dist/',
//     filename: 'build.js'
//   };
//   //devConfig.plugins = [new webpack.HotModuleReplacementPlugin()];
//
//   console.log(devConfig.entry);
//   console.log(devConfig.output.path);
//   var compiler = webpack(devConfig);
//
//   var options = {
//     // webpack-dev-server options
//
//     contentBase:  path.resolve(rootPath),
//     // Can also be an array, or: contentBase: "http://localhost/",
// //new webpack.HotModuleReplacementPlugin()
//     hot: false,
//     // Enable special support for Hot Module Replacement
//     // Page is no longer updated, but a "webpackHotUpdate" message is sent to the content
//     // Use "webpack/hot/dev-server" as additional module in your entry point
//     // Note: this does _not_ add the `HotModuleReplacementPlugin` like the CLI option does.
//
//
//     historyApiFallback: true,
//     // Set this as true if you want to access dev server from arbitrary url.
//     // This is handy if you are using a html5 router.
//
//     compress: true,
//     // Set this if you want to enable gzip compression for assets
//
//     // proxy: {
//     //   "**": "http://localhost:9090"
//     // },
//     // Set this if you want webpack-dev-server to delegate a single path to an arbitrary server.
//     // Use "**" to proxy all paths to the specified server.
//     // This is useful if you want to get rid of 'http://localhost:8080/' in script[src],
//     // and has many other use cases (see https://github.com/webpack/webpack-dev-server/pull/127 ).
//
//     setup: function (app) {
//       // Here you can access the Express app object and add your own custom middleware to it.
//       // For example, to define custom handlers for some paths:
//       // app.get('/some/path', function(req, res) {
//       //   res.json({ custom: 'response' });
//       // });
//     },
//
//     // pass [static options](http://expressjs.com/en/4x/api.html#express.static) to inner express server
//     staticOptions: {},
//
//     clientLogLevel: "info",
//     // Control the console log messages shown in the browser when using inline mode. Can be `error`, `warning`, `info` or `none`.
//
//     // webpack-dev-middleware options
//     quiet: false,
//     noInfo: true,
//     lazy: true,
//     filename: "build.js",
//     watchOptions: {
//       aggregateTimeout: 300,
//       poll: 1000
//     },
//     // It's a required option.
//     publicPath: path.resolve(rootPath, 'dist'),
//     headers: {"X-Custom-Header": "yes"},
//     stats: {colors: true}
//     // https: {
//     //   cert: fs.readFileSync("path-to-cert-file.pem"),
//     //   key: fs.readFileSync("path-to-key-file.pem"),
//     //   cacert: fs.readFileSync("path-to-cacert-file.pem")
//     // }
//   };
//
//   var server = new WebpackDevServer(compiler, options);
//
//   server.listen(8080, "localhost", function(err) {
//     if(err) throw err;
//     reportReadiness('http://localhost:8080', options);
//   });
// };
//
//
// function reportReadiness(uri, options) {
//   var useColor = true;
//   var useProgress = true;
//   var startSentence = "Project is running at " + (colorInfo(useColor, uri))
//   if(options.socket) {
//     startSentence = "Listening to socket at " + (colorInfo(useColor, options.socket));
//   }
//   console.log((useProgress ? "\n" : "") + startSentence);
//
//   console.log(("webpack output is served from " + (colorInfo(useColor, options.publicPath))));
//   var contentBase = Array.isArray(options.contentBase) ? options.contentBase.join(", ") : options.contentBase;
//   if(contentBase)
//   { console.log(("Content not from webpack is served from " + (colorInfo(useColor, contentBase)))); }
//   if(options.historyApiFallback)
//   { console.log(("404s will fallback to " + (colorInfo(useColor, options.historyApiFallback.index || "/index.html")))); }
//   if(options.open) {
//     open(uri).catch(function() {
//       console.log("Unable to open browser. If you are running in a headless environment, please do not use the open flag.");
//     });
//   }
// }
//
// function colorInfo(useColor, msg) {
//   if(useColor)
//   // Make text blue and bold, so it *pops*
//     return '\u001b[1m\u001b[34m' + msg + '\u001b[39m\u001b[22m';
//   return msg;
// }
//
// function colorError(useColor, msg) {
//   if(useColor)
//   // Make text red and bold, so it *pops*
//     return '\u001b[1m\u001b[31m' + msg + '\u001b[39m\u001b[22m';
//   return msg;
// }

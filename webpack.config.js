var path = require("path");
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
  context: __dirname,

  entry: './js/app',

  output: {
    path: path.join(__dirname, 'bundles/'),
    filename: "[name].js",
    publicPath: 'http://localhost:8080/bundles/'
  },

  plugins: [
    new BundleTracker({filename: './webpack-stats.json'}),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      "root.jQuery": "jquery"
    }),
  ],

  module: {
    loaders: [
      { test: /jquery\/src\/selector\.js$/, loader: 'amd-define-factory-patcher-loader' },
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader'}, // to transform JSX into JS
      { test: /\.css$/, loader: 'style-loader!css-loader'},
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
      {
        test: /\.(jpe?g|png|gif|svg)$/i, loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ],
  },

  resolve: {
    alias: {
      jquery: path.join(__dirname, "/node_modules/jquery/src/jquery.js")
    },
    modulesDirectories: ['node_modules',],
    extensions: ['', '.js', '.jsx']
  },
}
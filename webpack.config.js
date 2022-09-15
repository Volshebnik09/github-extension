var path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpack = require('webpack')
module.exports = {
  mode: 'development',
  watch: true,
  entry: {
    index: "../src/pages/index/index.js",
    downloadFolder: "../src/pages/index/downloadFolder.js",
  },
  // plugins: [
  //   new BundleAnalyzerPlugin()
  // ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: "all"
        }
      }
    }
  },

  module: {

    rules: [{
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        },

      },

    },

      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
    ]
  },
  devtool: 'source-map',
  output: {
    filename: 'scripts/[name].bundle.js',
  },
  node: {
    global: false
  },
  plugins: [new webpack.DefinePlugin({
    global: 'window'		// Placeholder for global used in any node_modules
  })]


};
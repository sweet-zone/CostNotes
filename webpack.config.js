
const webpack = require('webpack')
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const extractSass = new ExtractTextPlugin({
  filename: '[name].[contenthash].css',
  disable: process.env.NODE_ENV === 'development'
});

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    vendor: ['F7'],
    main: './main.js'
  },
  output: {
    path: path.join(__dirname, 'www'),
    filename: '[name].[hash].js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.vue'],
    modules: [path.resolve(__dirname, 'node_modules')],
    alias: {
      F7: './framework7/framework7.js'
    }
  },
  module: {
    noParse: [/F7/],
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
          plugins: ['transform-runtime'],
          presets: ['es2015']
        }
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [{
            loader: 'css-loader?minimize'
          }, {
            loader: 'sass-loader'
          }],
          fallback: 'style-loader'
        })
      },
      {
        test: /\.jpg|jpeg|png|gif$/,
        use: [{
          loader: 'url-loader?limit=8192',
        }, {
          loader: 'file-loader?name=[path][name].[ext]?[hash]'
        }]
      },
      {
        test: /\.eot|ttf|woff|woff2$/,
        loader: 'file-loader?name=[path][name].[ext]?[hash]'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    //new webpack.HotModuleReplacementPlugin(), // https://github.com/webpack/webpack/issues/1583
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './index.ejs'
    }),
    new CopyWebpackPlugin([
      { from: './img/**' }
    ]),
    extractSass,
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor'
    })
  ]
}












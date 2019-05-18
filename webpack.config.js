const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')
const WebpackNotifierPlugin = require('webpack-notifier')

module.exports = {
  devServer: {
    inline: true,
    port: 3334
  },
  devtool: 'source-map',
  mode: 'development',
  entry: __dirname + '/src/index',
  output: {
    path: __dirname + '/dist',
    filename: '[name].[contenthash].js'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new WebpackNotifierPlugin({
      title: 'REACT-APP',
      skipFirstNotification: true,
      alwaysNotify: false
    }),
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(false)
    })
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx|mjs)$/,
        exclude: /node_modules/,
        include: /src/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              localIdentName: '[local]--[name].[hash:base64:5]'
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(jpe?g|png|gif|eot|woff2?|ttf|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: { name: 'assets/[name].[hash].[ext]' }
          }
        ]
      }
    ]
  }
}

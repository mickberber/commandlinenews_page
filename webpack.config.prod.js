const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    './index.js',
  ],
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname + '/public/dist/'),
    publicPath: '/',
  },
  context: resolve(__dirname + '/public'),
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?modules',
          'postcss-loader',
        ],
      },
      {
        test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
      }
    ],
  },
}

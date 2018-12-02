const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: './dist',
    watchOptions: {
      poll: 2000,
    },
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        include: /images/,
        loader: 'url-loader',
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },

});

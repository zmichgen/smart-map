const merge = require('webpack-merge');
const MiniCssPlug = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const common = require('./webpack.common.js');


module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new MiniCssPlug({
      filename: './css/[name].bundle.css',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [{
          loader: MiniCssPlug.loader,
          options: {
            publicPath: '../',
          },
        },
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            plugins: [
              autoprefixer({
                browsers: ['ie >= 8', 'last 4 version'],
              }),
            ],
          },
        },
        'resolve-url-loader',
        'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(ttf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[ext]',
            },
          },
        ],
      },
    ],
  },
});

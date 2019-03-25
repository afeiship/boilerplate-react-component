import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default (inEnv) => {
  return {
    mode: 'productoin',
    entry: './public/index.js',
    output: {
      path: resolve(__dirname, `../docs`),
      filename: './assets/bundle.[hash].js'
    },
    resolve: {
      extensions: ['.scss', '.js', '.jsx'],
      alias: {
        '@': resolve(__dirname, '../src')
      }
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader'
          ]
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        favicon: resolve(__dirname, '../assets/favicon.ico'),
        template: resolve(__dirname, '../public/index.ejs')
      }),
      new MiniCssExtractPlugin({
        filename: './assets/[name].[contenthash].css'
      })
    ]
  };
};

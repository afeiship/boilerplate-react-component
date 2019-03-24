import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default (inEnv) => {
  const { TYPE } = inEnv;
  return {
    mode: 'development',
    entry: './public/index.js',
    output: {
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
        template: resolve(__dirname, '../public/index.ejs')
      }),
      new MiniCssExtractPlugin({
        filename: './assets/[name].[contenthash].css'
      })
    ]
  };
};

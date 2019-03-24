import { resolve } from 'path';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default (inEnv) => {
  const { TYPE } = inEnv;
  return {
    mode: 'production',
    entry: './src/main.js',
    output: {
      filename: 'index.js'
    },
    externals: {
      react: 'react',
      classnames: 'classnames',
      noop: 'noop',
      'react-dom': 'react-dom',
      'object-assign': 'object-assign',
      'prop-types': 'prop-types'
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
      new CopyWebpackPlugin([
        {
          from: './src/components/style.scss',
          to: '.'
        }
      ]),
      new MiniCssExtractPlugin({
        filename: './assets/[name].[contenthash].css'
      })
    ]
  };
};

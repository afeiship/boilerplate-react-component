import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

// basic ENV/dispatch variable:
const NODE_ENV = process.env.NODE_ENV;
const externals = {
  react: 'react',
  classnames: 'classnames',
  noop: 'noop',
  'react-dom': 'react-dom',
  'object-assign': 'object-assign',
  'prop-types': 'prop-types'
};

export default (inEnv) => {
  const { TYPE } = inEnv;
  return {
    mode: NODE_ENV,
    entry: './public/index.js',
    output: {
      path: resolve(__dirname, `./dist/${TYPE}`),
      filename: './assets/bundle.[hash].js'
    },
    externals: NODE_ENV === 'production' ? externals : {},
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
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: [`../dist/${TYPE}`]
      }),
      new HtmlWebpackPlugin({
        template: resolve(__dirname, '../public/index.ejs')
      }),
      new MiniCssExtractPlugin({
        filename: './assets/[name].[contenthash].css'
      })
    ]
  };
};

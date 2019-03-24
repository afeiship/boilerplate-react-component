import webapck from 'webpack';
import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default (inEnv) => {
  console.log(process.argv);
  return {
    entry: './src/main.js',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        }
      ]
    },
    resolve: {
      extensions: ['.scss', '.js', '.jsx']
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: resolve(__dirname, './public/index.ejs')
      })
    ]
  };
};

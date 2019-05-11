import CopyWebpackPlugin from 'copy-webpack-plugin';
import baseConfig from '.';
import merge from 'webpack-merge';

export default merge(baseConfig, {
  entry: './src/main.js',
  output: {
    filename: 'index.js',
    library: 'BoilerplateReactComponent',
    libraryTarget: 'umd'
  },
  externals: {
    classnames: 'classnames',
    noop: 'noop',
    react: 'react',
    'react-dom': 'react-dom',
    'object-assign': 'object-assign',
    'prop-types': 'prop-types'
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: './src/components/style.scss',
        to: '.'
      },
      {
        from: './src/assets',
        to: 'assets'
      }
    ])
  ]
});

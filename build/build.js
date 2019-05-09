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
    react: 'React',
    classnames: 'classnames',
    noop: 'noop',
    'react-dom': 'ReactDOM',
    'object-assign': 'objectAssign',
    'prop-types': 'PropTypes'
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

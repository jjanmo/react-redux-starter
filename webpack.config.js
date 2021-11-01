const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: ['./src/index.js'],
  output: {
    path: path.resolve('./dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        exclude: [/node_modules/, require.resolve('./index.html')],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: 'index.html',
    }),
  ],
  devServer: {
    hot: 'only',
  },
};

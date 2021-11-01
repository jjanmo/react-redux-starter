const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv');
const webpack = require('webpack');

module.exports = () => {
  const env = dotenv.config().parsed;

  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});

  return {
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
    node: {
      fs: 'empty',
    },
    plugins: [
      new HTMLWebpackPlugin({
        template: 'index.html',
      }),
      new webpack.DefinePlugin(envKeys),
    ],
    devServer: {
      hot: 'only',
    },
  };
};

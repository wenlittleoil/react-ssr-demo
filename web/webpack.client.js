const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base');

const clientConfig = merge(baseConfig, {
  target: 'web',
  entry: './src/client/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'client.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          outputPath: 'images/',  // `${output.path}/images/`
          filename: '[hash][ext][query]',
          publicPath: 'http://localhost:3000/images/',
          emit: true, // emit assets in client side
        },
      },
    ],
  },
});

console.log('clientConfig: ', clientConfig);

module.exports = clientConfig;

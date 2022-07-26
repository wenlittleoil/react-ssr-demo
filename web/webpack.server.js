const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base');

// merge将创建一个全新对象，而不会影响到原有的baseConfig
const serverConfig = merge(baseConfig, {
  target: 'node',
  entry: './src/server/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.node.js',
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
          emit: false, // not emit assets in server side
        },
      },
    ],
  },
});

console.log('serverConfig: ', serverConfig)

module.exports = serverConfig;


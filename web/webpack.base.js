const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const NODE_ENV = process.env.NODE_ENV || 'development';
console.log('process.env.NODE_ENV:---', NODE_ENV);

module.exports = {
  mode: NODE_ENV,
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@client': path.resolve(__dirname, 'src/client'),
      '@server': path.resolve(__dirname, 'src/server'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@containers': path.resolve(__dirname, 'src/containers'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@assets': path.resolve(__dirname, 'src/assets'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-react',
              '@babel/preset-env',
            ]
          }
        }
      },
      { 
        test: /\.(sass|scss|css)$/i,
        use: [
          // {
          //   loader: MiniCssExtractPlugin.loader,
          //   options: {
          //     emit: false, // 服务端构建流程，无需释出css文件
          //   },
          // },
          // 'style-loader',

          './script/simplify-get-cls-loader',
          'isomorphic-style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: NODE_ENV === 'development' ?
                  "[path][name]__[local]__[hash:base64:5]" :
                  "[hash:base64:4]",
              },
            }
          },
          'sass-loader',
        ],
        exclude: /\.native\.(sass|scss|css)$/,
      },
      { 
        test: /\.native\.(sass|scss|css)$/, // .native.scss文件里的class保持原始类名
        use: [
          './script/simplify-get-cls-loader',
          'isomorphic-style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    // new MiniCssExtractPlugin({
    //   filename: "[name].css",
    //   chunkFilename: "[id].css",
    // }),
  ],
}

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 

module.exports = {
  mode: 'development',
  entry: {
    bundle: path.resolve(__dirname, 'src/script/index.js'),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: '[name][ext]',
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname,'dist'),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          }
        },
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(svg|jpg|jpeg|gif|webp)$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Ludicão | Black Friday',
      filename: 'index.html',
      template: 'src/template.html',
    }),
  ],
}
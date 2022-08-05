const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    background: [path.resolve(__dirname, 'extension', 'background.js')],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: path.resolve(__dirname, 'dist'),
  },
  devtool: 'source-map',
  optimization: {
    minimize: true,
    mangleWasmImports: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'extension', 'manifest.json'),
          to: path.resolve(__dirname, 'dist', '[name][ext]'),
        },
        {
          from: path.resolve(__dirname, 'src', 'assets', '**/*'),
          to: path.resolve(__dirname, 'dist', 'assets', '[name][ext]'),
        }
      ],
    }),
  ],
};

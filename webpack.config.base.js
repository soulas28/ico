/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const ESLintPlugin = require('eslint-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const Visualizer = require('webpack-visualizer-plugin2')
const TerserPlugin = require('terser-webpack-plugin')

const config = {
  mode: 'production',
  entry: './web-interface/src/index.tsx',
  module: {
    rules: [
      {
        test: /.*\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
          },
        },
      },
      {
        test: /.*\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-typescript'],
          },
        },
      },
      {
        test: /.*\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'output', 'web-interface'),
  },
  plugins: [
    new ESLintPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(
        __dirname,
        'web-interface',
        'assets',
        'index.html'
      ),
      inject: true,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'web-interface', 'assets'),
          globOptions: {
            ignore: [
              path.resolve(__dirname, 'web-interface', 'assets', 'index.html'),
            ],
          },
        },
      ],
    }),
    new Visualizer(),
  ],
  target: 'web',
  optimization: {
    minimizer: [new TerserPlugin()],
  },
}

module.exports = config

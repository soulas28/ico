const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: './web-interface/src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'output', 'web-interface'),
  },
  plugins: [
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
  ],
  target: 'web',
  optimization: {
    minimizer: [new TerserPlugin()],
  },
}

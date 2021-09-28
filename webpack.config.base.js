const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: './web-interface/src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'output', 'web-interface'),
  },
  plugins: [
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
}

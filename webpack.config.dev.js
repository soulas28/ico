const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.config.base')

const config = merge(baseConfig, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
})

module.exports = config

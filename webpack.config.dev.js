const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
const path = require('path')

const config = merge(baseConfig, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    compress: true,
    liveReload: true,
    port: 8080,
  },
})

module.exports = config

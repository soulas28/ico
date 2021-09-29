/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.config.base')

const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')

const smp = new SpeedMeasurePlugin()

const config = smp.wrap(
  merge(baseConfig, {
    mode: 'development',
    devtool: 'eval-cheap-module-source-map',
    devServer: {
      compress: true,
      liveReload: true,
      port: 8080,
    },
  })
)
module.exports = config

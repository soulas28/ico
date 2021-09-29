/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.config.base')

const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')

const smp = new SpeedMeasurePlugin()

const config = smp.wrap(
  merge(baseConfig, {
    mode: 'production',
  })
)

module.exports = config

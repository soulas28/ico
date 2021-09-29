/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require('webpack-merge')
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')

const baseConfig = require('./webpack.config.base')

const smp = new SpeedMeasurePlugin()

const config = smp.wrap(
  merge(baseConfig, {
    mode: 'production',
  })
)

module.exports = config

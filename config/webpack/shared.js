// Note: You must restart bin/webpack-dev-server for changes to take effect

/* eslint global-require: 0 */
/* eslint import/no-dynamic-require: 0 */

const webpack = require('webpack')
const { basename, dirname, join, relative, resolve } = require('path')
const { sync } = require('glob')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const extname = require('path-complete-extname')
const { env, paths, publicPath, loadersDir } = require('./configuration.js')

const extensionGlob = `**/*{${paths.extensions.join(',')}}*`
const packPaths = sync(join(paths.source, paths.entry, extensionGlob))

module.exports = {
  entry: packPaths.reduce(
    (map, entry) => {
      const localMap = map
      const namespace = relative(join(paths.source, paths.entry), dirname(entry))
      localMap[join(namespace, basename(entry, extname(entry)))] = resolve(entry)
      return localMap
    }, {}
  ),

  output: {
    filename: '[name].js',
    path: resolve(paths.output, paths.entry),
    publicPath
  },

  module: {
    rules: sync(join(loadersDir, '*.js')).map(loader => require(loader))
  },

  plugins: [
    new webpack.EnvironmentPlugin(JSON.parse(JSON.stringify(env))),
    new ExtractTextPlugin(env.NODE_ENV === 'production' ? '[name]-[hash].css' : '[name].css'),
    new ManifestPlugin({ fileName: paths.manifest, publicPath, writeToFileEmit: true }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      jquery: 'jquery'
    })
  ],

  resolve: {
    extensions: paths.extensions,
    modules: [
      resolve(paths.source),
      resolve(paths.node_modules)
    ],
    alias: {
      jquery: "jquery/src/jquery"
    }
  },

  resolveLoader: {
    modules: [paths.node_modules]
  }
}

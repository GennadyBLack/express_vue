const path = require('path')

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias.set('@', path.resolve(__dirname, 'src'))
    config.resolve.alias.set('~', path.resolve(__dirname, 'src'))
  },
  devServer: {
    port: 4200,
  },
  css: {
    extract: true,
    // requireModuleExtension: true,
  },
}

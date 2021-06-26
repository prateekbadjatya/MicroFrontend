const HtmlWebpackPlugin = require('html-webpack-plugin')


const ModuleFerationPlugin = require('webpack/lib/container/ModuleFederationPlugin') 

module.exports = {
    mode: "development",
    devServer: {
        port: 8082,
    },
    plugins: [
        new ModuleFerationPlugin({
          name: 'cart',
          filename: 'remoteEntry.js',
          exposes: {
            './CartShow': './src/index.js'
          }
        }),
        new HtmlWebpackPlugin({
          template: "./public/index.html"
        })
      ]
}
const HtmlWebpackPlugin = require("html-webpack-plugin");

const ModuleFerationPlugin = require('webpack/lib/container/ModuleFederationPlugin') 

module.exports = {
  mode: "development",
  devServer: {
    port: 8081,
  },
  plugins: [
    new ModuleFerationPlugin({
      name: 'products',
      filename: 'remoteEntry.js',
      exposes: {
        './ProductsIndex': './src/index.js'
      }
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ]
};

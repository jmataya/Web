var path = require("path");

module.exports = {
  entry: "./app/client.jsx",
  output: {
    path: path.resolve(__dirname, "public"),
    publicPath: '/',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel'
      }
    ]
  },
  devServer: {
    host: "0.0.0.0",
    contentBase: "public/"
  }
}
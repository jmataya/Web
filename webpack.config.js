var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  // Set our entry point to the application.
  entry: "./app/client.jsx",

  // Set output path/file for transpiled javascript
  output: {
    path: path.resolve(__dirname, "public"),
    publicPath: '/',
    filename: "bundle.js"
  },

  // These options affect the resolution of modules when calling require(...)
  resolve: {
    // Add "./app" to path when resolving require.  Allows us to do things like
    // "require(components/Site)".
    root: [
      path.resolve('./app'),
      path.resolve('./app/components') // so we don't have to specifiy "components/" each time
    ],

    // Include ".jsx" extensions.  Everything else here is the default
    extensions: ["", ".webpack.js", ".web.js", ".js", ".jsx"]
  },

  module: {
    loaders: [
      // Process .js and .jsx files with Babel.  We're only using two Babel
      // presets for now: 'react' and 'es2015'.
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },

      // Process .css files with style-loader, css-loader, and the extract-
      // text-webpack-plugin.
      {
        test: /\.css$/,
        // Note: the 'style' loader is used when css is not extracted.  See
        // https://github.com/webpack/extract-text-webpack-plugin for more
        // info. The output file ("style.css") is specified below in the
        // "plugins" section.
        loader: ExtractTextPlugin.extract(
          'style',
          'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
        )
      },

      // Inline svg files directly into the DOM
      {
        test: /\.svg$/,
        loader: 'svg-inline'
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin("styles.css")
  ],

  // Configuration for the webpack-dev-server.  We explicitly specify a host of
  // 0.0.0.0 (as opposed to localhost) to make the development server
  // accessible from outside of a virtual machine.
  devServer: {
    host: "0.0.0.0",
    contentBase: "public/"
  }
}
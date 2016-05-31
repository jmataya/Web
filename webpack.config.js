var path = require("path");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

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
      path.resolve('./app/components') // for convenience when referencing components
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
        loader: ExtractTextPlugin.extract(
          // The first param a loader to be used when a chunk isn't processed.
          // This really shouldn't be used.
          //
          // `style-loader` loads css files and injects them into the DOM via a
          // <style> tag.
          'style-loader',

          [
            // `css-loader` processes @import and url() directives in your css like
            // require(). It also implements CSS Modules (read more here:
            // https://github.com/webpack/css-loader#css-modules) and minifies
            // css.
            'css-loader',

            // `postcss-loader` processes files using the PostCSS plugins below.
            'postcss-loader'
          ]
        )
      },

      // Inline svg files directly into the DOM.  Note: this doesn't work in
      // css url() references.
      {
        test: /\.svg$/,
        loader: 'svg-inline'
      }
    ]
  },

  // Webpack plugins here
  plugins: [
    new ExtractTextPlugin("styles.css")
  ],

  // PostCSS-specific plugins
  postcss: function(webpack) {
    return [
      require('postcss-import')({
        addDependencyTo: webpack,
        path: ['app', 'app/components', 'app/styles', 'node_modules'],
      }),
      require('postcss-css-variables'),
      require('lost')({
        flexbox: 'flex',
        gutter: '2.4%',
      }),
      require('postcss-modules-values'),
      require('postcss-modules-extract-imports'),
      require('postcss-modules-local-by-default'),
      require('postcss-modules-scope'),
      require('postcss-cssnext')()
    ];
  },

  // Configuration for the webpack-dev-server.  We explicitly specify a host of
  // 0.0.0.0 (as opposed to localhost) to make the development server
  // accessible from outside of a virtual machine.
  devServer: {
    host: "0.0.0.0",
    contentBase: "public/"
  }
}
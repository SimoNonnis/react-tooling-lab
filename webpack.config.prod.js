var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = {
  entry: {
    bundle: './src/main.js'
  },
  output: {
    filename: './dist/[name].js'
  },
  module: {
    loaders: [
      {
      test: /\.js$/, // ← Test for ".js" file, if it passes, use the loader
      include: /src/,
      loaders: [
        'babel' // ← Use babel (short for ‘babel-loader’) loads collection ofES6 transforms, JSX for react etc.. from .babelrc file
      ]
      },
      {
        test: /\.css$/, // ← Test for ".css" file, if it passes, use the loader
        loader: ExtractTextPlugin.extract(
          'css?modules&localIdentName=[name]__[local]____[hash:base64:5]!postcss' // ← loaders working right to left. ExtractTextPlugin requires use of ! syntax.
        )
      }
    ]
  },
  postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
  plugins: [
    new ExtractTextPlugin('./dist/main.min.css')
  ]
};

module.exports = config;

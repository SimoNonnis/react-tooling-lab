var autoprefixer = require('autoprefixer');
const validate = require('webpack-validator');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');

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
        loader: 'babel' // ← Use babel (short for ‘babel-loader’) loads collection of ES6 transforms, JSX for react etc.. from .babelrc file
      },
      {
        test: /\.css$/, // ← Test for ".css" file, if it passes, use the loader
        include: [ path.resolve(__dirname, 'src/components') ],
        loader: ExtractTextPlugin.extract(
          'css?modules&localIdentName=[name]__[local]____[hash:base64:5]!postcss' // ← loaders working right to left. ExtractTextPlugin requires use of ! syntax.
        )
      },
      {
        test: /\.(jpg|png|gif)$/,
        include: [ path.resolve(__dirname, 'src/images') ],
        loader: 'url?limit=25000'
      }
    ]
  },
  postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
  plugins: [
    new ExtractTextPlugin('./dist/main.min.css')
  ]
};

module.exports = validate(config);

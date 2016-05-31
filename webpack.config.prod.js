const autoprefixer = require('autoprefixer');
const validate = require('webpack-validator');
const extractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');
const webpack = require('webpack');





const config = {
  entry: {
    vendor: ['react', 'react-dom'],
    app: './src/main.js'
  },
  output: {
    filename: './dist/[name].[chunkhash].js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/, // ← Test for ".js" file, if it passes, use the loader
        include: /src/,
        loader: 'babel' // ← Use babel (short for ‘babel-loader’) loads collection of ES6 transforms, JSX for react etc.. from .babelrc file
      },
      {
        test: /\.css$/, // ← Test for ".css" file, if it passes, use the loader
        include: /src/,
        loader: extractTextPlugin.extract(
          'css?modules&localIdentName=[name]__[local]____[hash:base64:5]!postcss' // ← loaders working right to left. ExtractTextPlugin requires use of ! syntax.
        )
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        include: [ path.resolve(__dirname, 'src/images') ],
        loaders: [
          'file?name=./dist/[name].[hash].[ext]',
          'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
        ]
      }
    ]
  },
  postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
  plugins: [
    new extractTextPlugin('./dist/main.min.css'),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({ // ← optimize the react bundle for production
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity // ← just creates the commons chunk, but no modules into it
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ]
};

module.exports = validate(config);

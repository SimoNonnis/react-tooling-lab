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
       exclude: /node_modules/,
       loader: 'babel' // ← Use babel (short for ‘babel-loader’) loads collection of ES6 transforms, JSX for react etc.. from .babelrc file
     },
     {
       test: /\.css$/, // ← Test for ".css" file, if it passes, use the loader
       loader: 'style!css!postcss' // ← loaders working right to left
     }
   ]
 },
 postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ]
};

module.exports = config;

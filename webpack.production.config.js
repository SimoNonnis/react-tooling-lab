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
       test: /\.css$/,
       loader: 'style!css!autoprefixer!' // ← loaders working right to left
     }
   ]
 }
};

module.exports = config;

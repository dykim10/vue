const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path');

module.exports = {
  mode: 'development',
  devtool : 'eval',
  resolve: {
    extensions: ['.js', '.vue'],
  },
  entry: {
    app: path.join(__dirname,'main.js'),
  },
  //webpack의 핵심
  module: {
    rules:[{
      test: /\.vue$/,
      loader: 'vue-loader',
    }],
  },
  plugins: [],  
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),//'./dist',
  },
};
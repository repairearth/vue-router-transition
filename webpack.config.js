
module.exports = {
  entry: './index.js',

  output: {
    library: 'VueRouterTransition',
    libraryTarget: 'umd',
    path: 'umd',
    filename: 'vue-router-transition.min.js'
  },

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        cacheDirectory: true,
        presets: ['es2015', 'stage-0']
      }
    }],
    resolve: {
      extensions: ['', '.js']
    }
  }
}
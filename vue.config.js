module.exports = {
  publicPath: '/i4website/',
  transpileDependencies: ['vuetify'],
  devServer: {
    historyApiFallback: {
      rewrites: [
        {from: /\/index/, to: '/index.html'},
      ]
    }
  }
}
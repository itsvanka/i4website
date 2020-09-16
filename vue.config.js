module.exports = {
  publicPath: '/',
  transpileDependencies: ['vuetify'],
  devServer: {
    historyApiFallback: {
      rewrites: [
        {from: /\/index/, to: '/index.html'},
      ]
    }
  }
}
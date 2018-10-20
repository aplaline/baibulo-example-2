const webpack = require('webpack')

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          'GIT_COMMIT': JSON.stringify(process.env.GIT_COMMIT),
          'GIT_BRANCH': JSON.stringify(process.env.GIT_BRANCH)
        }
      })
    ]
  }
}

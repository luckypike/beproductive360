const { environment } = require('@rails/webpacker')

environment.loaders.append('mp4', {
  test: /\.mp4$/,
  use: 'file-loader'
})

module.exports = environment

const browserify = require('browserify')()
const fs = require('fs')
const path = require('path')

const resolve = file => path.join(__dirname, file)

// ADD: Add app entry point
browserify.add(resolve('./index.js'))

// TRANSFORM: Specify transforms to be applied before parsing code
//
// Allow a selection of nice features from modern JavaScript
// in old browsers: https://github.com/yoshuawuyts/es2020
browserify.transform('es2020')

// Make all the frontend element construction suuuuuper fast
browserify.transform('yo-yoify')

// Minify the compiled code
browserify.transform('uglifyify', {
  global: true
})

browserify.bundle().pipe(
  fs.createWriteStream(resolve('../assets/bundle.js'))
).on('end',
  () => console.log('Build completed successfully')
).on('error',
  err => console.error('Error during build process', err)
).on('finish',
  () => console.log('Build completed successfully')
)

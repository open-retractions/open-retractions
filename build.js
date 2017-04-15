const browserify = require('browserify')()
const fs = require('fs')

// ADD: Add app entry point
browserify.add('./index.js')

// TRANSFORM: Specify transforms to be applied before parsing code
//
// Allow a selection of nice features from modern JavaScript
// in old browsers: https://github.com/yoshuawuyts/es2020
browserify.transform('es2020')

//
// Minify the compiled code
// browserify.transform('uglifyify', {
//   global: true
// })

browserify.bundle().pipe(
  fs.createWriteStream('bundle.js')
).on('end',
  () => console.log('Build completed successfully')
).on('error',
  err => console.error('Error during build process', err)
).on('finish',
  () => console.log('Build completed successfully')
)

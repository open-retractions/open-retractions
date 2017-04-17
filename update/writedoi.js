const fs = require('fs-extra')

module.exports = () => require('through2').obj((data, enc, done) => {
  const doipath = path.join(__dirname, '..', 'api', 'doi', data.doi, 'data.json')
  fs.readJson(doipath, err => {
    if (err) {
      console.log('writing retraction to ', doipath)
      fs.writeJson(doipath, done)
    } else {
      console.log('retraction already at ', doipath)
      done()
    }
  })
})

const fs = require('fs-extra')
const path = require('path')
const retraction = require('open-retractions-datum')

module.exports = () => require('through2').obj((data, enc, done) => {
  const doipath = path.join(__dirname, '..', 'api', 'doi', data.identifier.doi)
  fs.ensureDirSync(doipath)
  const jsonpath = path.join(doipath, 'data.json')

  fs.readJson(jsonpath, (err, data2) => {
    if (!err) {
      console.log('merging retractions')
      data = retraction.merge(data, data2)
    }
    console.log('writing retraction to ', jsonpath)
    fs.writeJson(jsonpath, data, done)
  })
})

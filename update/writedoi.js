module.exports = () => require('through2').obj((data, enc, done) => {
  const doipath = path.join(__dirname, '..', 'api', 'doi', data.doi, 'data.json')
  fs.readJson(doipath, err => {
    if (err) fs.writeJson(doipath, done)
    else done()
  })
})

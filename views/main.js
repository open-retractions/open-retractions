var html = require('choo/html')
var choo = require('choo')

module.exports = (state, emit) => {
  return html`

  <div id="main-content">
    <h1>Open retractions</h1>
    <h2>Check whether any journal article has been retracted</h2>
    ${require('./search')(state, emit)}
    ${require('./result')(state, emit)}
    <p id="api-link">If you like this tool, maybe you'll want to use ✨ <a href="https://github.com/fathomlabs/open-retractions">our API</a> ✨.</p>
  </div>

  `
}

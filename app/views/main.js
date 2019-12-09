var html = require('choo/html')
var choo = require('choo')

module.exports = (state, emit) => {
  return html`

  <div id="main-content">
    <h1>Open retractions</h1>
    <h2>Check for retraction notices of any journal article*</h2>
    ${require('./search')(state, emit)}
    ${require('./result')(state, emit)}
    <p id="api-link">If you like this tool, maybe you'll want to use ✨ <a href="https://github.com/fathomlabs/open-retractions" data-no-routing>our API</a> ✨.</p>
    <p>* we only know about retractions and other updates that publishers have properly reported to CrossRef or PubMed. That's currently 98,747 papers.</p>
  </div>

  `
}

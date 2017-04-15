var html = require('choo/html')

module.exports = (state, emit) => {
  const form = html`

  <form id="search-form" action="#" method="post">
    <div id="input-wrapper">
      <input id="search-input" type="search" placeholder="enter DOI, PubMed ID, or PMCID">
      <input id="search-submit" type="submit" value="&#10140;"/>
    </div>
  </form>

  `

  form.onsubmit = e => {
    e.preventDefault()
    emit('search', e.target.value)
  }

  return html`<div id="search-wrapper">${form}</div>`
}

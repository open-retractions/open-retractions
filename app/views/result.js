var html = require('choo/html')

const updateid = update => {
  const idtype = update.doi ? 'DOI' : 'PMID'

  return html`

  <tr><td class="field">Update ${idtype}:</td><td>${update.doi || update.pmid}</td></tr>

  `
}

const updatelink = update => {
  if (update.doi) {
    return html`

    <a href="http://doi.org/${update.doi}">http://doi.org/${update.doi}</a>

    `
  } else {
    return html`

    <a href="http://europepmc.org/abstract/MED/${update.pmid}">http://europepmc.org/abstract/MED/${update.pmid}</a>

    `
  }
}

const timestamp = update => {
  return update.timestamp ? (new Date(update.timestamp)).toLocaleString() : 'unknown'
}

module.exports = (state, emit) => {
  if (state.error) {
    return require('./error')()
  } else if (!state.query) {
    return null
  } else if (state.result) {

    const msg = state.result.retracted
      ? '‼️ This article has been retracted ‼️'
      : 'We have no recorded retraction for this article, but it has an update you should be aware of:'

    return html`

    <div id="result-wrapper">
      <h2 id="result-msg">${msg}</h2>
      <div class="datagrid">
        <table>
          <tfoot>
            <tr>
              <td colspan="2">
                <div id="no-paging">
                  <a href="${state.result.jsonpath}" data-no-routing>Download this result as JSON</a>
                </div>
              </td>
            </tr>
          </tfoot>
          <tbody>
            <tr><td class="field">Title:</td><td>${state.result.title}</td></tr>
            <tr><td class="field">Journal:</td><td>${state.result.journal}</td></tr>
            <tr><td class="field">Publisher:</td><td>${state.result.publisher || 'unknown'}</td></tr>
            <tr><td class="field">Article DOI:</td><td>${state.result.doi}</td></tr>
            <tr><td class="field">Article link:</td><td><a href="http://doi.org/${state.result.doi}">http://doi.org/${state.result.doi}</a></td></tr>
            ${updateid(state.result.update)}
            <tr><td class="field">Update link:</td><td>${updatelink(state.result.update)}</td></tr>
            <tr><td class="field">Update type:</td><td>${state.result.update.type}</td></tr>
            <tr><td class="field">Update date:</td><td>${timestamp(state.result.update)}</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    `
  } else {
    return html`

    <div id="result-wrapper">
      <h2>✨ No retraction that we know of ✨</h2>
      <p id="result-msg">We do not have any record of a retraction or other update for this article.</p>
    </div>

    `
  }
}

var html = require('choo/html')

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
            <tr><td class="field">Publisher:</td><td>${state.result.publisher}</td></tr>
            <tr><td class="field">Article DOI:</td><td>${state.result.doi}</td></tr>
            <tr><td class="field">Article link:</td><td><a href="http://doi.org/${state.result.doi}">http://doi.org/${state.result.url}</a></td></tr>
            <tr><td class="field">Update DOI:</td><td>${state.result.update.doi}</td></tr>
            <tr><td class="field">Update link:</td><td><a href="http://doi.org/${state.result.update.doi}">http://doi.org/${state.result.update.doi}</a></td></tr>
            <tr><td class="field">Update type:</td><td>${state.result.update.type}</td></tr>
            <tr><td class="field">Update date:</td><td>${state.result.update.timestamp}</td></tr>
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

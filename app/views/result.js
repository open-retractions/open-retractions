var html = require('choo/html')

module.exports = (state, emit) => {
  if (state.error) {
    return require('./error')()
  } else if (!state.query) {
    return null
  } else if (state.result) {
    const msg = state.result.retracted
      ? '‼️ This article has been retracted ‼️'
      : 'This article has not been retracted, but has an update you should be aware of'

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
            <tr><td class="field">Article link:</td><td><a href="${state.result.url}">${state.result.url}</a></td></tr>
            <tr><td class="field">Update:</td><td>${state.result.update}</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    `
  } else {
    return html`

    <div id="result-wrapper">
      <h2>✨ Not retracted ✨</h2>
      <p id="result-msg">No retraction has been registered for this paper.</p>
    </div>

    `
  }
}

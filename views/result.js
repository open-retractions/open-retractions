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
      <p id="result-msg">${msg}</p>
      <ul>
        <li>Title: <strong>${result.title}</strong></li>
        <li>Journal: <strong>${result.journal}</strong></li>
        <li>Article link: <strong><a href="${result.url}">${result.url}</a></strong></li>
        <li>Update: <strong>${result.update}</strong></li>
      </ul>
      <p><a href="${result.jsonpath}" data-no-routing>Download this result as JSON</a></p>
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

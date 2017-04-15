var html = require('choo/html')

module.exports = (state, emit) => {
  if (!state.query) {
    return null
  } else if (state.error) {
    return require('./error')()
  } else if (state.result) {
    const msg = state.result.retracted
      ? 'This article has been retracted'
      : 'This article has not been retracted, but has an update you should be aware of'

    return html`

      <div id="result-wrapper">
        <p id="result-msg">${msg}</p>
        <ul>
          <li>Title: <strong>${result.title}</strong></li>
          <li>Article link: <strong><a href="${result.url}">${result.url}</a></strong></li>
          <li>Update URL: <strong><a href="${result.updateurl}">${result.updateurl}</a></strong></li>
          <li>Update: <strong>${result.update}</strong></li>
        </ul>
      </div>

    `
  }
}

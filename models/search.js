const fetch = require('whatwg-fetch')
const BASE_URL = 'http://openretractions.com/'

const querybuilder = query => {
  if (/^10.+\//.test(query)) {
    // it's a DOI
    return `doi/${query}`
  } else if (/$PMC/.test(query)) {
    // it's a PubMedCentral ID
    return `pmc/${query}`
  } else if (/^[0-9]+$/.test(query)) {
    // it's at least plausibly a PubMed ID
    return `pubmed/${query}`
  } else {
    // wtf is it?
    return null
  }
}

const checkStatus = response => {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

module.exports = (state, bus) => {
  state.query = null
  state.error = false

  const render = () => bus.emit('render')

  const clear = () => {
    state.query = null
    state.result = null
    state.error = false
    render()
  }

  const badinput = () => {
    state.error = true
    render()
  }

  const result = res => bus.emit('result', res)
  const noresult = () => bus.emit('noresult')

  const search = query => {
    const querypath = querybuilder(query.trim())

    if (!querypath) return badinput()

    state.query = query

    fetch(
      querypath
    ).then(
      res => res.json()
    ).then(
      result
    ).catch(
      noresult
    )
  }
}

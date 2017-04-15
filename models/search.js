const fetch = require('whatwg-fetch')
const BASE_URL = 'http://openretractions.com/api/'

const url = query => `${BASE_URL}/${query}`

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

  const result = (res, jsonpath) => {
    res.jsonpath = jsonpath
    bus.emit('result', res)
  }
  const noresult = () => bus.emit('noresult')

  const search = query => {
    const queryurl = url(querybuilder(query.trim()))

    if (!queryurl) return badinput()

    state.query = query

    fetch(
      queryurl
    ).then(
      res => res.json()
    ).then(
      res => result(res, queryurl)
    ).catch(
      noresult
    )
  }
}

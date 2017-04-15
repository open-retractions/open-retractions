module.exports = (state, bus) => {
  state.result = null

  const scroll = require('../helpers/scrolltoresults')

  const render = () => {
    bus.emit('render')
    scroll()
  }
  const result = data => {
    state.result = data
    render()
  }
  const noresult = () => {
    state.result = null
    render()
  }

  bus.on('result', result)
  bus.on('noresult', noresult)
}

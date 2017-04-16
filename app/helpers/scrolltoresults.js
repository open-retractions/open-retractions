module.exports = () => {
  let interval

  const tryscroll = () => {
    const element = document.querySelector('#result-wrapper')
    if (element) {
      clearInterval(interval)
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  interval = setInterval(tryscroll, 100)
}

function handleWindowResize () {
  document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px'
}

handleWindowResize()

window.addEventListener('resize', handleWindowResize)
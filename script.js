
let Dark = false
const DarkOrLight = () => {
  const container = document.getElementsByClassName('container')[0]
  if (!Dark) {
    container.style.backgroundPosition = 'right'
  } else {
    container.style.backgroundPosition = 'left'
  }
  Dark = !Dark
}

let darkMode = localStorage.getItem('darkMode')
const darkModeToggleButton = document.querySelector('.dark-mode-button')
const icon = darkModeToggleButton.querySelector('i')

const enableDarkMode = () => {
  document.body.classList.add('dark-mode')
  icon.classList.add('ic-light')
  icon.classList.remove('ic-dark')
  localStorage.setItem('darkMode', 'enabled')
}

const disableDarkMode = () => {
  document.body.classList.remove('dark-mode')
  icon.classList.add('ic-dark')
  icon.classList.remove('ic-light')
  localStorage.setItem('darkMode', null)
}

if (darkMode === 'enabled') enableDarkMode()

function toggleDarkMode() {
  darkMode = localStorage.getItem('darkMode')

  if (darkMode !== 'enabled') {
    enableDarkMode()
  } else {
    disableDarkMode()
  }
}
document.addEventListener('DOMContentLoaded', () => {
  darkModeToggleButton.addEventListener('click', toggleDarkMode)
})

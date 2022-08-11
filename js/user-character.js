const userCharacter = document.querySelector('.user-character')
const userCharacterButton = userCharacter.querySelector(
  '.user-character__button'
)

function closeUserCharacterOnClickingOutside(e) {
  if (!userCharacter.contains(e.target)) {
    userCharacter.classList.remove('is-active')
    window.removeEventListener('click', closeUserCharacterOnClickingOutside)
  }
}

function toggleUserCharacter() {
  if (!userCharacter.classList.contains('is-active')) {
    window.addEventListener('click', closeUserCharacterOnClickingOutside)
  }
  userCharacter.classList.toggle('is-active')
}
userCharacterButton.addEventListener('click', toggleUserCharacter)

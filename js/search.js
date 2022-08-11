const searchSection = document.querySelector('.search')
const searchInput = document.querySelector('.search__input')
const searchSuggestion = document.querySelector('.search__suggestion')

const deleteBtn = document.querySelector('.search__delete')

function closeSearchSuggetion() {
  searchSuggestion.classList.remove('is-active')
  window.removeEventListener('click', closeSearchSuggestionOnClickingOutside)
}

function closeSearchSuggestionOnClickingOutside(e) {
  if (!searchSection.contains(e.target)) {
    closeSearchSuggetion()
  }
}

function openSearchSuggestion() {
  if (!searchSuggestion.classList.contains('is-active')) {
    window.addEventListener('click', closeSearchSuggestionOnClickingOutside)
  }
  if (this.value) {
    return
  }
  searchSuggestion.classList.add('is-active')
  deleteBtn.classList.remove('is-active')
}

function showDeleteBtn() {
  deleteBtn.classList.add('is-active')
  closeSearchSuggetion()
}

function closeDeleteBtn(e) {
  if (!this.value) {
    openSearchSuggestion()
  }
}
searchInput.addEventListener('focus', openSearchSuggestion)
searchInput.addEventListener('input', showDeleteBtn)
searchInput.addEventListener('keydown', closeDeleteBtn)

function deleteSearchInputText() {
  searchInput.value = ''
  openSearchSuggestion()
}
deleteBtn.addEventListener('click', deleteSearchInputText)

const openListButton = document.querySelector('.player .player__btn--open-list')
const playlist = document.querySelector('.player-playlist')
const closePlaylistButton = playlist.querySelector(
  '.player-playlist__btn--close'
)

function togglePlaylist() {
  playlist.classList.toggle('is-active')
}
openListButton.addEventListener('click', togglePlaylist)

function closePlaylist() {
  playlist.classList.remove('is-active')
}
closePlaylistButton.addEventListener('click', closePlaylist)

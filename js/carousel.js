const playlistCarousel = tns({
  container: '.playlist-carousel .slider__list',
  slideBy: 'page',
  autoplay: false,
  controls: true,
  controlsContainer: '.playlist-carousel .playlist-carousel__controls',
  loop: false,
  navContainer: '.playlist-carousel .thumbnail__list',
  navAsThumbnails: true,
  mouseDrag: true,
  preventScrollOnTouch: true,
})

const todayGallery = tns({
  container: '.today-gallery .slider__list',
  items: 10,
  mode: 'gallery',
  slideBy: 'page',
  autoplay: false,
  controls: true,
  controlsContainer: '.today-gallery .today-gallery__navigator',
  navAsThumbnails: false,
  mouseDrag: true,
  preventScrollOnTouch: true,
})

const afternoonPlaylist = tns({
  container: '.flo-section--afternoon .playlist .slider__list',
  items: 5,
  mode: 'gallery',
  slideBy: 'page',
  autoplay: false,
  controls: true,
  controlsContainer: '.flo-section--afternoon .playlist .playlist__controls',
  loop: false,
  navAsThumbnails: false,
  mouseDrag: true,
  preventScrollOnTouch: true,
})

const todayRecommendList = tns({
  container: '.flo-section--today-recommend .slider__list',
  items: 2,
  mode: 'gallery',
  slideBy: 'page',
  autoplay: false,
  controls: true,
  controlsContainer: '.flo-section--today-recommend .recommend-list__controls',
  navAsThumbnails: false,
  mouseDrag: true,
  preventScrollOnTouch: true,
})

const favArtistList = tns({
  container: '.flo-section--fav-artist .slider__list',
  items: 2,
  mode: 'gallery',
  slideBy: 'page',
  autoplay: false,
  controls: true,
  controlsContainer: '.flo-section--fav-artist .recommend-list__controls',
  navAsThumbnails: false,
  mouseDrag: true,
  preventScrollOnTouch: true,
})

const holidayPlaylist = tns({
  container: '.flo-section--holiday .playlist .slider__list',
  items: 5,
  mode: 'gallery',
  slideBy: 'page',
  autoplay: false,
  controls: true,
  controlsContainer: '.flo-section--holiday .playlist .playlist__controls',
  navAsThumbnails: false,
  mouseDrag: true,
  preventScrollOnTouch: true,
})

const firstHalfGallery = tns({
  container: '.first-half-gallery .slider__list',
  items: 3,
  mode: 'gallery',
  slideBy: 'page',
  autoplay: false,
  controls: true,
  controlsContainer: '.first-half-gallery .first-half__controls',
  navAsThumbnails: false,
  mouseDrag: true,
  preventScrollOnTouch: true,
})

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
  loop: false,
  navAsThumbnails: false,
  mouseDrag: true,
  preventScrollOnTouch: true,
})

const playlistCarousel = tns({
  container: '.playlist-carousel .slider__list',
  slideBy: 'page',
  autoplay: false,
  controls: true,
  controlsContainer: '.playlist-carousel__controls',
  loop: false,
  navContainer: '.playlist-carousel .thumbnail__list',
  navAsThumbnails: true,
  mouseDrag: true,
  preventScrollOnTouch: true,
})

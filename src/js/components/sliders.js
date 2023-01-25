import Swiper, {
  Navigation,
  Pagination
} from 'swiper';

const swiper = new Swiper('.cottages__slider', {
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: ".cottages__btn-arrow_next",
    prevEl: ".cottages__btn-arrow_prev",
  },
  pagination: {
    el: ".slider-pagination",
    clickable: true,
  },
  grabCursor: true,
  speed: 800,
  spaceBetween: 30,
  loop: true
});

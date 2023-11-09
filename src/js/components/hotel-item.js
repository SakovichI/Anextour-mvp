import Swiper, {Navigation, Pagination, Scrollbar} from 'swiper';
Swiper.use([Navigation, Pagination, Scrollbar]);
const swiper = new Swiper(".hotel-item-slider", {
  wrapperClass: 'sliderMy__wrapper',
  slideClass: 'sliderMy__slide',
  slidesPerView: 1,
  spaceBetween: 12,
  preventClick: true,
  navigation: {
    nextEl: '.sliderMy__btn--next',
    prevEl: '.sliderMy__btn--prev',
  }
});

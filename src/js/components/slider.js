import Swiper, {Navigation, Pagination, Scrollbar} from 'swiper';
Swiper.use([Navigation, Pagination, Scrollbar]);
const slider = new Swiper(".sliderMy", {
  wrapperClass: 'sliderMy__wrapper',
  slideClass: 'sliderMy__slide',
  slidesPerView: "auto",
  spaceBetween: 12,
  preventClick: true,
  navigation: {
    nextEl: '.sliderMy__btn--next',
    prevEl: '.sliderMy__btn--prev',
  },
  scrollbar: {
    el: '.sliderMy__scrollbar',
    draggable: true,
    dragSize:92,
  },
  breakpoints: {
    700:{
      spaceBetween: 32,
      scrollbar: {
        el: '.sliderMy__scrollbar',
        draggable: true,
        dragSize:164,
      }
    }
  },
});

import Swiper, {Navigation, Pagination, Scrollbar} from 'swiper';
Swiper.use([Navigation, Pagination, Scrollbar]);
const swiperPopular = new Swiper(".popular-hotels__slider", {
  direction:'vertical',
  wrapperClass: 'sliderMy__wrapper',
  slideClass: 'sliderMy__slide',
  slidesPerView: 'auto',
  spaceBetween:12,
  preventClick: true,
  initialSlide:2,
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
      direction:'horizontal',
      slidesPerView: "auto",
      spaceBetween:32,
      centeredSlides:true,
      scrollbar: {
        el: '.sliderMy__scrollbar',
        draggable: true,
        dragSize:164,
      },
    }
  },
});

import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';



const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination, Autoplay],
  loop: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});



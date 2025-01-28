// document.addEventListener('DOMContentLoaded', () => {
//     const burgerMenu = document.querySelector('.burger-menu');
//     const mobileMenu = document.querySelector('.mobile_menu');
//     if(burgerMenu && mobileMenu){
//         burgerMenu.addEventListener('click', () => {
//             burgerMenu.classList.toggle('open');
//            mobileMenu.classList.toggle('active'); 
//         });
//     }
// });

import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules"; 

const swiper = new Swiper('.swiper-info', {
    slidesPerView: 1,
    spaceBetween: 5,
    modules: [Navigation, Pagination],
    navigation: {
        nextEl: '.info-button-next',
        prevEl: '.info-button-prev',
    },
    pagination: {
        el: '.info-pagination',
        clickable: true,
    },
    breakpoints: {
        600: {
            slidesPerView: 2,
            spaceBetween: 18
        },
        1050: {
            slidesPerView: 3,
            spaceBetween: 10
        },
        1250: {
            slidesPerView: 1,
            spaceBetween: 5
        }
    }
  });
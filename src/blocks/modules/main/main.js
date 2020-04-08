 window.addEventListener('DOMContentLoaded', () => {
     const mySwiper = new Swiper('.swiper-container', {
         // Optional parameters
         init: window.innerWidth < 768 ? true : false,
         direction: 'horizontal',
         loop: true,
         speed: 500
    
     });
    
     const swiperStyles = `<link rel="stylesheet" href="https://unpkg.com/swiper/css/swiper.min.css">`;
     if (window.innerWidth < 768) {
         document.querySelector('.header').insertAdjacentHTML('beforebegin', swiperStyles)
     }    
 })
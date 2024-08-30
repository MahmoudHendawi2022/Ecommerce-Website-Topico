// swiper
var swiper = new Swiper(".slide-swp", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullestes: true,
  },
  loop: true,
  autoplay: {
    delay: 2500,
  },
});
// ///////////////////////////////////
var swiper = new Swiper(".sales-swip", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  spaceBetween: 30,
  slidesPerView: 5,
  // loopAdditionalSlides: 5,

  loop: true,
  autoplay: {
    delay: 3000,
  },

  breakpoints: {
    
    1200: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 20,

    },
    767: {
      slidesPerView: 3,
      spaceBetween: 15,

    },
    560: {
      slidesPerView: 2,
      spaceBetween: 10,

    },
    0:{
      slidesPerView : 1,
    },
  },
});
////////////////////////////////////////////////////////////
var swiper = new Swiper(".computer-swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  spaceBetween: 30,
  slidesPerView: 4,
  loop: true,
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    
    1200: {
      slidesPerView: 4,
      

    },
    992: {
      slidesPerView: 3,

    },
    767: {
      slidesPerView: 2,

    },
    500: {
      slidesPerView: 1,

    },
    0:{
      slidesPerView : 1,

    },
  },
});
////////////////////////////////////////////////////////////
var swiper = new Swiper(".phones-tablets-swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  spaceBetween: 30,
  slidesPerView: 4,
  loop: true,
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    
    1200: {
      slidesPerView: 4,
      

    },
    992: {
      slidesPerView: 3,

    },
    767: {
      slidesPerView: 2,

    },
    0:{
      slidesPerView : 1,

    },
  },
});

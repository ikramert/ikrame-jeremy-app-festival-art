/// ------------- APP -------------

// swiper-filters
const swiperFilters = new Swiper(".swiper-filters", {
  direction: "horizontal",
});

//Swiper LP
const swiper = new Swiper(".swiper-screenshots", {
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,

  breakpoints: {
    500: {
      slidesPerView: 1,
      centeredSlides: true,
      loop: true,
    },

    1200: {
      spaceBetween: 30,
      slidesPerView: 3,
      centeredSlides: true,
      loop: true,
    },
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

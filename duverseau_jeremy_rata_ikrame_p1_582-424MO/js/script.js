/// ------------- APP -------------

// swiper-filters
const swiperFilters = new Swiper(".swiper-filters", {
  direction: "horizontal",
});

/// ------------- LANDING PAGE -------------

// Initialisation du Swiper pour les screenshots
const swiperScreenshots = new Swiper(".swiper-screenshots", {
  slidesPerView: 1,
  direction: "horizontal",
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1200: {
      spacebetween: 30,
      slidesPerView: 3, // À partir de 1200px, 3 slides à la fois
    },
  },
});

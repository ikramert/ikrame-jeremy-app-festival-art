/// ------------- APP -------------

// swiper-filters
const swiperFilters = new Swiper(".swiper-filters", {
  direction: "horizontal",
  freeMode: true,
  spaceBetween: 0,
  margin: 0,
});

/// ------------- LANDING PAGE -------------

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "vertical",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

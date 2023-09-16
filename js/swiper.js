var swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 2000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  effect: "coverflow",

  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: "3",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 4,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },

    578: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 5,
    },
  },
});

var swiper = new Swiper(".event_mySwiper", {
  autoplay: {
    delay: 2000,
  },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  effect: "coverflow",

  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: "3",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 4,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },

    578: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    968: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 5,
    },
  },
});

var swiper = new Swiper(".event_carousel_banner", {
  autoplay: {
    delay: 3000,
  },
  spaceBetween: 50,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 1,
});

var swiper = new Swiper(".mySwiper4", {
  autoplay: {
    delay: 3000,
  },
  spaceBetween: 50,

  loop: true,
  slidesPerView: 1,
  centeredSlides: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

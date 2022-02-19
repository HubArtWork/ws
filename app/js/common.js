if(document.getElementsByClassName('header-bar').length){
  var bar = document.querySelector('.header-bar'),
      header = document.querySelector('.header');

  bar.addEventListener('click', menuOpen);

  function menuOpen(e) {
    if(e.type == 'click')
      header.classList.toggle('header-active');
  }
}
if(document.getElementsByClassName('modal-link').length){
  var link = document.querySelector('.link-map'),
      link2 = document.querySelector('.modal-link'),
      modal = document.querySelector('.modal'),
      overlay = document.querySelector('.modal-overlay');

  link.addEventListener('click', modalOpen);
  link2.addEventListener('click', modalOpen);
  overlay.addEventListener('click', modalOpen);

  function modalOpen(e) {
    if(e.type == 'click'){
      modal.classList.toggle('active');
      overlay.classList.toggle('active');
    }
  }
}

var swiper = new Swiper('.about-slider', {
  slidesPerView: 'auto',
  watchSlidesVisibility: true,
  watchOverflow: true,
  spaceBetween: 15,
  loop: true,
  navigation: {
    nextEl: '.arrows .swiper-button-next',
    prevEl: '.arrows .swiper-button-prev',
  },
  breakpoints: {
  	10: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    601: {
      slidesPerView: 'auto',
      spaceBetween: 15,
    },
    767: {
      slidesPerView: 'auto',
      spaceBetween: 15,
    }
  }
});

var swiper = new Swiper('.testimonials-slider', {
  slidesPerView: 1,
  watchOverflow: true,
  loop: true,
  navigation: {
    nextEl: '.testimonials-arrows .swiper-button-next',
    prevEl: '.testimonials-arrows .swiper-button-prev',
  },
});

var swiper = new Swiper('.news-slider', {
  slidesPerView: 1,
  watchOverflow: true,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
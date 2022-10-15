import Splide from '@splidejs/splide';

let page = 0;

window.addEventListener("resize", function() {
    console.log(page)
    if (window.innerWidth >= 320) {
        page = 1;
    } else if (window.innerWidth >=780) {
        page = 2;
    } else if (window.innerWidth >= 1400) {
        page = 3;
    }
  });


  new Splide( '.splide', {
    type   : 'loop',
    perPage: page,
  } ).mount();


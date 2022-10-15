import Splide from '@splidejs/splide';


  new Splide('#slider1', {
    type: 'loop',
    autoWidth: true,
    focus: 'center',
    gap: '1em',
    pagination: false,
    keyboard: true,
  }).mount();


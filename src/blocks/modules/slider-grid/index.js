import Swiper from 'swiper/bundle';

export default class SliderGrid {
  constructor() {
    this.sectionNodes = document.querySelectorAll('.slider-grid')
    this.init()
  }
  init() {
    this.sectionNodes.forEach(element => {
      const sliderNode = element
      var swiper = new Swiper(sliderNode, {
        slidesPerView: 'auto',
        loop: false,
        freeMode: true,
      });
    })
  }
}
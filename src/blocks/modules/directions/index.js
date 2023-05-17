import Swiper from 'swiper/bundle';

export default class SliderDirections {
  constructor() {
    this.sectionNodes = document.querySelectorAll('.directions')
    this.init()
  }
  init() {
    this.sectionNodes.forEach(element => {
      const sliderNode = element.querySelector('.directions__slider')
      const prevNode = element.querySelector('.slider-btns__prev')
      const nextNode = element.querySelector('.slider-btns__next')
      var swiper = new Swiper(sliderNode, {
        slidesPerView: 'auto',
        loopedSlides: 4,
        loop: false,
        navigation: {
          nextEl: nextNode,
          prevEl: prevNode,
          disabledClass: 'disabled',
        },
      });
    })
  }
}
import Swiper from 'swiper/bundle';

export default class SliderHistoryMain {
  constructor() {
    this.sectionNodes = document.querySelectorAll('.history-main')
    this.init()
  }
  init() {
    this.sectionNodes.forEach(element => {
      const sliderNode = element.querySelector('.history-main__slider')
      const prevNode = element.querySelector('.slider-prev')
      const nextNode = element.querySelector('.slider-next')
      const pagNode = element.querySelector('.slider-pag')
      var swiper = new Swiper(sliderNode, {
        slidesPerView: 'auto',
        loop: false,
        navigation: {
          nextEl: nextNode,
          prevEl: prevNode,
          disabledClass: 'disabled',
        },
        pagination: {
          el: pagNode,
          type: 'progressbar',
          bulletActiveClass: 'active',
        },
      });
    })
  }
}
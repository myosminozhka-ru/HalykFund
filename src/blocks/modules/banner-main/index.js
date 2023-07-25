import Swiper from 'swiper/bundle';
import helper from '../../../js/import/helper';

export default class SliderBannerMain {
  constructor() {
    this.sectionNodes = document.querySelectorAll('.banner-main')
    this.init()
  }
  init() {
    this.sectionNodes.forEach(element => {
      helper.elementTextSlice(element.querySelectorAll('.banner-main__cap'), 100)
      helper.elementTextSlice(element.querySelectorAll('.banner-main__text'), 200)
      const sliderNode = element.querySelector('.banner-main__slider')
      const prevNode = element.querySelector('.slider-prev')
      const nextNode = element.querySelector('.slider-next')
      const pagNode = element.querySelector('.slider-pag')
      var swiper = new Swiper(sliderNode, {
        slidesPerView: 1,
        loop: true,
        effect: 'fade',
        navigation: {
          nextEl: nextNode,
          prevEl: prevNode,
          disabledClass: 'disabled',
        },
        pagination: {
          el: pagNode,
          bulletActiveClass: 'active',
        },
      });
    })
  }
}
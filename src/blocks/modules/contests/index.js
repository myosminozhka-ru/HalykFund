import Swiper from 'swiper/bundle';
import helper from '../../../js/import/helper';

export default class SliderContests {
  constructor() {
    this.sectionNodes = document.querySelectorAll('.contests')
    this.init()
  }
  init() {
    this.sectionNodes.forEach(element => {
      helper.elementTextSlice(element.querySelectorAll('.card4__title'), 40)
      helper.elementTextSlice(element.querySelectorAll('.card4__text'), 150)
      const sliderNode = element.querySelector('.contests__slider')
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
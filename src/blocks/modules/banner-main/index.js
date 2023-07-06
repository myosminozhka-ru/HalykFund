import Swiper from 'swiper/bundle';

export default class SliderBannerMain {
  constructor() {
    this.sectionNodes = document.querySelectorAll('.banner-main')
    this.init()
  }
  textSlice (text, length){
    const number = Number(length)
    const txt = text.trim()
    if (typeof number !== 'number' || typeof txt !== 'string' || txt.length <= length) return text
    return txt.slice(0, number) + '...';
  }
  init() {
    this.sectionNodes.forEach(element => {
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

      const titleNodes = element.querySelectorAll('.banner-main__cap')
      const textNodes = element.querySelectorAll('.banner-main__text')
      titleNodes.forEach(i => {
        i.innerHTML = this.textSlice(i.textContent, 30)
      })
      textNodes.forEach(i => {
        i.innerHTML = this.textSlice(i.textContent, 200)
      })
    })
  }
}
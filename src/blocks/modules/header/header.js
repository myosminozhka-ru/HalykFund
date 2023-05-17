export default class Header {
  constructor() {
    this.header = document.querySelector('.header');
    this.burger = document.querySelector('.header__burger');
    this.nav = document.querySelector('.header__nav');
    this.init()
  }
  init() {
    if (!(this.burger && this.nav)) return
    console.log('hehe')
    this.toggleHandler()
    this.setTopPadding()
    this.sizeHandler()
  }
  open() {
    this.burger.classList.add('active')
    this.nav.classList.add('active')
    document.body.classList.add('lock')
  }
  close() {
    this.burger.classList.remove('active')
    this.nav.classList.remove('active')
    document.body.classList.remove('lock')
  }
  toggleHandler() {
    this.burger.addEventListener('click', () => {
      if (this.burger.classList.contains('active')) {
        this.close()
      } else {
        this.open()
      }
    })
  }
  setTopPadding() {
    if (window.matchMedia("(max-width: 768px)").matches) {
      this.nav.style.paddingTop = this.header.clientHeight + 20 + 'px'
    } else {
      this.nav.style.paddingTop = 0
    }
  }
  sizeHandler() {
    window.addEventListener('resize', () => {
      this.setTopPadding()
    })
  }
}
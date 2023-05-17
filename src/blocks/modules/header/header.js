export default class Header {
  constructor() {
    this.header = document.querySelector('.header');
    this.burger = document.querySelector('.header__burger');
    this.nav = document.querySelector('.header__nav');
    this.navListNode = document.querySelector('.header__nav-list');
    this.searchBlockNode = document.querySelector('.header__search');
    this.openSearchNode = document.querySelector('.header__search-open');
    this.closeSearchNode = document.querySelector('.header__search-close');
    this.inputSearchNode = document.querySelector('.header__search-input');
    this.startSearchNode = document.querySelector('.header__search-start');
    this.drops = document.querySelectorAll('.header__nav-drop');
    this.init()
  }
  init() {
    if (!(this.burger && this.nav)) return
    console.log('hehe')
    this.toggleHandler()
    this.setTopPadding()
    this.sizeHandler()
    this.searchOpenHandler()
    this.searchCloseHandler()
    this.searchInputHandler()
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
    this.burger ? this.burger.addEventListener('click', () => {
      if (this.burger.classList.contains('active')) {
        this.close()
      } else {
        this.open()
      }
    }) : null
  }
  setTopPadding() {
    if (window.matchMedia("(max-width: 768px)").matches) {
      this.nav.style.paddingTop = this.header.clientHeight + 20 + 'px'
    } else {
      this.nav.style.paddingTop = 0
      this.drops.forEach(i => {
        i.style.top = this.header.clientHeight + 'px'
      })
    }
  }
  sizeHandler() {
    window.addEventListener('resize', () => {
      this.setTopPadding()
    })
  }
  openSearch() {
    this.navListNode.classList.add('hide')
    this.searchBlockNode.classList.add('active')
    this.inputSearchNode.focus()
  }
  closeSearch() {
    this.navListNode.classList.remove('hide')
    this.searchBlockNode.classList.remove('active')
  }
  searchOpenHandler() {
    this.openSearchNode ? this.openSearchNode.addEventListener('click', () => {
      this.openSearch()
    }) : null
  }
  searchCloseHandler() {
    this.closeSearchNode ? this.closeSearchNode.addEventListener('click', () => {
      this.closeSearch()
    }) : null
  }
  searchInputHandler() {
    this.inputSearchNode ? this.inputSearchNode.addEventListener('keypress', (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        this.search()
      }
    }) : null
    this.startSearchNode ? this.startSearchNode.addEventListener('click', (event) => {
      this.search()
    }) : null
  }
  search() {
    const page = this.inputSearchNode.dataset.page
    const newHref = window.location.origin + page + this.inputSearchNode.value
    window.location.href = newHref
  }
}
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
    this.dropItems = document.querySelectorAll('.header__nav-item--drop');
    this.init()
  }
  init() {
    if (!(this.burger && this.nav)) return
    this.toggleHandler()
    this.setTopPadding()
    this.sizeHandler()
    this.searchOpenHandler()
    this.searchCloseHandler()
    this.searchInputHandler()
    this.dropHandler()

    document.body.style.paddingTop = this.header.clientHeight + 'px'
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
    }
  }
  sizeHandler() {
    window.addEventListener('resize', () => {
      this.setTopPadding()
    })
  }
  dropHandler() {
    this.dropItems.forEach((i, index) => {
      const arrow = i.querySelector('.header__nav-arrow');
      const title = i.querySelector('.header__nav-title');
      arrow.addEventListener('click', () => {
        this.openDrop(i, index)
      })

      if (!window.matchMedia("(max-width: 768px)").matches) {
        title.addEventListener('mouseover', () => {
          this.openDrop(i, index)
        })
      }
      document.addEventListener('click', (e) => {
        if (!e.target.closest('.header__nav-item')) {
          this.drops.forEach(drop => {
            drop.classList.remove('active')
          })
        }
      })
    })
  }
  openDrop(i, index) {
    let isActive = this.drops[index].classList.contains('active')
    this.dropItems.forEach(item => {
      item.classList.remove('active')
    })
    const coord = this.navListNode.getBoundingClientRect()
    this.drops.forEach(drop => {
      drop.classList.remove('active')
      drop.style.paddingLeft = coord?.x + 'px'
    })
    if (isActive) {
      return
    }
    i.classList.add('active')
    this.drops[index].classList.add('active')
  }
  openSearch() {
    this.navListNode.classList.add('hide')
    this.searchBlockNode.classList.add('active')
    this.inputSearchNode.focus()
  }
  closeSearch() {
    this.navListNode.classList.remove('hide')
    this.searchBlockNode.classList.remove('active')
    this.inputSearchNode.blur()
    this.inputSearchNode.value = ''
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
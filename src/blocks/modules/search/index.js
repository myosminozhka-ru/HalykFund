export default class Search {
  constructor() {
    this.clearSearchNode = document.querySelector('.search__clear');
    this.inputSearchNode = document.querySelector('.search__input');
    this.startSearchNode = document.querySelector('.search__start');
    this.init()
  }
  init() {
    if (!(this.inputSearchNode && this.startSearchNode  && this.clearSearchNode)) return
    this.searchClearHandler()
    this.searchInputHandler()
  }
  clearSearch() {
    this.clearSearchNode.classList.remove('active')
    this.startSearchNode.classList.add('active')
    this.inputSearchNode.value = ''
    this.inputSearchNode.focus()
  }
  searchClearHandler() {
    this.clearSearchNode ? this.clearSearchNode.addEventListener('click', () => {
      this.clearSearch()
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
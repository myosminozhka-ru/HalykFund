export default class Social {
  constructor() {
    this.nodes = document.querySelectorAll('[data-copy-trigger]')
    this.textarea = document.querySelector('#urlCopy')
    this.init()
  }
  init() {
    if (!this.textarea) return
    this.copyHandler()
  }
  copy() {
    this.textarea.innerHTML = window.location.href;
    console.log(this.textarea.innerHTML)
    this.textarea.select();
    document.execCommand("copy");
  }
  copyHandler() {
    this.nodes.forEach(el => {
      el.addEventListener('click', () => {
        this.copy()
        this.alert()
      })
    })
  }
  alert() {
    alert('Ссылка скопирована!')
  }
}
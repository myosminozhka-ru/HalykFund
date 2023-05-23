class Accordion {
  constructor(element) {
    this.element = element
    this.btns = null
    this.texts = null
    this.init()
  }
  init() {
    if (!this.element) return
    this.btns = this.element.querySelectorAll('[data-accordion-btn]')
    this.texts = this.element.querySelectorAll('[data-accordion-text]')
    this.handler()
  }
  open(index) {
    this.texts[index].style.maxHeight = this.texts[index].scrollHeight + "px";
    this.btns[index].classList.add('open')
    this.texts[index].classList.add('open')
  }
  close(index) {
    this.btns[index].classList.remove('open')
    this.texts[index].classList.remove('open')
	  this.texts[index].style.maxHeight = null;
  }
  handler() {
    this.btns.forEach((element, index) => {
      element.addEventListener('click', () => {
        if (!element.classList.contains('open')) {
          this.open(index)
        } else {
          this.close(index)
        }
      })
    });
  }
}

export default function() {
  const els = document.querySelectorAll('[data-accordion]')
  const arr = []
  els.forEach(el => {
    arr.push(new Accordion(el))
  })
  return arr;
}
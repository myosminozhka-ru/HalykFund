export default class ModalPhoto {
  constructor() {
    this.handler()
  }
  open() {
    window.app.photoModal.open()
  }
  render(target) {
    window.app.photoModal.content.innerHTML = ''
    const clone = target.cloneNode(true);
    window.app.photoModal.content.append(clone)
  }
  handler() {
    const doc = document.querySelector('.news--library')
    doc ? doc.addEventListener('click', (e) => {
      const parent = e.target.closest('a.card2')
      if (parent) {
        e.preventDefault()
        this.render(parent)
        this.open()
      }
    }) : null;
  }
}
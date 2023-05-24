export default class Modal {
  constructor(name) {
      this.name = name;
      this.modal = document.querySelector(`[data-modal="${name}"]`)
      this.content = this.modal.querySelector(`.modal__content`)
      this.triggers = document.querySelectorAll(`[data-class="${name}"]`)
      this.openHendler()
      this.closeHendler()
      this.callbackClose = null
  }
  open() {
    window.lastZIndexModal = window.lastZIndexModal ? window.lastZIndexModal + 1 : 150
    this.modal ? this.modal.style['z-index'] = window.lastZIndexModal : null;
    this.modal ? this.modal.classList.add('active') : null;
    document.body.classList.add('lock')
  }
  close() {
    this.modal ? this.modal.style['z-index'] = -150 : null;
    this.modal ? this.modal.classList.remove('active') : null;
    document.body.classList.remove('lock')
    this.onCloseAction()
  }
  update() {
      this.modal = document.querySelector(`[data-modal="${this.name}"]`)
      this.triggers = document.querySelectorAll(`[data-class="${this.name}"]`)
      this.openHendler()
  }
  openHendler() {
      this.triggers.forEach(item => {
          item.addEventListener('click', (e) => {
              e.preventDefault()
              this.open()
          })
      })
  }
  closeHendler() {
      this.modal ? this.modal.addEventListener('click', (e) => {
          if (e.target.classList.contains('close-x')) {
              this.close()
          }
      }) : null;
      this.modal.querySelector('button.close-x').addEventListener('click', (e) => {
        this.close()
      })
  }
  onClose(callback) {
    this.callbackClose = callback
  }
  onCloseAction() {
    this.callbackClose ? this.callbackClose() : null
  }
}
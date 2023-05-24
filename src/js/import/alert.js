export default class Alert {
  constructor() {
    this.container = null,
    this.create()
  }
  create() {
    this.container = document.createElement('div')
    this.container.classList.add('alert')
    document.body.append(this.container)
  }
  render(text = '', type = null) {
    const el = document.createElement('div')
    el.classList.add('alert__item')
    el.textContent = text || (type ? 'Успешно!' : 'Ошибка!')
    if (type === true || type === 'success') {
      el.classList.add('success')
    } else if (type === false || type === 'error') {
      el.classList.add('error')
    }
    this.container.append(el)
    setTimeout(() => el.classList.add('active'), 50)
    setTimeout(() => this.removeAlert(el, 300), 5000)
  }
  removeAlert(el, ms) {
    el.classList.add('escape')
    setTimeout(() => el.remove(), ms)
  }
}
export default class FlatpickrConfig {
  constructor() {
  }
  static setLang() {
    const lang = document.querySelector('html').getAttribute('lang')
    if (lang === 'ru') {
      flatpickr.l10ns.ru.rangeSeparator = "-"
      flatpickr.localize(flatpickr.l10ns.ru)
    } else if (lang === 'kk') {
      flatpickr.l10ns.kk.rangeSeparator = "-"
      flatpickr.localize(flatpickr.l10ns.kk)
    } else if (lang === 'en') {
      flatpickr.l10ns.en.rangeSeparator = "-"
      flatpickr.localize(flatpickr.l10ns.en)
    }
    return lang
  }
  static getNextArrow() {
    return `
      <button class="date-next">
        <svg width="32" height="32" fill="none" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="0.5" width="31" height="31" rx="9.5" stroke="#398166" />
          <path d="M9 16H23" stroke="#398166" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M16 9L23 16L16 23" stroke="#398166" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
    `
  }
  static getPrevArrow() {
    return `
      <button class="date-prev">
        <svg width="32" height="32" fill="none" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <rect x="-0.5" y="0.5" width="31" height="31" rx="9.5" transform="matrix(-1 0 0 1 31 0)" stroke="#398166" />
          <path d="M23 16H9" stroke="#398166" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M16 9L9 16L16 23" stroke="#398166" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
      `
  }
}
const lang = document.querySelector('html').getAttribute('lang')
export default {
  current: lang,
  tampl: {
    ru: "",
    en: "",
    kk: "",
  },
  success: {
    ru: "Спасибо, ваше сообщение отправлено",
    en: "Thank you, your message has been sent",
    kk: "Рахмет, хабарламаңыз жіберілді",
  },
  error: {
    ru: "Возникла ошибка отправки, попробуйте позже",
    en: "There was an error sending, please try again later",
    kk: "Жіберу кезінде қате орын алды, әрекетті кейінірек қайталаңыз",
  },
  sent: {
    ru: "Сообщение отправлено",
    en: "Message sent",
    kk: "Хабар жіберілді",
  },
  loading: {
    ru: "Загрузка...",
    en: "Loading...",
    kk: "Жүктелуде...",
  },
}
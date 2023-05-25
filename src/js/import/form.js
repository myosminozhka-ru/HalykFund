
const ApiForm = (url, data) => {
  return fetch(url, {
    method: 'POST',
    body: data,
		headers: {
			'Accept-Language': document.querySelector('html').getAttribute('lang'),
		},
  })
}

export default function () {
  const forms = document.querySelectorAll('form.form')

  forms.forEach(form => {
    const button = form.querySelector('button[type="submit"]')
    const name = form.getAttribute('id')
    const validation = window.app[name]
    button.setAttribute('disabled', true)
    validation.onValidate(evt => {
      if (evt.isValid) {
        button.removeAttribute('disabled')
      }
    })
    form.addEventListener('submit', (e) => {
      e.preventDefault()
      console.log(validation)
      const isValid = validation.isValid
      if (!isValid) return
      const formData = new FormData(form)
      const action = form.getAttribute('action')

      const btnText = button.textContent
      button.setAttribute('disabled', true)
      button.textContent = 'Загрузка...'
      ApiForm(action, formData).then((res) => {
        console.log('contact success')
        if (res.status === 200) {
          window.osmiAlert.render('Спасибо, ваше сообщение отправлено', true)
          button.textContent = 'Сообщение отправлено'
        } else {
          throw res
        }
      }).catch(() => {
        window.osmiAlert.render('Возникла ошибка отправки, попробуйте позже', false)
      }).finally(() => {
        button.textContent = btnText
        button.removeAttribute('disabled')
      })
    })
  })
}
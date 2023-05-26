import local from './local'

export const ApiForm = (url, data, method = 'POST') => {
  return fetch(url, {
    method: method,
    body: data,
		headers: {
			'Accept-Language': local.current,
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
      const isValid = validation.isValid
      if (!isValid) return
      const formData = new FormData(form)
      const action = form.getAttribute('action')

      const btnText = button.textContent
      button.setAttribute('disabled', true)
      button.textContent = local.loading[local.current]
      ApiForm(action, formData).then((res) => {
        console.log('contact success')
        if (res.status === 200) {
          window.osmiAlert.render(local.success[local.current], true)
          button.textContent = local.sent[local.current]
        } else {
          throw res
        }
      }).catch(() => {
        window.osmiAlert.render(local.error[local.current], false)
      }).finally(() => {
        button.textContent = btnText
        button.removeAttribute('disabled')
      })
    })
  })
}
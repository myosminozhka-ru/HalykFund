
const ApiForm = (url, data) => {
  return fetch(url, {
    method: 'POST',
    body: data,
  })
}

export default function () {
  const forms = document.querySelectorAll('form.form')

  forms.forEach(form => {
    const button = form.querySelector('button[type="submit"]')
    form.addEventListener('submit', (e) => {
      e.preventDefault()
      const formData = new FormData(form)
      const action = form.getAttribute('action')

      const btnText = button.textContent
      button.setAttribute('disabled', true)
      button.textContent = 'Загрузка...'
      ApiForm(action, formData).then((res) => {
        console.log('contact success')
        if (res.status === 400) {
          // window.app.modalApplicatioAccepted.open()
          button.textContent = 'Доставлено!'
          alert('Доставлено!')
        } else {
          throw res
        }
      }).catch(() => {
        alert('contact error')
      }).finally(() => {
        button.textContent = btnText
        button.removeAttribute('disabled')
      })
    })
  })
}
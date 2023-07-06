import local from './local'

export const ApiForm = (url, data, method = 'POST') => {
  return fetch(url, {
    method: method,
    body: data,
		headers: {
			'Accept-Language': local.current,
		},
  }).then(response => {
    if (response.status >= 500) {
      throw new Error(response)
    }
    return response.json()
  })
}

export default function () {
  const forms = document.querySelectorAll('form.form')

  let captchaId = null
  let captchaResponse = ''
  var verifyCallback = function(response) {
    console.log(response);
    captchaResponse = response
  };

  window.onloadCallback = function() {
    captchaId = grecaptcha.render('html_element', {
      'sitekey' : '6LfRT_kmAAAAAPSidXj4VXMj-4T9C4Qv0gDg7to4',
      'callback' : verifyCallback,
    });
  };


  forms.forEach(form => {
    const button = form.querySelector('button[type="submit"]')
    const name = form.getAttribute('id')
    const validationObj = window.app[name]
    const validation = validationObj?.validation
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

      const captchaWrapper = form.querySelector('.captcha')
      if (captchaWrapper && captchaResponse?.length === 0) {
        window.osmiAlert.render(local.captcha[local.current], false)
        return
      } else if (captchaWrapper) {
        formData.append('g-recaptcha-response', captchaResponse);
      }

      const btnText = button.textContent
      button.setAttribute('disabled', true)
      button.textContent = local.loading[local.current]
      ApiForm(action, formData).then((res) => {
        console.log('contact success')
        window.osmiAlert.render(res?.mes || local.success[local.current], true)
        button.textContent = local.sent[local.current]
      }).catch((res) => {
        const ren = window.osmiAlert.render(res?.mes || local.error[local.current], false)
      }).finally(() => {

        // reset form
        validationObj?.cb ? validationObj?.cb() : null;
        button.textContent = btnText
        button.removeAttribute('disabled')
        form.reset()
        // mask reset
        validation.setCurrentLocale(local.current)
        window?.app?.phoneMask?.length ? window.app.phoneMask.forEach(i => {
          i?.masked?.reset()
        }) : null;
        // calendar reset
        if (validationObj?.calendar?.length) {
          validationObj?.calendar.forEach(i => {
            i.clear()
          })
        }

        // justValidate reset
        validation.refresh()

        //captcha reset
        grecaptcha.reset();

      })
    })
  })
}
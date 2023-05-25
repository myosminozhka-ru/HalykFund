import validationLocal from '../../../js/libs/validationLocal'
const {keys, dictLocale} = validationLocal
export default function() {
  if (!document.querySelector('#subscribe')) return
  const validation = new JustValidate('#subscribe', {
    validateBeforeSubmitting: true,
    tooltip: {
      position: 'top',
    },
  }, dictLocale);
  validation.setCurrentLocale(document.querySelector('html').getAttribute('lang'));
  validation
    .addField('[name="email"]', [
      {
        rule: 'required',
        errorMessage: keys.emailRequired,
      },
      {
        rule: 'email',
        errorMessage: keys.email,
      },
    ])
    .addField('[name="privacy"]', [
      {
        rule: 'required',
        errorMessage: keys.required,
      },
    ])
  return validation
}
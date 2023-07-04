import validationLocal from '../../../js/libs/validationLocal'
import local from '../../../js/import/local'
const {keys, dictLocale, regex} = validationLocal
export default function() {
  if (!document.querySelector('#subscribe')) return
  const validation = new JustValidate('#subscribe', {
    validateBeforeSubmitting: true,
    tooltip: {
      position: 'top',
    },
  }, dictLocale);
  validation.setCurrentLocale(local.current);
  validation
    .addField('[name="email"]', [
      {
        rule: 'required',
        errorMessage: keys.emailRequired,
      },
      {
        rule: 'customRegexp',
        value: regex.email,
        errorMessage: keys.email,
      },
    ])
    .addField('[name="privacy"]', [
      {
        rule: 'required',
        errorMessage: keys.required,
      },
    ])
  return {validation}
}
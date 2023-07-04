import validationLocal from '../../../js/libs/validationLocal'
import local from '../../../js/import/local'
const {keys, dictLocale, regex} = validationLocal
export default function() {
  if (!document.querySelector('#contact_us')) return
  const validation = new JustValidate('#contact_us', {
    validateBeforeSubmitting: true,
  }, dictLocale);
  validation.setCurrentLocale(local.current);
  validation
    .addField('[name="name"]', [
      {
        rule: 'minLength',
        value: 2,
        errorMessage: keys.minLength,
      },
      {
        rule: 'maxLength',
        value: 30,
        errorMessage: keys.maxLength,
      },
      {
        rule: 'required',
        errorMessage: keys.required,
      },
      {
        rule: 'customRegexp',
        value: regex.name,
        errorMessage: keys.name,
      },
    ])
    .addField('[name="tel"]', [
      {
        rule: 'required',
        errorMessage: keys.required,
      },
      {
        rule: 'customRegexp',
        value: regex.tel,
        errorMessage: keys.tel,
      },
    ])
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
    .addField('[name="comment"]', [
      {
        rule: 'required',
        errorMessage: keys.required,
      },
      {
        rule: 'minLength',
        value: 2,
        errorMessage: keys.minLength,
      },
      {
        rule: 'maxLength',
        value: 300,
        errorMessage: keys.maxLength,
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
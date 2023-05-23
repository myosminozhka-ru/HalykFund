import validationLocal from '../../../js/libs/validationLocal'
const {keys, dictLocale} = validationLocal
export default function() {
  if (!document.querySelector('#contact_us')) return
  const validation = new JustValidate('#contact_us', {
    validateBeforeSubmitting: true,
  }, dictLocale);
  validation.setCurrentLocale('ru');
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
    ])
    .addField('[name="tel"]', [
      {
        rule: 'required',
        errorMessage: keys.required,
      },
      {
        rule: 'customRegexp',
        value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/gi,
        errorMessage: keys.tel,
      },
    ])
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
  return validation
}
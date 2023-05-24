import validationLocal from '../../../js/libs/validationLocal'
const {keys, dictLocale} = validationLocal
export default function() {
  if (!document.querySelector('#contest')) return
  // const picker = flatpickr(document.querySelector('[name="birthday"]'), {
  //     mode: "range",
  //     minDate: "today",
  //     dateFormat: "d.m.Y",
  //     conjunction: "too"
  // });
  const validation = new JustValidate('#contest', {
    validateBeforeSubmitting: true,
  }, dictLocale);
  validation.setCurrentLocale('ru');
  validation
    .addField('[name="fio"]', [
      {
        rule: 'minLength',
        value: 6,
        errorMessage: keys.minLength,
      },
      {
        rule: 'maxLength',
        value: 90,
        errorMessage: keys.maxLength,
      },
      {
        rule: 'required',
        errorMessage: keys.required,
      },
    ])
    .addField('[name="inn"]', [
      {
        rule: 'required',
        errorMessage: keys.required,
      },
      {
        rule: 'integer',
        errorMessage: keys.integer,
      },
    ])
    .addField('[name="city"]', [
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
    .addField('[name="place_of_work_or_sudy"]', [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: keys.minLength,
      },
      {
        rule: 'maxLength',
        value: 50,
        errorMessage: keys.maxLength,
      },
      {
        rule: 'required',
        errorMessage: keys.required,
      },
    ])
    .addField('[name="specialization"]', [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: keys.minLength,
      },
      {
        rule: 'maxLength',
        value: 50,
        errorMessage: keys.maxLength,
      },
      {
        rule: 'required',
        errorMessage: keys.required,
      },
    ])
    .addField('[name="name_of_project"]', [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: keys.minLength,
      },
      {
        rule: 'maxLength',
        value: 50,
        errorMessage: keys.maxLength,
      },
      {
        rule: 'required',
        errorMessage: keys.required,
      },
    ])
    .addField('[name="project_idea"]', [
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
        value: 500,
        errorMessage: keys.maxLength,
      },
    ])
    .addField('[name="competition_regulations"]', [
      {
        rule: 'required',
        errorMessage: keys.required,
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
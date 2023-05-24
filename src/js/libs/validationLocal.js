const keys = {
  required: 'Name is required',
  minLength: 'Name is too short',
  maxLength: 'Name is too long',
  emailRequired: 'Email is required',
  email: 'Email is invalid',
  integer: 'Value should be a number',
  tel: 'Phone number is invalid',
}

const dictLocale = [
  {
    key: keys.required,
    dict: {
      ru: 'Поле обязательно для заполнения',
    },
  },
  {
    key: keys.minLength,
    dict: {
      ru: 'Поле должно содержать минимум :value символа',
    },
  },
  {
    key: keys.maxLength,
    dict: {
      ru: 'Поле должно содержать максимум :value символа',
    },
  },
  {
    key: keys.emailRequired,
    dict: {
      ru: 'Электронная почта обязательна',
    },
  },
  {
    key: keys.email,
    dict: {
      ru: 'Электронная почта недействительна',
    },
  },
  {
    key: keys.integer,
    dict: {
      ru: 'Значение должно быть числом',
    },
  },
  {
    key: keys.tel,
    dict: {
      ru: 'Номер телефона недействителен',
    },
  },
];

export default {
  dictLocale,
  keys
}
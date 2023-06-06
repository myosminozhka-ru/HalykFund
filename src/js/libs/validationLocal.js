const regex = {
  email: /^[a-zA-Zа-яА-Я\d]+([\.-\d]?[a-zA-Zа-яА-Я\d]+)*@[a-zA-Zа-яА-Я\d]+([\.-\d]?[a-zA-Zа-яА-Я\d]+)*(\.[a-zA-Zа-яА-Я]{2,3})+$/gi,
  name: /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/gi,
  tel: /^\+7 (\d|-){13}/gi,
}

const keys = {
  required: 'Name is required',
  minLength: 'Name is too short',
  maxLength: 'Name is too long',
  emailRequired: 'Email is required',
  email: 'Email is invalid',
  integer: 'Value should be a number',
  tel: 'Phone number is invalid',
  name: 'Name is invalid',
}

const dictLocale = [
  {
    key: keys.required,
    dict: {
      ru: 'Поле обязательно для заполнения',
      kk: 'Міндетті өріс',
      en: 'The field is required',
    },
  },
  {
    key: keys.name,
    dict: {
      ru: 'Некорректное значение',
      kk: 'Дұрыс емес мән',
      en: 'Incorrect value',
    },
  },
  {
    key: keys.minLength,
    dict: {
      ru: 'Поле должно содержать минимум :value символа',
      kk: 'Өріс кемінде :value таңбадан тұруы керек',
      en: 'The field must contain a minimum of :value characters',
    },
  },
  {
    key: keys.maxLength,
    dict: {
      ru: 'Поле должно содержать максимум :value символа',
      kk: 'Өріс ең көбі :value таңбадан тұруы керек',
      en: 'The field must contain a maximum of :value characters',
    },
  },
  {
    key: keys.emailRequired,
    dict: {
      ru: 'Электронная почта обязательна',
      kk: 'Электрондық пошта қажет',
      en: 'Email is required',
    },
  },
  {
    key: keys.email,
    dict: {
      ru: 'Электронная почта недействительна',
      kk: 'Электрондық пошта жарамсыз',
      en: 'Email has invalid format',
    },
  },
  {
    key: keys.integer,
    dict: {
      ru: 'Значение должно быть числом',
      kk: 'Мән сан болуы керек',
      en: 'Value should be a number',
    },
  },
  {
    key: keys.tel,
    dict: {
      ru: 'Номер телефона недействителен',
      kk: 'Телефон нөмірі жарамсыз',
      en: 'Phone number has invalid format',
    },
  },
];

// function declension(value, stirng) {
//   value = Math.abs(value) % 100;
//   var num = value % 10;

//   const foundStr = null
//   debugger

//   foundStr = stirng.match(/\[\[\[(.*)\]\]\]/);
//   debugger
//   const stirngArray = []
//   if (typeof stirng === 'string') {
//     stirng.replace(/\[|\]/, '')
//     stirngArray = stirng.split(', ')
//   } else {
//     stirngArray = stirng
//   }

//   if (value > 10 && value < 20) return stirng[2];
//   if (num > 1 && num < 5) return stirng[1];
//   if (num == 1) return stirng[0];
//   return stirng[2];
// }

export default {
  dictLocale,
  keys,
  regex
}
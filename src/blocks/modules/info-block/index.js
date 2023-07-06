import validationLocal from '../../../js/libs/validationLocal'
import local from '../../../js/import/local'
const {keys, dictLocale, regex} = validationLocal
import FlatpickrConfig from '../../../js/import/flatpickrConfig'
export default function() {
  if (!document.querySelector('#contest')) return
  const birthday = flatpickr(document.querySelector('[name="birthday"]'), {
      mode: "single",
      maxDate: "today",
      dateFormat: "d.m.Y",
      nextArrow: FlatpickrConfig.getNextArrow(),
      prevArrow: FlatpickrConfig.getPrevArrow(),
  });
  const implementation_period = flatpickr(document.querySelector('[name="implementation_period"]'), {
      mode: "range",
      minDate: "today",
      dateFormat: "d.m.Y",
      nextArrow: FlatpickrConfig.getNextArrow(),
      prevArrow: FlatpickrConfig.getPrevArrow(),
  });
  const validation = new JustValidate('#contest', {
    validateBeforeSubmitting: true,
  }, dictLocale);
  validation.setCurrentLocale(local.current);
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
      {
        rule: 'customRegexp',
        value: regex.name,
        errorMessage: keys.name,
      },
    ])
    .addField('[name="inn"]', [
      {
        rule: 'required',
        errorMessage: keys.required,
      },
      {
        rule: 'minLength',
        value: 12,
        errorMessage: keys.minLength,
      },
      {
        rule: 'maxLength',
        value: 12,
        errorMessage: keys.maxLength,
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
    .addField('[name="birthday"]', [
      {
        rule: 'required',
        errorMessage: keys.required,
      },
    ])
    .addField('[name="implementation_period"]', [
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
    .addField('[name="file"]', [
      {
        rule: 'maxFilesCount',
        value: 10,
        errorMessage: keys.maxFilesCount,
      },
      {
        rule: 'files',
        value: {
          files: {
            extensions: ['jpeg', 'jpg', 'png', 'HEIC', 'heic', 'pdf', 'doc', 'docx'],
            maxSize: 10485760,
            minSize: 100,
            types: [
              'image/jpeg',
              'image/jpg',
              'image/png',
              'image/HEIC',
              'image/heic',
              'application/pdf',
              'application/msword',
              'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
            ],
          },
        },
        errorMessage: keys.file,
      },
    ])

  const fileInputNode = document.querySelector('#contest [name="file"]')
  const fileNameNode = document.querySelector('#contest .form__file-name')
  const fileTitleNode = document.querySelector('#contest .form__file-title')
  const fileResetNode = document.querySelector('#contest .form__file-reset')
  fileInputNode.addEventListener('change', (e) => {
    const files = e.target.files
    fileNameNode.innerHTML = ''
    if (files.length && files.length !== 0) {
      fileTitleNode.classList.add('hide')
      fileNameNode.classList.remove('hide')
      fileResetNode.classList.remove('hide')
      for (let index = 0; index < files.length; index++) {
        const element = files[index];
        fileNameNode.insertAdjacentHTML('beforeend', `<span>${getShortName(element.name)}</span>`)
      }
    } else {
      fileTitleNode.classList.remove('hide')
      fileNameNode.classList.add('hide')
      fileNameNode.innerHTML = ''
    }
  })
  fileResetNode.addEventListener('click', resetFile)

  function resetFile() {
    fileInputNode.value = ''
    fileTitleNode.classList.remove('hide')
    fileNameNode.classList.add('hide')
    fileResetNode.classList.add('hide')
    fileNameNode.innerHTML = ''
    const fileerrorNode = document.querySelector('#contest .form__file .just-validate-error-label')
    fileerrorNode ? fileerrorNode.innerHTML = '' : null;
  }
  
  function getShortName(fileName) {
    if (fileName.length < 15) {
      return fileName
    }
    const array = fileName.split('.')
    const ext = array.pop()
    const name = array.join()
    const length = name.length
    return `${name.slice(0, 4)}...${name.slice(length - 4, length)}.${ext}`
  }

  return {validation, calendar: [birthday, implementation_period], cb: resetFile}
}
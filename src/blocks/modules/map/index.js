import { SelectSearch } from '../select/index'
import { ApiForm } from '../../../js/import/form'

const data = {
  "programms": {
    "1": "Программа “Инфраструктуры”",
    "2": "Программа “Люди”",
    "3": "Программа “Сообщества”"
  },
  "regions": [
    {
      "id": 4,
      "name": "Абайская область",
      "nameHTML": "Абайская <br> область",
      "programmIds": [
        1,
        2,
        3
      ]
    },
    {
      "id": 5,
      "name": "Акмолинская область",
      "nameHTML": "Акмолинская <br> область",
      "programmIds": []
    },
    {
      "id": 6,
      "name": "Актюбинская область",
      "nameHTML": "Актюбинская <br> область",
      "programmIds": [
        1,
        2
      ]
    },
    {
      "id": 7,
      "name": "Алматинская область",
      "nameHTML": "Алматинская <br> область",
      "programmIds": [
        1
      ]
    },
    {
      "id": 8,
      "name": "Атырауская область",
      "nameHTML": "Атырауская <br> область",
      "programmIds": [
        1,
        2
      ]
    },
    {
      "id": 9,
      "name": "Восточно-Казахстанская область",
      "nameHTML": "ВКО",
      "programmIds": [
        1,
        2
      ]
    },
    {
      "id": 10,
      "name": "Жамбылская область",
      "nameHTML": "Жамбылская <br> область",
      "programmIds": [
        1,
        2
      ]
    },
    {
      "id": 11,
      "name": "Жетысуская область",
      "nameHTML": "Жетысуская <br> область",
      "programmIds": [
        1,
        2
      ]
    },
    {
      "id": 12,
      "name": "Западно-Казахстанская область",
      "nameHTML": "ЗКО",
      "programmIds": [
        1,
        2
      ]
    },
    {
      "id": 13,
      "name": "Карагандинская область",
      "nameHTML": "Карагандинская <br> область",
      "programmIds": [
        1,
        2
      ]
    },
    {
      "id": 14,
      "name": "Костанайская область",
      "nameHTML": "Костанайская <br> область",
      "programmIds": [
        1,
        2
      ]
    },
    {
      "id": 15,
      "name": "Кызылординская область",
      "nameHTML": "Кызылординская <br> область",
      "programmIds": [
        1,
        2
      ]
    },
    {
      "id": 16,
      "name": "Мангистауская область",
      "nameHTML": "Мангистауская <br> область",
      "programmIds": [
        1,
        2
      ]
    },
    {
      "id": 17,
      "name": "Павлодарская область",
      "nameHTML": "Павлодарская <br> область",
      "programmIds": [
        1,
        2
      ]
    },
    {
      "id": 18,
      "name": "Северо-Казахстанская область",
      "nameHTML": "СКО",
      "programmIds": [
        1,
        2
      ]
    },
    {
      "id": 19,
      "name": "Туркестанская область",
      "nameHTML": "Туркестанская <br> область",
      "programmIds": [
        1,
        2
      ]
    },
    {
      "id": 20,
      "name": "Улытауская область",
      "nameHTML": "Улытауская <br> область",
      "programmIds": [
        1,
        2
      ]
    }
  ]
}
export default class Map {
  constructor() {
    this.el = document.querySelector('.map')
    this.region = null
    this.programms = null
    this.svgRegionGroups = null
    this.data = null
    this.modalTitle = null
    this.modalList = null
    this.resetNode = null
    this.init()
  }
  init() {
    if (!this.el) {
      return
    }
    this.modalList = this.el.querySelector('.map-modal__list')
    this.modalTitle = this.el.querySelector('.map-modal__title')
    this.resetNode = this.el.querySelector('.map__reset button')
    
    this.fetchData()
  }
  setup(data) {
    this.data = data

    const region = document.querySelector('.select-search[data-select-id="region"]')
    
    this.region = new SelectSearch(region, this.data['regions'])
    
    this.region.onSelected((e) => {
      this.selectRegion(e.target.dataset.selectValue)
      this.region.close()
    })


    const programms = document.querySelector('.select-search[data-select-id="programms"]')

    let programmsArray = []
    for (const [key, value] of Object.entries(this.data['programms'])) {
      programmsArray.push({
        id: key,
        name: value
      })
    }
    this.programms = new SelectSearch(programms, programmsArray)
    this.programms.onSelected((e) => {
      const regionsIds = this.selectRegionsByProgrammId(e.target.dataset.selectValue)
      this.programms.close()
      this.region.filterByIds(regionsIds)
      this.closeInfo()
    })

    this.svgRegionGroups = this.el.querySelectorAll('.map__map g[id]')
    this.render()
    this.selectRegionHander()
    this.resetHandler()
  }
  selectRegion(id) {
    this.svgRegionGroups.forEach(item => {
      item.classList.remove('active')
      const idAttr = item.getAttribute('id')
      if (id == idAttr) {
        item.classList.add('active')
        this.openInfo(id)
        this.renderInfo(id)
      }
    })
  }
  selectRegionsByProgrammId(idProgramm) {
    const selectedRegionIds = []
    this.svgRegionGroups.forEach(item => {
      item.classList.remove('active')
      const idAttr = item.getAttribute('id')
      const region = this.getRegionById(idAttr)
      if (region['programmIds'].find(i => i == idProgramm)) {
        item.classList.add('active')
        selectedRegionIds.push(idAttr)
      }
    })

    return selectedRegionIds
  }
  openInfo(id) {
    window.app.mapModal.open()
  }
  closeInfo(id) {
    window.app.mapModal.close()
  }
  renderInfo(id, list) {
    const region = this.getRegionById(id)
    this.modalTitle.innerHTML = region.name
    this.modalList.innerHTML = ''
    const listProgramms = this.getProgrammsByRegionId(id)
    if (listProgramms.length) {
      listProgramms.forEach(value => {
        this.modalList.insertAdjacentHTML('beforeend', 
        `
          <li class="map-modal__item">${value}</li>
        `
        )
      })
    }
  }
  getProgrammsByRegionId(id) {
    const region = this.getRegionById(id)
    const pIds = region['programmIds']
    const arrResult = []
    pIds.forEach((i, idx) => {
      arrResult.push(this.data['programms'][i])
    })
    return arrResult
  }
  selectRegionHander() {
    this.svgRegionGroups.forEach(item => {
      const id = item.getAttribute('id')
      item.addEventListener('click', () => {
        this.selectRegion(id)
      })
    })
  }
  render() {
    this.svgRegionGroups.forEach(item => {
      const id = item.getAttribute('id')
      const text = item.querySelector('foreignObject p')
      text.innerHTML = this.getRegionById(id)?.nameHTML
    })
  }
  getRegionById(id) {
    return this.data['regions'].find(i => {
      return i.id == id
    })
  }
  resetHandler() {
    this.resetNode ? this.resetNode.addEventListener('click', () => {
      this.reset()
    }) : null;
  }
  reset() {
    this.region.reset()
    this.programms.reset()
    this.svgRegionGroups.forEach(item => {
      item.classList.remove('active')
    })
    window.app.mapModal.close()
  }
  async fetchData() {
    const action = this.el.getAttribute('data-action')
    await ApiForm(action, null, 'GET')
    .then(json => {
      console.log(json)
      this.setup(json)
    })
    .catch(e => {
      console.log(e)
      this.data = data
      this.setup(data)
    })
  }
}
const selects = []

class Select {
  constructor(el) {
    this.el = el;
    this.triggersNode = [];
    this.currentNode = null;
    this.itemsNode = [];
    this.currentValue = null
    this.currentItem = null
    this.placeholder = null
    this.setup()
    this.callbacks = []
    selects.push(this)
  }
  setup() {
    if (!this.el) return;
    this.itemsNode = this.el.querySelectorAll('[data-select-item]')
    this.currentNode = this.el.querySelector('[data-select-current]')
    this.placeholder = this.currentNode?.textContent
    this.triggersNode = this.el.querySelectorAll('[data-select-trigger]')
    this.toggleHandler()
    this.selectedHandler()
  }
  open() {
    this.el ? this.el.classList.add('active') : null;
  }
  close() {
    this.el ? this.el.classList.remove('active') : null;
  }
  toggle() {
    if (this.el.classList.contains('active')) {
      this.close()
    } else {
      Select.closeAll()
      this.open()
    }
  }
  toggleHandler() {
    this.triggersNode.forEach(element => {
      element.addEventListener('click', () => {
        this.toggle()
      })
    });
  }
  select(e) {
    if (this.currentNode) {
      this.currentNode.innerHTML = e.target.dataset.selectItem
    }
    this.currentValue = e.target.dataset.selectValue
    this.currentItem = e.target.dataset.selectItem

    this.currentValue = e.target.dataset.selectValue
    this.currentItem = e.target.dataset.selectItem
    this.callbacks.forEach(callback => callback(e))
  }
  reset() {
    this.currentValue = null
    this.currentNode.textContent = this.placeholder
    this.itemsNode.forEach(item => {
      item.classList.remove('hide')
    })
  }
  selectedHandler() {
    this.itemsNode = this.el.querySelectorAll('[data-select-item]')
    this.itemsNode.forEach(element => {
      element.addEventListener('click', (e) => {
        this.select(e)
      })
    });
  }
  onSelected(callback) {
    this.callbacks.push(callback)
  }
  static closeAll() {
    selects.forEach(i => {
      i.close()
    })
  }
}


export class SelectSearch extends Select {
  constructor(el, values) {
    super(el);
    this.values = values
    this.input = this.el.querySelector('[data-select-input]')
    this.empty = this.el.querySelector('[data-select-empty]')
    this.clear = this.el.querySelector('[data-select-clear]')
    this.list = this.el.querySelector('[data-select-list]')
    this.searchHandler()
    this.clearHandler()
    if (values) {
      this.renderList(values)
      this.selectedHandler()
    }
  }
  renderList(values) {
    this.list.innerHTML = ''
    values.forEach(value => {
      this.list.insertAdjacentHTML('beforeend', 
       `
        <div class="select-search__item" data-select-value="${value.id}" data-select-item="${value.name}">${value.name}</div>
       `
      )
    })
  }
  search(val) {
    const value = val.trim().toUpperCase()
    if (!value) {
      this.toDefault()
      return
    }
    const regex = new RegExp(value, 'g')
    let emptyFlag = true
    this.itemsNode.forEach(item => {
      if (regex.test(item.dataset.selectItem.toUpperCase())) {
        item.classList.remove('hide')
        emptyFlag = false
      } else {
        item.classList.add('hide')
      }
    })
    emptyFlag ? this.empty.classList.remove('hide') : this.empty.classList.add('hide');
  }
  filterByIds(ids) {
    let emptyFlag = true
    this.itemsNode.forEach(item => {
      if (ids.find(i => i == item.dataset.selectValue)) {
        item.classList.remove('hide')
        emptyFlag = false
      } else {
        item.classList.add('hide')
      }
    })
    emptyFlag ? this.empty.classList.remove('hide') : this.empty.classList.add('hide');
  }
  searchHandler() {
    this.input.addEventListener('input', (e) => {
      this.search(e.target.value)
    })
  }
  clearHandler() {
    this.clear.addEventListener('click', (e) => {
      this.toDefault()
    })
  }
  toDefault() {
    this.input.value = ''
    this.itemsNode.forEach(item => item.classList.remove('hide'))
    this.empty.classList.add('hide');
  }
}

document.addEventListener('click', function (e) {
  if (!e.target.closest('[data-select-id]')) {
    Select.closeAll()
  }
});

export default function() {
  const selectLinkNodes = document.querySelectorAll('.select-link');
  selectLinkNodes.forEach(i => {
    new Select(i)
  })
  return {
    select: Select,
    selectSearch: SelectSearch,
  };
}
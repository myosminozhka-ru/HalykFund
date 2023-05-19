const selects = {
  selectLinkInstances: [],
}

class Select {
  constructor(el) {
    this.el = el;
    this.triggersNode = null;
    this.itemsNode = null;
    this.currentNode = null;
    this.setup()
  }
  setup() {
    if (!this.el) return;
    this.triggersNode = this.el.querySelectorAll('[data-select-trigger]')
    this.toggleHandler()
  }
  open() {
    this.el.classList.add('active')
  }
  close() {
    this.el.classList.remove('active')
  }
  toggle() {
    if (this.el.classList.contains('active')) {
      this.close()
    } else {
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
}

document.addEventListener('click', function (e) {
  if (!e.target.closest('[data-select-id]')) {
    for (let value in selects) {
      selects[value].forEach(i => {
        i.close()
      })
    }
  }
});

export default function() {
  const selectLinkNodes = document.querySelectorAll('.select-link');
  selectLinkNodes.forEach(i => {
    selects.selectLinkInstances.push(new Select(i))
  })
  return selects;
}
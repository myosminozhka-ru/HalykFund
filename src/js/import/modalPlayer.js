export default class ModalPlayer {
  constructor() {
    this.video = null
    this.handler()
  }
  open() {
    window.app.videoModal.open()
    window.app.videoModal.onClose(this.clear)
  }
  render(e) {
    const container = e.target.closest('[data-video-container]');
    const clone = container.cloneNode(true);
    const cleared = this.clearDataAttr(clone)
    window.app.videoModal.content.append(cleared)
    this.video = cleared.querySelector('video')
    this.play(cleared.querySelector('video'))
  }
  clearDataAttr(node) {
    const allNodes = node.getElementsByTagName("*")
    const allSourceNodes = node.getElementsByTagName("source")
    const allVideoNodes = node.getElementsByTagName("video")
    for (let i = 0; i < allNodes.length; i++) {
      allNodes[i].removeAttribute('data-video-play')
    }
    for (let i = 0; i < allSourceNodes.length; i++) {
      const src = allSourceNodes[i].getAttribute('data-video-src')
      allSourceNodes[i].removeAttribute('data-video-src')
      allSourceNodes[i].setAttribute('src', src)
    }
    for (let i = 0; i < allVideoNodes.length; i++) {
      allVideoNodes[i].setAttribute('controls', true)
    }

    return node
  }
  play() {
    setTimeout(() => this.video.play(), 1000)
  }
  clear() {
    window.app.videoModal.content.innerHTML = ''
  }
  handler() {
    document.addEventListener('click', (e) => {
      if (e.target.dataset.hasOwnProperty('videoPlay')) {
        this.render(e)
        this.open()
      }
    })
  }
}
export default class BannerParking {
  constructor() {
    var scene = document.getElementById('scene');
    if (!scene) return
    var parallaxInstance = new Parallax(scene, {
      limitX: true,
      limitY: false,
    });
  }
}
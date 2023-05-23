export default class BannerParking {
  constructor() {
    var image = document.getElementsByClassName('thumbnail');
  
    if (image.length === 0) return
    new simpleParallax(image, {
      delay: .6,
      transition: 'cubic-bezier(0,0,0,1)'
    });
  }
}
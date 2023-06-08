export default class BannerParking {
  constructor() {
    var image = document.getElementsByClassName('rellax');
  
    if (image.length === 0) return

    var rellax = new Rellax('.rellax', {
      breakpoints: [576, 768, 1024]
    });
  }
}
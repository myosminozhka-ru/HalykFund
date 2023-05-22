/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/modules/anime-card/index.js":
/*!************************************************!*\
  !*** ./src/blocks/modules/anime-card/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SvgAnime)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function getTransformOriginIndex(index, deg) {
  if (index === 0) {
    return deg + 90;
  } else if (index === 1) {
    return deg;
  } else if (index === 2) {
    return deg - 90 - 45;
  } else if (index === 3) {
    return deg;
  } else if (index === 4) {
    return deg + 90 + 45;
  } else if (index === 5) {
    return deg;
  } else if (index === 6) {
    return deg;
  } else if (index === 7) {
    return deg;
  } else {
    return deg;
  }
}
var SvgAnime = /*#__PURE__*/function () {
  function SvgAnime() {
    _classCallCheck(this, SvgAnime);
    this.principles();
    this.target();
  }
  _createClass(SvgAnime, [{
    key: "principles",
    value: function principles() {
      var principlesSVG = document.querySelector('.anime-card--principles svg');
      if (!principlesSVG) return;
      var principlesLines = document.querySelectorAll('.anime-card--principles line');
      var dur = 0.4;
      var deg = 7;
      var tl1 = gsap.timeline({
        repeat: -1,
        yoyo: false,
        repeatDelay: dur * 4
      });
      var tl2 = gsap.timeline({
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });
      gsap.set(principlesSVG, {
        rotate: 90,
        transformOrigin: "center center"
      });
      tl1.to(principlesSVG, {
        rotate: -135,
        duration: dur,
        transformOrigin: "center center",
        ease: "power1.inOut",
        repeatDelay: dur * 2
      }, 0).to(principlesSVG, {
        rotate: 90,
        duration: dur,
        transformOrigin: "center center",
        ease: "power1.inOut",
        repeatDelay: dur * 2
      }, dur * 2);
      principlesLines.forEach(function (el, n) {
        tl1.to(el, {
          rotate: getTransformOriginIndex(n, deg),
          duration: dur,
          transformOrigin: "center center",
          ease: "back.out",
          repeatDelay: dur * 4
        }, 0).to(el, {
          rotate: getTransformOriginIndex(n, 0) - deg,
          duration: dur * 2,
          transformOrigin: "center center",
          ease: "back.out",
          repeatDelay: dur * 4
        }, dur).to(el, {
          rotate: getTransformOriginIndex(n, 0),
          duration: dur,
          transformOrigin: "center center",
          ease: "back.out",
          repeatDelay: dur * 4
        }, dur * 3);
      });
      var lineCoordDur = dur * 4;
      tl2.to(principlesLines[0], {
        duration: dur * 2,
        attr: {
          x2: 73
        }
      }, lineCoordDur);
      tl2.to(principlesLines[1], {
        duration: dur * 2,
        attr: {
          x2: 95,
          y2: 84.2028
        }
      }, lineCoordDur);
      tl2.to(principlesLines[2], {
        duration: dur * 2,
        attr: {
          x2: 2
        }
      }, lineCoordDur);
      tl2.to(principlesLines[3], {
        duration: dur * 2,
        attr: {
          x2: 93.8284,
          y2: 93
        }
      }, lineCoordDur);
      tl2.to(principlesLines[4], {
        duration: dur * 2,
        attr: {
          x2: 2
        }
      }, lineCoordDur);
      tl2.to(principlesLines[5], {
        duration: dur * 2,
        attr: {
          y2: 96
        }
      }, lineCoordDur);
      tl2.to(principlesLines[6], {
        duration: dur * 2,
        attr: {
          x2: 2
        }
      }, lineCoordDur);
      tl2.to(principlesLines[7], {
        duration: dur * 2,
        attr: {
          x2: 83
        }
      }, lineCoordDur);
    }
  }, {
    key: "target",
    value: function target() {
      var target = document.querySelector('.anime-card--target');
      if (!target) return;
      var circles = document.querySelectorAll('.anime-card--target circle');
      var dur = 0.8;
      var tl1 = gsap.timeline({
        repeat: -1,
        repeatDelay: dur * 1
      });
      var tl2 = gsap.timeline({
        repeat: -1,
        repeatDelay: dur * 4,
        delay: dur * 4
      });
      for (var i = 0; i < 4; i++) {
        tl1.to(circles[i], {
          attr: {
            r: 14
          },
          duration: dur,
          ease: "back.inOut",
          delay: dur * 0
        }, 0);
      }
      for (var _i = 1; _i < 4; _i++) {
        gsap.set(circles[_i], {
          opacity: 0
        });
        tl1.to(circles[_i], {
          attr: {
            r: 34
          },
          duration: dur,
          opacity: 1,
          ease: "back.inOut",
          delay: dur * 1
        }, 0);
      }
      for (var _i2 = 2; _i2 < 4; _i2++) {
        tl1.to(circles[_i2], {
          attr: {
            r: 55
          },
          duration: dur,
          opacity: 1,
          ease: "back.inOut",
          delay: dur * 2
        }, 0);
      }
      for (var _i3 = 3; _i3 < 4; _i3++) {
        tl1.to(circles[_i3], {
          attr: {
            r: 78
          },
          duration: dur,
          opacity: 1,
          ease: "back.inOut",
          delay: dur * 3
        }, 0);
      }
      for (var _i4 = 0; _i4 < 4; _i4++) {
        tl2.to(circles[_i4], {
          attr: {
            r: 8
          },
          opacity: !_i4 ? 1 : 0,
          duration: dur,
          ease: "back.inOut",
          delay: dur * 0
        }, dur * 0);
      }
    }
  }]);
  return SvgAnime;
}();


/***/ }),

/***/ "./src/blocks/modules/banner-main/index.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/banner-main/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SliderBannerMain)
/* harmony export */ });
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/bundle */ "./node_modules/swiper/swiper-bundle.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var SliderBannerMain = /*#__PURE__*/function () {
  function SliderBannerMain() {
    _classCallCheck(this, SliderBannerMain);
    this.sectionNodes = document.querySelectorAll('.banner-main');
    this.init();
  }
  _createClass(SliderBannerMain, [{
    key: "init",
    value: function init() {
      this.sectionNodes.forEach(function (element) {
        var sliderNode = element.querySelector('.banner-main__slider');
        var prevNode = element.querySelector('.slider-prev');
        var nextNode = element.querySelector('.slider-next');
        var pagNode = element.querySelector('.slider-pag');
        var swiper = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"](sliderNode, {
          slidesPerView: 1,
          loop: true,
          effect: 'fade',
          navigation: {
            nextEl: nextNode,
            prevEl: prevNode,
            disabledClass: 'disabled'
          },
          pagination: {
            el: pagNode,
            bulletActiveClass: 'active'
          }
        });
      });
    }
  }]);
  return SliderBannerMain;
}();


/***/ }),

/***/ "./src/blocks/modules/banner-parking/index.js":
/*!****************************************************!*\
  !*** ./src/blocks/modules/banner-parking/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BannerParking)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var BannerParking = /*#__PURE__*/_createClass(function BannerParking() {
  _classCallCheck(this, BannerParking);
  var scene = document.getElementById('scene');
  if (!scene) return;
  var parallaxInstance = new Parallax(scene, {
    limitX: true,
    limitY: false
  });
});


/***/ }),

/***/ "./src/blocks/modules/contests/index.js":
/*!**********************************************!*\
  !*** ./src/blocks/modules/contests/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SliderContests)
/* harmony export */ });
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/bundle */ "./node_modules/swiper/swiper-bundle.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var SliderContests = /*#__PURE__*/function () {
  function SliderContests() {
    _classCallCheck(this, SliderContests);
    this.sectionNodes = document.querySelectorAll('.contests');
    this.init();
  }
  _createClass(SliderContests, [{
    key: "init",
    value: function init() {
      this.sectionNodes.forEach(function (element) {
        var sliderNode = element.querySelector('.contests__slider');
        var prevNode = element.querySelector('.slider-prev');
        var nextNode = element.querySelector('.slider-next');
        var pagNode = element.querySelector('.slider-pag');
        var swiper = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"](sliderNode, {
          slidesPerView: 'auto',
          loop: false,
          navigation: {
            nextEl: nextNode,
            prevEl: prevNode,
            disabledClass: 'disabled'
          },
          pagination: {
            el: pagNode,
            type: 'progressbar',
            bulletActiveClass: 'active'
          }
        });
      });
    }
  }]);
  return SliderContests;
}();


/***/ }),

/***/ "./src/blocks/modules/directions/index.js":
/*!************************************************!*\
  !*** ./src/blocks/modules/directions/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SliderDirections)
/* harmony export */ });
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/bundle */ "./node_modules/swiper/swiper-bundle.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var SliderDirections = /*#__PURE__*/function () {
  function SliderDirections() {
    _classCallCheck(this, SliderDirections);
    this.sectionNodes = document.querySelectorAll('.directions');
    this.init();
  }
  _createClass(SliderDirections, [{
    key: "init",
    value: function init() {
      this.sectionNodes.forEach(function (element) {
        var sliderNode = element.querySelector('.directions__slider');
        var prevNode = element.querySelector('.slider-prev');
        var nextNode = element.querySelector('.slider-next');
        var pagNode = element.querySelector('.slider-pag');
        var swiper = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"](sliderNode, {
          slidesPerView: 'auto',
          loopedSlides: 4,
          loop: false,
          navigation: {
            nextEl: nextNode,
            prevEl: prevNode,
            disabledClass: 'disabled'
          },
          pagination: {
            el: pagNode,
            type: 'progressbar',
            bulletActiveClass: 'active'
          }
        });
      });
    }
  }]);
  return SliderDirections;
}();


/***/ }),

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/***/ (() => {



/***/ }),

/***/ "./src/blocks/modules/gallery-slider/index.js":
/*!****************************************************!*\
  !*** ./src/blocks/modules/gallery-slider/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SliderGallery)
/* harmony export */ });
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/bundle */ "./node_modules/swiper/swiper-bundle.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var SliderGallery = /*#__PURE__*/function () {
  function SliderGallery() {
    _classCallCheck(this, SliderGallery);
    this.sectionNodes = document.querySelectorAll('.gallery-slider');
    this.init();
  }
  _createClass(SliderGallery, [{
    key: "init",
    value: function init() {
      this.sectionNodes.forEach(function (element) {
        var sliderNode = element.querySelector('.gallery-slider__slider');
        var prevNode = element.querySelector('.slider-prev');
        var nextNode = element.querySelector('.slider-next');
        var pagNode = element.querySelector('.slider-pag');
        var swiper = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"](sliderNode, {
          slidesPerView: 'auto',
          loop: false,
          navigation: {
            nextEl: nextNode,
            prevEl: prevNode,
            disabledClass: 'disabled'
          },
          pagination: {
            el: pagNode,
            type: 'progressbar',
            bulletActiveClass: 'active'
          }
        });
      });
    }
  }]);
  return SliderGallery;
}();


/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Header = /*#__PURE__*/function () {
  function Header() {
    _classCallCheck(this, Header);
    this.header = document.querySelector('.header');
    this.burger = document.querySelector('.header__burger');
    this.nav = document.querySelector('.header__nav');
    this.navListNode = document.querySelector('.header__nav-list');
    this.searchBlockNode = document.querySelector('.header__search');
    this.openSearchNode = document.querySelector('.header__search-open');
    this.closeSearchNode = document.querySelector('.header__search-close');
    this.inputSearchNode = document.querySelector('.header__search-input');
    this.startSearchNode = document.querySelector('.header__search-start');
    this.drops = document.querySelectorAll('.header__nav-drop');
    this.dropItems = document.querySelectorAll('.header__nav-item--drop');
    this.init();
  }
  _createClass(Header, [{
    key: "init",
    value: function init() {
      if (!(this.burger && this.nav)) return;
      this.toggleHandler();
      this.setTopPadding();
      this.sizeHandler();
      this.searchOpenHandler();
      this.searchCloseHandler();
      this.searchInputHandler();
      this.dropHandler();
      document.body.style.paddingTop = this.header.clientHeight + 'px';
    }
  }, {
    key: "open",
    value: function open() {
      this.burger.classList.add('active');
      this.nav.classList.add('active');
      document.body.classList.add('lock');
    }
  }, {
    key: "close",
    value: function close() {
      this.burger.classList.remove('active');
      this.nav.classList.remove('active');
      document.body.classList.remove('lock');
    }
  }, {
    key: "toggleHandler",
    value: function toggleHandler() {
      var _this = this;
      this.burger ? this.burger.addEventListener('click', function () {
        if (_this.burger.classList.contains('active')) {
          _this.close();
        } else {
          _this.open();
        }
      }) : null;
    }
  }, {
    key: "setTopPadding",
    value: function setTopPadding() {
      if (window.matchMedia("(max-width: 768px)").matches) {
        this.nav.style.paddingTop = this.header.clientHeight + 20 + 'px';
      } else {
        this.nav.style.paddingTop = 0;
      }
    }
  }, {
    key: "sizeHandler",
    value: function sizeHandler() {
      var _this2 = this;
      window.addEventListener('resize', function () {
        _this2.setTopPadding();
      });
    }
  }, {
    key: "dropHandler",
    value: function dropHandler() {
      var _this3 = this;
      this.dropItems.forEach(function (i, index) {
        var arrow = i.querySelector('.header__nav-arrow');
        var title = i.querySelector('.header__nav-title');
        arrow.addEventListener('click', function () {
          _this3.openDrop(i, index);
        });
        if (!window.matchMedia("(max-width: 768px)").matches) {
          title.addEventListener('mouseover', function () {
            _this3.openDrop(i, index);
          });
        }
        document.addEventListener('click', function (e) {
          if (!e.target.closest('.header__nav-item')) {
            _this3.drops.forEach(function (drop) {
              drop.classList.remove('active');
            });
          }
        });
      });
    }
  }, {
    key: "openDrop",
    value: function openDrop(i, index) {
      var isActive = this.drops[index].classList.contains('active');
      this.dropItems.forEach(function (item) {
        item.classList.remove('active');
      });
      var coord = this.navListNode.getBoundingClientRect();
      this.drops.forEach(function (drop) {
        drop.classList.remove('active');
        drop.style.paddingLeft = (coord === null || coord === void 0 ? void 0 : coord.x) + 'px';
      });
      if (isActive) {
        return;
      }
      i.classList.add('active');
      this.drops[index].classList.add('active');
    }
  }, {
    key: "openSearch",
    value: function openSearch() {
      this.navListNode.classList.add('hide');
      this.searchBlockNode.classList.add('active');
      this.inputSearchNode.focus();
    }
  }, {
    key: "closeSearch",
    value: function closeSearch() {
      this.navListNode.classList.remove('hide');
      this.searchBlockNode.classList.remove('active');
      this.inputSearchNode.blur();
      this.inputSearchNode.value = '';
    }
  }, {
    key: "searchOpenHandler",
    value: function searchOpenHandler() {
      var _this4 = this;
      this.openSearchNode ? this.openSearchNode.addEventListener('click', function () {
        _this4.openSearch();
      }) : null;
    }
  }, {
    key: "searchCloseHandler",
    value: function searchCloseHandler() {
      var _this5 = this;
      this.closeSearchNode ? this.closeSearchNode.addEventListener('click', function () {
        _this5.closeSearch();
      }) : null;
    }
  }, {
    key: "searchInputHandler",
    value: function searchInputHandler() {
      var _this6 = this;
      this.inputSearchNode ? this.inputSearchNode.addEventListener('keypress', function (event) {
        if (event.key === "Enter") {
          event.preventDefault();
          _this6.search();
        }
      }) : null;
      this.startSearchNode ? this.startSearchNode.addEventListener('click', function (event) {
        _this6.search();
      }) : null;
    }
  }, {
    key: "search",
    value: function search() {
      var page = this.inputSearchNode.dataset.page;
      var newHref = window.location.origin + page + this.inputSearchNode.value;
      window.location.href = newHref;
    }
  }]);
  return Header;
}();


/***/ }),

/***/ "./src/blocks/modules/history-main/index.js":
/*!**************************************************!*\
  !*** ./src/blocks/modules/history-main/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SliderHistoryMain)
/* harmony export */ });
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/bundle */ "./node_modules/swiper/swiper-bundle.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var SliderHistoryMain = /*#__PURE__*/function () {
  function SliderHistoryMain() {
    _classCallCheck(this, SliderHistoryMain);
    this.sectionNodes = document.querySelectorAll('.history-main');
    this.init();
  }
  _createClass(SliderHistoryMain, [{
    key: "init",
    value: function init() {
      this.sectionNodes.forEach(function (element) {
        var sliderNode = element.querySelector('.history-main__slider');
        var prevNode = element.querySelector('.slider-prev');
        var nextNode = element.querySelector('.slider-next');
        var pagNode = element.querySelector('.slider-pag');
        var swiper = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"](sliderNode, {
          slidesPerView: 'auto',
          loop: false,
          navigation: {
            nextEl: nextNode,
            prevEl: prevNode,
            disabledClass: 'disabled'
          },
          pagination: {
            el: pagNode,
            type: 'progressbar',
            bulletActiveClass: 'active'
          }
        });
      });
    }
  }]);
  return SliderHistoryMain;
}();


/***/ }),

/***/ "./src/blocks/modules/news-another/index.js":
/*!**************************************************!*\
  !*** ./src/blocks/modules/news-another/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SliderNewsAnother)
/* harmony export */ });
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/bundle */ "./node_modules/swiper/swiper-bundle.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var SliderNewsAnother = /*#__PURE__*/function () {
  function SliderNewsAnother() {
    _classCallCheck(this, SliderNewsAnother);
    this.sectionNodes = document.querySelectorAll('.news-another');
    this.init();
  }
  _createClass(SliderNewsAnother, [{
    key: "init",
    value: function init() {
      this.sectionNodes.forEach(function (element) {
        var sliderNode = element.querySelector('.news-another__slider');
        var prevNode = element.querySelector('.slider-prev');
        var nextNode = element.querySelector('.slider-next');
        var pagNode = element.querySelector('.slider-pag');
        var swiper = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"](sliderNode, {
          slidesPerView: 'auto',
          loop: false,
          navigation: {
            nextEl: nextNode,
            prevEl: prevNode,
            disabledClass: 'disabled'
          },
          pagination: {
            el: pagNode,
            type: 'progressbar',
            bulletActiveClass: 'active'
          }
        });
      });
    }
  }]);
  return SliderNewsAnother;
}();


/***/ }),

/***/ "./src/blocks/modules/partners-main/index.js":
/*!***************************************************!*\
  !*** ./src/blocks/modules/partners-main/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SliderPartnersMain)
/* harmony export */ });
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/bundle */ "./node_modules/swiper/swiper-bundle.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var SliderPartnersMain = /*#__PURE__*/function () {
  function SliderPartnersMain() {
    _classCallCheck(this, SliderPartnersMain);
    this.sectionNodes = document.querySelectorAll('.partners-main');
    this.init();
  }
  _createClass(SliderPartnersMain, [{
    key: "init",
    value: function init() {
      this.sectionNodes.forEach(function (element) {
        var sliderNode = element.querySelector('.partners-main__slider');
        var prevNode = element.querySelector('.slider-prev');
        var nextNode = element.querySelector('.slider-next');
        var pagNode = element.querySelector('.slider-pag');
        var swiper = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"](sliderNode, {
          slidesPerView: 'auto',
          loop: false,
          grid: {
            rows: 2
          },
          navigation: {
            nextEl: nextNode,
            prevEl: prevNode,
            disabledClass: 'disabled'
          },
          pagination: {
            el: pagNode,
            type: 'progressbar',
            bulletActiveClass: 'active'
          }
        });
      });
    }
  }]);
  return SliderPartnersMain;
}();


/***/ }),

/***/ "./src/blocks/modules/search/index.js":
/*!********************************************!*\
  !*** ./src/blocks/modules/search/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Search)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Search = /*#__PURE__*/function () {
  function Search() {
    _classCallCheck(this, Search);
    this.clearSearchNode = document.querySelector('.search__clear');
    this.inputSearchNode = document.querySelector('.search__input');
    this.startSearchNode = document.querySelector('.search__start');
    this.init();
  }
  _createClass(Search, [{
    key: "init",
    value: function init() {
      if (!(this.inputSearchNode && this.startSearchNode && this.clearSearchNode)) return;
      this.searchClearHandler();
      this.searchInputHandler();
    }
  }, {
    key: "clearSearch",
    value: function clearSearch() {
      this.clearSearchNode.classList.remove('active');
      this.startSearchNode.classList.add('active');
      this.inputSearchNode.value = '';
      this.inputSearchNode.focus();
    }
  }, {
    key: "searchClearHandler",
    value: function searchClearHandler() {
      var _this = this;
      this.clearSearchNode ? this.clearSearchNode.addEventListener('click', function () {
        _this.clearSearch();
      }) : null;
    }
  }, {
    key: "searchInputHandler",
    value: function searchInputHandler() {
      var _this2 = this;
      this.inputSearchNode ? this.inputSearchNode.addEventListener('keypress', function (event) {
        if (event.key === "Enter") {
          event.preventDefault();
          _this2.search();
        }
      }) : null;
      this.startSearchNode ? this.startSearchNode.addEventListener('click', function (event) {
        _this2.search();
      }) : null;
    }
  }, {
    key: "search",
    value: function search() {
      var page = this.inputSearchNode.dataset.page;
      var newHref = window.location.origin + page + this.inputSearchNode.value;
      window.location.href = newHref;
    }
  }]);
  return Search;
}();


/***/ }),

/***/ "./src/blocks/modules/select/index.js":
/*!********************************************!*\
  !*** ./src/blocks/modules/select/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var selects = {
  selectLinkInstances: []
};
var Select = /*#__PURE__*/function () {
  function Select(el) {
    _classCallCheck(this, Select);
    this.el = el;
    this.triggersNode = null;
    this.itemsNode = null;
    this.currentNode = null;
    this.setup();
  }
  _createClass(Select, [{
    key: "setup",
    value: function setup() {
      if (!this.el) return;
      this.triggersNode = this.el.querySelectorAll('[data-select-trigger]');
      this.toggleHandler();
    }
  }, {
    key: "open",
    value: function open() {
      this.el.classList.add('active');
    }
  }, {
    key: "close",
    value: function close() {
      this.el.classList.remove('active');
    }
  }, {
    key: "toggle",
    value: function toggle() {
      if (this.el.classList.contains('active')) {
        this.close();
      } else {
        this.open();
      }
    }
  }, {
    key: "toggleHandler",
    value: function toggleHandler() {
      var _this = this;
      this.triggersNode.forEach(function (element) {
        element.addEventListener('click', function () {
          _this.toggle();
        });
      });
    }
  }]);
  return Select;
}();
document.addEventListener('click', function (e) {
  if (!e.target.closest('[data-select-id]')) {
    for (var value in selects) {
      selects[value].forEach(function (i) {
        i.close();
      });
    }
  }
});
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var selectLinkNodes = document.querySelectorAll('.select-link');
  selectLinkNodes.forEach(function (i) {
    selects.selectLinkInstances.push(new Select(i));
  });
  return selects;
}

/***/ }),

/***/ "./src/blocks/modules/slider-grid/index.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/slider-grid/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SliderGrid)
/* harmony export */ });
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/bundle */ "./node_modules/swiper/swiper-bundle.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var SliderGrid = /*#__PURE__*/function () {
  function SliderGrid() {
    _classCallCheck(this, SliderGrid);
    this.sectionNodes = document.querySelectorAll('.slider-grid');
    this.init();
  }
  _createClass(SliderGrid, [{
    key: "init",
    value: function init() {
      this.sectionNodes.forEach(function (element) {
        var sliderNode = element;
        var swiper = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"](sliderNode, {
          slidesPerView: 'auto',
          loop: false,
          freeMode: true
        });
      });
    }
  }]);
  return SliderGrid;
}();


/***/ }),

/***/ "./src/blocks/modules/social/index.js":
/*!********************************************!*\
  !*** ./src/blocks/modules/social/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Social)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Social = /*#__PURE__*/function () {
  function Social() {
    _classCallCheck(this, Social);
    this.nodes = document.querySelectorAll('[data-copy-trigger]');
    this.textarea = document.querySelector('#urlCopy');
    this.init();
  }
  _createClass(Social, [{
    key: "init",
    value: function init() {
      if (!this.textarea) return;
      this.copyHandler();
    }
  }, {
    key: "copy",
    value: function copy() {
      this.textarea.innerHTML = window.location.href;
      console.log(this.textarea.innerHTML);
      this.textarea.select();
      document.execCommand("copy");
    }
  }, {
    key: "copyHandler",
    value: function copyHandler() {
      var _this = this;
      this.nodes.forEach(function (el) {
        el.addEventListener('click', function () {
          _this.copy();
          _this.alert();
        });
      });
    }
  }, {
    key: "alert",
    value: function (_alert) {
      function alert() {
        return _alert.apply(this, arguments);
      }
      alert.toString = function () {
        return _alert.toString();
      };
      return alert;
    }(function () {
      alert('Скопировано!');
    })
  }]);
  return Social;
}();


/***/ }),

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/***/ (() => {



/***/ }),

/***/ "./src/js/import/form.js":
/*!*******************************!*\
  !*** ./src/js/import/form.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var ApiForm = function ApiForm(url, data) {
  return fetch(url, {
    method: 'POST',
    body: data
  });
};
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var forms = document.querySelectorAll('form.form');
  forms.forEach(function (form) {
    var button = form.querySelector('button[type="submit"]');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var formData = new FormData(form);
      var action = form.getAttribute('action');
      var btnText = button.textContent;
      button.setAttribute('disabled', true);
      button.textContent = 'Загрузка...';
      ApiForm(action, formData).then(function (res) {
        console.log('contact success');
        if (res.status === 400) {
          // window.app.modalApplicatioAccepted.open()
          button.textContent = 'Доставлено!';
          alert('Доставлено!');
        } else {
          throw res;
        }
      })["catch"](function () {
        alert('contact error');
      })["finally"](function () {
        button.textContent = btnText;
        button.removeAttribute('disabled');
      });
    });
  });
}

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_directions_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/directions/index */ "./src/blocks/modules/directions/index.js");
/* harmony import */ var _modules_banner_main_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/banner-main/index */ "./src/blocks/modules/banner-main/index.js");
/* harmony import */ var _modules_contests_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/contests/index */ "./src/blocks/modules/contests/index.js");
/* harmony import */ var _modules_history_main_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/history-main/index */ "./src/blocks/modules/history-main/index.js");
/* harmony import */ var _modules_partners_main_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/partners-main/index */ "./src/blocks/modules/partners-main/index.js");
/* harmony import */ var _modules_slider_grid_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! %modules%/slider-grid/index */ "./src/blocks/modules/slider-grid/index.js");
/* harmony import */ var _modules_anime_card_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! %modules%/anime-card/index */ "./src/blocks/modules/anime-card/index.js");
/* harmony import */ var _modules_banner_parking_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! %modules%/banner-parking/index */ "./src/blocks/modules/banner-parking/index.js");
/* harmony import */ var _modules_search_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! %modules%/search/index */ "./src/blocks/modules/search/index.js");
/* harmony import */ var _modules_select_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! %modules%/select/index */ "./src/blocks/modules/select/index.js");
/* harmony import */ var _modules_gallery_slider_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! %modules%/gallery-slider/index */ "./src/blocks/modules/gallery-slider/index.js");
/* harmony import */ var _modules_news_another_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! %modules%/news-another/index */ "./src/blocks/modules/news-another/index.js");
/* harmony import */ var _modules_social_index__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! %modules%/social/index */ "./src/blocks/modules/social/index.js");















window.app = {
  header: new _modules_header_header__WEBPACK_IMPORTED_MODULE_0__["default"](),
  sliderDirections: new _modules_directions_index__WEBPACK_IMPORTED_MODULE_2__["default"](),
  sliderBannerMain: new _modules_banner_main_index__WEBPACK_IMPORTED_MODULE_3__["default"](),
  sliderContests: new _modules_contests_index__WEBPACK_IMPORTED_MODULE_4__["default"](),
  sliderHistoryMain: new _modules_history_main_index__WEBPACK_IMPORTED_MODULE_5__["default"](),
  sliderPartnersMain: new _modules_partners_main_index__WEBPACK_IMPORTED_MODULE_6__["default"](),
  sliderGrid: new _modules_slider_grid_index__WEBPACK_IMPORTED_MODULE_7__["default"](),
  svgAnime: new _modules_anime_card_index__WEBPACK_IMPORTED_MODULE_8__["default"](),
  bannerParking: new _modules_banner_parking_index__WEBPACK_IMPORTED_MODULE_9__["default"](),
  search: new _modules_search_index__WEBPACK_IMPORTED_MODULE_10__["default"](),
  select: (0,_modules_select_index__WEBPACK_IMPORTED_MODULE_11__["default"])(),
  sliderGallery: new _modules_gallery_slider_index__WEBPACK_IMPORTED_MODULE_12__["default"](),
  sliderNewsAnother: new _modules_news_another_index__WEBPACK_IMPORTED_MODULE_13__["default"](),
  social: new _modules_social_index__WEBPACK_IMPORTED_MODULE_14__["default"]()
};

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_import_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _import_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./import/form */ "./src/js/import/form.js");



(0,_import_form__WEBPACK_IMPORTED_MODULE_2__["default"])();

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkgulp_scss_starter"] = self["webpackChunkgulp_scss_starter"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./src/js/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map
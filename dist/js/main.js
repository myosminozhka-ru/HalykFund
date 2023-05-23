<<<<<<< HEAD
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
        Select.closeAll();
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
  }], [{
    key: "closeAll",
    value: function closeAll() {
      for (var value in selects) {
        selects[value].forEach(function (i) {
          i.close();
        });
      }
    }
  }]);
  return Select;
}();
document.addEventListener('click', function (e) {
  if (!e.target.closest('[data-select-id]')) {
    Select.closeAll();
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
      alert('Ссылка скопирована!');
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
=======
(()=>{"use strict";var e,t={435:(e,t,r)=>{function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==o(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===o(i)?i:String(i)),n)}var i}var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.htmlNode=document.querySelector("body"),this.header=document.querySelector(".header"),this.burger=document.querySelector(".header__burger"),this.nav=document.querySelector(".header__nav"),this.navListNode=document.querySelector(".header__nav-list"),this.searchBlockNode=document.querySelector(".header__search"),this.openSearchNode=document.querySelector(".header__search-open"),this.closeSearchNode=document.querySelector(".header__search-close"),this.inputSearchNode=document.querySelector(".header__search-input"),this.startSearchNode=document.querySelector(".header__search-start"),this.drops=document.querySelectorAll(".header__nav-drop"),this.dropItems=document.querySelectorAll(".header__nav-item--drop"),this.init()}var t,r;return t=e,(r=[{key:"init",value:function(){this.burger&&this.nav&&(this.toggleHandler(),this.setTopPadding(),this.sizeHandler(),this.searchOpenHandler(),this.searchCloseHandler(),this.searchInputHandler(),this.dropHandler(),this.scrollHendler(),document.body.style.paddingTop=this.header.clientHeight+"px")}},{key:"open",value:function(){this.burger.classList.add("active"),this.nav.classList.add("active"),document.body.classList.add("lock")}},{key:"close",value:function(){this.burger.classList.remove("active"),this.nav.classList.remove("active"),document.body.classList.remove("lock")}},{key:"toggleHandler",value:function(){var e=this;this.burger&&this.burger.addEventListener("click",(function(){e.burger.classList.contains("active")?e.close():e.open()}))}},{key:"setTopPadding",value:function(){window.matchMedia("(max-width: 768px)").matches?this.nav.style.paddingTop=this.header.clientHeight+20+"px":this.nav.style.paddingTop=0}},{key:"sizeHandler",value:function(){var e=this;window.addEventListener("resize",(function(){e.setTopPadding()}))}},{key:"dropHandler",value:function(){var e=this;this.dropItems.forEach((function(t,r){var o=t.querySelector(".header__nav-arrow"),n=t.querySelector(".header__nav-title");o.addEventListener("click",(function(){e.openDrop(t,r)})),window.matchMedia("(max-width: 768px)").matches||n.addEventListener("mouseover",(function(){e.openDrop(t,r)})),document.addEventListener("click",(function(t){t.target.closest(".header__nav-item")||e.drops.forEach((function(e){e.classList.remove("active")}))}))}))}},{key:"openDrop",value:function(e,t){var r=this.drops[t].classList.contains("active");this.dropItems.forEach((function(e){e.classList.remove("active")}));var o=this.navListNode.getBoundingClientRect();this.drops.forEach((function(e){e.classList.remove("active"),e.style.paddingLeft=(null==o?void 0:o.x)+"px"})),r||(e.classList.add("active"),this.drops[t].classList.add("active"))}},{key:"openSearch",value:function(){this.navListNode.classList.add("hide"),this.searchBlockNode.classList.add("active"),this.inputSearchNode.focus()}},{key:"closeSearch",value:function(){this.navListNode.classList.remove("hide"),this.searchBlockNode.classList.remove("active"),this.inputSearchNode.blur(),this.inputSearchNode.value=""}},{key:"searchOpenHandler",value:function(){var e=this;this.openSearchNode&&this.openSearchNode.addEventListener("click",(function(){e.openSearch()}))}},{key:"searchCloseHandler",value:function(){var e=this;this.closeSearchNode&&this.closeSearchNode.addEventListener("click",(function(){e.closeSearch()}))}},{key:"searchInputHandler",value:function(){var e=this;this.inputSearchNode&&this.inputSearchNode.addEventListener("keypress",(function(t){"Enter"===t.key&&(t.preventDefault(),e.search())})),this.startSearchNode&&this.startSearchNode.addEventListener("click",(function(t){e.search()}))}},{key:"search",value:function(){var e=this.inputSearchNode.dataset.page,t=window.location.origin+e+this.inputSearchNode.value;window.location.href=t}},{key:"scrollHendler",value:function(){var e=this,t=0;window.addEventListener("scroll",(function(){t<e.htmlNode.scrollTop?(e.header&&e.header.classList.add("scroll"),e.close(),e.header&&e.header.classList.remove("down")):0===e.htmlNode.scrollTop?e.header&&e.header.classList.remove("down"):e.header&&e.header.classList.add("down"),e.htmlNode.scrollTop<e.header.clientHeight-60*e.header.clientHeight/100&&e.header&&e.header.classList.remove("scroll"),t=e.htmlNode.scrollTop}))}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}(),a=r(128);function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function c(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,n=function(e,t){if("object"!==l(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==l(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===l(n)?n:String(n)),o)}var n}var s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.sectionNodes=document.querySelectorAll(".directions"),this.init()}var t,r;return t=e,(r=[{key:"init",value:function(){this.sectionNodes.forEach((function(e){var t=e.querySelector(".directions__slider"),r=e.querySelector(".slider-prev"),o=e.querySelector(".slider-next"),n=e.querySelector(".slider-pag");new a.Z(t,{slidesPerView:"auto",loopedSlides:4,loop:!1,navigation:{nextEl:o,prevEl:r,disabledClass:"disabled"},pagination:{el:n,type:"progressbar",bulletActiveClass:"active"}})}))}}])&&c(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function f(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,n=function(e,t){if("object"!==u(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==u(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===u(n)?n:String(n)),o)}var n}var y=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.sectionNodes=document.querySelectorAll(".banner-main"),this.init()}var t,r;return t=e,(r=[{key:"init",value:function(){this.sectionNodes.forEach((function(e){var t=e.querySelector(".banner-main__slider"),r=e.querySelector(".slider-prev"),o=e.querySelector(".slider-next"),n=e.querySelector(".slider-pag");new a.Z(t,{slidesPerView:1,loop:!0,effect:"fade",navigation:{nextEl:o,prevEl:r,disabledClass:"disabled"},pagination:{el:n,bulletActiveClass:"active"}})}))}}])&&f(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function p(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,n=function(e,t){if("object"!==d(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==d(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===d(n)?n:String(n)),o)}var n}var v=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.sectionNodes=document.querySelectorAll(".contests"),this.init()}var t,r;return t=e,(r=[{key:"init",value:function(){this.sectionNodes.forEach((function(e){var t=e.querySelector(".contests__slider"),r=e.querySelector(".slider-prev"),o=e.querySelector(".slider-next"),n=e.querySelector(".slider-pag");new a.Z(t,{slidesPerView:"auto",loop:!1,navigation:{nextEl:o,prevEl:r,disabledClass:"disabled"},pagination:{el:n,type:"progressbar",bulletActiveClass:"active"}})}))}}])&&p(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function b(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,n=function(e,t){if("object"!==h(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==h(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===h(n)?n:String(n)),o)}var n}var m=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.sectionNodes=document.querySelectorAll(".history-main"),this.init()}var t,r;return t=e,(r=[{key:"init",value:function(){this.sectionNodes.forEach((function(e){var t=e.querySelector(".history-main__slider"),r=e.querySelector(".slider-prev"),o=e.querySelector(".slider-next"),n=e.querySelector(".slider-pag");new a.Z(t,{slidesPerView:"auto",loop:!1,navigation:{nextEl:o,prevEl:r,disabledClass:"disabled"},pagination:{el:n,type:"progressbar",bulletActiveClass:"active"}})}))}}])&&b(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function g(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,n=function(e,t){if("object"!==S(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==S(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===S(n)?n:String(n)),o)}var n}var w=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.sectionNodes=document.querySelectorAll(".partners-main"),this.init()}var t,r;return t=e,(r=[{key:"init",value:function(){this.sectionNodes.forEach((function(e){var t=e.querySelector(".partners-main__slider"),r=e.querySelector(".slider-prev"),o=e.querySelector(".slider-next"),n=e.querySelector(".slider-pag");new a.Z(t,{slidesPerView:"auto",loop:!1,grid:{rows:2},navigation:{nextEl:o,prevEl:r,disabledClass:"disabled"},pagination:{el:n,type:"progressbar",bulletActiveClass:"active"}})}))}}])&&g(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function E(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,n=function(e,t){if("object"!==k(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==k(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===k(n)?n:String(n)),o)}var n}var P=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.sectionNodes=document.querySelectorAll(".slider-grid"),this.init()}var t,r;return t=e,(r=[{key:"init",value:function(){this.sectionNodes.forEach((function(e){var t=e;new a.Z(t,{slidesPerView:"auto",loop:!1,freeMode:!0})}))}}])&&E(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function N(e){return N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},N(e)}function q(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,n=function(e,t){if("object"!==N(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==N(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===N(n)?n:String(n)),o)}var n}function j(e,t){return 0===e?t+90:1===e?t:2===e?t-90-45:3===e?t:4===e?t+90+45:t}var O=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.principles(),this.target()}var t,r;return t=e,(r=[{key:"principles",value:function(){var e=document.querySelector(".anime-card--principles svg");if(e){var t=document.querySelectorAll(".anime-card--principles line"),r=.4,o=gsap.timeline({repeat:-1,yoyo:!1,repeatDelay:1.6}),n=gsap.timeline({repeat:-1,yoyo:!0,ease:"power1.inOut"});gsap.set(e,{rotate:90,transformOrigin:"center center"}),o.to(e,{rotate:-135,duration:r,transformOrigin:"center center",ease:"power1.inOut",repeatDelay:.8},0).to(e,{rotate:90,duration:r,transformOrigin:"center center",ease:"power1.inOut",repeatDelay:.8},.8),t.forEach((function(e,t){o.to(e,{rotate:j(t,7),duration:r,transformOrigin:"center center",ease:"back.out",repeatDelay:1.6},0).to(e,{rotate:j(t,0)-7,duration:.8,transformOrigin:"center center",ease:"back.out",repeatDelay:1.6},r).to(e,{rotate:j(t,0),duration:r,transformOrigin:"center center",ease:"back.out",repeatDelay:1.6},3*r)}));var i=1.6;n.to(t[0],{duration:.8,attr:{x2:73}},i),n.to(t[1],{duration:.8,attr:{x2:95,y2:84.2028}},i),n.to(t[2],{duration:.8,attr:{x2:2}},i),n.to(t[3],{duration:.8,attr:{x2:93.8284,y2:93}},i),n.to(t[4],{duration:.8,attr:{x2:2}},i),n.to(t[5],{duration:.8,attr:{y2:96}},i),n.to(t[6],{duration:.8,attr:{x2:2}},i),n.to(t[7],{duration:.8,attr:{x2:83}},i)}}},{key:"target",value:function(){if(document.querySelector(".anime-card--target")){for(var e=document.querySelectorAll(".anime-card--target circle"),t=.8,r=gsap.timeline({repeat:-1,repeatDelay:.8}),o=gsap.timeline({repeat:-1,repeatDelay:3.2,delay:3.2}),n=0;n<4;n++)r.to(e[n],{attr:{r:14},duration:t,ease:"back.inOut",delay:0},0);for(var i=1;i<4;i++)gsap.set(e[i],{opacity:0}),r.to(e[i],{attr:{r:34},duration:t,opacity:1,ease:"back.inOut",delay:.8},0);for(var a=2;a<4;a++)r.to(e[a],{attr:{r:55},duration:t,opacity:1,ease:"back.inOut",delay:1.6},0);for(var l=3;l<4;l++)r.to(e[l],{attr:{r:78},duration:t,opacity:1,ease:"back.inOut",delay:3*t},0);for(var c=0;c<4;c++)o.to(e[c],{attr:{r:8},opacity:c?0:1,duration:t,ease:"back.inOut",delay:0},0)}}}])&&q(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}function _(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,n=function(e,t){if("object"!==L(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==L(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===L(n)?n:String(n)),o)}var n}function x(e,t,r){return t&&_(e.prototype,t),r&&_(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}var C=x((function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var t=document.getElementsByClassName("thumbnail");0!==t.length&&new simpleParallax(t,{delay:.6,transition:"cubic-bezier(0,0,0,1)"})}));function T(e){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(e)}function H(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,n=function(e,t){if("object"!==T(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==T(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===T(n)?n:String(n)),o)}var n}var A=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.clearSearchNode=document.querySelector(".search__clear"),this.inputSearchNode=document.querySelector(".search__input"),this.startSearchNode=document.querySelector(".search__start"),this.init()}var t,r;return t=e,(r=[{key:"init",value:function(){this.inputSearchNode&&this.startSearchNode&&this.clearSearchNode&&(this.searchClearHandler(),this.searchInputHandler())}},{key:"clearSearch",value:function(){this.clearSearchNode.classList.remove("active"),this.startSearchNode.classList.add("active"),this.inputSearchNode.value="",this.inputSearchNode.focus()}},{key:"searchClearHandler",value:function(){var e=this;this.clearSearchNode&&this.clearSearchNode.addEventListener("click",(function(){e.clearSearch()}))}},{key:"searchInputHandler",value:function(){var e=this;this.inputSearchNode&&this.inputSearchNode.addEventListener("keypress",(function(t){"Enter"===t.key&&(t.preventDefault(),e.search())})),this.startSearchNode&&this.startSearchNode.addEventListener("click",(function(t){e.search()}))}},{key:"search",value:function(){var e=this.inputSearchNode.dataset.page,t=window.location.origin+e+this.inputSearchNode.value;window.location.href=t}}])&&H(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function D(e){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D(e)}function I(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,n=function(e,t){if("object"!==D(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==D(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===D(n)?n:String(n)),o)}var n}var M={selectLinkInstances:[]},V=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.el=t,this.triggersNode=null,this.itemsNode=null,this.currentNode=null,this.setup()}var t,r;return t=e,(r=[{key:"setup",value:function(){this.el&&(this.triggersNode=this.el.querySelectorAll("[data-select-trigger]"),this.toggleHandler())}},{key:"open",value:function(){this.el.classList.add("active")}},{key:"close",value:function(){this.el.classList.remove("active")}},{key:"toggle",value:function(){this.el.classList.contains("active")?this.close():this.open()}},{key:"toggleHandler",value:function(){var e=this;this.triggersNode.forEach((function(t){t.addEventListener("click",(function(){e.toggle()}))}))}}])&&I(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function Z(e){return Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Z(e)}function B(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,n=function(e,t){if("object"!==Z(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==Z(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===Z(n)?n:String(n)),o)}var n}document.addEventListener("click",(function(e){if(!e.target.closest("[data-select-id]"))for(var t in M)M[t].forEach((function(e){e.close()}))}));var z=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.sectionNodes=document.querySelectorAll(".gallery-slider"),this.init()}var t,r;return t=e,(r=[{key:"init",value:function(){this.sectionNodes.forEach((function(e){var t=e.querySelector(".gallery-slider__slider"),r=e.querySelector(".slider-prev"),o=e.querySelector(".slider-next"),n=e.querySelector(".slider-pag");new a.Z(t,{slidesPerView:"auto",loop:!1,navigation:{nextEl:o,prevEl:r,disabledClass:"disabled"},pagination:{el:n,type:"progressbar",bulletActiveClass:"active"}})}))}}])&&B(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function G(e){return G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},G(e)}function F(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,n=function(e,t){if("object"!==G(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==G(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===G(n)?n:String(n)),o)}var n}var R=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.sectionNodes=document.querySelectorAll(".news-another"),this.init()}var t,r;return t=e,(r=[{key:"init",value:function(){this.sectionNodes.forEach((function(e){var t=e.querySelector(".news-another__slider"),r=e.querySelector(".slider-prev"),o=e.querySelector(".slider-next"),n=e.querySelector(".slider-pag");new a.Z(t,{slidesPerView:"auto",loop:!1,navigation:{nextEl:o,prevEl:r,disabledClass:"disabled"},pagination:{el:n,type:"progressbar",bulletActiveClass:"active"}})}))}}])&&F(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function J(e){return J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},J(e)}function K(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,n=function(e,t){if("object"!==J(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==J(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===J(n)?n:String(n)),o)}var n}var Q=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.nodes=document.querySelectorAll("[data-copy-trigger]"),this.textarea=document.querySelector("#urlCopy"),this.init()}var t,r;return t=e,r=[{key:"init",value:function(){this.textarea&&this.copyHandler()}},{key:"copy",value:function(){this.textarea.innerHTML=window.location.href,console.log(this.textarea.innerHTML),this.textarea.select(),document.execCommand("copy")}},{key:"copyHandler",value:function(){var e=this;this.nodes.forEach((function(t){t.addEventListener("click",(function(){e.copy(),e.alert()}))}))}},{key:"alert",value:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){alert("Скопировано!")}))}],r&&K(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();window.app={header:new i,sliderDirections:new s,sliderBannerMain:new y,sliderContests:new v,sliderHistoryMain:new m,sliderPartnersMain:new w,sliderGrid:new P,svgAnime:new O,bannerParking:new C,search:new A,select:(document.querySelectorAll(".select-link").forEach((function(e){M.selectLinkInstances.push(new V(e))})),M),sliderGallery:new z,sliderNewsAnother:new R,social:new Q},document.querySelectorAll("form.form").forEach((function(e){var t=e.querySelector('button[type="submit"]');e.addEventListener("submit",(function(r){r.preventDefault();var o,n,i=new FormData(e),a=e.getAttribute("action"),l=t.textContent;t.setAttribute("disabled",!0),t.textContent="Загрузка...",(o=a,n=i,fetch(o,{method:"POST",body:n})).then((function(e){if(console.log("contact success"),200!==e.status)throw e;t.textContent="Доставлено!"})).catch((function(){alert("contact error")})).finally((function(){t.textContent=l,t.removeAttribute("disabled")}))}))}))}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var i=r[e]={exports:{}};return t[e](i,i.exports,o),i.exports}o.m=t,e=[],o.O=(t,r,n,i)=>{if(!r){var a=1/0;for(u=0;u<e.length;u++){for(var[r,n,i]=e[u],l=!0,c=0;c<r.length;c++)(!1&i||a>=i)&&Object.keys(o.O).every((e=>o.O[e](r[c])))?r.splice(c--,1):(l=!1,i<a&&(a=i));if(l){e.splice(u--,1);var s=n();void 0!==s&&(t=s)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[r,n,i]},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0};o.O.j=t=>0===e[t];var t=(t,r)=>{var n,i,[a,l,c]=r,s=0;if(a.some((t=>0!==e[t]))){for(n in l)o.o(l,n)&&(o.m[n]=l[n]);if(c)var u=c(o)}for(t&&t(r);s<a.length;s++)i=a[s],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(u)},r=self.webpackChunkgulp_scss_starter=self.webpackChunkgulp_scss_starter||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var n=o.O(void 0,[736],(()=>o(435)));n=o.O(n)})();
>>>>>>> main

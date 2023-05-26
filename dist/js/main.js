/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/modules/accordion/index.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/accordion/index.js ***!
  \***********************************************/
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
var Accordion = /*#__PURE__*/function () {
  function Accordion(element) {
    _classCallCheck(this, Accordion);
    this.element = element;
    this.btns = null;
    this.texts = null;
    this.init();
  }
  _createClass(Accordion, [{
    key: "init",
    value: function init() {
      if (!this.element) return;
      this.btns = this.element.querySelectorAll('[data-accordion-btn]');
      this.texts = this.element.querySelectorAll('[data-accordion-text]');
      this.handler();
    }
  }, {
    key: "open",
    value: function open(index) {
      this.texts[index].style.maxHeight = this.texts[index].scrollHeight + "px";
      this.btns[index].classList.add('open');
      this.texts[index].classList.add('open');
    }
  }, {
    key: "close",
    value: function close(index) {
      this.btns[index].classList.remove('open');
      this.texts[index].classList.remove('open');
      this.texts[index].style.maxHeight = null;
    }
  }, {
    key: "handler",
    value: function handler() {
      var _this = this;
      this.btns.forEach(function (element, index) {
        element.addEventListener('click', function () {
          if (!element.classList.contains('open')) {
            _this.open(index);
          } else {
            _this.close(index);
          }
        });
      });
    }
  }]);
  return Accordion;
}();
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var els = document.querySelectorAll('[data-accordion]');
  var arr = [];
  els.forEach(function (el) {
    arr.push(new Accordion(el));
  });
  return arr;
}

/***/ }),

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
  var image = document.getElementsByClassName('rellax');
  if (image.length === 0) return;
  var rellax = new Rellax('.rellax', {
    breakpoints: [576, 768, 1024]
  });
});


/***/ }),

/***/ "./src/blocks/modules/contact-us/index.js":
/*!************************************************!*\
  !*** ./src/blocks/modules/contact-us/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _js_libs_validationLocal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../js/libs/validationLocal */ "./src/js/libs/validationLocal.js");
/* harmony import */ var _js_import_local__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../js/import/local */ "./src/js/import/local.js");


var keys = _js_libs_validationLocal__WEBPACK_IMPORTED_MODULE_0__["default"].keys,
  dictLocale = _js_libs_validationLocal__WEBPACK_IMPORTED_MODULE_0__["default"].dictLocale;
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  if (!document.querySelector('#contact_us')) return;
  var validation = new JustValidate('#contact_us', {
    validateBeforeSubmitting: true
  }, dictLocale);
  validation.setCurrentLocale(_js_import_local__WEBPACK_IMPORTED_MODULE_1__["default"].current);
  validation.addField('[name="name"]', [{
    rule: 'minLength',
    value: 2,
    errorMessage: keys.minLength
  }, {
    rule: 'maxLength',
    value: 30,
    errorMessage: keys.maxLength
  }, {
    rule: 'required',
    errorMessage: keys.required
  }]).addField('[name="tel"]', [{
    rule: 'required',
    errorMessage: keys.required
  }, {
    rule: 'customRegexp',
    value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/gi,
    errorMessage: keys.tel
  }]).addField('[name="email"]', [{
    rule: 'required',
    errorMessage: keys.emailRequired
  }, {
    rule: 'email',
    errorMessage: keys.email
  }]).addField('[name="comment"]', [{
    rule: 'required',
    errorMessage: keys.required
  }, {
    rule: 'minLength',
    value: 2,
    errorMessage: keys.minLength
  }, {
    rule: 'maxLength',
    value: 300,
    errorMessage: keys.maxLength
  }]).addField('[name="privacy"]', [{
    rule: 'required',
    errorMessage: keys.required
  }]);
  return validation;
}

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
      this.scrollHendler();
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
  }, {
    key: "scrollHendler",
    value: function scrollHendler() {
      var _this7 = this;
      var lastScroll = 0;
      window.addEventListener('scroll', function () {
        if (lastScroll < pageYOffset) {
          // down
          _this7.header ? _this7.header.classList.add('scroll') : null;
          _this7.close();
          _this7.header ? _this7.header.classList.remove('down') : null;
        } else if (pageYOffset === 0) {
          _this7.header ? _this7.header.classList.remove('down') : null;
        } else {
          // up
          _this7.header ? _this7.header.classList.add('down') : null;
        }
        if (pageYOffset < _this7.header.clientHeight - _this7.header.clientHeight * 60 / 100) {
          _this7.header ? _this7.header.classList.remove('scroll') : null;
        }
        lastScroll = pageYOffset;
      });
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

/***/ "./src/blocks/modules/info-block/index.js":
/*!************************************************!*\
  !*** ./src/blocks/modules/info-block/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _js_libs_validationLocal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../js/libs/validationLocal */ "./src/js/libs/validationLocal.js");
/* harmony import */ var _js_import_local__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../js/import/local */ "./src/js/import/local.js");
/* harmony import */ var _js_import_flatpickrConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../js/import/flatpickrConfig */ "./src/js/import/flatpickrConfig.js");


var keys = _js_libs_validationLocal__WEBPACK_IMPORTED_MODULE_0__["default"].keys,
  dictLocale = _js_libs_validationLocal__WEBPACK_IMPORTED_MODULE_0__["default"].dictLocale;

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  if (!document.querySelector('#contest')) return;
  var birthday = flatpickr(document.querySelector('[name="birthday"]'), {
    mode: "single",
    maxDate: "today",
    dateFormat: "d.m.Y",
    nextArrow: _js_import_flatpickrConfig__WEBPACK_IMPORTED_MODULE_2__["default"].getNextArrow(),
    prevArrow: _js_import_flatpickrConfig__WEBPACK_IMPORTED_MODULE_2__["default"].getPrevArrow()
  });
  var implementation_period = flatpickr(document.querySelector('[name="implementation_period"]'), {
    mode: "range",
    minDate: "today",
    dateFormat: "d.m.Y",
    nextArrow: _js_import_flatpickrConfig__WEBPACK_IMPORTED_MODULE_2__["default"].getNextArrow(),
    prevArrow: _js_import_flatpickrConfig__WEBPACK_IMPORTED_MODULE_2__["default"].getPrevArrow()
  });
  var validation = new JustValidate('#contest', {
    validateBeforeSubmitting: true
  }, dictLocale);
  validation.setCurrentLocale(_js_import_local__WEBPACK_IMPORTED_MODULE_1__["default"].current);
  validation.addField('[name="fio"]', [{
    rule: 'minLength',
    value: 6,
    errorMessage: keys.minLength
  }, {
    rule: 'maxLength',
    value: 90,
    errorMessage: keys.maxLength
  }, {
    rule: 'required',
    errorMessage: keys.required
  }]).addField('[name="inn"]', [{
    rule: 'required',
    errorMessage: keys.required
  }, {
    rule: 'integer',
    errorMessage: keys.integer
  }]).addField('[name="city"]', [{
    rule: 'minLength',
    value: 2,
    errorMessage: keys.minLength
  }, {
    rule: 'maxLength',
    value: 30,
    errorMessage: keys.maxLength
  }, {
    rule: 'required',
    errorMessage: keys.required
  }]).addField('[name="tel"]', [{
    rule: 'required',
    errorMessage: keys.required
  }, {
    rule: 'customRegexp',
    value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/gi,
    errorMessage: keys.tel
  }]).addField('[name="email"]', [{
    rule: 'required',
    errorMessage: keys.emailRequired
  }, {
    rule: 'email',
    errorMessage: keys.email
  }]).addField('[name="place_of_work_or_sudy"]', [{
    rule: 'minLength',
    value: 3,
    errorMessage: keys.minLength
  }, {
    rule: 'maxLength',
    value: 50,
    errorMessage: keys.maxLength
  }, {
    rule: 'required',
    errorMessage: keys.required
  }]).addField('[name="specialization"]', [{
    rule: 'minLength',
    value: 3,
    errorMessage: keys.minLength
  }, {
    rule: 'maxLength',
    value: 50,
    errorMessage: keys.maxLength
  }, {
    rule: 'required',
    errorMessage: keys.required
  }]).addField('[name="name_of_project"]', [{
    rule: 'minLength',
    value: 3,
    errorMessage: keys.minLength
  }, {
    rule: 'maxLength',
    value: 50,
    errorMessage: keys.maxLength
  }, {
    rule: 'required',
    errorMessage: keys.required
  }]).addField('[name="birthday"]', [{
    rule: 'required',
    errorMessage: keys.required
  }]).addField('[name="implementation_period"]', [{
    rule: 'required',
    errorMessage: keys.required
  }]).addField('[name="project_idea"]', [{
    rule: 'required',
    errorMessage: keys.required
  }, {
    rule: 'minLength',
    value: 2,
    errorMessage: keys.minLength
  }, {
    rule: 'maxLength',
    value: 500,
    errorMessage: keys.maxLength
  }]).addField('[name="competition_regulations"]', [{
    rule: 'required',
    errorMessage: keys.required
  }]).addField('[name="privacy"]', [{
    rule: 'required',
    errorMessage: keys.required
  }]);
  return validation;
}

/***/ }),

/***/ "./src/blocks/modules/map/index.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/map/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Map)
/* harmony export */ });
/* harmony import */ var _select_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../select/index */ "./src/blocks/modules/select/index.js");
/* harmony import */ var _js_import_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../js/import/form */ "./src/js/import/form.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var data = {
  "programms": {
    "1": "Программа “Инфраструктуры”",
    "2": "Программа “Люди”",
    "3": "Программа “Сообщества”"
  },
  "regions": [{
    "id": 4,
    "name": "Абайская область",
    "nameHTML": "Абайская <br> область",
    "programmIds": [1, 2, 3]
  }, {
    "id": 5,
    "name": "Акмолинская область",
    "nameHTML": "Акмолинская <br> область",
    "programmIds": []
  }, {
    "id": 6,
    "name": "Актюбинская область",
    "nameHTML": "Актюбинская <br> область",
    "programmIds": [1, 2]
  }, {
    "id": 7,
    "name": "Алматинская область",
    "nameHTML": "Алматинская <br> область",
    "programmIds": [1]
  }, {
    "id": 8,
    "name": "Атырауская область",
    "nameHTML": "Атырауская <br> область",
    "programmIds": [1, 2]
  }, {
    "id": 9,
    "name": "Восточно-Казахстанская область",
    "nameHTML": "ВКО",
    "programmIds": [1, 2]
  }, {
    "id": 10,
    "name": "Жамбылская область",
    "nameHTML": "Жамбылская <br> область",
    "programmIds": [1, 2]
  }, {
    "id": 11,
    "name": "Жетысуская область",
    "nameHTML": "Жетысуская <br> область",
    "programmIds": [1, 2]
  }, {
    "id": 12,
    "name": "Западно-Казахстанская область",
    "nameHTML": "ЗКО",
    "programmIds": [1, 2]
  }, {
    "id": 13,
    "name": "Карагандинская область",
    "nameHTML": "Карагандинская <br> область",
    "programmIds": [1, 2]
  }, {
    "id": 14,
    "name": "Костанайская область",
    "nameHTML": "Костанайская <br> область",
    "programmIds": [1, 2]
  }, {
    "id": 15,
    "name": "Кызылординская область",
    "nameHTML": "Кызылординская <br> область",
    "programmIds": [1, 2]
  }, {
    "id": 16,
    "name": "Мангистауская область",
    "nameHTML": "Мангистауская <br> область",
    "programmIds": [1, 2]
  }, {
    "id": 17,
    "name": "Павлодарская область",
    "nameHTML": "Павлодарская <br> область",
    "programmIds": [1, 2]
  }, {
    "id": 18,
    "name": "Северо-Казахстанская область",
    "nameHTML": "СКО",
    "programmIds": [1, 2]
  }, {
    "id": 19,
    "name": "Туркестанская область",
    "nameHTML": "Туркестанская <br> область",
    "programmIds": [1, 2]
  }, {
    "id": 20,
    "name": "Улытауская область",
    "nameHTML": "Улытауская <br> область",
    "programmIds": [1, 2]
  }]
};
var Map = /*#__PURE__*/function () {
  function Map() {
    _classCallCheck(this, Map);
    this.el = document.querySelector('.map');
    this.region = null;
    this.programms = null;
    this.svgRegionGroups = null;
    this.data = null;
    this.modalTitle = null;
    this.modalList = null;
    this.resetNode = null;
    this.init();
  }
  _createClass(Map, [{
    key: "init",
    value: function init() {
      if (!this.el) {
        return;
      }
      this.modalList = this.el.querySelector('.map-modal__list');
      this.modalTitle = this.el.querySelector('.map-modal__title');
      this.resetNode = this.el.querySelector('.map__reset button');
      this.fetchData();
    }
  }, {
    key: "setup",
    value: function setup() {
      var _this = this;
      this.data = data;
      var region = document.querySelector('.select-search[data-select-id="region"]');
      this.region = new _select_index__WEBPACK_IMPORTED_MODULE_0__.SelectSearch(region, this.data['regions']);
      this.region.onSelected(function (e) {
        _this.selectRegion(e.target.dataset.selectValue);
        _this.region.close();
      });
      var programms = document.querySelector('.select-search[data-select-id="programms"]');
      var programmsArray = [];
      for (var _i = 0, _Object$entries = Object.entries(this.data['programms']); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          key = _Object$entries$_i[0],
          value = _Object$entries$_i[1];
        programmsArray.push({
          id: key,
          name: value
        });
      }
      this.programms = new _select_index__WEBPACK_IMPORTED_MODULE_0__.SelectSearch(programms, programmsArray);
      this.programms.onSelected(function (e) {
        var regionsIds = _this.selectRegionsByProgrammId(e.target.dataset.selectValue);
        _this.programms.close();
        _this.region.filterByIds(regionsIds);
        _this.closeInfo();
      });
      this.svgRegionGroups = this.el.querySelectorAll('.map__map g[id]');
      this.render();
      this.selectRegionHander();
      this.resetHandler();
    }
  }, {
    key: "selectRegion",
    value: function selectRegion(id) {
      var _this2 = this;
      this.svgRegionGroups.forEach(function (item) {
        item.classList.remove('active');
        var idAttr = item.getAttribute('id');
        if (id == idAttr) {
          item.classList.add('active');
          _this2.openInfo(id);
          _this2.renderInfo(id);
        }
      });
    }
  }, {
    key: "selectRegionsByProgrammId",
    value: function selectRegionsByProgrammId(idProgramm) {
      var _this3 = this;
      var selectedRegionIds = [];
      this.svgRegionGroups.forEach(function (item) {
        item.classList.remove('active');
        var idAttr = item.getAttribute('id');
        var region = _this3.getRegionById(idAttr);
        if (region['programmIds'].find(function (i) {
          return i == idProgramm;
        })) {
          item.classList.add('active');
          selectedRegionIds.push(idAttr);
        }
      });
      return selectedRegionIds;
    }
  }, {
    key: "openInfo",
    value: function openInfo(id) {
      window.app.mapModal.open();
    }
  }, {
    key: "closeInfo",
    value: function closeInfo(id) {
      window.app.mapModal.close();
    }
  }, {
    key: "renderInfo",
    value: function renderInfo(id, list) {
      var _this4 = this;
      var region = this.getRegionById(id);
      this.modalTitle.innerHTML = region.name;
      this.modalList.innerHTML = '';
      var listProgramms = this.getProgrammsByRegionId(id);
      if (listProgramms.length) {
        listProgramms.forEach(function (value) {
          _this4.modalList.insertAdjacentHTML('beforeend', "\n          <li class=\"map-modal__item\">".concat(value, "</li>\n        "));
        });
      }
    }
  }, {
    key: "getProgrammsByRegionId",
    value: function getProgrammsByRegionId(id) {
      var _this5 = this;
      var region = this.getRegionById(id);
      var pIds = region['programmIds'];
      var arrResult = [];
      pIds.forEach(function (i, idx) {
        arrResult.push(_this5.data['programms'][i]);
      });
      return arrResult;
    }
  }, {
    key: "selectRegionHander",
    value: function selectRegionHander() {
      var _this6 = this;
      this.svgRegionGroups.forEach(function (item) {
        var id = item.getAttribute('id');
        item.addEventListener('click', function () {
          _this6.selectRegion(id);
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this7 = this;
      this.svgRegionGroups.forEach(function (item) {
        var _this7$getRegionById;
        var id = item.getAttribute('id');
        var text = item.querySelector('foreignObject p');
        text.innerHTML = (_this7$getRegionById = _this7.getRegionById(id)) === null || _this7$getRegionById === void 0 ? void 0 : _this7$getRegionById.nameHTML;
      });
    }
  }, {
    key: "getRegionById",
    value: function getRegionById(id) {
      return this.data['regions'].find(function (i) {
        return i.id == id;
      });
    }
  }, {
    key: "resetHandler",
    value: function resetHandler() {
      var _this8 = this;
      this.resetNode ? this.resetNode.addEventListener('click', function () {
        _this8.reset();
      }) : null;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.region.reset();
      this.programms.reset();
      this.svgRegionGroups.forEach(function (item) {
        item.classList.remove('active');
      });
      window.app.mapModal.close();
    }
  }, {
    key: "fetchData",
    value: function () {
      var _fetchData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _this9 = this;
        var action;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              action = this.el.getAttribute('data-action');
              _context.next = 3;
              return (0,_js_import_form__WEBPACK_IMPORTED_MODULE_1__.ApiForm)(action, null, 'GET').then(function (response) {
                return response.json();
              }).then(function (json) {
                _this9.data = json;
                _this9.setup();
              })["catch"](function (e) {
                console.log(e);
                _this9.data = data;
                _this9.setup();
              });
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function fetchData() {
        return _fetchData.apply(this, arguments);
      }
      return fetchData;
    }()
  }]);
  return Map;
}();


/***/ }),

/***/ "./src/blocks/modules/media-slider/index.js":
/*!**************************************************!*\
  !*** ./src/blocks/modules/media-slider/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SliderMedia)
/* harmony export */ });
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/bundle */ "./node_modules/swiper/swiper-bundle.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var SliderMedia = /*#__PURE__*/function () {
  function SliderMedia() {
    _classCallCheck(this, SliderMedia);
    this.sectionNodes = document.querySelectorAll('.media-slider');
    this.init();
  }
  _createClass(SliderMedia, [{
    key: "init",
    value: function init() {
      this.sectionNodes.forEach(function (element) {
        var sliderNode = element.querySelector('.media-slider__slider');
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
  return SliderMedia;
}();


/***/ }),

/***/ "./src/blocks/modules/members/index.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/members/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SliderMembers)
/* harmony export */ });
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/bundle */ "./node_modules/swiper/swiper-bundle.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var SliderMembers = /*#__PURE__*/function () {
  function SliderMembers() {
    _classCallCheck(this, SliderMembers);
    this.sectionNodes = document.querySelectorAll('.members');
    this.init();
  }
  _createClass(SliderMembers, [{
    key: "init",
    value: function init() {
      this.sectionNodes.forEach(function (element) {
        var sliderNode = element.querySelector('.members__slider');
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
  return SliderMembers;
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

/***/ "./src/blocks/modules/news-subs/index.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/news-subs/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _js_libs_validationLocal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../js/libs/validationLocal */ "./src/js/libs/validationLocal.js");
/* harmony import */ var _js_import_local__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../js/import/local */ "./src/js/import/local.js");


var keys = _js_libs_validationLocal__WEBPACK_IMPORTED_MODULE_0__["default"].keys,
  dictLocale = _js_libs_validationLocal__WEBPACK_IMPORTED_MODULE_0__["default"].dictLocale;
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  if (!document.querySelector('#subscribe')) return;
  var validation = new JustValidate('#subscribe', {
    validateBeforeSubmitting: true,
    tooltip: {
      position: 'top'
    }
  }, dictLocale);
  validation.setCurrentLocale(_js_import_local__WEBPACK_IMPORTED_MODULE_1__["default"].current);
  validation.addField('[name="email"]', [{
    rule: 'required',
    errorMessage: keys.emailRequired
  }, {
    rule: 'email',
    errorMessage: keys.email
  }]).addField('[name="privacy"]', [{
    rule: 'required',
    errorMessage: keys.required
  }]);
  return validation;
}

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

/***/ "./src/blocks/modules/request/index.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/request/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _js_libs_validationLocal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../js/libs/validationLocal */ "./src/js/libs/validationLocal.js");
/* harmony import */ var _js_import_local__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../js/import/local */ "./src/js/import/local.js");


var keys = _js_libs_validationLocal__WEBPACK_IMPORTED_MODULE_0__["default"].keys,
  dictLocale = _js_libs_validationLocal__WEBPACK_IMPORTED_MODULE_0__["default"].dictLocale;
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  if (!document.querySelector('#request')) return;
  var validation = new JustValidate('#request', {
    validateBeforeSubmitting: true
  }, dictLocale);
  validation.setCurrentLocale(_js_import_local__WEBPACK_IMPORTED_MODULE_1__["default"].current);
  validation.addField('[name="name"]', [{
    rule: 'minLength',
    value: 2,
    errorMessage: keys.minLength
  }, {
    rule: 'maxLength',
    value: 30,
    errorMessage: keys.maxLength
  }, {
    rule: 'required',
    errorMessage: keys.required
  }]).addField('[name="city"]', [{
    rule: 'minLength',
    value: 2,
    errorMessage: keys.minLength
  }, {
    rule: 'maxLength',
    value: 30,
    errorMessage: keys.maxLength
  }, {
    rule: 'required',
    errorMessage: keys.required
  }]).addField('[name="tel"]', [{
    rule: 'required',
    errorMessage: keys.required
  }, {
    rule: 'customRegexp',
    value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/gi,
    errorMessage: keys.tel
  }]).addField('[name="email"]', [{
    rule: 'required',
    errorMessage: keys.emailRequired
  }, {
    rule: 'email',
    errorMessage: keys.email
  }]).addField('[name="comment1"]', [{
    rule: 'required',
    errorMessage: keys.required
  }, {
    rule: 'minLength',
    value: 2,
    errorMessage: keys.minLength
  }, {
    rule: 'maxLength',
    value: 300,
    errorMessage: keys.maxLength
  }]).addField('[name="comment2"]', [{
    rule: 'required',
    errorMessage: keys.required
  }, {
    rule: 'minLength',
    value: 2,
    errorMessage: keys.minLength
  }, {
    rule: 'maxLength',
    value: 300,
    errorMessage: keys.maxLength
  }]).addField('[name="comment3"]', [{
    rule: 'required',
    errorMessage: keys.required
  }, {
    rule: 'minLength',
    value: 2,
    errorMessage: keys.minLength
  }, {
    rule: 'maxLength',
    value: 300,
    errorMessage: keys.maxLength
  }]).addField('[name="privacy"]', [{
    rule: 'required',
    errorMessage: keys.required
  }]);
  return validation;
}

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
/* harmony export */   "SelectSearch": () => (/* binding */ SelectSearch),
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var selects = [];
var Select = /*#__PURE__*/function () {
  function Select(el) {
    _classCallCheck(this, Select);
    this.el = el;
    this.triggersNode = [];
    this.currentNode = null;
    this.itemsNode = [];
    this.currentValue = null;
    this.currentItem = null;
    this.placeholder = null;
    this.setup();
    this.callbacks = [];
    selects.push(this);
  }
  _createClass(Select, [{
    key: "setup",
    value: function setup() {
      var _this$currentNode;
      if (!this.el) return;
      this.itemsNode = this.el.querySelectorAll('[data-select-item]');
      this.currentNode = this.el.querySelector('[data-select-current]');
      this.placeholder = (_this$currentNode = this.currentNode) === null || _this$currentNode === void 0 ? void 0 : _this$currentNode.textContent;
      this.triggersNode = this.el.querySelectorAll('[data-select-trigger]');
      this.toggleHandler();
      this.selectedHandler();
    }
  }, {
    key: "open",
    value: function open() {
      this.el ? this.el.classList.add('active') : null;
    }
  }, {
    key: "close",
    value: function close() {
      this.el ? this.el.classList.remove('active') : null;
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
  }, {
    key: "select",
    value: function select(e) {
      if (this.currentNode) {
        this.currentNode.innerHTML = e.target.dataset.selectItem;
      }
      this.currentValue = e.target.dataset.selectValue;
      this.currentItem = e.target.dataset.selectItem;
      this.currentValue = e.target.dataset.selectValue;
      this.currentItem = e.target.dataset.selectItem;
      this.callbacks.forEach(function (callback) {
        return callback(e);
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      this.currentValue = null;
      this.currentNode.textContent = this.placeholder;
      this.itemsNode.forEach(function (item) {
        item.classList.remove('hide');
      });
    }
  }, {
    key: "selectedHandler",
    value: function selectedHandler() {
      var _this2 = this;
      this.itemsNode = this.el.querySelectorAll('[data-select-item]');
      this.itemsNode.forEach(function (element) {
        element.addEventListener('click', function (e) {
          _this2.select(e);
        });
      });
    }
  }, {
    key: "onSelected",
    value: function onSelected(callback) {
      this.callbacks.push(callback);
    }
  }], [{
    key: "closeAll",
    value: function closeAll() {
      selects.forEach(function (i) {
        i.close();
      });
    }
  }]);
  return Select;
}();
var SelectSearch = /*#__PURE__*/function (_Select) {
  _inherits(SelectSearch, _Select);
  var _super = _createSuper(SelectSearch);
  function SelectSearch(el, values) {
    var _this3;
    _classCallCheck(this, SelectSearch);
    _this3 = _super.call(this, el);
    _this3.values = values;
    _this3.input = _this3.el.querySelector('[data-select-input]');
    _this3.empty = _this3.el.querySelector('[data-select-empty]');
    _this3.clear = _this3.el.querySelector('[data-select-clear]');
    _this3.list = _this3.el.querySelector('[data-select-list]');
    _this3.searchHandler();
    _this3.clearHandler();
    if (values) {
      _this3.renderList(values);
      _this3.selectedHandler();
    }
    return _this3;
  }
  _createClass(SelectSearch, [{
    key: "renderList",
    value: function renderList(values) {
      var _this4 = this;
      this.list.innerHTML = '';
      values.forEach(function (value) {
        _this4.list.insertAdjacentHTML('beforeend', "\n        <div class=\"select-search__item\" data-select-value=\"".concat(value.id, "\" data-select-item=\"").concat(value.name, "\">").concat(value.name, "</div>\n       "));
      });
    }
  }, {
    key: "search",
    value: function search(val) {
      var value = val.trim().toUpperCase();
      if (!value) {
        this.toDefault();
        return;
      }
      var regex = new RegExp(value, 'g');
      var emptyFlag = true;
      this.itemsNode.forEach(function (item) {
        if (regex.test(item.dataset.selectItem.toUpperCase())) {
          item.classList.remove('hide');
          emptyFlag = false;
        } else {
          item.classList.add('hide');
        }
      });
      emptyFlag ? this.empty.classList.remove('hide') : this.empty.classList.add('hide');
    }
  }, {
    key: "filterByIds",
    value: function filterByIds(ids) {
      var emptyFlag = true;
      this.itemsNode.forEach(function (item) {
        if (ids.find(function (i) {
          return i == item.dataset.selectValue;
        })) {
          item.classList.remove('hide');
          emptyFlag = false;
        } else {
          item.classList.add('hide');
        }
      });
      emptyFlag ? this.empty.classList.remove('hide') : this.empty.classList.add('hide');
    }
  }, {
    key: "searchHandler",
    value: function searchHandler() {
      var _this5 = this;
      this.input.addEventListener('input', function (e) {
        _this5.search(e.target.value);
      });
    }
  }, {
    key: "clearHandler",
    value: function clearHandler() {
      var _this6 = this;
      this.clear.addEventListener('click', function (e) {
        _this6.toDefault();
      });
    }
  }, {
    key: "toDefault",
    value: function toDefault() {
      this.input.value = '';
      this.itemsNode.forEach(function (item) {
        return item.classList.remove('hide');
      });
      this.empty.classList.add('hide');
    }
  }]);
  return SelectSearch;
}(Select);
document.addEventListener('click', function (e) {
  if (!e.target.closest('[data-select-id]')) {
    Select.closeAll();
  }
});
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var selectLinkNodes = document.querySelectorAll('.select-link');
  selectLinkNodes.forEach(function (i) {
    new Select(i);
  });
  return {
    select: Select,
    selectSearch: SelectSearch
  };
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

/***/ "./src/js/import/Modal.js":
/*!********************************!*\
  !*** ./src/js/import/Modal.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Modal)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Modal = /*#__PURE__*/function () {
  function Modal(name) {
    var scrollLock = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    _classCallCheck(this, Modal);
    this.name = name;
    this.scrollLock = scrollLock;
    this.modal = document.querySelector("[data-modal=\"".concat(name, "\"]"));
    this.triggers = document.querySelectorAll("[data-class=\"".concat(name, "\"]"));
    this.callbackClose = null;
    this.init();
  }
  _createClass(Modal, [{
    key: "init",
    value: function init() {
      if (this.modal) {
        this.content = this.modal.querySelector(".modal__content");
        this.openHendler();
        this.closeHendler();
      }
    }
  }, {
    key: "open",
    value: function open() {
      window.lastZIndexModal = window.lastZIndexModal ? window.lastZIndexModal + 1 : 150;
      this.modal ? this.modal.style['z-index'] = window.lastZIndexModal : null;
      this.modal ? this.modal.classList.add('active') : null;
      this.scrollLock ? document.body.classList.add('lock') : null;
    }
  }, {
    key: "close",
    value: function close() {
      this.modal ? this.modal.style['z-index'] = -150 : null;
      this.modal ? this.modal.classList.remove('active') : null;
      this.scrollLock ? document.body.classList.remove('lock') : null;
      this.onCloseAction();
    }
  }, {
    key: "update",
    value: function update() {
      this.modal = document.querySelector("[data-modal=\"".concat(this.name, "\"]"));
      this.triggers = document.querySelectorAll("[data-class=\"".concat(this.name, "\"]"));
      this.openHendler();
    }
  }, {
    key: "openHendler",
    value: function openHendler() {
      var _this = this;
      this.triggers.forEach(function (item) {
        item.addEventListener('click', function (e) {
          e.preventDefault();
          _this.open();
        });
      });
    }
  }, {
    key: "closeHendler",
    value: function closeHendler() {
      var _this2 = this;
      this.modal ? this.modal.addEventListener('click', function (e) {
        if (e.target.classList.contains('close-x')) {
          _this2.close();
        }
      }) : null;
      this.modal ? this.modal.querySelector('button.close-x').addEventListener('click', function (e) {
        _this2.close();
      }) : null;
    }
  }, {
    key: "onClose",
    value: function onClose(callback) {
      this.callbackClose = callback;
    }
  }, {
    key: "onCloseAction",
    value: function onCloseAction() {
      this.callbackClose ? this.callbackClose() : null;
    }
  }]);
  return Modal;
}();


/***/ }),

/***/ "./src/js/import/alert.js":
/*!********************************!*\
  !*** ./src/js/import/alert.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Alert)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Alert = /*#__PURE__*/function () {
  function Alert() {
    _classCallCheck(this, Alert);
    this.container = null, this.create();
  }
  _createClass(Alert, [{
    key: "create",
    value: function create() {
      this.container = document.createElement('div');
      this.container.classList.add('alert');
      document.body.append(this.container);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;
      var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var el = document.createElement('div');
      el.classList.add('alert__item');
      el.textContent = text || (type ? 'Успешно!' : 'Ошибка!');
      if (type === true || type === 'success') {
        el.classList.add('success');
      } else if (type === false || type === 'error') {
        el.classList.add('error');
      }
      this.container.append(el);
      setTimeout(function () {
        return el.classList.add('active');
      }, 50);
      setTimeout(function () {
        return _this.removeAlert(el, 300);
      }, 5000);
    }
  }, {
    key: "removeAlert",
    value: function removeAlert(el, ms) {
      el.classList.add('escape');
      setTimeout(function () {
        return el.remove();
      }, ms);
    }
  }]);
  return Alert;
}();


/***/ }),

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/***/ (() => {



/***/ }),

/***/ "./src/js/import/flatpickrConfig.js":
/*!******************************************!*\
  !*** ./src/js/import/flatpickrConfig.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FlatpickrConfig)
/* harmony export */ });
/* harmony import */ var _local__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local */ "./src/js/import/local.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var FlatpickrConfig = /*#__PURE__*/function () {
  function FlatpickrConfig() {
    _classCallCheck(this, FlatpickrConfig);
  }
  _createClass(FlatpickrConfig, null, [{
    key: "setLang",
    value: function setLang() {
      var lang = _local__WEBPACK_IMPORTED_MODULE_0__["default"].current;
      if (lang === 'ru') {
        flatpickr.l10ns.ru.rangeSeparator = "-";
        flatpickr.localize(flatpickr.l10ns.ru);
      } else if (lang === 'kk') {
        flatpickr.l10ns.kk.rangeSeparator = "-";
        flatpickr.localize(flatpickr.l10ns.kk);
      } else if (lang === 'en') {
        flatpickr.l10ns.en.rangeSeparator = "-";
        flatpickr.localize(flatpickr.l10ns.en);
      }
      return lang;
    }
  }, {
    key: "getNextArrow",
    value: function getNextArrow() {
      return "\n      <button class=\"date-next\">\n        <svg width=\"32\" height=\"32\" fill=\"none\" viewBox=\"0 0 32 32\" xmlns=\"http://www.w3.org/2000/svg\">\n          <rect x=\"0.5\" y=\"0.5\" width=\"31\" height=\"31\" rx=\"9.5\" stroke=\"#398166\" />\n          <path d=\"M9 16H23\" stroke=\"#398166\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n          <path d=\"M16 9L23 16L16 23\" stroke=\"#398166\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n        </svg>\n      </button>\n    ";
    }
  }, {
    key: "getPrevArrow",
    value: function getPrevArrow() {
      return "\n      <button class=\"date-prev\">\n        <svg width=\"32\" height=\"32\" fill=\"none\" viewBox=\"0 0 32 32\" xmlns=\"http://www.w3.org/2000/svg\">\n          <rect x=\"-0.5\" y=\"0.5\" width=\"31\" height=\"31\" rx=\"9.5\" transform=\"matrix(-1 0 0 1 31 0)\" stroke=\"#398166\" />\n          <path d=\"M23 16H9\" stroke=\"#398166\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n          <path d=\"M16 9L9 16L16 23\" stroke=\"#398166\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n        </svg>\n      </button>\n      ";
    }
  }]);
  return FlatpickrConfig;
}();


/***/ }),

/***/ "./src/js/import/form.js":
/*!*******************************!*\
  !*** ./src/js/import/form.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiForm": () => (/* binding */ ApiForm),
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _local__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local */ "./src/js/import/local.js");

var ApiForm = function ApiForm(url, data) {
  var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'POST';
  return fetch(url, {
    method: method,
    body: data,
    headers: {
      'Accept-Language': _local__WEBPACK_IMPORTED_MODULE_0__["default"].current
    }
  });
};
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var forms = document.querySelectorAll('form.form');
  forms.forEach(function (form) {
    var button = form.querySelector('button[type="submit"]');
    var name = form.getAttribute('id');
    var validation = window.app[name];
    button.setAttribute('disabled', true);
    validation.onValidate(function (evt) {
      if (evt.isValid) {
        button.removeAttribute('disabled');
      }
    });
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var isValid = validation.isValid;
      if (!isValid) return;
      var formData = new FormData(form);
      var action = form.getAttribute('action');
      var btnText = button.textContent;
      button.setAttribute('disabled', true);
      button.textContent = _local__WEBPACK_IMPORTED_MODULE_0__["default"].loading[_local__WEBPACK_IMPORTED_MODULE_0__["default"].current];
      ApiForm(action, formData).then(function (res) {
        console.log('contact success');
        if (res.status === 200) {
          window.osmiAlert.render(_local__WEBPACK_IMPORTED_MODULE_0__["default"].success[_local__WEBPACK_IMPORTED_MODULE_0__["default"].current], true);
          button.textContent = _local__WEBPACK_IMPORTED_MODULE_0__["default"].sent[_local__WEBPACK_IMPORTED_MODULE_0__["default"].current];
        } else {
          throw res;
        }
      })["catch"](function () {
        window.osmiAlert.render(_local__WEBPACK_IMPORTED_MODULE_0__["default"].error[_local__WEBPACK_IMPORTED_MODULE_0__["default"].current], false);
      })["finally"](function () {
        button.textContent = btnText;
        button.removeAttribute('disabled');
      });
    });
  });
}

/***/ }),

/***/ "./src/js/import/local.js":
/*!********************************!*\
  !*** ./src/js/import/local.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var lang = document.querySelector('html').getAttribute('lang');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  current: lang,
  tampl: {
    ru: "",
    en: "",
    kk: ""
  },
  success: {
    ru: "Спасибо, ваше сообщение отправлено",
    en: "Thank you, your message has been sent",
    kk: "Рахмет, хабарламаңыз жіберілді"
  },
  error: {
    ru: "Возникла ошибка отправки, попробуйте позже",
    en: "There was an error sending, please try again later",
    kk: "Жіберу кезінде қате орын алды, әрекетті кейінірек қайталаңыз"
  },
  sent: {
    ru: "Сообщение отправлено",
    en: "Message sent",
    kk: "Хабар жіберілді"
  },
  loading: {
    ru: "Загрузка...",
    en: "Loading...",
    kk: "Жүктелуде..."
  }
});

/***/ }),

/***/ "./src/js/import/modalPlayer.js":
/*!**************************************!*\
  !*** ./src/js/import/modalPlayer.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ModalPlayer)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ModalPlayer = /*#__PURE__*/function () {
  function ModalPlayer() {
    _classCallCheck(this, ModalPlayer);
    this.video = null;
    this.handler();
  }
  _createClass(ModalPlayer, [{
    key: "open",
    value: function open() {
      window.app.videoModal.open();
      window.app.videoModal.onClose(this.clear);
    }
  }, {
    key: "render",
    value: function render(e) {
      var container = e.target.closest('[data-video-container]');
      var clone = container.cloneNode(true);
      var cleared = this.clearDataAttr(clone);
      window.app.videoModal.content.append(cleared);
      this.video = cleared.querySelector('video');
      this.play(cleared.querySelector('video'));
    }
  }, {
    key: "clearDataAttr",
    value: function clearDataAttr(node) {
      var allNodes = node.getElementsByTagName("*");
      var allSourceNodes = node.getElementsByTagName("source");
      var allVideoNodes = node.getElementsByTagName("video");
      for (var i = 0; i < allNodes.length; i++) {
        allNodes[i].removeAttribute('data-video-play');
      }
      for (var _i = 0; _i < allSourceNodes.length; _i++) {
        var src = allSourceNodes[_i].getAttribute('data-video-src');
        allSourceNodes[_i].removeAttribute('data-video-src');
        allSourceNodes[_i].setAttribute('src', src);
      }
      for (var _i2 = 0; _i2 < allVideoNodes.length; _i2++) {
        allVideoNodes[_i2].setAttribute('controls', true);
      }
      return node;
    }
  }, {
    key: "play",
    value: function play() {
      var _this = this;
      setTimeout(function () {
        return _this.video.play();
      }, 1000);
    }
  }, {
    key: "clear",
    value: function clear() {
      window.app.videoModal.content.innerHTML = '';
    }
  }, {
    key: "handler",
    value: function handler() {
      var _this2 = this;
      document.addEventListener('click', function (e) {
        if (e.target.dataset.hasOwnProperty('videoPlay')) {
          _this2.render(e);
          _this2.open();
        }
      });
    }
  }]);
  return ModalPlayer;
}();


/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _flatpickrConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flatpickrConfig */ "./src/js/import/flatpickrConfig.js");
/* harmony import */ var _modalPlayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalPlayer */ "./src/js/import/modalPlayer.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modal */ "./src/js/import/Modal.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_directions_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/directions/index */ "./src/blocks/modules/directions/index.js");
/* harmony import */ var _modules_banner_main_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/banner-main/index */ "./src/blocks/modules/banner-main/index.js");
/* harmony import */ var _modules_contests_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! %modules%/contests/index */ "./src/blocks/modules/contests/index.js");
/* harmony import */ var _modules_members_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! %modules%/members/index */ "./src/blocks/modules/members/index.js");
/* harmony import */ var _modules_history_main_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! %modules%/history-main/index */ "./src/blocks/modules/history-main/index.js");
/* harmony import */ var _modules_partners_main_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! %modules%/partners-main/index */ "./src/blocks/modules/partners-main/index.js");
/* harmony import */ var _modules_slider_grid_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! %modules%/slider-grid/index */ "./src/blocks/modules/slider-grid/index.js");
/* harmony import */ var _modules_anime_card_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! %modules%/anime-card/index */ "./src/blocks/modules/anime-card/index.js");
/* harmony import */ var _modules_banner_parking_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! %modules%/banner-parking/index */ "./src/blocks/modules/banner-parking/index.js");
/* harmony import */ var _modules_search_index__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! %modules%/search/index */ "./src/blocks/modules/search/index.js");
/* harmony import */ var _modules_select_index__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! %modules%/select/index */ "./src/blocks/modules/select/index.js");
/* harmony import */ var _modules_gallery_slider_index__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! %modules%/gallery-slider/index */ "./src/blocks/modules/gallery-slider/index.js");
/* harmony import */ var _modules_news_another_index__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! %modules%/news-another/index */ "./src/blocks/modules/news-another/index.js");
/* harmony import */ var _modules_social_index__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! %modules%/social/index */ "./src/blocks/modules/social/index.js");
/* harmony import */ var _modules_accordion_index__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! %modules%/accordion/index */ "./src/blocks/modules/accordion/index.js");
/* harmony import */ var _modules_contact_us_index__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! %modules%/contact-us/index */ "./src/blocks/modules/contact-us/index.js");
/* harmony import */ var _modules_news_subs_index__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! %modules%/news-subs/index */ "./src/blocks/modules/news-subs/index.js");
/* harmony import */ var _modules_request_index__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! %modules%/request/index */ "./src/blocks/modules/request/index.js");
/* harmony import */ var _modules_info_block_index__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! %modules%/info-block/index */ "./src/blocks/modules/info-block/index.js");
/* harmony import */ var _modules_media_slider_index__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! %modules%/media-slider/index */ "./src/blocks/modules/media-slider/index.js");
/* harmony import */ var _modules_map_index__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! %modules%/map/index */ "./src/blocks/modules/map/index.js");


























_flatpickrConfig__WEBPACK_IMPORTED_MODULE_0__["default"].setLang();
window.app = {
  header: new _modules_header_header__WEBPACK_IMPORTED_MODULE_3__["default"](),
  sliderDirections: new _modules_directions_index__WEBPACK_IMPORTED_MODULE_5__["default"](),
  sliderBannerMain: new _modules_banner_main_index__WEBPACK_IMPORTED_MODULE_6__["default"](),
  sliderContests: new _modules_contests_index__WEBPACK_IMPORTED_MODULE_7__["default"](),
  sliderMembers: new _modules_members_index__WEBPACK_IMPORTED_MODULE_8__["default"](),
  sliderHistoryMain: new _modules_history_main_index__WEBPACK_IMPORTED_MODULE_9__["default"](),
  sliderPartnersMain: new _modules_partners_main_index__WEBPACK_IMPORTED_MODULE_10__["default"](),
  sliderGrid: new _modules_slider_grid_index__WEBPACK_IMPORTED_MODULE_11__["default"](),
  sliderMedia: new _modules_media_slider_index__WEBPACK_IMPORTED_MODULE_24__["default"](),
  svgAnime: new _modules_anime_card_index__WEBPACK_IMPORTED_MODULE_12__["default"](),
  bannerParking: new _modules_banner_parking_index__WEBPACK_IMPORTED_MODULE_13__["default"](),
  search: new _modules_search_index__WEBPACK_IMPORTED_MODULE_14__["default"](),
  select: (0,_modules_select_index__WEBPACK_IMPORTED_MODULE_15__["default"])(),
  sliderGallery: new _modules_gallery_slider_index__WEBPACK_IMPORTED_MODULE_16__["default"](),
  sliderNewsAnother: new _modules_news_another_index__WEBPACK_IMPORTED_MODULE_17__["default"](),
  social: new _modules_social_index__WEBPACK_IMPORTED_MODULE_18__["default"](),
  accordion: (0,_modules_accordion_index__WEBPACK_IMPORTED_MODULE_19__["default"])(),
  contact_us: (0,_modules_contact_us_index__WEBPACK_IMPORTED_MODULE_20__["default"])(),
  subscribe: (0,_modules_news_subs_index__WEBPACK_IMPORTED_MODULE_21__["default"])(),
  request: (0,_modules_request_index__WEBPACK_IMPORTED_MODULE_22__["default"])(),
  contest: (0,_modules_info_block_index__WEBPACK_IMPORTED_MODULE_23__["default"])(),
  modalPlayer: new _modalPlayer__WEBPACK_IMPORTED_MODULE_1__["default"](),
  videoModal: new _Modal__WEBPACK_IMPORTED_MODULE_2__["default"]('video'),
  map: new _modules_map_index__WEBPACK_IMPORTED_MODULE_25__["default"](),
  mapModal: new _Modal__WEBPACK_IMPORTED_MODULE_2__["default"]('map', false)
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
/* harmony import */ var _import_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./import/alert */ "./src/js/import/alert.js");




(0,_import_form__WEBPACK_IMPORTED_MODULE_2__["default"])();
window.osmiAlert = new _import_alert__WEBPACK_IMPORTED_MODULE_3__["default"]();

/***/ }),

/***/ "./src/js/libs/validationLocal.js":
/*!****************************************!*\
  !*** ./src/js/libs/validationLocal.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var keys = {
  required: 'Name is required',
  minLength: 'Name is too short',
  maxLength: 'Name is too long',
  emailRequired: 'Email is required',
  email: 'Email is invalid',
  integer: 'Value should be a number',
  tel: 'Phone number is invalid'
};
var dictLocale = [{
  key: keys.required,
  dict: {
    ru: 'Поле обязательно для заполнения',
    kk: 'Міндетті өріс',
    en: 'The field is required'
  }
}, {
  key: keys.minLength,
  dict: {
    ru: 'Поле должно содержать минимум :value символа',
    kk: 'Өріс кемінде :value таңбадан тұруы керек',
    en: 'The field must contain a minimum of :value characters'
  }
}, {
  key: keys.maxLength,
  dict: {
    ru: 'Поле должно содержать максимум :value символа',
    kk: 'Өріс ең көбі :value таңбадан тұруы керек',
    en: 'The field must contain a maximum of :value characters'
  }
}, {
  key: keys.emailRequired,
  dict: {
    ru: 'Электронная почта обязательна',
    kk: 'Электрондық пошта қажет',
    en: 'Email is required'
  }
}, {
  key: keys.email,
  dict: {
    ru: 'Электронная почта недействительна',
    kk: 'Электрондық пошта жарамсыз',
    en: 'Email has invalid format'
  }
}, {
  key: keys.integer,
  dict: {
    ru: 'Значение должно быть числом',
    kk: 'Мән сан болуы керек',
    en: 'Value should be a number'
  }
}, {
  key: keys.tel,
  dict: {
    ru: 'Номер телефона недействителен',
    kk: 'Телефон нөмірі жарамсыз',
    en: 'Phone number has invalid format'
  }
}];

// function declension(value, stirng) {
//   value = Math.abs(value) % 100;
//   var num = value % 10;

//   const foundStr = null
//   debugger

//   foundStr = stirng.match(/\[\[\[(.*)\]\]\]/);
//   debugger
//   const stirngArray = []
//   if (typeof stirng === 'string') {
//     stirng.replace(/\[|\]/, '')
//     stirngArray = stirng.split(', ')
//   } else {
//     stirngArray = stirng
//   }

//   if (value > 10 && value < 20) return stirng[2];
//   if (num > 1 && num < 5) return stirng[1];
//   if (num == 1) return stirng[0];
//   return stirng[2];
// }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  dictLocale: dictLocale,
  keys: keys
});

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
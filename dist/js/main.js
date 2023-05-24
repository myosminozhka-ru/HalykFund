(()=>{"use strict";var e,t={17:(e,t,r)=>{function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function o(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===n(i)?i:String(i)),o)}var i}var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.htmlNode=document.querySelector("body"),this.header=document.querySelector(".header"),this.burger=document.querySelector(".header__burger"),this.nav=document.querySelector(".header__nav"),this.navListNode=document.querySelector(".header__nav-list"),this.searchBlockNode=document.querySelector(".header__search"),this.openSearchNode=document.querySelector(".header__search-open"),this.closeSearchNode=document.querySelector(".header__search-close"),this.inputSearchNode=document.querySelector(".header__search-input"),this.startSearchNode=document.querySelector(".header__search-start"),this.drops=document.querySelectorAll(".header__nav-drop"),this.dropItems=document.querySelectorAll(".header__nav-item--drop"),this.init()}var t,r;return t=e,(r=[{key:"init",value:function(){this.burger&&this.nav&&(this.toggleHandler(),this.setTopPadding(),this.sizeHandler(),this.searchOpenHandler(),this.searchCloseHandler(),this.searchInputHandler(),this.dropHandler(),this.scrollHendler(),document.body.style.paddingTop=this.header.clientHeight+"px")}},{key:"open",value:function(){this.burger.classList.add("active"),this.nav.classList.add("active"),document.body.classList.add("lock")}},{key:"close",value:function(){this.burger.classList.remove("active"),this.nav.classList.remove("active"),document.body.classList.remove("lock")}},{key:"toggleHandler",value:function(){var e=this;this.burger&&this.burger.addEventListener("click",(function(){e.burger.classList.contains("active")?e.close():e.open()}))}},{key:"setTopPadding",value:function(){window.matchMedia("(max-width: 768px)").matches?this.nav.style.paddingTop=this.header.clientHeight+20+"px":this.nav.style.paddingTop=0}},{key:"sizeHandler",value:function(){var e=this;window.addEventListener("resize",(function(){e.setTopPadding()}))}},{key:"dropHandler",value:function(){var e=this;this.dropItems.forEach((function(t,r){var n=t.querySelector(".header__nav-arrow"),o=t.querySelector(".header__nav-title");n.addEventListener("click",(function(){e.openDrop(t,r)})),window.matchMedia("(max-width: 768px)").matches||o.addEventListener("mouseover",(function(){e.openDrop(t,r)})),document.addEventListener("click",(function(t){t.target.closest(".header__nav-item")||e.drops.forEach((function(e){e.classList.remove("active")}))}))}))}},{key:"openDrop",value:function(e,t){var r=this.drops[t].classList.contains("active");this.dropItems.forEach((function(e){e.classList.remove("active")}));var n=this.navListNode.getBoundingClientRect();this.drops.forEach((function(e){e.classList.remove("active"),e.style.paddingLeft=(null==n?void 0:n.x)+"px"})),r||(e.classList.add("active"),this.drops[t].classList.add("active"))}},{key:"openSearch",value:function(){this.navListNode.classList.add("hide"),this.searchBlockNode.classList.add("active"),this.inputSearchNode.focus()}},{key:"closeSearch",value:function(){this.navListNode.classList.remove("hide"),this.searchBlockNode.classList.remove("active"),this.inputSearchNode.blur(),this.inputSearchNode.value=""}},{key:"searchOpenHandler",value:function(){var e=this;this.openSearchNode&&this.openSearchNode.addEventListener("click",(function(){e.openSearch()}))}},{key:"searchCloseHandler",value:function(){var e=this;this.closeSearchNode&&this.closeSearchNode.addEventListener("click",(function(){e.closeSearch()}))}},{key:"searchInputHandler",value:function(){var e=this;this.inputSearchNode&&this.inputSearchNode.addEventListener("keypress",(function(t){"Enter"===t.key&&(t.preventDefault(),e.search())})),this.startSearchNode&&this.startSearchNode.addEventListener("click",(function(t){e.search()}))}},{key:"search",value:function(){var e=this.inputSearchNode.dataset.page,t=window.location.origin+e+this.inputSearchNode.value;window.location.href=t}},{key:"scrollHendler",value:function(){var e=this,t=0;window.addEventListener("scroll",(function(){t<e.htmlNode.scrollTop?(e.header&&e.header.classList.add("scroll"),e.close(),e.header&&e.header.classList.remove("down")):0===e.htmlNode.scrollTop?e.header&&e.header.classList.remove("down"):e.header&&e.header.classList.add("down"),e.htmlNode.scrollTop<e.header.clientHeight-60*e.header.clientHeight/100&&e.header&&e.header.classList.remove("scroll"),t=e.htmlNode.scrollTop}))}}])&&o(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}(),a=r(128);function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==l(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===l(o)?o:String(o)),n)}var o}var u=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.sectionNodes=document.querySelectorAll(".directions"),this.init()}var t,r;return t=e,(r=[{key:"init",value:function(){this.sectionNodes.forEach((function(e){var t=e.querySelector(".directions__slider"),r=e.querySelector(".slider-prev"),n=e.querySelector(".slider-next"),o=e.querySelector(".slider-pag");new a.Z(t,{slidesPerView:"auto",loopedSlides:4,loop:!1,navigation:{nextEl:n,prevEl:r,disabledClass:"disabled"},pagination:{el:o,type:"progressbar",bulletActiveClass:"active"}})}))}}])&&s(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==c(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===c(o)?o:String(o)),n)}var o}var f=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.sectionNodes=document.querySelectorAll(".banner-main"),this.init()}var t,r;return t=e,(r=[{key:"init",value:function(){this.sectionNodes.forEach((function(e){var t=e.querySelector(".banner-main__slider"),r=e.querySelector(".slider-prev"),n=e.querySelector(".slider-next"),o=e.querySelector(".slider-pag");new a.Z(t,{slidesPerView:1,loop:!0,effect:"fade",navigation:{nextEl:n,prevEl:r,disabledClass:"disabled"},pagination:{el:o,bulletActiveClass:"active"}})}))}}])&&d(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function m(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==y(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==y(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===y(o)?o:String(o)),n)}var o}var v=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.sectionNodes=document.querySelectorAll(".contests"),this.init()}var t,r;return t=e,(r=[{key:"init",value:function(){this.sectionNodes.forEach((function(e){var t=e.querySelector(".contests__slider"),r=e.querySelector(".slider-prev"),n=e.querySelector(".slider-next"),o=e.querySelector(".slider-pag");new a.Z(t,{slidesPerView:"auto",loop:!1,navigation:{nextEl:n,prevEl:r,disabledClass:"disabled"},pagination:{el:o,type:"progressbar",bulletActiveClass:"active"}})}))}}])&&m(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function h(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==p(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==p(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===p(o)?o:String(o)),n)}var o}var b=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.sectionNodes=document.querySelectorAll(".history-main"),this.init()}var t,r;return t=e,(r=[{key:"init",value:function(){this.sectionNodes.forEach((function(e){var t=e.querySelector(".history-main__slider"),r=e.querySelector(".slider-prev"),n=e.querySelector(".slider-next"),o=e.querySelector(".slider-pag");new a.Z(t,{slidesPerView:"auto",loop:!1,navigation:{nextEl:n,prevEl:r,disabledClass:"disabled"},pagination:{el:o,type:"progressbar",bulletActiveClass:"active"}})}))}}])&&h(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function S(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==g(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==g(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===g(o)?o:String(o)),n)}var o}var w=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.sectionNodes=document.querySelectorAll(".partners-main"),this.init()}var t,r;return t=e,(r=[{key:"init",value:function(){this.sectionNodes.forEach((function(e){var t=e.querySelector(".partners-main__slider"),r=e.querySelector(".slider-prev"),n=e.querySelector(".slider-next"),o=e.querySelector(".slider-pag");new a.Z(t,{slidesPerView:"auto",loop:!1,grid:{rows:2},navigation:{nextEl:n,prevEl:r,disabledClass:"disabled"},pagination:{el:o,type:"progressbar",bulletActiveClass:"active"}})}))}}])&&S(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function q(e){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q(e)}function L(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==q(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==q(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===q(o)?o:String(o)),n)}var o}var k=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.sectionNodes=document.querySelectorAll(".slider-grid"),this.init()}var t,r;return t=e,(r=[{key:"init",value:function(){this.sectionNodes.forEach((function(e){var t=e;new a.Z(t,{slidesPerView:"auto",loop:!1,freeMode:!0})}))}}])&&L(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function x(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==E(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==E(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===E(o)?o:String(o)),n)}var o}function P(e,t){return 0===e?t+90:1===e?t:2===e?t-90-45:3===e?t:4===e?t+90+45:t}var N=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.principles(),this.target()}var t,r;return t=e,(r=[{key:"principles",value:function(){var e=document.querySelector(".anime-card--principles svg");if(e){var t=document.querySelectorAll(".anime-card--principles line"),r=.4,n=gsap.timeline({repeat:-1,yoyo:!1,repeatDelay:1.6}),o=gsap.timeline({repeat:-1,yoyo:!0,ease:"power1.inOut"});gsap.set(e,{rotate:90,transformOrigin:"center center"}),n.to(e,{rotate:-135,duration:r,transformOrigin:"center center",ease:"power1.inOut",repeatDelay:.8},0).to(e,{rotate:90,duration:r,transformOrigin:"center center",ease:"power1.inOut",repeatDelay:.8},.8),t.forEach((function(e,t){n.to(e,{rotate:P(t,7),duration:r,transformOrigin:"center center",ease:"back.out",repeatDelay:1.6},0).to(e,{rotate:P(t,0)-7,duration:.8,transformOrigin:"center center",ease:"back.out",repeatDelay:1.6},r).to(e,{rotate:P(t,0),duration:r,transformOrigin:"center center",ease:"back.out",repeatDelay:1.6},3*r)}));var i=1.6;o.to(t[0],{duration:.8,attr:{x2:73}},i),o.to(t[1],{duration:.8,attr:{x2:95,y2:84.2028}},i),o.to(t[2],{duration:.8,attr:{x2:2}},i),o.to(t[3],{duration:.8,attr:{x2:93.8284,y2:93}},i),o.to(t[4],{duration:.8,attr:{x2:2}},i),o.to(t[5],{duration:.8,attr:{y2:96}},i),o.to(t[6],{duration:.8,attr:{x2:2}},i),o.to(t[7],{duration:.8,attr:{x2:83}},i)}}},{key:"target",value:function(){if(document.querySelector(".anime-card--target")){for(var e=document.querySelectorAll(".anime-card--target circle"),t=.8,r=gsap.timeline({repeat:-1,repeatDelay:.8}),n=gsap.timeline({repeat:-1,repeatDelay:3.2,delay:3.2}),o=0;o<4;o++)r.to(e[o],{attr:{r:14},duration:t,ease:"back.inOut",delay:0},0);for(var i=1;i<4;i++)gsap.set(e[i],{opacity:0}),r.to(e[i],{attr:{r:34},duration:t,opacity:1,ease:"back.inOut",delay:.8},0);for(var a=2;a<4;a++)r.to(e[a],{attr:{r:55},duration:t,opacity:1,ease:"back.inOut",delay:1.6},0);for(var l=3;l<4;l++)r.to(e[l],{attr:{r:78},duration:t,opacity:1,ease:"back.inOut",delay:3*t},0);for(var s=0;s<4;s++)n.to(e[s],{attr:{r:8},opacity:s?0:1,duration:t,ease:"back.inOut",delay:0},0)}}}])&&x(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function M(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==j(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==j(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===j(o)?o:String(o)),n)}var o}function _(e,t,r){return t&&M(e.prototype,t),r&&M(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}var O=_((function e(){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),0!==document.getElementsByClassName("rellax").length&&new Rellax(".rellax",{breakpoints:[576,768,1024]})}));function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function T(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==C(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==C(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===C(o)?o:String(o)),n)}var o}var A=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.clearSearchNode=document.querySelector(".search__clear"),this.inputSearchNode=document.querySelector(".search__input"),this.startSearchNode=document.querySelector(".search__start"),this.init()}var t,r;return t=e,(r=[{key:"init",value:function(){this.inputSearchNode&&this.startSearchNode&&this.clearSearchNode&&(this.searchClearHandler(),this.searchInputHandler())}},{key:"clearSearch",value:function(){this.clearSearchNode.classList.remove("active"),this.startSearchNode.classList.add("active"),this.inputSearchNode.value="",this.inputSearchNode.focus()}},{key:"searchClearHandler",value:function(){var e=this;this.clearSearchNode&&this.clearSearchNode.addEventListener("click",(function(){e.clearSearch()}))}},{key:"searchInputHandler",value:function(){var e=this;this.inputSearchNode&&this.inputSearchNode.addEventListener("keypress",(function(t){"Enter"===t.key&&(t.preventDefault(),e.search())})),this.startSearchNode&&this.startSearchNode.addEventListener("click",(function(t){e.search()}))}},{key:"search",value:function(){var e=this.inputSearchNode.dataset.page,t=window.location.origin+e+this.inputSearchNode.value;window.location.href=t}}])&&T(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function H(e){return H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H(e)}function F(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==H(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==H(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===H(o)?o:String(o)),n)}var o}var D={selectLinkInstances:[]},V=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.el=t,this.triggersNode=null,this.itemsNode=null,this.currentNode=null,this.setup()}var t,r,n;return t=e,n=[{key:"closeAll",value:function(){for(var e in D)D[e].forEach((function(e){e.close()}))}}],(r=[{key:"setup",value:function(){this.el&&(this.triggersNode=this.el.querySelectorAll("[data-select-trigger]"),this.toggleHandler())}},{key:"open",value:function(){this.el.classList.add("active")}},{key:"close",value:function(){this.el.classList.remove("active")}},{key:"toggle",value:function(){this.el.classList.contains("active")?this.close():(e.closeAll(),this.open())}},{key:"toggleHandler",value:function(){var e=this;this.triggersNode.forEach((function(t){t.addEventListener("click",(function(){e.toggle()}))}))}}])&&F(t.prototype,r),n&&F(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function R(e){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R(e)}function B(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==R(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==R(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===R(o)?o:String(o)),n)}var o}document.addEventListener("click",(function(e){e.target.closest("[data-select-id]")||V.closeAll()}));var I=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.sectionNodes=document.querySelectorAll(".gallery-slider"),this.init()}var t,r;return t=e,(r=[{key:"init",value:function(){this.sectionNodes.forEach((function(e){var t=e.querySelector(".gallery-slider__slider"),r=e.querySelector(".slider-prev"),n=e.querySelector(".slider-next"),o=e.querySelector(".slider-pag");new a.Z(t,{slidesPerView:"auto",loop:!1,navigation:{nextEl:n,prevEl:r,disabledClass:"disabled"},pagination:{el:o,type:"progressbar",bulletActiveClass:"active"}})}))}}])&&B(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function Z(e){return Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Z(e)}function z(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==Z(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==Z(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===Z(o)?o:String(o)),n)}var o}var J=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.sectionNodes=document.querySelectorAll(".news-another"),this.init()}var t,r;return t=e,(r=[{key:"init",value:function(){this.sectionNodes.forEach((function(e){var t=e.querySelector(".news-another__slider"),r=e.querySelector(".slider-prev"),n=e.querySelector(".slider-next"),o=e.querySelector(".slider-pag");new a.Z(t,{slidesPerView:"auto",loop:!1,navigation:{nextEl:n,prevEl:r,disabledClass:"disabled"},pagination:{el:o,type:"progressbar",bulletActiveClass:"active"}})}))}}])&&z(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function $(e){return $="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$(e)}function G(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==$(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==$(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===$(o)?o:String(o)),n)}var o}var K=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.nodes=document.querySelectorAll("[data-copy-trigger]"),this.textarea=document.querySelector("#urlCopy"),this.init()}var t,r;return t=e,r=[{key:"init",value:function(){this.textarea&&this.copyHandler()}},{key:"copy",value:function(){this.textarea.innerHTML=window.location.href,console.log(this.textarea.innerHTML),this.textarea.select(),document.execCommand("copy")}},{key:"copyHandler",value:function(){var e=this;this.nodes.forEach((function(t){t.addEventListener("click",(function(){e.copy(),e.alert()}))}))}},{key:"alert",value:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){alert("Ссылка скопирована!")}))}],r&&G(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function Q(e){return Q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Q(e)}function U(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==Q(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==Q(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===Q(o)?o:String(o)),n)}var o}var W=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.element=t,this.btns=null,this.texts=null,this.init()}var t,r;return t=e,(r=[{key:"init",value:function(){this.element&&(this.btns=this.element.querySelectorAll("[data-accordion-btn]"),this.texts=this.element.querySelectorAll("[data-accordion-text]"),this.handler())}},{key:"open",value:function(e){this.texts[e].style.maxHeight=this.texts[e].scrollHeight+"px",this.btns[e].classList.add("open"),this.texts[e].classList.add("open")}},{key:"close",value:function(e){this.btns[e].classList.remove("open"),this.texts[e].classList.remove("open"),this.texts[e].style.maxHeight=null}},{key:"handler",value:function(){var e=this;this.btns.forEach((function(t,r){t.addEventListener("click",(function(){t.classList.contains("open")?e.close(r):e.open(r)}))}))}}])&&U(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}(),X={required:"Name is required",minLength:"Name is too short",maxLength:"Name is too long",emailRequired:"Email is required",email:"Email is invalid",integer:"Value should be a number",tel:"Phone number is invalid"};const Y={dictLocale:[{key:X.required,dict:{ru:"Поле обязательно для заполнения"}},{key:X.minLength,dict:{ru:"Поле должно содержать минимум :value символа"}},{key:X.maxLength,dict:{ru:"Поле должно содержать максимум :value символа"}},{key:X.emailRequired,dict:{ru:"Электронная почта обязательна"}},{key:X.email,dict:{ru:"Электронная почта недействительна"}},{key:X.integer,dict:{ru:"Значение должно быть числом"}},{key:X.tel,dict:{ru:"Номер телефона недействителен"}}],keys:X};var ee,te,re=Y.keys,ne=Y.dictLocale,oe=Y.keys,ie=Y.dictLocale,ae=Y.keys,le=Y.dictLocale,se=Y.keys,ue=Y.dictLocale;function ce(e){return ce="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ce(e)}function de(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==ce(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==ce(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===ce(o)?o:String(o)),n)}var o}window.app={header:new i,sliderDirections:new u,sliderBannerMain:new f,sliderContests:new v,sliderHistoryMain:new b,sliderPartnersMain:new w,sliderGrid:new k,svgAnime:new N,bannerParking:new O,search:new A,select:(document.querySelectorAll(".select-link").forEach((function(e){D.selectLinkInstances.push(new V(e))})),D),sliderGallery:new I,sliderNewsAnother:new J,social:new K,accordion:(ee=document.querySelectorAll("[data-accordion]"),te=[],ee.forEach((function(e){te.push(new W(e))})),te),contact_us:function(){if(document.querySelector("#contact_us")){var e=new JustValidate("#contact_us",{validateBeforeSubmitting:!0},ne);return e.setCurrentLocale("ru"),e.addField('[name="name"]',[{rule:"minLength",value:2,errorMessage:re.minLength},{rule:"maxLength",value:30,errorMessage:re.maxLength},{rule:"required",errorMessage:re.required}]).addField('[name="tel"]',[{rule:"required",errorMessage:re.required},{rule:"customRegexp",value:/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/gi,errorMessage:re.tel}]).addField('[name="email"]',[{rule:"required",errorMessage:re.emailRequired},{rule:"email",errorMessage:re.email}]).addField('[name="comment"]',[{rule:"required",errorMessage:re.required},{rule:"minLength",value:2,errorMessage:re.minLength},{rule:"maxLength",value:300,errorMessage:re.maxLength}]).addField('[name="privacy"]',[{rule:"required",errorMessage:re.required}]),e}}(),subscribe:function(){if(document.querySelector("#subscribe")){var e=new JustValidate("#subscribe",{validateBeforeSubmitting:!0,tooltip:{position:"top"}},ie);return e.setCurrentLocale("ru"),e.addField('[name="email"]',[{rule:"required",errorMessage:oe.emailRequired},{rule:"email",errorMessage:oe.email}]).addField('[name="privacy"]',[{rule:"required",errorMessage:oe.required}]),e}}(),request:function(){if(document.querySelector("#request")){var e=new JustValidate("#request",{validateBeforeSubmitting:!0},le);return e.setCurrentLocale("ru"),e.addField('[name="name"]',[{rule:"minLength",value:2,errorMessage:ae.minLength},{rule:"maxLength",value:30,errorMessage:ae.maxLength},{rule:"required",errorMessage:ae.required}]).addField('[name="city"]',[{rule:"minLength",value:2,errorMessage:ae.minLength},{rule:"maxLength",value:30,errorMessage:ae.maxLength},{rule:"required",errorMessage:ae.required}]).addField('[name="tel"]',[{rule:"required",errorMessage:ae.required},{rule:"customRegexp",value:/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/gi,errorMessage:ae.tel}]).addField('[name="email"]',[{rule:"required",errorMessage:ae.emailRequired},{rule:"email",errorMessage:ae.email}]).addField('[name="comment1"]',[{rule:"required",errorMessage:ae.required},{rule:"minLength",value:2,errorMessage:ae.minLength},{rule:"maxLength",value:300,errorMessage:ae.maxLength}]).addField('[name="comment2"]',[{rule:"required",errorMessage:ae.required},{rule:"minLength",value:2,errorMessage:ae.minLength},{rule:"maxLength",value:300,errorMessage:ae.maxLength}]).addField('[name="comment3"]',[{rule:"required",errorMessage:ae.required},{rule:"minLength",value:2,errorMessage:ae.minLength},{rule:"maxLength",value:300,errorMessage:ae.maxLength}]).addField('[name="privacy"]',[{rule:"required",errorMessage:ae.required}]),e}}(),contest:function(){if(document.querySelector("#contest")){var e=new JustValidate("#contest",{validateBeforeSubmitting:!0},ue);return e.setCurrentLocale("ru"),e.addField('[name="fio"]',[{rule:"minLength",value:6,errorMessage:se.minLength},{rule:"maxLength",value:90,errorMessage:se.maxLength},{rule:"required",errorMessage:se.required}]).addField('[name="inn"]',[{rule:"required",errorMessage:se.required},{rule:"integer",errorMessage:se.integer}]).addField('[name="city"]',[{rule:"minLength",value:2,errorMessage:se.minLength},{rule:"maxLength",value:30,errorMessage:se.maxLength},{rule:"required",errorMessage:se.required}]).addField('[name="tel"]',[{rule:"required",errorMessage:se.required},{rule:"customRegexp",value:/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/gi,errorMessage:se.tel}]).addField('[name="email"]',[{rule:"required",errorMessage:se.emailRequired},{rule:"email",errorMessage:se.email}]).addField('[name="place_of_work_or_sudy"]',[{rule:"minLength",value:3,errorMessage:se.minLength},{rule:"maxLength",value:50,errorMessage:se.maxLength},{rule:"required",errorMessage:se.required}]).addField('[name="specialization"]',[{rule:"minLength",value:3,errorMessage:se.minLength},{rule:"maxLength",value:50,errorMessage:se.maxLength},{rule:"required",errorMessage:se.required}]).addField('[name="name_of_project"]',[{rule:"minLength",value:3,errorMessage:se.minLength},{rule:"maxLength",value:50,errorMessage:se.maxLength},{rule:"required",errorMessage:se.required}]).addField('[name="project_idea"]',[{rule:"required",errorMessage:se.required},{rule:"minLength",value:2,errorMessage:se.minLength},{rule:"maxLength",value:500,errorMessage:se.maxLength}]).addField('[name="competition_regulations"]',[{rule:"required",errorMessage:se.required}]).addField('[name="privacy"]',[{rule:"required",errorMessage:se.required}]),e}}()};var fe=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.container=null,this.create()}var t,r;return t=e,r=[{key:"create",value:function(){this.container=document.createElement("div"),this.container.classList.add("alert"),document.body.append(this.container)}},{key:"render",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=document.createElement("div");n.classList.add("alert__item"),n.textContent=t||(r?"Успешно!":"Ошибка!"),!0===r||"success"===r?n.classList.add("success"):!1!==r&&"error"!==r||n.classList.add("error"),this.container.append(n),setTimeout((function(){return n.classList.add("active")}),50),setTimeout((function(){return e.removeAlert(n,300)}),5e3)}},{key:"removeAlert",value:function(e,t){e.classList.add("escape"),setTimeout((function(){return e.remove()}),t)}}],r&&de(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();document.querySelectorAll("form.form").forEach((function(e){var t=e.querySelector('button[type="submit"]'),r=e.getAttribute("id"),n=window.app[r];t.setAttribute("disabled",!0),n.onValidate((function(e){e.isValid&&t.removeAttribute("disabled")})),e.addEventListener("submit",(function(r){if(r.preventDefault(),console.log(n),n.isValid){var o,i,a=new FormData(e),l=e.getAttribute("action"),s=t.textContent;t.setAttribute("disabled",!0),t.textContent="Загрузка...",(o=l,i=a,fetch(o,{method:"POST",body:i})).then((function(e){if(console.log("contact success"),200!==e.status)throw e;window.osmiAlert.render("Отправлено!",!0),t.textContent="Отправлено!"})).catch((function(){window.osmiAlert.render("Попробуйте позже!",!1)})).finally((function(){t.textContent=s,t.removeAttribute("disabled")}))}}))})),window.osmiAlert=new fe}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}};return t[e](i,i.exports,n),i.exports}n.m=t,e=[],n.O=(t,r,o,i)=>{if(!r){var a=1/0;for(c=0;c<e.length;c++){for(var[r,o,i]=e[c],l=!0,s=0;s<r.length;s++)(!1&i||a>=i)&&Object.keys(n.O).every((e=>n.O[e](r[s])))?r.splice(s--,1):(l=!1,i<a&&(a=i));if(l){e.splice(c--,1);var u=o();void 0!==u&&(t=u)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[r,o,i]},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var o,i,[a,l,s]=r,u=0;if(a.some((t=>0!==e[t]))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(s)var c=s(n)}for(t&&t(r);u<a.length;u++)i=a[u],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(c)},r=self.webpackChunkgulp_scss_starter=self.webpackChunkgulp_scss_starter||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var o=n.O(void 0,[736],(()=>n(17)));o=n.O(o)})();
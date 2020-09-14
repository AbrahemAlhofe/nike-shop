/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/descriptor/descriptor.scss":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/descriptor/descriptor.scss ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".descriptor {\n  margin: 0 5em;\n  width: 25em;\n}\n.descriptor__background {\n  position: absolute;\n  font-size: 4em;\n  font-family: Cairo;\n  color: var(--gray-200);\n  z-index: -1;\n  margin-right: 30px;\n}\n.descriptor__name {\n  font-size: 2em;\n  height: 4em;\n  display: flex;\n  align-items: center;\n}\n.descriptor__description {\n  font-weight: 300;\n  margin-bottom: 2em;\n}\n.descriptor__footer {\n  display: flex;\n  align-items: center;\n}\n.descriptor__buy-btn {\n  display: inline-block;\n  background: var(--gray-300);\n  padding: 10px;\n  border-radius: 10px;\n  width: 7em;\n  text-align: center;\n  cursor: pointer;\n}\n.descriptor__price {\n  font-family: Cairo;\n  font-size: 2em;\n  height: 45px;\n  display: flex;\n  align-items: center;\n  margin: 0px 0.5em;\n}\n\n@keyframes typing {\n  0% {\n    width: 0;\n  }\n}", "",{"version":3,"sources":["webpack://src/components/descriptor/descriptor.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,WAAA;AACJ;AACI;EACI,kBAAA;EACA,cAAA;EACA,kBAAA;EACA,sBAAA;EACA,WAAA;EACA,kBAAA;AACR;AAEI;EACI,cAAA;EACA,WAAA;EACA,aAAA;EACA,mBAAA;AAAR;AAGI;EACI,gBAAA;EACA,kBAAA;AADR;AAII;EACI,aAAA;EACA,mBAAA;AAFR;AAKI;EACI,qBAAA;EACA,2BAAA;EACA,aAAA;EACA,mBAAA;EACA,UAAA;EACA,kBAAA;EACA,eAAA;AAHR;AAMI;EACI,kBAAA;EACA,cAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,iBAAA;AAJR;;AAQA;EACI;IACI,QAAA;EALN;AACF","sourcesContent":[".descriptor {\r\n    margin: 0 5em;\r\n    width: 25em;\r\n    \r\n    &__background {\r\n        position: absolute;\r\n        font-size: 4em;\r\n        font-family: Cairo;\r\n        color: var(--gray-200);\r\n        z-index: -1;\r\n        margin-right: 30px;\r\n    }\r\n\r\n    &__name {\r\n        font-size: 2em;\r\n        height: 4em;\r\n        display: flex;\r\n        align-items: center;\r\n    }\r\n\r\n    &__description {\r\n        font-weight: 300;\r\n        margin-bottom: 2em;\r\n    }\r\n\r\n    &__footer {\r\n        display: flex;\r\n        align-items: center;\r\n    }\r\n\r\n    &__buy-btn {\r\n        display: inline-block;\r\n        background: var(--gray-300);\r\n        padding: 10px;\r\n        border-radius: 10px;\r\n        width: 7em;\r\n        text-align: center;\r\n        cursor: pointer;\r\n    }\r\n\r\n    &__price {\r\n        font-family: Cairo;\r\n        font-size: 2em;\r\n        height: 45px;\r\n        display: flex;\r\n        align-items: center;\r\n        margin: 0px 0.5em;\r\n    }\r\n}\r\n\r\n@keyframes typing {\r\n    0% {\r\n        width: 0;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/navbar/navbar.scss":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/navbar/navbar.scss ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".navbar {\n  height: 50px;\n  display: flex;\n  justify-content: space-between;\n}\n.navbar > div:nth-child(2) {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: row;\n  direction: ltr;\n  align-items: center;\n}\n.navbar__logo {\n  height: 100%;\n}\n.navbar__logo img {\n  height: 100%;\n}\n.navbar__menu {\n  height: 50px;\n  width: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  transition: all 0.5s;\n  border-radius: 10px;\n}\n.navbar__menu:hover {\n  background-color: var(--gray-100);\n}\n.navbar__sections {\n  position: relative;\n}\n.navbar__sections span {\n  margin-right: 15px;\n  position: relative;\n  display: inline-block;\n  cursor: pointer;\n}\n.navbar__sections:before {\n  content: \"\";\n  height: 5px;\n  background-color: var(--gray-500);\n  display: inline-block;\n  position: absolute;\n  top: 100%;\n  z-index: -1;\n  transition: all 0.5s;\n  border-radius: 5px;\n  width: var(--width);\n  left: var(--left);\n}\n.navbar__actions {\n  margin: 0 5em;\n}\n.navbar__actions span {\n  height: 45px;\n  width: 45px;\n  background-color: var(--gray-300);\n  border-radius: 10px;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 10px;\n  cursor: pointer;\n}", "",{"version":3,"sources":["webpack://src/components/navbar/navbar.scss"],"names":[],"mappings":"AAAA;EACI,YAAA;EACA,aAAA;EACA,8BAAA;AACJ;AACI;EACI,YAAA;EACA,aAAA;EACA,mBAAA;EACA,cAAA;EACA,mBAAA;AACR;AAEI;EACI,YAAA;AAAR;AACQ;EACI,YAAA;AACZ;AAGI;EACI,YAAA;EACA,WAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,eAAA;EACA,oBAAA;EACA,mBAAA;AADR;AAEQ;EACI,iCAAA;AAAZ;AAII;EACI,kBAAA;AAFR;AAGQ;EACI,kBAAA;EACA,kBAAA;EACA,qBAAA;EACA,eAAA;AADZ;AAGQ;EACI,WAAA;EACA,WAAA;EACA,iCAAA;EACA,qBAAA;EACA,kBAAA;EACA,SAAA;EACA,WAAA;EACA,oBAAA;EACA,kBAAA;EACA,mBAAA;EACA,iBAAA;AADZ;AAKI;EACI,aAAA;AAHR;AAIQ;EACI,YAAA;EACA,WAAA;EACA,iCAAA;EACA,mBAAA;EACA,oBAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,eAAA;AAFZ","sourcesContent":[".navbar {\r\n    height: 50px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n\r\n    & > div:nth-child(2) {\r\n        flex-grow: 1;\r\n        display: flex;\r\n        flex-direction: row;\r\n        direction: ltr;\r\n        align-items: center;\r\n    }\r\n\r\n    &__logo {\r\n        height: 100%;\r\n        img {\r\n            height: 100%;\r\n        }\r\n    }\r\n\r\n    &__menu {\r\n        height: 50px;\r\n        width: 50px;\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        cursor: pointer;\r\n        transition: all .5s;\r\n        border-radius: 10px;\r\n        &:hover {\r\n            background-color: var(--gray-100)\r\n        }\r\n    }\r\n\r\n    &__sections {\r\n        position: relative;\r\n        span {\r\n            margin-right: 15px;\r\n            position: relative;\r\n            display: inline-block;\r\n            cursor: pointer;\r\n        }\r\n        &:before {\r\n            content: \"\";\r\n            height: 5px;\r\n            background-color: var(--gray-500);\r\n            display: inline-block;\r\n            position: absolute;\r\n            top: 100%;\r\n            z-index: -1;\r\n            transition: all 0.5s;\r\n            border-radius: 5px;\r\n            width: var(--width);\r\n            left: var(--left);\r\n        }\r\n    }\r\n\r\n    &__actions {\r\n        margin: 0 5em;\r\n        span {\r\n            height: 45px;\r\n            width: 45px;\r\n            background-color: var(--gray-300);\r\n            border-radius: 10px;\r\n            display: inline-flex;\r\n            justify-content: center;\r\n            align-items: center;\r\n            margin-right: 10px;\r\n            cursor: pointer;\r\n        }\r\n    }\r\n\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/scroll/scroll.scss":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/scroll/scroll.scss ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".scroll__bar {\n  background-color: var(--gray-300);\n  width: 5px;\n  height: 40vh;\n  border-radius: 10px;\n  transition: all 0.2s;\n  overflow: hidden;\n  position: relative;\n}\n.scroll__thumbnail {\n  background-color: var(--gray-400);\n  width: 100%;\n  position: absolute;\n  transition: all 0.2s;\n}\n\n.scroll__fraction {\n  font-family: \"Cairo\";\n  font-size: 2em;\n  height: 25vh;\n  color: var(--gray-400);\n}\n.scroll__numerator {\n  font-size: 3em;\n  color: var(--gray-500);\n}", "",{"version":3,"sources":["webpack://src/components/scroll/scroll.scss"],"names":[],"mappings":"AAEI;EACI,iCAAA;EACA,UAAA;EACA,YAAA;EACA,mBAAA;EACA,oBAAA;EACA,gBAAA;EACA,kBAAA;AADR;AAGI;EACI,iCAAA;EACA,WAAA;EACA,kBAAA;EACA,oBAAA;AADR;;AAMI;EACI,oBAAA;EACA,cAAA;EACA,YAAA;EACA,sBAAA;AAHR;AAKI;EACI,cAAA;EACA,sBAAA;AAHR","sourcesContent":["// Scroll Bar\r\n.scroll {\r\n    &__bar {\r\n        background-color: var(--gray-300);\r\n        width: 5px;\r\n        height: 40vh;\r\n        border-radius: 10px;\r\n        transition: all .2s;\r\n        overflow: hidden;\r\n        position: relative;\r\n    }\r\n    &__thumbnail {\r\n        background-color: var(--gray-400);\r\n        width: 100%;\r\n        position: absolute;\r\n        transition: all .2s;\r\n    }\r\n}\r\n\r\n.scroll {\r\n    &__fraction {\r\n        font-family: \"Cairo\";\r\n        font-size: 2em;\r\n        height: 25vh;\r\n        color: var(--gray-400);\r\n    }\r\n    &__numerator {\r\n        font-size: 3em;\r\n        color: var(--gray-500);\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/slider/slider.scss":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/slider/slider.scss ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".slider {\n  display: flex;\n  width: 35em;\n  align-items: center;\n}\n.slider__previous-btn, .slider__next-btn {\n  width: 50px;\n  height: 50px;\n  background-color: var(--gray-300);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  cursor: pointer;\n}\n.slider__slides {\n  display: flex;\n  flex-grow: 1;\n  justify-content: space-between;\n  margin: 0px 2em;\n}\n.slider__slide {\n  width: 65px;\n  height: 65px;\n  background-color: var(--gray-300);\n  border-radius: 10px;\n  cursor: pointer;\n  transition: all 0.2s;\n  box-sizing: border-box;\n}\n.slider__slide--current {\n  border: 3px solid var(--gray-500);\n}\n.slider__slide img {\n  width: 90px;\n  transform: rotate(-35deg) scale(1.1);\n  transform-origin: center;\n}", "",{"version":3,"sources":["webpack://src/components/slider/slider.scss"],"names":[],"mappings":"AAAA;EAEI,aAAA;EACA,WAAA;EACA,mBAAA;AAAJ;AAEI;EACI,WAAA;EACA,YAAA;EACA,iCAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,eAAA;AAAR;AAGI;EACI,aAAA;EACA,YAAA;EACA,8BAAA;EACA,eAAA;AADR;AAII;EACI,WAAA;EACA,YAAA;EACA,iCAAA;EACA,mBAAA;EACA,eAAA;EACA,oBAAA;EACA,sBAAA;AAFR;AAGQ;EACI,iCAAA;AADZ;AAGQ;EACI,WAAA;EACA,oCAAA;EACA,wBAAA;AADZ","sourcesContent":[".slider {\r\n\r\n    display: flex;\r\n    width: 35em;\r\n    align-items: center;\r\n\r\n    &__previous-btn, &__next-btn {\r\n        width: 50px;\r\n        height: 50px;\r\n        background-color: var(--gray-300);\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        border-radius: 50%;\r\n        cursor: pointer;\r\n    }\r\n\r\n    &__slides {\r\n        display: flex;\r\n        flex-grow: 1;\r\n        justify-content: space-between;\r\n        margin: 0px 2em;\r\n    }\r\n\r\n    &__slide {\r\n        width: 65px;\r\n        height: 65px;\r\n        background-color: var(--gray-300);\r\n        border-radius: 10px;\r\n        cursor: pointer;\r\n        transition: all .2s;\r\n        box-sizing: border-box;\r\n        &--current {\r\n            border : 3px solid var(--gray-500);\r\n        }\r\n        img {\r\n            width: 90px;\r\n            transform: rotate(-35deg) scale(1.1);\r\n            transform-origin: center;\r\n        }\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/view/view.scss":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/view/view.scss ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".view {\n  width: 20em;\n  height: 20em;\n  background: var(--gray-300);\n  border-radius: 50%;\n  display: flex;\n  margin: 0 auto;\n  margin-bottom: 2em;\n  justify-content: center;\n  align-items: center;\n}\n.view__image {\n  width: 15em;\n  transform: rotate(-30deg) scale(1.7);\n  margin-right: 2em;\n  margin-top: -4em;\n  filter: drop-shadow(5px 20px 10px rgba(0, 0, 0, 0.3));\n}", "",{"version":3,"sources":["webpack://src/components/view/view.scss"],"names":[],"mappings":"AAAA;EACI,WAAA;EACA,YAAA;EACA,2BAAA;EACA,kBAAA;EACA,aAAA;EACA,cAAA;EACA,kBAAA;EACA,uBAAA;EACA,mBAAA;AACJ;AAAI;EACI,WAAA;EACA,oCAAA;EACA,iBAAA;EACA,gBAAA;EACA,qDAAA;AAER","sourcesContent":[".view {\r\n    width: 20em;\r\n    height: 20em;\r\n    background: var(--gray-300);\r\n    border-radius: 50%;\r\n    display: flex;\r\n    margin: 0 auto;\r\n    margin-bottom: 2em;\r\n    justify-content: center;\r\n    align-items: center;\r\n    &__image {\r\n        width: 15em;\r\n        transform: rotate(-30deg) scale(1.7);\r\n        margin-right: 2em;\r\n        margin-top: -4em;\r\n        filter : drop-shadow(5px 20px 10px rgba(0,0,0,0.3));\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@charset \"UTF-8\";\n:root {\n  --gray-100: #F8F8F8;\n  --gray-200: #EEEEEE;\n  --gray-300: #E6E6E6;\n  --gray-400: #C8C8C8;\n  --gray-500: #4B4B4B;\n  --gray-600: #1E1E1E;\n}\n\nhtml {\n  height: 100%;\n}\n\nbody {\n  font-family: \"Swissra ☞\";\n  padding: 10px 20px;\n  height: 100%;\n  display: flex;\n  margin: 0px;\n  box-sizing: border-box;\n  flex-direction: column;\n}\n\n#app {\n  display: flex;\n  align-items: center;\n  flex-grow: 1;\n}", "",{"version":3,"sources":["webpack://src/index.scss"],"names":[],"mappings":"AAAA,gBAAgB;AAAhB;EACI,mBAAA;EACA,mBAAA;EACA,mBAAA;EACA,mBAAA;EACA,mBAAA;EACA,mBAAA;AAEJ;;AACA;EACI,YAAA;AAEJ;;AACA;EACI,wBAAA;EACA,kBAAA;EACA,YAAA;EACA,aAAA;EACA,WAAA;EACA,sBAAA;EACA,sBAAA;AAEJ;;AACA;EACI,aAAA;EACA,mBAAA;EACA,YAAA;AAEJ","sourcesContent":[":root {\r\n    --gray-100 : #F8F8F8;\r\n    --gray-200 : #EEEEEE;\r\n    --gray-300 : #E6E6E6;\r\n    --gray-400 : #C8C8C8;\r\n    --gray-500 : #4B4B4B;\r\n    --gray-600 : #1E1E1E;\r\n}\r\n\r\nhtml {\r\n    height: 100%;\r\n}\r\n\r\nbody {\r\n    font-family: \"Swissra ☞\";\r\n    padding: 10px 20px;\r\n    height: 100%;\r\n    display: flex;\r\n    margin: 0px;\r\n    box-sizing: border-box;\r\n    flex-direction: column;\r\n}\r\n\r\n#app {\r\n    display: flex;\r\n    align-items: center;\r\n    flex-grow: 1;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/pug-runtime/index.js":
/*!*******************************************!*\
  !*** ./node_modules/pug-runtime/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var pug_has_own_property = Object.prototype.hasOwnProperty;

/**
 * Merge two attribute objects giving precedence
 * to values in object `b`. Classes are special-cased
 * allowing for arrays and merging/joining appropriately
 * resulting in a string.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 * @api private
 */

exports.merge = pug_merge;
function pug_merge(a, b) {
  if (arguments.length === 1) {
    var attrs = a[0];
    for (var i = 1; i < a.length; i++) {
      attrs = pug_merge(attrs, a[i]);
    }
    return attrs;
  }

  for (var key in b) {
    if (key === 'class') {
      var valA = a[key] || [];
      a[key] = (Array.isArray(valA) ? valA : [valA]).concat(b[key] || []);
    } else if (key === 'style') {
      var valA = pug_style(a[key]);
      valA = valA && valA[valA.length - 1] !== ';' ? valA + ';' : valA;
      var valB = pug_style(b[key]);
      valB = valB && valB[valB.length - 1] !== ';' ? valB + ';' : valB;
      a[key] = valA + valB;
    } else {
      a[key] = b[key];
    }
  }

  return a;
}

/**
 * Process array, object, or string as a string of classes delimited by a space.
 *
 * If `val` is an array, all members of it and its subarrays are counted as
 * classes. If `escaping` is an array, then whether or not the item in `val` is
 * escaped depends on the corresponding item in `escaping`. If `escaping` is
 * not an array, no escaping is done.
 *
 * If `val` is an object, all the keys whose value is truthy are counted as
 * classes. No escaping is done.
 *
 * If `val` is a string, it is counted as a class. No escaping is done.
 *
 * @param {(Array.<string>|Object.<string, boolean>|string)} val
 * @param {?Array.<string>} escaping
 * @return {String}
 */
exports.classes = pug_classes;
function pug_classes_array(val, escaping) {
  var classString = '',
    className,
    padding = '',
    escapeEnabled = Array.isArray(escaping);
  for (var i = 0; i < val.length; i++) {
    className = pug_classes(val[i]);
    if (!className) continue;
    escapeEnabled && escaping[i] && (className = pug_escape(className));
    classString = classString + padding + className;
    padding = ' ';
  }
  return classString;
}
function pug_classes_object(val) {
  var classString = '',
    padding = '';
  for (var key in val) {
    if (key && val[key] && pug_has_own_property.call(val, key)) {
      classString = classString + padding + key;
      padding = ' ';
    }
  }
  return classString;
}
function pug_classes(val, escaping) {
  if (Array.isArray(val)) {
    return pug_classes_array(val, escaping);
  } else if (val && typeof val === 'object') {
    return pug_classes_object(val);
  } else {
    return val || '';
  }
}

/**
 * Convert object or string to a string of CSS styles delimited by a semicolon.
 *
 * @param {(Object.<string, string>|string)} val
 * @return {String}
 */

exports.style = pug_style;
function pug_style(val) {
  if (!val) return '';
  if (typeof val === 'object') {
    var out = '';
    for (var style in val) {
      /* istanbul ignore else */
      if (pug_has_own_property.call(val, style)) {
        out = out + style + ':' + val[style] + ';';
      }
    }
    return out;
  } else {
    return val + '';
  }
}

/**
 * Render the given attribute.
 *
 * @param {String} key
 * @param {String} val
 * @param {Boolean} escaped
 * @param {Boolean} terse
 * @return {String}
 */
exports.attr = pug_attr;
function pug_attr(key, val, escaped, terse) {
  if (
    val === false ||
    val == null ||
    (!val && (key === 'class' || key === 'style'))
  ) {
    return '';
  }
  if (val === true) {
    return ' ' + (terse ? key : key + '="' + key + '"');
  }
  var type = typeof val;
  if (
    (type === 'object' || type === 'function') &&
    typeof val.toJSON === 'function'
  ) {
    val = val.toJSON();
  }
  if (typeof val !== 'string') {
    val = JSON.stringify(val);
    if (!escaped && val.indexOf('"') !== -1) {
      return ' ' + key + "='" + val.replace(/'/g, '&#39;') + "'";
    }
  }
  if (escaped) val = pug_escape(val);
  return ' ' + key + '="' + val + '"';
}

/**
 * Render the given attributes object.
 *
 * @param {Object} obj
 * @param {Object} terse whether to use HTML5 terse boolean attributes
 * @return {String}
 */
exports.attrs = pug_attrs;
function pug_attrs(obj, terse) {
  var attrs = '';

  for (var key in obj) {
    if (pug_has_own_property.call(obj, key)) {
      var val = obj[key];

      if ('class' === key) {
        val = pug_classes(val);
        attrs = pug_attr(key, val, false, terse) + attrs;
        continue;
      }
      if ('style' === key) {
        val = pug_style(val);
      }
      attrs += pug_attr(key, val, false, terse);
    }
  }

  return attrs;
}

/**
 * Escape the given string of `html`.
 *
 * @param {String} html
 * @return {String}
 * @api private
 */

var pug_match_html = /["&<>]/;
exports.escape = pug_escape;
function pug_escape(_html) {
  var html = '' + _html;
  var regexResult = pug_match_html.exec(html);
  if (!regexResult) return _html;

  var result = '';
  var i, lastIndex, escape;
  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {
    switch (html.charCodeAt(i)) {
      case 34:
        escape = '&quot;';
        break;
      case 38:
        escape = '&amp;';
        break;
      case 60:
        escape = '&lt;';
        break;
      case 62:
        escape = '&gt;';
        break;
      default:
        continue;
    }
    if (lastIndex !== i) result += html.substring(lastIndex, i);
    lastIndex = i + 1;
    result += escape;
  }
  if (lastIndex !== i) return result + html.substring(lastIndex, i);
  else return result;
}

/**
 * Re-throw the given `err` in context to the
 * the pug in `filename` at the given `lineno`.
 *
 * @param {Error} err
 * @param {String} filename
 * @param {String} lineno
 * @param {String} str original source
 * @api private
 */

exports.rethrow = pug_rethrow;
function pug_rethrow(err, filename, lineno, str) {
  if (!(err instanceof Error)) throw err;
  if ((typeof window != 'undefined' || !filename) && !str) {
    err.message += ' on line ' + lineno;
    throw err;
  }
  try {
    str = str || __webpack_require__(/*! fs */ 0).readFileSync(filename, 'utf8');
  } catch (ex) {
    pug_rethrow(err, null, lineno);
  }
  var context = 3,
    lines = str.split('\n'),
    start = Math.max(lineno - context, 0),
    end = Math.min(lines.length, lineno + context);

  // Error context
  var context = lines
    .slice(start, end)
    .map(function(line, i) {
      var curr = i + start + 1;
      return (curr == lineno ? '  > ' : '    ') + curr + '| ' + line;
    })
    .join('\n');

  // Alter exception message
  err.path = filename;
  try {
    err.message =
      (filename || 'Pug') +
      ':' +
      lineno +
      '\n' +
      context +
      '\n\n' +
      err.message;
  } catch (e) {}
  throw err;
}


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/components/descriptor/descriptor.pug":
/*!**************************************************!*\
  !*** ./src/components/descriptor/descriptor.pug ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cdiv class=\"descriptor__name\"\u003E\u003Cdiv class=\"descriptor__background\"\u003ENike\u003C\u002Fdiv\u003E\u003Cspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"descriptor__description\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"descriptor__footer\"\u003E\u003Cdiv class=\"descriptor__buy-btn\"\u003Eإشتري الان\u003C\u002Fdiv\u003E\u003Cdiv class=\"descriptor__price\"\u003E\u003Cspan\u003E\u003C\u002Fspan\u003E\u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-dollar-sign\"\u003E\u003Cline x1=\"12\" y1=\"1\" x2=\"12\" y2=\"23\"\u003E\u003C\u002Fline\u003E\u003Cpath d=\"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6\"\u003E\u003C\u002Fpath\u003E\u003C\u002Fsvg\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/components/descriptor/descriptor.scss":
/*!***************************************************!*\
  !*** ./src/components/descriptor/descriptor.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./descriptor.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/descriptor/descriptor.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/components/descriptor/descriptor.ts":
/*!*************************************************!*\
  !*** ./src/components/descriptor/descriptor.ts ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _descriptor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./descriptor.scss */ "./src/components/descriptor/descriptor.scss");
/* harmony import */ var _descriptor_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_descriptor_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _descriptor_pug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./descriptor.pug */ "./src/components/descriptor/descriptor.pug");
/* harmony import */ var _descriptor_pug__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_descriptor_pug__WEBPACK_IMPORTED_MODULE_1__);


class Navbar extends HTMLElement {
    get descriptor__name() {
        return this.querySelector('.descriptor__name span');
    }
    get descriptor__price() {
        return this.querySelector('.descriptor__price span');
    }
    get descriptor__description() {
        return this.querySelector(".descriptor__description");
    }
    connectedCallback() {
        this.innerHTML = _descriptor_pug__WEBPACK_IMPORTED_MODULE_1___default()();
        this.classList.add('descriptor');
        this.updateView();
    }
    constructor() { super(); }
    updateView() {
        let lastPrice = 0;
        window.store.products.$on('set', () => lastPrice = 0);
        // ===============================
        // Set Name
        // ===============================
        window.store.product.$on("update:name", (name) => this.descriptor__name.innerText = name);
        // ===============================
        // Set Price
        // ===============================
        window.store.product.$on('update:price', (price) => {
            this.descriptor__price.innerText = String(price);
        });
        // ===============================
        // Set Description
        // ===============================
        window.store.product.$on("update:description", (desc) => this.descriptor__description.innerText = desc);
    }
}
customElements.define("v-descriptor", Navbar);


/***/ }),

/***/ "./src/components/navbar/navbar.pug":
/*!******************************************!*\
  !*** ./src/components/navbar/navbar.pug ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cdiv class=\"navbar__logo\"\u003E\u003Cimg src=\"..\u002Fimages\u002Flogo.png\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv\u003E\u003Cdiv class=\"navbar__menu\"\u003E\u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-menu\"\u003E\u003Cline x1=\"3\" y1=\"12\" x2=\"21\" y2=\"12\"\u003E\u003C\u002Fline\u003E\u003Cline x1=\"3\" y1=\"6\" x2=\"21\" y2=\"6\"\u003E\u003C\u002Fline\u003E\u003Cline x1=\"3\" y1=\"18\" x2=\"21\" y2=\"18\"\u003E\u003C\u002Fline\u003E\u003C\u002Fsvg\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"navbar__actions\"\u003E\u003Cspan class=\"navbar__search\"\u003E\u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-search\"\u003E\u003Ccircle cx=\"11\" cy=\"11\" r=\"8\"\u003E\u003C\u002Fcircle\u003E\u003Cline x1=\"21\" y1=\"21\" x2=\"16.65\" y2=\"16.65\"\u003E\u003C\u002Fline\u003E\u003C\u002Fsvg\u003E\u003C\u002Fspan\u003E\u003Cspan class=\"navbar__shopping-cart\"\u003E\u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-shopping-cart\"\u003E\u003Ccircle cx=\"9\" cy=\"21\" r=\"1\"\u003E\u003C\u002Fcircle\u003E\u003Ccircle cx=\"20\" cy=\"21\" r=\"1\"\u003E\u003C\u002Fcircle\u003E\u003Cpath d=\"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6\"\u003E\u003C\u002Fpath\u003E\u003C\u002Fsvg\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"navbar__sections\"\u003E\u003Cspan class=\"navbar__section\"\u003Eإصدارات جديدة\u003C\u002Fspan\u003E\u003Cspan class=\"navbar__section\"\u003E رجالي\u003C\u002Fspan\u003E\u003Cspan class=\"navbar__section\"\u003E نسائي\u003C\u002Fspan\u003E\u003Cspan class=\"navbar__section\"\u003E أطفالي\u003C\u002Fspan\u003E\u003Cspan class=\"navbar__section\"\u003E تشكيلة\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/components/navbar/navbar.scss":
/*!*******************************************!*\
  !*** ./src/components/navbar/navbar.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./navbar.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/navbar/navbar.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/components/navbar/navbar.ts":
/*!*****************************************!*\
  !*** ./src/components/navbar/navbar.ts ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navbar_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar.scss */ "./src/components/navbar/navbar.scss");
/* harmony import */ var _navbar_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_navbar_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _navbar_pug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar.pug */ "./src/components/navbar/navbar.pug");
/* harmony import */ var _navbar_pug__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_navbar_pug__WEBPACK_IMPORTED_MODULE_1__);


class Navbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = _navbar_pug__WEBPACK_IMPORTED_MODULE_1___default()();
        this.classList.add('navbar');
        // =====================================
        // Sections Animation
        // =====================================
        const navbar__sections = this.querySelector('.navbar__sections');
        const sections = navbar__sections.querySelectorAll('.navbar__section');
        sections.forEach((section) => {
            section.addEventListener('mouseover', () => {
                navbar__sections.style.setProperty("--left", section.offsetLeft + "px");
                navbar__sections.style.setProperty('--width', section.getBoundingClientRect().width + 'px');
            });
            section.addEventListener('mouseleave', () => {
                navbar__sections.style.setProperty('--width', '0px');
            });
        });
    }
    constructor() { super(); }
}
customElements.define("v-navbar", Navbar);


/***/ }),

/***/ "./src/components/scroll/scroll.pug":
/*!******************************************!*\
  !*** ./src/components/scroll/scroll.pug ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cdiv class=\"scroll__fraction\"\u003E\u003Cspan class=\"scroll__numerator\"\u003E\u003C\u002Fspan\u003E\u003Cspan class=\"scroll__slash\"\u003E\u002F\u003C\u002Fspan\u003E\u003Cspan class=\"scroll__denominator\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"scroll__bar\"\u003E\u003Cdiv class=\"scroll__thumbnail\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/components/scroll/scroll.scss":
/*!*******************************************!*\
  !*** ./src/components/scroll/scroll.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./scroll.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/scroll/scroll.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/components/scroll/scroll.ts":
/*!*****************************************!*\
  !*** ./src/components/scroll/scroll.ts ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scroll_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scroll.scss */ "./src/components/scroll/scroll.scss");
/* harmony import */ var _scroll_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scroll_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scroll_pug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scroll.pug */ "./src/components/scroll/scroll.pug");
/* harmony import */ var _scroll_pug__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scroll_pug__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./src/utils.ts");
/* harmony import */ var _recorder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../recorder */ "./src/recorder.ts");




class Scroll extends HTMLElement {
    constructor() {
        super();
        this.numerator = new _recorder__WEBPACK_IMPORTED_MODULE_3__["RecordValue"](0, {
            set: (value) => Math.min(Math.max(value, 0), this.denominator.value - 1)
        });
        this.denominator = new _recorder__WEBPACK_IMPORTED_MODULE_3__["RecordValue"](4);
        this.heightUnit = 0;
    }
    get scroll__bar() {
        return this.querySelector(".scroll__bar");
    }
    get scroll__thumbnail() {
        return this.querySelector(".scroll__thumbnail");
    }
    get scroll__numerator() {
        return this.querySelector(".scroll__numerator");
    }
    get scroll__denominator() {
        return this.querySelector(".scroll__denominator");
    }
    connectedCallback() {
        this.innerHTML = _scroll_pug__WEBPACK_IMPORTED_MODULE_1___default()();
        this.classList.add("scroll");
        this.computedData();
        this.updateView();
        // =======================================
        // Data
        // =======================================
        this.numerator.set(0);
        this.denominator.set(window.store.goods.length);
        // =======================================
        // Scroll Bar Functionality
        // =======================================
        const onMove = (e) => {
            const y = e.pageY - this.scroll__bar.getBoundingClientRect().top;
            this.numerator.set(Math.floor(y / this.heightUnit));
        };
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["onDragDrop"])(this.scroll__thumbnail, () => true, onMove, () => { });
        window.addEventListener('wheel', (e) => {
            // Scroll Up
            if (e.deltaY > 0)
                this.numerator.set(this.numerator.value + 1);
            else
                this.numerator.set(this.numerator.value - 1);
        });
    }
    computedData() {
        this.denominator.$on('set', (value) => this.heightUnit = this.scroll__bar.offsetHeight / value);
        this.numerator.$on('set', (value) => {
            window.store.products.set(window.store.goods[value]);
        });
    }
    updateView() {
        // Set Scroll Fraction Text
        this.numerator.$on("set", (value) => (this.scroll__numerator.innerText = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["pad"])(value + 1, String(this.denominator.value).length)));
        this.denominator.$on("set", (value) => (this.scroll__denominator.innerText = String(value)));
        // Set Height Of Thumbnail
        this.denominator.$on("set", (value) => {
            this.scroll__thumbnail.style.height = `${this.scroll__bar.offsetHeight / value}px`;
        });
        // Set Y of Thumbnail
        this.numerator.$on('set', (value) => (this.scroll__thumbnail.style.top = this.heightUnit * this.numerator.value + 'px'));
    }
}
customElements.define("v-scroll", Scroll);


/***/ }),

/***/ "./src/components/slider/slider.pug":
/*!******************************************!*\
  !*** ./src/components/slider/slider.pug ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cdiv class=\"slider__slides\"\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/components/slider/slider.scss":
/*!*******************************************!*\
  !*** ./src/components/slider/slider.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./slider.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/slider/slider.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/components/slider/slider.ts":
/*!*****************************************!*\
  !*** ./src/components/slider/slider.ts ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _slider_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider.scss */ "./src/components/slider/slider.scss");
/* harmony import */ var _slider_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_slider_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _slider_pug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slider.pug */ "./src/components/slider/slider.pug");
/* harmony import */ var _slider_pug__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_slider_pug__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./src/utils.ts");



class Slider extends HTMLElement {
    get slider__slides() {
        return this.querySelector('.slider__slides');
    }
    get slider__slide() {
        return this.querySelectorAll('.slider__slides .slider__slide');
    }
    get currentSlide() {
        return this.querySelector('.slider__slide--current');
    }
    connectedCallback() {
        this.innerHTML = _slider_pug__WEBPACK_IMPORTED_MODULE_1___default()();
        this.classList.add('slider');
        this.updateView();
    }
    updateView() {
        // =====================================
        // Remove Slides
        // =====================================
        window.store.products.$on('remove', (index, item) => {
            this.slider__slide.forEach(slide => slide.remove());
        });
        // =====================================
        // Add Slides
        // =====================================
        window.store.products.$on('add', (product, index) => {
            const slide = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", { classList: ["slider__slide"] });
            slide.appendChild(Object(_utils__WEBPACK_IMPORTED_MODULE_2__["createElement"])("img", { attrs: { src: product.image } }));
            this.slider__slides.appendChild(slide);
            slide.addEventListener('click', () => {
                window.store.product.set(Object.assign({ index }, window.store.products.value[index]));
            });
        });
        // =====================================
        // Add class "slider__slide--current" to currentProduct
        // =====================================
        window.store.product.$on('set', (product) => {
            var _a;
            (_a = this.currentSlide) === null || _a === void 0 ? void 0 : _a.classList.remove('slider__slide--current');
            this.slider__slide[product.index].classList.add('slider__slide--current');
        });
    }
    constructor() { super(); }
}
customElements.define("v-slider", Slider);


/***/ }),

/***/ "./src/components/view/view.pug":
/*!**************************************!*\
  !*** ./src/components/view/view.pug ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cimg class=\"view__image\"\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/components/view/view.scss":
/*!***************************************!*\
  !*** ./src/components/view/view.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./view.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/view/view.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/components/view/view.ts":
/*!*************************************!*\
  !*** ./src/components/view/view.ts ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.scss */ "./src/components/view/view.scss");
/* harmony import */ var _view_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_view_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _view_pug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.pug */ "./src/components/view/view.pug");
/* harmony import */ var _view_pug__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_view_pug__WEBPACK_IMPORTED_MODULE_1__);


class Navbar extends HTMLElement {
    get image() {
        return document.querySelector('.view__image');
    }
    connectedCallback() {
        this.innerHTML = _view_pug__WEBPACK_IMPORTED_MODULE_1___default()();
        this.classList.add('view');
        // ===============================
        // Image
        // ===============================
        window.store.product.$on('update:image', (image) => {
            this.image.setAttribute('src', image);
        });
    }
    constructor() { super(); }
}
customElements.define("v-view", Navbar);


/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ "./src/store.ts");
/* harmony import */ var _components_view_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/view/view */ "./src/components/view/view.ts");
/* harmony import */ var _components_navbar_navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/navbar/navbar */ "./src/components/navbar/navbar.ts");
/* harmony import */ var _components_scroll_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/scroll/scroll */ "./src/components/scroll/scroll.ts");
/* harmony import */ var _components_slider_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/slider/slider */ "./src/components/slider/slider.ts");
/* harmony import */ var _components_descriptor_descriptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/descriptor/descriptor */ "./src/components/descriptor/descriptor.ts");









/***/ }),

/***/ "./src/recorder.ts":
/*!*************************!*\
  !*** ./src/recorder.ts ***!
  \*************************/
/*! exports provided: RecordArray, RecordValue, RecordObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordArray", function() { return RecordArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordValue", function() { return RecordValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordObject", function() { return RecordObject; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");

class Recorder extends _utils__WEBPACK_IMPORTED_MODULE_0__["EventsHandler"] {
    constructor(_init, middlewares) {
        super();
        this._init = _init;
        this.middlewares = middlewares;
        this.history = [];
        this.value = this._init;
        this.$emit('set', this.value);
        this.$on("$listen", (eventName, callback) => {
            if (eventName === "set")
                callback(this.value);
        });
        this.middlewares = Object.assign({
            set: (v) => v,
            update: (index, v) => [index, v],
            updateAll: (v) => v,
            get: (index) => void 0
        }, this.middlewares);
        this.history.push(this.value);
    }
    set(value) {
        value = this._$middleware('set', value);
        if (value !== this.value)
            this.$emit("update", (this.value = value));
        this.$emit("set", this.value);
        this.history.push(this.value);
    }
    _$middleware(name, ...args) {
        return this.middlewares[name].call(this, ...args);
    }
}
class RecordArray extends Recorder {
    constructor(_init, middlewares = {}) {
        super(_init, middlewares);
        this.$on('$listen', (eventName, callback) => {
            if (eventName === 'add')
                this.value.forEach((item, index) => callback(item, index));
        });
        this.$on('set', (value) => {
            // Remove Old Items
            this.history[this.history.length - 1].forEach((item, index) => this.$emit('remove', index, item));
            // Add New Items
            value.forEach((item, index) => this.$emit('add', item, index));
        });
    }
    push(...items) {
        this.value.push(...items);
        this.$emit("add", items, this.value.length - 1);
        this.$emit('update', this.value);
        this.history.push(this.value);
    }
    splice(from, deleteCount = 0, ...items) {
        this.value.splice(from, deleteCount, ...items);
        this.$emit('splice', from, deleteCount, ...items);
        this.$emit("update", this.value);
        this.history.push(this.value);
    }
}
class RecordValue extends Recorder {
    constructor(_init, middlewares = {}) {
        super(_init, middlewares);
    }
}
class RecordObject extends Recorder {
    constructor(_init, middlewares = {}) {
        super(_init, middlewares);
        this.$on("$listen", (eventExpression, callback) => {
            const [name, prefix] = eventExpression.split(':');
            if (name === "update" && !prefix)
                for (let key in this.value)
                    callback(key, this.value[key]);
            if (name === "update" && prefix)
                callback(this.value[prefix]);
        });
        this.$on('set', (value) => {
            this.$emit('update', value);
            for (let key in value)
                this.$emit(`update:${key}`, value[key]);
        });
    }
    update(key, value) {
        this.value[key] = value;
        this.$emit(`update`, key, value);
        this.$emit(`update:${key}`, value);
    }
}


/***/ }),

/***/ "./src/store.ts":
/*!**********************!*\
  !*** ./src/store.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _recorder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recorder */ "./src/recorder.ts");

const description = 'هذا النص مثال لنص يمكن أن يستبدل في نفس المساحة. لتوليد هذا النص من مولد النص العربي حيث يمكن أن تولد';
const part1 = [
    {
        name: "جوردان زيرو تو",
        price: 126,
        image: "../images/shoe-1.png",
        description,
    },
    {
        name: "أير ماكس 270",
        price: 160,
        image: "../images/shoe-2.png",
        description,
    },
    {
        name: "أير جوردان 1 ميد",
        price: 200,
        image: "../images/shoe-3.png",
        description,
    },
    {
        name: "كيفين دورانت 12",
        price: 323,
        image: "../images/shoe-4.png",
        description,
    },
];
const part2 = [
    {
        name: "فليكيس ميثود",
        price: 500,
        image: "../images/shoe-5.png",
        description,
    },
    {
        name: "جاكوب زيرو وان",
        price: 740,
        image: "../images/shoe-6.png",
        description,
    },
];
window.store = {
    goods: [part1, part2],
    products: new _recorder__WEBPACK_IMPORTED_MODULE_0__["RecordArray"](part1),
    product: new _recorder__WEBPACK_IMPORTED_MODULE_0__["RecordObject"]({
        name: "",
        price: 0,
        image: "",
        description: "",
        index: 2,
    }),
};
window.store.products.$on("set", () => {
    const index = Math.min(window.store.product.value.index, window.store.products.value.length - 1);
    window.store.product.set(Object.assign({ index }, window.store.products.value[index]));
});


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/*! exports provided: EventsHandler, onDragDrop, pad, createElement, animateCounting, animateTyping */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsHandler", function() { return EventsHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onDragDrop", function() { return onDragDrop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pad", function() { return pad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animateCounting", function() { return animateCounting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animateTyping", function() { return animateTyping; });
class EventsHandler {
    constructor() {
        this.events = {};
    }
    $emit(eventName, ...args) {
        if (!Array.isArray(this.events[eventName]))
            return;
        this.events[eventName].forEach(callBack => callBack(...args));
    }
    $on(eventName, callBack) {
        if (!Array.isArray(this.events[eventName]))
            this.events[eventName] = [];
        this.events[eventName].push(callBack);
        if (eventName !== '$listen')
            this.$emit('$listen', eventName, callBack);
    }
}
function onDragDrop(element, mousedown, mousemove, mouseup) {
    let point_1 = { x: 0, y: 0 };
    let isMouseUp = false;
    let isMouseDown = false;
    let isMouseMove = false;
    element.addEventListener("mousedown", (e) => {
        if (mousedown(e)) {
            isMouseDown = true;
            isMouseUp = false;
            point_1 = { x: e.pageX, y: e.pageY };
        }
    });
    document.body.addEventListener("mouseup", (e) => {
        if (isMouseDown && isMouseMove) {
            isMouseUp = true;
            mouseup(e);
        }
    });
    document.body.addEventListener("mousemove", (e) => {
        if (!isMouseUp && isMouseDown) {
            isMouseMove = true;
            mousemove(e, { x: e.pageX - point_1.x, y: e.pageY - point_1.y });
        }
    });
}
function pad(number, range = 2) {
    const arr = new Array(range).fill(0);
    arr.splice(String(number).length - 1, String(number).length, String(number));
    return arr.reverse().join('');
}
function createElement(tagName, options) {
    const elm = document.createElement(tagName);
    elm.innerText = options.innerText || '';
    elm.innerHTML = options.innerHTML || elm.innerHTML;
    for (let className of (options.classList || []))
        elm.classList.add(className);
    for (let attrName in options.attrs)
        elm.setAttribute(attrName, options.attrs[attrName]);
    return elm;
}
function animateCounting(start, end, callBack) {
    const increment = end < start ? -1 : 1;
    const counter = setInterval(() => {
        callBack(start += increment);
        if (start === end)
            clearInterval(counter);
    }, 1500 / Math.abs(end - start));
}
function animateTyping(string, callBack) {
    let _string = '';
    let i = 0;
    const animation = setInterval(() => {
        _string += string[i];
        callBack(_string);
        i += 1;
        if (i >= string.length)
            clearInterval(animation);
    }, 1000 / string.length);
}


/***/ }),

/***/ 0:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGVzY3JpcHRvci9kZXNjcmlwdG9yLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3Njcm9sbC9zY3JvbGwuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zbGlkZXIvc2xpZGVyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlldy92aWV3LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHVnLXJ1bnRpbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Rlc2NyaXB0b3IvZGVzY3JpcHRvci5wdWciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGVzY3JpcHRvci9kZXNjcmlwdG9yLnNjc3M/M2M1MiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kZXNjcmlwdG9yL2Rlc2NyaXB0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5wdWciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5zY3NzPzRjMWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zY3JvbGwvc2Nyb2xsLnB1ZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zY3JvbGwvc2Nyb2xsLnNjc3M/YTg5NyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zY3JvbGwvc2Nyb2xsLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NsaWRlci9zbGlkZXIucHVnIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NsaWRlci9zbGlkZXIuc2Nzcz9jNmY2Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NsaWRlci9zbGlkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlldy92aWV3LnB1ZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy92aWV3L3ZpZXcuc2Nzcz80Y2FlIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3ZpZXcvdmlldy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguc2Nzcz83MjIzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVjb3JkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy50cyIsIndlYnBhY2s6Ly8vZnMgKGlnbm9yZWQpIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7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QUssS0FBSyxHQUFHO1lBQUcsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlDLENBQUMsRUFBRSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUU7QUFDbkMsQ0FBQztBQUVNLFNBQVMsYUFBYSxDQUFFLE1BQWMsRUFBRSxRQUFrQjtJQUMvRCxJQUFJLE9BQU8sR0FBRyxFQUFFO0lBQ2hCLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDVCxNQUFNLFNBQVMsR0FBRyxXQUFXLENBQUMsR0FBRyxFQUFFO1FBQ2pDLE9BQU8sSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsQixDQUFDLElBQUksQ0FBQztRQUNOLElBQUssQ0FBQyxJQUFJLE1BQU0sQ0FBQyxNQUFNO1lBQUcsYUFBYSxDQUFDLFNBQVMsQ0FBQztJQUNwRCxDQUFDLEVBQUUsSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7QUFDMUIsQ0FBQzs7Ozs7Ozs7Ozs7O0FDL0ZELGUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5kZXNjcmlwdG9yIHtcXG4gIG1hcmdpbjogMCA1ZW07XFxuICB3aWR0aDogMjVlbTtcXG59XFxuLmRlc2NyaXB0b3JfX2JhY2tncm91bmQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZm9udC1zaXplOiA0ZW07XFxuICBmb250LWZhbWlseTogQ2Fpcm87XFxuICBjb2xvcjogdmFyKC0tZ3JheS0yMDApO1xcbiAgei1pbmRleDogLTE7XFxuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XFxufVxcbi5kZXNjcmlwdG9yX19uYW1lIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgaGVpZ2h0OiA0ZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmRlc2NyaXB0b3JfX2Rlc2NyaXB0aW9uIHtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBtYXJnaW4tYm90dG9tOiAyZW07XFxufVxcbi5kZXNjcmlwdG9yX19mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5kZXNjcmlwdG9yX19idXktYnRuIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYXktMzAwKTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgd2lkdGg6IDdlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmRlc2NyaXB0b3JfX3ByaWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBDYWlybztcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgaGVpZ2h0OiA0NXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDBweCAwLjVlbTtcXG59XFxuXFxuQGtleWZyYW1lcyB0eXBpbmcge1xcbiAgMCUge1xcbiAgICB3aWR0aDogMDtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3NyYy9jb21wb25lbnRzL2Rlc2NyaXB0b3IvZGVzY3JpcHRvci5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7QUFDSjtBQUNJO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUNSO0FBRUk7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUFSO0FBR0k7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FBRFI7QUFJSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQUZSO0FBS0k7RUFDSSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUhSO0FBTUk7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFKUjs7QUFRQTtFQUNJO0lBQ0ksUUFBQTtFQUxOO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmRlc2NyaXB0b3Ige1xcclxcbiAgICBtYXJnaW46IDAgNWVtO1xcclxcbiAgICB3aWR0aDogMjVlbTtcXHJcXG4gICAgXFxyXFxuICAgICZfX2JhY2tncm91bmQge1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgZm9udC1zaXplOiA0ZW07XFxyXFxuICAgICAgICBmb250LWZhbWlseTogQ2Fpcm87XFxyXFxuICAgICAgICBjb2xvcjogdmFyKC0tZ3JheS0yMDApO1xcclxcbiAgICAgICAgei1pbmRleDogLTE7XFxyXFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fbmFtZSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDJlbTtcXHJcXG4gICAgICAgIGhlaWdodDogNGVtO1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fZGVzY3JpcHRpb24ge1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19mb290ZXIge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fYnV5LWJ0biB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmF5LTMwMCk7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgICAgIHdpZHRoOiA3ZW07XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fcHJpY2Uge1xcclxcbiAgICAgICAgZm9udC1mYW1pbHk6IENhaXJvO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyZW07XFxyXFxuICAgICAgICBoZWlnaHQ6IDQ1cHg7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIG1hcmdpbjogMHB4IDAuNWVtO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgdHlwaW5nIHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgICAgd2lkdGg6IDA7XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5uYXZiYXIge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLm5hdmJhciA+IGRpdjpudGgtY2hpbGQoMikge1xcbiAgZmxleC1ncm93OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBkaXJlY3Rpb246IGx0cjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5uYXZiYXJfX2xvZ28ge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4ubmF2YmFyX19sb2dvIGltZyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5uYXZiYXJfX21lbnUge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgd2lkdGg6IDUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4ubmF2YmFyX19tZW51OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXktMTAwKTtcXG59XFxuLm5hdmJhcl9fc2VjdGlvbnMge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ubmF2YmFyX19zZWN0aW9ucyBzcGFuIHtcXG4gIG1hcmdpbi1yaWdodDogMTVweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm5hdmJhcl9fc2VjdGlvbnM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgaGVpZ2h0OiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5LTUwMCk7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEwMCU7XFxuICB6LWluZGV4OiAtMTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgd2lkdGg6IHZhcigtLXdpZHRoKTtcXG4gIGxlZnQ6IHZhcigtLWxlZnQpO1xcbn1cXG4ubmF2YmFyX19hY3Rpb25zIHtcXG4gIG1hcmdpbjogMCA1ZW07XFxufVxcbi5uYXZiYXJfX2FjdGlvbnMgc3BhbiB7XFxuICBoZWlnaHQ6IDQ1cHg7XFxuICB3aWR0aDogNDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXktMzAwKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3NyYy9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUFDSjtBQUNJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQUNSO0FBRUk7RUFDSSxZQUFBO0FBQVI7QUFDUTtFQUNJLFlBQUE7QUFDWjtBQUdJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FBRFI7QUFFUTtFQUNJLGlDQUFBO0FBQVo7QUFJSTtFQUNJLGtCQUFBO0FBRlI7QUFHUTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFEWjtBQUdRO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBRFo7QUFLSTtFQUNJLGFBQUE7QUFIUjtBQUlRO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBRlpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm5hdmJhciB7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcclxcbiAgICAmID4gZGl2Om50aC1jaGlsZCgyKSB7XFxyXFxuICAgICAgICBmbGV4LWdyb3c6IDE7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgICAgIGRpcmVjdGlvbjogbHRyO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19sb2dvIHtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgIGltZyB7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX21lbnUge1xcclxcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICAgICAgd2lkdGg6IDUwcHg7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC41cztcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5LTEwMClcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19zZWN0aW9ucyB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgICBzcGFuIHtcXHJcXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAmOmJlZm9yZSB7XFxyXFxuICAgICAgICAgICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS01MDApO1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgICAgdG9wOiAxMDAlO1xcclxcbiAgICAgICAgICAgIHotaW5kZXg6IC0xO1xcclxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xcclxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgICAgICAgICB3aWR0aDogdmFyKC0td2lkdGgpO1xcclxcbiAgICAgICAgICAgIGxlZnQ6IHZhcigtLWxlZnQpO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2FjdGlvbnMge1xcclxcbiAgICAgICAgbWFyZ2luOiAwIDVlbTtcXHJcXG4gICAgICAgIHNwYW4ge1xcclxcbiAgICAgICAgICAgIGhlaWdodDogNDVweDtcXHJcXG4gICAgICAgICAgICB3aWR0aDogNDVweDtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5LTMwMCk7XFxyXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXHJcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zY3JvbGxfX2JhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5LTMwMCk7XFxuICB3aWR0aDogNXB4O1xcbiAgaGVpZ2h0OiA0MHZoO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnNjcm9sbF9fdGh1bWJuYWlsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXktNDAwKTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XFxufVxcblxcbi5zY3JvbGxfX2ZyYWN0aW9uIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ2Fpcm9cXFwiO1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBoZWlnaHQ6IDI1dmg7XFxuICBjb2xvcjogdmFyKC0tZ3JheS00MDApO1xcbn1cXG4uc2Nyb2xsX19udW1lcmF0b3Ige1xcbiAgZm9udC1zaXplOiAzZW07XFxuICBjb2xvcjogdmFyKC0tZ3JheS01MDApO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL2NvbXBvbmVudHMvc2Nyb2xsL3Njcm9sbC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVJO0VBQ0ksaUNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBRFI7QUFHSTtFQUNJLGlDQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUFEUjs7QUFNSTtFQUNJLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQUhSO0FBS0k7RUFDSSxjQUFBO0VBQ0Esc0JBQUE7QUFIUlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvLyBTY3JvbGwgQmFyXFxyXFxuLnNjcm9sbCB7XFxyXFxuICAgICZfX2JhciB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5LTMwMCk7XFxyXFxuICAgICAgICB3aWR0aDogNXB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiA0MHZoO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuMnM7XFxyXFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB9XFxyXFxuICAgICZfX3RodW1ibmFpbCB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5LTQwMCk7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuMnM7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLnNjcm9sbCB7XFxyXFxuICAgICZfX2ZyYWN0aW9uIHtcXHJcXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcXFwiQ2Fpcm9cXFwiO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyZW07XFxyXFxuICAgICAgICBoZWlnaHQ6IDI1dmg7XFxyXFxuICAgICAgICBjb2xvcjogdmFyKC0tZ3JheS00MDApO1xcclxcbiAgICB9XFxyXFxuICAgICZfX251bWVyYXRvciB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDNlbTtcXHJcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1ncmF5LTUwMCk7XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zbGlkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAzNWVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnNsaWRlcl9fcHJldmlvdXMtYnRuLCAuc2xpZGVyX19uZXh0LWJ0biB7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXktMzAwKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5zbGlkZXJfX3NsaWRlcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1ncm93OiAxO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luOiAwcHggMmVtO1xcbn1cXG4uc2xpZGVyX19zbGlkZSB7XFxuICB3aWR0aDogNjVweDtcXG4gIGhlaWdodDogNjVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXktMzAwKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi5zbGlkZXJfX3NsaWRlLS1jdXJyZW50IHtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWdyYXktNTAwKTtcXG59XFxuLnNsaWRlcl9fc2xpZGUgaW1nIHtcXG4gIHdpZHRoOiA5MHB4O1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTM1ZGVnKSBzY2FsZSgxLjEpO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL2NvbXBvbmVudHMvc2xpZGVyL3NsaWRlci5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBRUksYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUFKO0FBRUk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFBUjtBQUdJO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUFEUjtBQUlJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7QUFGUjtBQUdRO0VBQ0ksaUNBQUE7QUFEWjtBQUdRO0VBQ0ksV0FBQTtFQUNBLG9DQUFBO0VBQ0Esd0JBQUE7QUFEWlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuc2xpZGVyIHtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgd2lkdGg6IDM1ZW07XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgICZfX3ByZXZpb3VzLWJ0biwgJl9fbmV4dC1idG4ge1xcclxcbiAgICAgICAgd2lkdGg6IDUwcHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5LTMwMCk7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX3NsaWRlcyB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC1ncm93OiAxO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICAgICAgbWFyZ2luOiAwcHggMmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX3NsaWRlIHtcXHJcXG4gICAgICAgIHdpZHRoOiA2NXB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiA2NXB4O1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS0zMDApO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuMnM7XFxyXFxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICAgICAgJi0tY3VycmVudCB7XFxyXFxuICAgICAgICAgICAgYm9yZGVyIDogM3B4IHNvbGlkIHZhcigtLWdyYXktNTAwKTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIGltZyB7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDkwcHg7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTM1ZGVnKSBzY2FsZSgxLjEpO1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnZpZXcge1xcbiAgd2lkdGg6IDIwZW07XFxuICBoZWlnaHQ6IDIwZW07XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmF5LTMwMCk7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiAyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi52aWV3X19pbWFnZSB7XFxuICB3aWR0aDogMTVlbTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKC0zMGRlZykgc2NhbGUoMS43KTtcXG4gIG1hcmdpbi1yaWdodDogMmVtO1xcbiAgbWFyZ2luLXRvcDogLTRlbTtcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coNXB4IDIwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMykpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL2NvbXBvbmVudHMvdmlldy92aWV3LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNKO0FBQUk7RUFDSSxXQUFBO0VBQ0Esb0NBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscURBQUE7QUFFUlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIudmlldyB7XFxyXFxuICAgIHdpZHRoOiAyMGVtO1xcclxcbiAgICBoZWlnaHQ6IDIwZW07XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWdyYXktMzAwKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMmVtO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgJl9faW1hZ2Uge1xcclxcbiAgICAgICAgd2lkdGg6IDE1ZW07XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzBkZWcpIHNjYWxlKDEuNyk7XFxyXFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDJlbTtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IC00ZW07XFxyXFxuICAgICAgICBmaWx0ZXIgOiBkcm9wLXNoYWRvdyg1cHggMjBweCAxMHB4IHJnYmEoMCwwLDAsMC4zKSk7XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7XFxuOnJvb3Qge1xcbiAgLS1ncmF5LTEwMDogI0Y4RjhGODtcXG4gIC0tZ3JheS0yMDA6ICNFRUVFRUU7XFxuICAtLWdyYXktMzAwOiAjRTZFNkU2O1xcbiAgLS1ncmF5LTQwMDogI0M4QzhDODtcXG4gIC0tZ3JheS01MDA6ICM0QjRCNEI7XFxuICAtLWdyYXktNjAwOiAjMUUxRTFFO1xcbn1cXG5cXG5odG1sIHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIlN3aXNzcmEg4pieXFxcIjtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW46IDBweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jYXBwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1ncm93OiAxO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL2luZGV4LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBRUo7O0FBQ0E7RUFDSSxZQUFBO0FBRUo7O0FBQ0E7RUFDSSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtBQUVKOztBQUNBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUVKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gICAgLS1ncmF5LTEwMCA6ICNGOEY4Rjg7XFxyXFxuICAgIC0tZ3JheS0yMDAgOiAjRUVFRUVFO1xcclxcbiAgICAtLWdyYXktMzAwIDogI0U2RTZFNjtcXHJcXG4gICAgLS1ncmF5LTQwMCA6ICNDOEM4Qzg7XFxyXFxuICAgIC0tZ3JheS01MDAgOiAjNEI0QjRCO1xcclxcbiAgICAtLWdyYXktNjAwIDogIzFFMUUxRTtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiU3dpc3NyYSDimJ5cXFwiO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgbWFyZ2luOiAwcHg7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbiNhcHAge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmbGV4LWdyb3c6IDE7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCIndXNlIHN0cmljdCc7XG5cbnZhciBwdWdfaGFzX293bl9wcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogTWVyZ2UgdHdvIGF0dHJpYnV0ZSBvYmplY3RzIGdpdmluZyBwcmVjZWRlbmNlXG4gKiB0byB2YWx1ZXMgaW4gb2JqZWN0IGBiYC4gQ2xhc3NlcyBhcmUgc3BlY2lhbC1jYXNlZFxuICogYWxsb3dpbmcgZm9yIGFycmF5cyBhbmQgbWVyZ2luZy9qb2luaW5nIGFwcHJvcHJpYXRlbHlcbiAqIHJlc3VsdGluZyBpbiBhIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYVxuICogQHBhcmFtIHtPYmplY3R9IGJcbiAqIEByZXR1cm4ge09iamVjdH0gYVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZXhwb3J0cy5tZXJnZSA9IHB1Z19tZXJnZTtcbmZ1bmN0aW9uIHB1Z19tZXJnZShhLCBiKSB7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgdmFyIGF0dHJzID0gYVswXTtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGF0dHJzID0gcHVnX21lcmdlKGF0dHJzLCBhW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIGF0dHJzO1xuICB9XG5cbiAgZm9yICh2YXIga2V5IGluIGIpIHtcbiAgICBpZiAoa2V5ID09PSAnY2xhc3MnKSB7XG4gICAgICB2YXIgdmFsQSA9IGFba2V5XSB8fCBbXTtcbiAgICAgIGFba2V5XSA9IChBcnJheS5pc0FycmF5KHZhbEEpID8gdmFsQSA6IFt2YWxBXSkuY29uY2F0KGJba2V5XSB8fCBbXSk7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICdzdHlsZScpIHtcbiAgICAgIHZhciB2YWxBID0gcHVnX3N0eWxlKGFba2V5XSk7XG4gICAgICB2YWxBID0gdmFsQSAmJiB2YWxBW3ZhbEEubGVuZ3RoIC0gMV0gIT09ICc7JyA/IHZhbEEgKyAnOycgOiB2YWxBO1xuICAgICAgdmFyIHZhbEIgPSBwdWdfc3R5bGUoYltrZXldKTtcbiAgICAgIHZhbEIgPSB2YWxCICYmIHZhbEJbdmFsQi5sZW5ndGggLSAxXSAhPT0gJzsnID8gdmFsQiArICc7JyA6IHZhbEI7XG4gICAgICBhW2tleV0gPSB2YWxBICsgdmFsQjtcbiAgICB9IGVsc2Uge1xuICAgICAgYVtrZXldID0gYltrZXldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhO1xufVxuXG4vKipcbiAqIFByb2Nlc3MgYXJyYXksIG9iamVjdCwgb3Igc3RyaW5nIGFzIGEgc3RyaW5nIG9mIGNsYXNzZXMgZGVsaW1pdGVkIGJ5IGEgc3BhY2UuXG4gKlxuICogSWYgYHZhbGAgaXMgYW4gYXJyYXksIGFsbCBtZW1iZXJzIG9mIGl0IGFuZCBpdHMgc3ViYXJyYXlzIGFyZSBjb3VudGVkIGFzXG4gKiBjbGFzc2VzLiBJZiBgZXNjYXBpbmdgIGlzIGFuIGFycmF5LCB0aGVuIHdoZXRoZXIgb3Igbm90IHRoZSBpdGVtIGluIGB2YWxgIGlzXG4gKiBlc2NhcGVkIGRlcGVuZHMgb24gdGhlIGNvcnJlc3BvbmRpbmcgaXRlbSBpbiBgZXNjYXBpbmdgLiBJZiBgZXNjYXBpbmdgIGlzXG4gKiBub3QgYW4gYXJyYXksIG5vIGVzY2FwaW5nIGlzIGRvbmUuXG4gKlxuICogSWYgYHZhbGAgaXMgYW4gb2JqZWN0LCBhbGwgdGhlIGtleXMgd2hvc2UgdmFsdWUgaXMgdHJ1dGh5IGFyZSBjb3VudGVkIGFzXG4gKiBjbGFzc2VzLiBObyBlc2NhcGluZyBpcyBkb25lLlxuICpcbiAqIElmIGB2YWxgIGlzIGEgc3RyaW5nLCBpdCBpcyBjb3VudGVkIGFzIGEgY2xhc3MuIE5vIGVzY2FwaW5nIGlzIGRvbmUuXG4gKlxuICogQHBhcmFtIHsoQXJyYXkuPHN0cmluZz58T2JqZWN0LjxzdHJpbmcsIGJvb2xlYW4+fHN0cmluZyl9IHZhbFxuICogQHBhcmFtIHs/QXJyYXkuPHN0cmluZz59IGVzY2FwaW5nXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmV4cG9ydHMuY2xhc3NlcyA9IHB1Z19jbGFzc2VzO1xuZnVuY3Rpb24gcHVnX2NsYXNzZXNfYXJyYXkodmFsLCBlc2NhcGluZykge1xuICB2YXIgY2xhc3NTdHJpbmcgPSAnJyxcbiAgICBjbGFzc05hbWUsXG4gICAgcGFkZGluZyA9ICcnLFxuICAgIGVzY2FwZUVuYWJsZWQgPSBBcnJheS5pc0FycmF5KGVzY2FwaW5nKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YWwubGVuZ3RoOyBpKyspIHtcbiAgICBjbGFzc05hbWUgPSBwdWdfY2xhc3Nlcyh2YWxbaV0pO1xuICAgIGlmICghY2xhc3NOYW1lKSBjb250aW51ZTtcbiAgICBlc2NhcGVFbmFibGVkICYmIGVzY2FwaW5nW2ldICYmIChjbGFzc05hbWUgPSBwdWdfZXNjYXBlKGNsYXNzTmFtZSkpO1xuICAgIGNsYXNzU3RyaW5nID0gY2xhc3NTdHJpbmcgKyBwYWRkaW5nICsgY2xhc3NOYW1lO1xuICAgIHBhZGRpbmcgPSAnICc7XG4gIH1cbiAgcmV0dXJuIGNsYXNzU3RyaW5nO1xufVxuZnVuY3Rpb24gcHVnX2NsYXNzZXNfb2JqZWN0KHZhbCkge1xuICB2YXIgY2xhc3NTdHJpbmcgPSAnJyxcbiAgICBwYWRkaW5nID0gJyc7XG4gIGZvciAodmFyIGtleSBpbiB2YWwpIHtcbiAgICBpZiAoa2V5ICYmIHZhbFtrZXldICYmIHB1Z19oYXNfb3duX3Byb3BlcnR5LmNhbGwodmFsLCBrZXkpKSB7XG4gICAgICBjbGFzc1N0cmluZyA9IGNsYXNzU3RyaW5nICsgcGFkZGluZyArIGtleTtcbiAgICAgIHBhZGRpbmcgPSAnICc7XG4gICAgfVxuICB9XG4gIHJldHVybiBjbGFzc1N0cmluZztcbn1cbmZ1bmN0aW9uIHB1Z19jbGFzc2VzKHZhbCwgZXNjYXBpbmcpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgIHJldHVybiBwdWdfY2xhc3Nlc19hcnJheSh2YWwsIGVzY2FwaW5nKTtcbiAgfSBlbHNlIGlmICh2YWwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gcHVnX2NsYXNzZXNfb2JqZWN0KHZhbCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHZhbCB8fCAnJztcbiAgfVxufVxuXG4vKipcbiAqIENvbnZlcnQgb2JqZWN0IG9yIHN0cmluZyB0byBhIHN0cmluZyBvZiBDU1Mgc3R5bGVzIGRlbGltaXRlZCBieSBhIHNlbWljb2xvbi5cbiAqXG4gKiBAcGFyYW0geyhPYmplY3QuPHN0cmluZywgc3RyaW5nPnxzdHJpbmcpfSB2YWxcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXG5leHBvcnRzLnN0eWxlID0gcHVnX3N0eWxlO1xuZnVuY3Rpb24gcHVnX3N0eWxlKHZhbCkge1xuICBpZiAoIXZhbCkgcmV0dXJuICcnO1xuICBpZiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICB2YXIgb3V0ID0gJyc7XG4gICAgZm9yICh2YXIgc3R5bGUgaW4gdmFsKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgaWYgKHB1Z19oYXNfb3duX3Byb3BlcnR5LmNhbGwodmFsLCBzdHlsZSkpIHtcbiAgICAgICAgb3V0ID0gb3V0ICsgc3R5bGUgKyAnOicgKyB2YWxbc3R5bGVdICsgJzsnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb3V0O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB2YWwgKyAnJztcbiAgfVxufVxuXG4vKipcbiAqIFJlbmRlciB0aGUgZ2l2ZW4gYXR0cmlidXRlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWxcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gZXNjYXBlZFxuICogQHBhcmFtIHtCb29sZWFufSB0ZXJzZVxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5leHBvcnRzLmF0dHIgPSBwdWdfYXR0cjtcbmZ1bmN0aW9uIHB1Z19hdHRyKGtleSwgdmFsLCBlc2NhcGVkLCB0ZXJzZSkge1xuICBpZiAoXG4gICAgdmFsID09PSBmYWxzZSB8fFxuICAgIHZhbCA9PSBudWxsIHx8XG4gICAgKCF2YWwgJiYgKGtleSA9PT0gJ2NsYXNzJyB8fCBrZXkgPT09ICdzdHlsZScpKVxuICApIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgaWYgKHZhbCA9PT0gdHJ1ZSkge1xuICAgIHJldHVybiAnICcgKyAodGVyc2UgPyBrZXkgOiBrZXkgKyAnPVwiJyArIGtleSArICdcIicpO1xuICB9XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbDtcbiAgaWYgKFxuICAgICh0eXBlID09PSAnb2JqZWN0JyB8fCB0eXBlID09PSAnZnVuY3Rpb24nKSAmJlxuICAgIHR5cGVvZiB2YWwudG9KU09OID09PSAnZnVuY3Rpb24nXG4gICkge1xuICAgIHZhbCA9IHZhbC50b0pTT04oKTtcbiAgfVxuICBpZiAodHlwZW9mIHZhbCAhPT0gJ3N0cmluZycpIHtcbiAgICB2YWwgPSBKU09OLnN0cmluZ2lmeSh2YWwpO1xuICAgIGlmICghZXNjYXBlZCAmJiB2YWwuaW5kZXhPZignXCInKSAhPT0gLTEpIHtcbiAgICAgIHJldHVybiAnICcgKyBrZXkgKyBcIj0nXCIgKyB2YWwucmVwbGFjZSgvJy9nLCAnJiMzOTsnKSArIFwiJ1wiO1xuICAgIH1cbiAgfVxuICBpZiAoZXNjYXBlZCkgdmFsID0gcHVnX2VzY2FwZSh2YWwpO1xuICByZXR1cm4gJyAnICsga2V5ICsgJz1cIicgKyB2YWwgKyAnXCInO1xufVxuXG4vKipcbiAqIFJlbmRlciB0aGUgZ2l2ZW4gYXR0cmlidXRlcyBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHBhcmFtIHtPYmplY3R9IHRlcnNlIHdoZXRoZXIgdG8gdXNlIEhUTUw1IHRlcnNlIGJvb2xlYW4gYXR0cmlidXRlc1xuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5leHBvcnRzLmF0dHJzID0gcHVnX2F0dHJzO1xuZnVuY3Rpb24gcHVnX2F0dHJzKG9iaiwgdGVyc2UpIHtcbiAgdmFyIGF0dHJzID0gJyc7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChwdWdfaGFzX293bl9wcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIHZhbCA9IG9ialtrZXldO1xuXG4gICAgICBpZiAoJ2NsYXNzJyA9PT0ga2V5KSB7XG4gICAgICAgIHZhbCA9IHB1Z19jbGFzc2VzKHZhbCk7XG4gICAgICAgIGF0dHJzID0gcHVnX2F0dHIoa2V5LCB2YWwsIGZhbHNlLCB0ZXJzZSkgKyBhdHRycztcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAoJ3N0eWxlJyA9PT0ga2V5KSB7XG4gICAgICAgIHZhbCA9IHB1Z19zdHlsZSh2YWwpO1xuICAgICAgfVxuICAgICAgYXR0cnMgKz0gcHVnX2F0dHIoa2V5LCB2YWwsIGZhbHNlLCB0ZXJzZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGF0dHJzO1xufVxuXG4vKipcbiAqIEVzY2FwZSB0aGUgZ2l2ZW4gc3RyaW5nIG9mIGBodG1sYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaHRtbFxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxudmFyIHB1Z19tYXRjaF9odG1sID0gL1tcIiY8Pl0vO1xuZXhwb3J0cy5lc2NhcGUgPSBwdWdfZXNjYXBlO1xuZnVuY3Rpb24gcHVnX2VzY2FwZShfaHRtbCkge1xuICB2YXIgaHRtbCA9ICcnICsgX2h0bWw7XG4gIHZhciByZWdleFJlc3VsdCA9IHB1Z19tYXRjaF9odG1sLmV4ZWMoaHRtbCk7XG4gIGlmICghcmVnZXhSZXN1bHQpIHJldHVybiBfaHRtbDtcblxuICB2YXIgcmVzdWx0ID0gJyc7XG4gIHZhciBpLCBsYXN0SW5kZXgsIGVzY2FwZTtcbiAgZm9yIChpID0gcmVnZXhSZXN1bHQuaW5kZXgsIGxhc3RJbmRleCA9IDA7IGkgPCBodG1sLmxlbmd0aDsgaSsrKSB7XG4gICAgc3dpdGNoIChodG1sLmNoYXJDb2RlQXQoaSkpIHtcbiAgICAgIGNhc2UgMzQ6XG4gICAgICAgIGVzY2FwZSA9ICcmcXVvdDsnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzg6XG4gICAgICAgIGVzY2FwZSA9ICcmYW1wOyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA2MDpcbiAgICAgICAgZXNjYXBlID0gJyZsdDsnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNjI6XG4gICAgICAgIGVzY2FwZSA9ICcmZ3Q7JztcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGxhc3RJbmRleCAhPT0gaSkgcmVzdWx0ICs9IGh0bWwuc3Vic3RyaW5nKGxhc3RJbmRleCwgaSk7XG4gICAgbGFzdEluZGV4ID0gaSArIDE7XG4gICAgcmVzdWx0ICs9IGVzY2FwZTtcbiAgfVxuICBpZiAobGFzdEluZGV4ICE9PSBpKSByZXR1cm4gcmVzdWx0ICsgaHRtbC5zdWJzdHJpbmcobGFzdEluZGV4LCBpKTtcbiAgZWxzZSByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFJlLXRocm93IHRoZSBnaXZlbiBgZXJyYCBpbiBjb250ZXh0IHRvIHRoZVxuICogdGhlIHB1ZyBpbiBgZmlsZW5hbWVgIGF0IHRoZSBnaXZlbiBgbGluZW5vYC5cbiAqXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnJcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWxlbmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IGxpbmVub1xuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBvcmlnaW5hbCBzb3VyY2VcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMucmV0aHJvdyA9IHB1Z19yZXRocm93O1xuZnVuY3Rpb24gcHVnX3JldGhyb3coZXJyLCBmaWxlbmFtZSwgbGluZW5vLCBzdHIpIHtcbiAgaWYgKCEoZXJyIGluc3RhbmNlb2YgRXJyb3IpKSB0aHJvdyBlcnI7XG4gIGlmICgodHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyB8fCAhZmlsZW5hbWUpICYmICFzdHIpIHtcbiAgICBlcnIubWVzc2FnZSArPSAnIG9uIGxpbmUgJyArIGxpbmVubztcbiAgICB0aHJvdyBlcnI7XG4gIH1cbiAgdHJ5IHtcbiAgICBzdHIgPSBzdHIgfHwgcmVxdWlyZSgnZnMnKS5yZWFkRmlsZVN5bmMoZmlsZW5hbWUsICd1dGY4Jyk7XG4gIH0gY2F0Y2ggKGV4KSB7XG4gICAgcHVnX3JldGhyb3coZXJyLCBudWxsLCBsaW5lbm8pO1xuICB9XG4gIHZhciBjb250ZXh0ID0gMyxcbiAgICBsaW5lcyA9IHN0ci5zcGxpdCgnXFxuJyksXG4gICAgc3RhcnQgPSBNYXRoLm1heChsaW5lbm8gLSBjb250ZXh0LCAwKSxcbiAgICBlbmQgPSBNYXRoLm1pbihsaW5lcy5sZW5ndGgsIGxpbmVubyArIGNvbnRleHQpO1xuXG4gIC8vIEVycm9yIGNvbnRleHRcbiAgdmFyIGNvbnRleHQgPSBsaW5lc1xuICAgIC5zbGljZShzdGFydCwgZW5kKVxuICAgIC5tYXAoZnVuY3Rpb24obGluZSwgaSkge1xuICAgICAgdmFyIGN1cnIgPSBpICsgc3RhcnQgKyAxO1xuICAgICAgcmV0dXJuIChjdXJyID09IGxpbmVubyA/ICcgID4gJyA6ICcgICAgJykgKyBjdXJyICsgJ3wgJyArIGxpbmU7XG4gICAgfSlcbiAgICAuam9pbignXFxuJyk7XG5cbiAgLy8gQWx0ZXIgZXhjZXB0aW9uIG1lc3NhZ2VcbiAgZXJyLnBhdGggPSBmaWxlbmFtZTtcbiAgdHJ5IHtcbiAgICBlcnIubWVzc2FnZSA9XG4gICAgICAoZmlsZW5hbWUgfHwgJ1B1ZycpICtcbiAgICAgICc6JyArXG4gICAgICBsaW5lbm8gK1xuICAgICAgJ1xcbicgK1xuICAgICAgY29udGV4dCArXG4gICAgICAnXFxuXFxuJyArXG4gICAgICBlcnIubWVzc2FnZTtcbiAgfSBjYXRjaCAoZSkge31cbiAgdGhyb3cgZXJyO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwidmFyIHB1ZyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3B1Zy1ydW50aW1lL2luZGV4LmpzXCIpO1xuXG5mdW5jdGlvbiB0ZW1wbGF0ZShsb2NhbHMpIHt2YXIgcHVnX2h0bWwgPSBcIlwiLCBwdWdfbWl4aW5zID0ge30sIHB1Z19pbnRlcnA7cHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ2RpdiBjbGFzcz1cXFwiZGVzY3JpcHRvcl9fbmFtZVxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiZGVzY3JpcHRvcl9fYmFja2dyb3VuZFxcXCJcXHUwMDNFTmlrZVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJkZXNjcmlwdG9yX19kZXNjcmlwdGlvblxcXCJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiZGVzY3JpcHRvcl9fZm9vdGVyXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJkZXNjcmlwdG9yX19idXktYnRuXFxcIlxcdTAwM0XYpdi02KrYsdmKINin2YTYp9mGXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiZGVzY3JpcHRvcl9fcHJpY2VcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDc3ZnIHhtbG5zPVxcXCJodHRwOlxcdTAwMkZcXHUwMDJGd3d3LnczLm9yZ1xcdTAwMkYyMDAwXFx1MDAyRnN2Z1xcXCIgd2lkdGg9XFxcIjI0XFxcIiBoZWlnaHQ9XFxcIjI0XFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHN0cm9rZT1cXFwiY3VycmVudENvbG9yXFxcIiBzdHJva2Utd2lkdGg9XFxcIjJcXFwiIHN0cm9rZS1saW5lY2FwPVxcXCJyb3VuZFxcXCIgc3Ryb2tlLWxpbmVqb2luPVxcXCJyb3VuZFxcXCIgY2xhc3M9XFxcImZlYXRoZXIgZmVhdGhlci1kb2xsYXItc2lnblxcXCJcXHUwMDNFXFx1MDAzQ2xpbmUgeDE9XFxcIjEyXFxcIiB5MT1cXFwiMVxcXCIgeDI9XFxcIjEyXFxcIiB5Mj1cXFwiMjNcXFwiXFx1MDAzRVxcdTAwM0NcXHUwMDJGbGluZVxcdTAwM0VcXHUwMDNDcGF0aCBkPVxcXCJNMTcgNUg5LjVhMy41IDMuNSAwIDAgMCAwIDdoNWEzLjUgMy41IDAgMCAxIDAgN0g2XFxcIlxcdTAwM0VcXHUwMDNDXFx1MDAyRnBhdGhcXHUwMDNFXFx1MDAzQ1xcdTAwMkZzdmdcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXCI7O3JldHVybiBwdWdfaHRtbDt9O1xubW9kdWxlLmV4cG9ydHMgPSB0ZW1wbGF0ZTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Rlc2NyaXB0b3Iuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0ICcuL2Rlc2NyaXB0b3Iuc2NzcydcclxuaW1wb3J0IGh0bWwgZnJvbSAnLi9kZXNjcmlwdG9yLnB1Zyc7XHJcbmltcG9ydCB7IGFuaW1hdGVDb3VudGluZyB9IGZyb20gJy4uLy4uL3V0aWxzJ1xyXG5jbGFzcyBOYXZiYXIgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcblxyXG4gICAgZ2V0IGRlc2NyaXB0b3JfX25hbWUgKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnF1ZXJ5U2VsZWN0b3IoJy5kZXNjcmlwdG9yX19uYW1lIHNwYW4nKSBhcyBIVE1MRWxlbWVudFxyXG4gICAgfVxyXG5cclxuICAgIGdldCBkZXNjcmlwdG9yX19wcmljZSAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucXVlcnlTZWxlY3RvcignLmRlc2NyaXB0b3JfX3ByaWNlIHNwYW4nKSBhcyBIVE1MRWxlbWVudFxyXG4gICAgfVxyXG5cclxuICAgIGdldCBkZXNjcmlwdG9yX19kZXNjcmlwdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucXVlcnlTZWxlY3RvcihcIi5kZXNjcmlwdG9yX19kZXNjcmlwdGlvblwiKSBhcyBIVE1MRWxlbWVudFxyXG4gICAgfVxyXG5cclxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgICAgIHRoaXMuaW5uZXJIVE1MID0gaHRtbCgpO1xyXG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCggJ2Rlc2NyaXB0b3InIClcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVWaWV3KClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgc3VwZXIoKSB9XHJcblxyXG4gICAgdXBkYXRlVmlldyAoKSB7XHJcbiAgICAgICAgbGV0IGxhc3RQcmljZSA9IDBcclxuICAgICAgICB3aW5kb3cuc3RvcmUucHJvZHVjdHMuJG9uKCdzZXQnLCAoKSA9PiBsYXN0UHJpY2UgPSAwKVxyXG5cclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgLy8gU2V0IE5hbWVcclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgd2luZG93LnN0b3JlLnByb2R1Y3QuJG9uKFwidXBkYXRlOm5hbWVcIiwgKG5hbWU6IHN0cmluZykgPT4gdGhpcy5kZXNjcmlwdG9yX19uYW1lLmlubmVyVGV4dCA9IG5hbWUpO1xyXG5cclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgLy8gU2V0IFByaWNlXHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIHdpbmRvdy5zdG9yZS5wcm9kdWN0LiRvbigndXBkYXRlOnByaWNlJywgKHByaWNlOiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5kZXNjcmlwdG9yX19wcmljZS5pbm5lclRleHQgPSBTdHJpbmcocHJpY2UpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAvLyBTZXQgRGVzY3JpcHRpb25cclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgd2luZG93LnN0b3JlLnByb2R1Y3QuJG9uKFwidXBkYXRlOmRlc2NyaXB0aW9uXCIsIChkZXNjOiBzdHJpbmcpID0+IHRoaXMuZGVzY3JpcHRvcl9fZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gZGVzYyk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJ2LWRlc2NyaXB0b3JcIiwgTmF2YmFyKTtcclxuIiwidmFyIHB1ZyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3B1Zy1ydW50aW1lL2luZGV4LmpzXCIpO1xuXG5mdW5jdGlvbiB0ZW1wbGF0ZShsb2NhbHMpIHt2YXIgcHVnX2h0bWwgPSBcIlwiLCBwdWdfbWl4aW5zID0ge30sIHB1Z19pbnRlcnA7cHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ2RpdiBjbGFzcz1cXFwibmF2YmFyX19sb2dvXFxcIlxcdTAwM0VcXHUwMDNDaW1nIHNyYz1cXFwiLi5cXHUwMDJGaW1hZ2VzXFx1MDAyRmxvZ28ucG5nXFxcIlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm5hdmJhcl9fbWVudVxcXCJcXHUwMDNFXFx1MDAzQ3N2ZyB4bWxucz1cXFwiaHR0cDpcXHUwMDJGXFx1MDAyRnd3dy53My5vcmdcXHUwMDJGMjAwMFxcdTAwMkZzdmdcXFwiIHdpZHRoPVxcXCIyNFxcXCIgaGVpZ2h0PVxcXCIyNFxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIiBmaWxsPVxcXCJub25lXFxcIiBzdHJva2U9XFxcImN1cnJlbnRDb2xvclxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIyXFxcIiBzdHJva2UtbGluZWNhcD1cXFwicm91bmRcXFwiIHN0cm9rZS1saW5lam9pbj1cXFwicm91bmRcXFwiIGNsYXNzPVxcXCJmZWF0aGVyIGZlYXRoZXItbWVudVxcXCJcXHUwMDNFXFx1MDAzQ2xpbmUgeDE9XFxcIjNcXFwiIHkxPVxcXCIxMlxcXCIgeDI9XFxcIjIxXFxcIiB5Mj1cXFwiMTJcXFwiXFx1MDAzRVxcdTAwM0NcXHUwMDJGbGluZVxcdTAwM0VcXHUwMDNDbGluZSB4MT1cXFwiM1xcXCIgeTE9XFxcIjZcXFwiIHgyPVxcXCIyMVxcXCIgeTI9XFxcIjZcXFwiXFx1MDAzRVxcdTAwM0NcXHUwMDJGbGluZVxcdTAwM0VcXHUwMDNDbGluZSB4MT1cXFwiM1xcXCIgeTE9XFxcIjE4XFxcIiB4Mj1cXFwiMjFcXFwiIHkyPVxcXCIxOFxcXCJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZsaW5lXFx1MDAzRVxcdTAwM0NcXHUwMDJGc3ZnXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm5hdmJhcl9fYWN0aW9uc1xcXCJcXHUwMDNFXFx1MDAzQ3NwYW4gY2xhc3M9XFxcIm5hdmJhcl9fc2VhcmNoXFxcIlxcdTAwM0VcXHUwMDNDc3ZnIHhtbG5zPVxcXCJodHRwOlxcdTAwMkZcXHUwMDJGd3d3LnczLm9yZ1xcdTAwMkYyMDAwXFx1MDAyRnN2Z1xcXCIgd2lkdGg9XFxcIjI0XFxcIiBoZWlnaHQ9XFxcIjI0XFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHN0cm9rZT1cXFwiY3VycmVudENvbG9yXFxcIiBzdHJva2Utd2lkdGg9XFxcIjJcXFwiIHN0cm9rZS1saW5lY2FwPVxcXCJyb3VuZFxcXCIgc3Ryb2tlLWxpbmVqb2luPVxcXCJyb3VuZFxcXCIgY2xhc3M9XFxcImZlYXRoZXIgZmVhdGhlci1zZWFyY2hcXFwiXFx1MDAzRVxcdTAwM0NjaXJjbGUgY3g9XFxcIjExXFxcIiBjeT1cXFwiMTFcXFwiIHI9XFxcIjhcXFwiXFx1MDAzRVxcdTAwM0NcXHUwMDJGY2lyY2xlXFx1MDAzRVxcdTAwM0NsaW5lIHgxPVxcXCIyMVxcXCIgeTE9XFxcIjIxXFxcIiB4Mj1cXFwiMTYuNjVcXFwiIHkyPVxcXCIxNi42NVxcXCJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZsaW5lXFx1MDAzRVxcdTAwM0NcXHUwMDJGc3ZnXFx1MDAzRVxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDc3BhbiBjbGFzcz1cXFwibmF2YmFyX19zaG9wcGluZy1jYXJ0XFxcIlxcdTAwM0VcXHUwMDNDc3ZnIHhtbG5zPVxcXCJodHRwOlxcdTAwMkZcXHUwMDJGd3d3LnczLm9yZ1xcdTAwMkYyMDAwXFx1MDAyRnN2Z1xcXCIgd2lkdGg9XFxcIjI0XFxcIiBoZWlnaHQ9XFxcIjI0XFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHN0cm9rZT1cXFwiY3VycmVudENvbG9yXFxcIiBzdHJva2Utd2lkdGg9XFxcIjJcXFwiIHN0cm9rZS1saW5lY2FwPVxcXCJyb3VuZFxcXCIgc3Ryb2tlLWxpbmVqb2luPVxcXCJyb3VuZFxcXCIgY2xhc3M9XFxcImZlYXRoZXIgZmVhdGhlci1zaG9wcGluZy1jYXJ0XFxcIlxcdTAwM0VcXHUwMDNDY2lyY2xlIGN4PVxcXCI5XFxcIiBjeT1cXFwiMjFcXFwiIHI9XFxcIjFcXFwiXFx1MDAzRVxcdTAwM0NcXHUwMDJGY2lyY2xlXFx1MDAzRVxcdTAwM0NjaXJjbGUgY3g9XFxcIjIwXFxcIiBjeT1cXFwiMjFcXFwiIHI9XFxcIjFcXFwiXFx1MDAzRVxcdTAwM0NcXHUwMDJGY2lyY2xlXFx1MDAzRVxcdTAwM0NwYXRoIGQ9XFxcIk0xIDFoNGwyLjY4IDEzLjM5YTIgMiAwIDAgMCAyIDEuNjFoOS43MmEyIDIgMCAwIDAgMi0xLjYxTDIzIDZINlxcXCJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZwYXRoXFx1MDAzRVxcdTAwM0NcXHUwMDJGc3ZnXFx1MDAzRVxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJuYXZiYXJfX3NlY3Rpb25zXFxcIlxcdTAwM0VcXHUwMDNDc3BhbiBjbGFzcz1cXFwibmF2YmFyX19zZWN0aW9uXFxcIlxcdTAwM0XYpdi12K/Yp9ix2KfYqiDYrNiv2YrYr9ipXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NzcGFuIGNsYXNzPVxcXCJuYXZiYXJfX3NlY3Rpb25cXFwiXFx1MDAzRSDYsdis2KfZhNmKXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NzcGFuIGNsYXNzPVxcXCJuYXZiYXJfX3NlY3Rpb25cXFwiXFx1MDAzRSDZhtiz2KfYptmKXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NzcGFuIGNsYXNzPVxcXCJuYXZiYXJfX3NlY3Rpb25cXFwiXFx1MDAzRSDYo9i32YHYp9mE2YpcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ3NwYW4gY2xhc3M9XFxcIm5hdmJhcl9fc2VjdGlvblxcXCJcXHUwMDNFINiq2LTZg9mK2YTYqVxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcIjs7cmV0dXJuIHB1Z19odG1sO307XG5tb2R1bGUuZXhwb3J0cyA9IHRlbXBsYXRlOyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbmF2YmFyLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCAnLi9uYXZiYXIuc2NzcydcclxuaW1wb3J0IGh0bWwgZnJvbSAnLi9uYXZiYXIucHVnJztcclxuY2xhc3MgTmF2YmFyIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG5cclxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgIHRoaXMuaW5uZXJIVE1MID0gaHRtbCgpO1xyXG4gICAgdGhpcy5jbGFzc0xpc3QuYWRkKCAnbmF2YmFyJyApXHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gU2VjdGlvbnMgQW5pbWF0aW9uXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBjb25zdCBuYXZiYXJfX3NlY3Rpb25zID0gdGhpcy5xdWVyeVNlbGVjdG9yKCcubmF2YmFyX19zZWN0aW9ucycpIGFzIEhUTUxFbGVtZW50XHJcbiAgICBjb25zdCBzZWN0aW9uczogTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4gPSBuYXZiYXJfX3NlY3Rpb25zLnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZiYXJfX3NlY3Rpb24nKVxyXG4gICAgc2VjdGlvbnMuZm9yRWFjaCgoc2VjdGlvbjogSFRNTEVsZW1lbnQpID0+IHtcclxuICAgICAgc2VjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XHJcbiAgICAgICAgbmF2YmFyX19zZWN0aW9ucy5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tbGVmdFwiLCBzZWN0aW9uLm9mZnNldExlZnQgKyBcInB4XCIpO1xyXG4gICAgICAgIG5hdmJhcl9fc2VjdGlvbnMuc3R5bGUuc2V0UHJvcGVydHkoJy0td2lkdGgnLCBzZWN0aW9uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoICsgJ3B4JyApXHJcbiAgICAgIH0pXHJcbiAgICAgIHNlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcclxuICAgICAgICBuYXZiYXJfX3NlY3Rpb25zLnN0eWxlLnNldFByb3BlcnR5KCctLXdpZHRoJywgJzBweCcgKVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyBzdXBlcigpIH1cclxuXHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcInYtbmF2YmFyXCIsIE5hdmJhcik7XHJcbiIsInZhciBwdWcgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wdWctcnVudGltZS9pbmRleC5qc1wiKTtcblxuZnVuY3Rpb24gdGVtcGxhdGUobG9jYWxzKSB7dmFyIHB1Z19odG1sID0gXCJcIiwgcHVnX21peGlucyA9IHt9LCBwdWdfaW50ZXJwO3B1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NkaXYgY2xhc3M9XFxcInNjcm9sbF9fZnJhY3Rpb25cXFwiXFx1MDAzRVxcdTAwM0NzcGFuIGNsYXNzPVxcXCJzY3JvbGxfX251bWVyYXRvclxcXCJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NzcGFuIGNsYXNzPVxcXCJzY3JvbGxfX3NsYXNoXFxcIlxcdTAwM0VcXHUwMDJGXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NzcGFuIGNsYXNzPVxcXCJzY3JvbGxfX2Rlbm9taW5hdG9yXFxcIlxcdTAwM0VcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwic2Nyb2xsX19iYXJcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcInNjcm9sbF9fdGh1bWJuYWlsXFxcIlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcIjs7cmV0dXJuIHB1Z19odG1sO307XG5tb2R1bGUuZXhwb3J0cyA9IHRlbXBsYXRlOyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2Nyb2xsLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCAnLi9zY3JvbGwuc2NzcydcclxuaW1wb3J0IGh0bWwgZnJvbSAnLi9zY3JvbGwucHVnJztcclxuaW1wb3J0IHsgb25EcmFnRHJvcCwgcGFkIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xyXG5pbXBvcnQgeyBSZWNvcmRWYWx1ZSB9IGZyb20gJy4uLy4uL3JlY29yZGVyJztcclxuXHJcbmNsYXNzIFNjcm9sbCBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuICBudW1lcmF0b3I6IFJlY29yZFZhbHVlPG51bWJlcj4gPSBuZXcgUmVjb3JkVmFsdWUoMCwge1xyXG4gICAgc2V0IDogKHZhbHVlOiBudW1iZXIpID0+IE1hdGgubWluKE1hdGgubWF4KCB2YWx1ZSwgMCApLCB0aGlzLmRlbm9taW5hdG9yLnZhbHVlIC0gMSlcclxuICB9KTtcclxuXHJcbiAgZGVub21pbmF0b3I6IFJlY29yZFZhbHVlPG51bWJlcj4gPSBuZXcgUmVjb3JkVmFsdWUoNCk7XHJcblxyXG4gIGhlaWdodFVuaXQ6IG51bWJlciA9IDBcclxuXHJcbiAgZ2V0IHNjcm9sbF9fYmFyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucXVlcnlTZWxlY3RvcihcIi5zY3JvbGxfX2JhclwiKSBhcyBIVE1MRWxlbWVudDtcclxuICB9XHJcblxyXG4gIGdldCBzY3JvbGxfX3RodW1ibmFpbCgpIHtcclxuICAgIHJldHVybiB0aGlzLnF1ZXJ5U2VsZWN0b3IoXCIuc2Nyb2xsX190aHVtYm5haWxcIikgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBnZXQgc2Nyb2xsX19udW1lcmF0b3IoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5xdWVyeVNlbGVjdG9yKFwiLnNjcm9sbF9fbnVtZXJhdG9yXCIpIGFzIEhUTUxFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNjcm9sbF9fZGVub21pbmF0b3IoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5xdWVyeVNlbGVjdG9yKFwiLnNjcm9sbF9fZGVub21pbmF0b3JcIikgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgIHRoaXMuaW5uZXJIVE1MID0gaHRtbCgpO1xyXG4gICAgdGhpcy5jbGFzc0xpc3QuYWRkKFwic2Nyb2xsXCIpO1xyXG5cclxuICAgIHRoaXMuY29tcHV0ZWREYXRhKCk7XHJcbiAgICB0aGlzLnVwZGF0ZVZpZXcoKTtcclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIERhdGFcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgdGhpcy5udW1lcmF0b3Iuc2V0KDApO1xyXG4gICAgdGhpcy5kZW5vbWluYXRvci5zZXQod2luZG93LnN0b3JlLmdvb2RzLmxlbmd0aCk7XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBTY3JvbGwgQmFyIEZ1bmN0aW9uYWxpdHlcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgY29uc3Qgb25Nb3ZlID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgY29uc3QgeSA9IGUucGFnZVkgLSB0aGlzLnNjcm9sbF9fYmFyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcFxyXG4gICAgICB0aGlzLm51bWVyYXRvci5zZXQoIE1hdGguZmxvb3IoIHkgLyB0aGlzLmhlaWdodFVuaXQgKSApO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRHJhZ0Ryb3AodGhpcy5zY3JvbGxfX3RodW1ibmFpbCwgKCkgPT4gdHJ1ZSwgb25Nb3ZlLCAoKSA9PiB7fSk7XHJcbiAgICBcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIChlKSA9PiB7XHJcbiAgICAgIC8vIFNjcm9sbCBVcFxyXG4gICAgICBpZiAoIGUuZGVsdGFZID4gMCApIHRoaXMubnVtZXJhdG9yLnNldCggdGhpcy5udW1lcmF0b3IudmFsdWUgKyAxIClcclxuICAgICAgZWxzZSB0aGlzLm51bWVyYXRvci5zZXQoIHRoaXMubnVtZXJhdG9yLnZhbHVlIC0gMSApXHJcbiAgICB9KVxyXG5cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIGNvbXB1dGVkRGF0YSAoKSB7XHJcbiAgICB0aGlzLmRlbm9taW5hdG9yLiRvbignc2V0JywgKHZhbHVlOiBudW1iZXIpID0+IHRoaXMuaGVpZ2h0VW5pdCA9IHRoaXMuc2Nyb2xsX19iYXIub2Zmc2V0SGVpZ2h0IC8gdmFsdWUpXHJcbiAgICB0aGlzLm51bWVyYXRvci4kb24oJ3NldCcsICh2YWx1ZTogbnVtYmVyKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5zdG9yZS5wcm9kdWN0cy5zZXQod2luZG93LnN0b3JlLmdvb2RzW3ZhbHVlXSlcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICB1cGRhdGVWaWV3KCkge1xyXG4gICAgXHJcbiAgICAvLyBTZXQgU2Nyb2xsIEZyYWN0aW9uIFRleHRcclxuICAgIHRoaXMubnVtZXJhdG9yLiRvbihcclxuICAgICAgXCJzZXRcIixcclxuICAgICAgKHZhbHVlOiBudW1iZXIpID0+ICh0aGlzLnNjcm9sbF9fbnVtZXJhdG9yLmlubmVyVGV4dCA9IHBhZCh2YWx1ZSArIDEsIFN0cmluZyh0aGlzLmRlbm9taW5hdG9yLnZhbHVlKS5sZW5ndGgpKVxyXG4gICAgKTtcclxuICAgIHRoaXMuZGVub21pbmF0b3IuJG9uKFxyXG4gICAgICBcInNldFwiLFxyXG4gICAgICAodmFsdWU6IG51bWJlcikgPT4gKHRoaXMuc2Nyb2xsX19kZW5vbWluYXRvci5pbm5lclRleHQgPSBTdHJpbmcodmFsdWUpKVxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBTZXQgSGVpZ2h0IE9mIFRodW1ibmFpbFxyXG4gICAgdGhpcy5kZW5vbWluYXRvci4kb24oXCJzZXRcIiwgKHZhbHVlOiBudW1iZXIpID0+IHtcclxuICAgICAgdGhpcy5zY3JvbGxfX3RodW1ibmFpbC5zdHlsZS5oZWlnaHQgPSBgJHt0aGlzLnNjcm9sbF9fYmFyLm9mZnNldEhlaWdodCAvIHZhbHVlfXB4YFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gU2V0IFkgb2YgVGh1bWJuYWlsXHJcbiAgICB0aGlzLm51bWVyYXRvci4kb24oXHJcbiAgICAgICdzZXQnLFxyXG4gICAgICAodmFsdWU6IG51bWJlcikgPT4gKHRoaXMuc2Nyb2xsX190aHVtYm5haWwuc3R5bGUudG9wID0gdGhpcy5oZWlnaHRVbml0ICogdGhpcy5udW1lcmF0b3IudmFsdWUgKyAncHgnKVxyXG4gICAgKVxyXG5cclxuICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcInYtc2Nyb2xsXCIsIFNjcm9sbCk7XHJcbiIsInZhciBwdWcgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wdWctcnVudGltZS9pbmRleC5qc1wiKTtcblxuZnVuY3Rpb24gdGVtcGxhdGUobG9jYWxzKSB7dmFyIHB1Z19odG1sID0gXCJcIiwgcHVnX21peGlucyA9IHt9LCBwdWdfaW50ZXJwO3B1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NkaXYgY2xhc3M9XFxcInNsaWRlcl9fc2xpZGVzXFxcIlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcIjs7cmV0dXJuIHB1Z19odG1sO307XG5tb2R1bGUuZXhwb3J0cyA9IHRlbXBsYXRlOyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2xpZGVyLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCAnLi9zbGlkZXIuc2NzcydcclxuaW1wb3J0IGh0bWwgZnJvbSAnLi9zbGlkZXIucHVnJztcclxuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4uLy4uL3V0aWxzJztcclxuaW1wb3J0IHsgY3VycmVudFByb2R1Y3QsIFByb2R1Y3QgfSBmcm9tICcuLi8uLi90eXBlcyc7XHJcbmNsYXNzIFNsaWRlciBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuXHJcbiAgICBnZXQgc2xpZGVyX19zbGlkZXMgKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXJfX3NsaWRlcycpIGFzIEhUTUxFbGVtZW50XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNsaWRlcl9fc2xpZGUgKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zbGlkZXJfX3NsaWRlcyAuc2xpZGVyX19zbGlkZScpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGN1cnJlbnRTbGlkZSAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucXVlcnlTZWxlY3RvcignLnNsaWRlcl9fc2xpZGUtLWN1cnJlbnQnKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgICAgIHRoaXMuaW5uZXJIVE1MID0gaHRtbCgpO1xyXG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCggJ3NsaWRlcicgKVxyXG4gICAgICAgIHRoaXMudXBkYXRlVmlldygpXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlVmlldyAoKSB7XHJcblxyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAvLyBSZW1vdmUgU2xpZGVzXHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIHdpbmRvdy5zdG9yZS5wcm9kdWN0cy4kb24oJ3JlbW92ZScsIChpbmRleDogbnVtYmVyLCBpdGVtOiBQcm9kdWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2xpZGVyX19zbGlkZS5mb3JFYWNoKHNsaWRlID0+IHNsaWRlLnJlbW92ZSgpKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAvLyBBZGQgU2xpZGVzXHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIHdpbmRvdy5zdG9yZS5wcm9kdWN0cy4kb24oJ2FkZCcsIChwcm9kdWN0OiBQcm9kdWN0LCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNsaWRlID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTGlzdDogW1wic2xpZGVyX19zbGlkZVwiXSB9KTtcclxuICAgICAgICAgICAgc2xpZGUuYXBwZW5kQ2hpbGQoXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgYXR0cnMgOiB7IHNyYyA6IHByb2R1Y3QuaW1hZ2UgfSB9KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0aGlzLnNsaWRlcl9fc2xpZGVzLmFwcGVuZENoaWxkKHNsaWRlKTtcclxuICAgICAgICAgICAgc2xpZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuc3RvcmUucHJvZHVjdC5zZXQoeyBpbmRleCwgLi4ud2luZG93LnN0b3JlLnByb2R1Y3RzLnZhbHVlW2luZGV4XSB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAvLyBBZGQgY2xhc3MgXCJzbGlkZXJfX3NsaWRlLS1jdXJyZW50XCIgdG8gY3VycmVudFByb2R1Y3RcclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgd2luZG93LnN0b3JlLnByb2R1Y3QuJG9uKCdzZXQnLCAocHJvZHVjdCA6IGN1cnJlbnRQcm9kdWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNsaWRlPy5jbGFzc0xpc3QucmVtb3ZlKCdzbGlkZXJfX3NsaWRlLS1jdXJyZW50JylcclxuICAgICAgICAgICAgdGhpcy5zbGlkZXJfX3NsaWRlW3Byb2R1Y3QuaW5kZXhdLmNsYXNzTGlzdC5hZGQoJ3NsaWRlcl9fc2xpZGUtLWN1cnJlbnQnKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkgeyBzdXBlcigpIH1cclxuXHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcInYtc2xpZGVyXCIsIFNsaWRlcik7XHJcbiIsInZhciBwdWcgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wdWctcnVudGltZS9pbmRleC5qc1wiKTtcblxuZnVuY3Rpb24gdGVtcGxhdGUobG9jYWxzKSB7dmFyIHB1Z19odG1sID0gXCJcIiwgcHVnX21peGlucyA9IHt9LCBwdWdfaW50ZXJwO3B1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NpbWcgY2xhc3M9XFxcInZpZXdfX2ltYWdlXFxcIlxcdTAwM0VcIjs7cmV0dXJuIHB1Z19odG1sO307XG5tb2R1bGUuZXhwb3J0cyA9IHRlbXBsYXRlOyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdmlldy5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgJy4vdmlldy5zY3NzJ1xyXG5pbXBvcnQgaHRtbCBmcm9tICcuL3ZpZXcucHVnJztcclxuY2xhc3MgTmF2YmFyIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG5cclxuICAgIGdldCBpbWFnZSAoKSB7XHJcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52aWV3X19pbWFnZScpIGFzIEhUTUxJbWFnZUVsZW1lbnRcclxuICAgIH1cclxuXHJcbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgICAgICB0aGlzLmlubmVySFRNTCA9IGh0bWwoKTtcclxuICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoICd2aWV3JyApXHJcblxyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAvLyBJbWFnZVxyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICB3aW5kb3cuc3RvcmUucHJvZHVjdC4kb24oJ3VwZGF0ZTppbWFnZScsIChpbWFnZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCBpbWFnZSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkgeyBzdXBlcigpIH1cclxuXHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcInYtdmlld1wiLCBOYXZiYXIpO1xyXG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCAnLi9pbmRleC5zY3NzJ1xyXG5pbXBvcnQgXCIuL3N0b3JlXCI7XHJcbmltcG9ydCBcIi4vY29tcG9uZW50cy92aWV3L3ZpZXdcIjtcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhcidcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvc2Nyb2xsL3Njcm9sbCdcclxuaW1wb3J0IFwiLi9jb21wb25lbnRzL3NsaWRlci9zbGlkZXJcIjtcclxuaW1wb3J0IFwiLi9jb21wb25lbnRzL2Rlc2NyaXB0b3IvZGVzY3JpcHRvclwiOyIsImltcG9ydCB7IEV2ZW50c0hhbmRsZXIgfSBmcm9tIFwiLi91dGlsc1wiXHJcblxyXG5hYnN0cmFjdCBjbGFzcyBSZWNvcmRlcjxUPiBleHRlbmRzIEV2ZW50c0hhbmRsZXIge1xyXG4gIHZhbHVlOiBUO1xyXG4gIGhpc3Rvcnk6IFRbXSA9IFtdXHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIF9pbml0OiBULFxyXG4gICAgcHVibGljIG1pZGRsZXdhcmVzOiB7IFtrZXk6IHN0cmluZ106ICguLi5hcmdzOiBhbnkpID0+IGFueSB9XHJcbiAgKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy52YWx1ZSA9IHRoaXMuX2luaXQ7XHJcbiAgICB0aGlzLiRlbWl0KCdzZXQnLCB0aGlzLnZhbHVlKVxyXG4gICAgdGhpcy4kb24oXCIkbGlzdGVuXCIsIChldmVudE5hbWU6IHN0cmluZywgY2FsbGJhY2s6IEZ1bmN0aW9uKSA9PiB7XHJcbiAgICAgIGlmIChldmVudE5hbWUgPT09IFwic2V0XCIpIGNhbGxiYWNrKHRoaXMudmFsdWUpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLm1pZGRsZXdhcmVzID0gT2JqZWN0LmFzc2lnbihcclxuICAgICAge1xyXG4gICAgICAgIHNldDogKHY6IFQpID0+IHYsXHJcbiAgICAgICAgdXBkYXRlOiAoaW5kZXg6IG51bWJlciwgdjogVCkgPT4gW2luZGV4LCB2XSxcclxuICAgICAgICB1cGRhdGVBbGw6ICh2OiBUKSA9PiB2LFxyXG4gICAgICAgIGdldCA6IChpbmRleDogbnVtYmVyKSA9PiB2b2lkIDBcclxuICAgICAgfSxcclxuICAgICAgdGhpcy5taWRkbGV3YXJlc1xyXG4gICAgKTtcclxuICAgIHRoaXMuaGlzdG9yeS5wdXNoKHRoaXMudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgc2V0KHZhbHVlOiBUKSB7XHJcbiAgICB2YWx1ZSA9IHRoaXMuXyRtaWRkbGV3YXJlKCdzZXQnLCB2YWx1ZSk7XHJcblxyXG4gICAgaWYgKHZhbHVlICE9PSB0aGlzLnZhbHVlKSB0aGlzLiRlbWl0KFwidXBkYXRlXCIsICh0aGlzLnZhbHVlID0gdmFsdWUpKTtcclxuICAgIHRoaXMuJGVtaXQoXCJzZXRcIiwgdGhpcy52YWx1ZSk7XHJcbiAgICB0aGlzLmhpc3RvcnkucHVzaCh0aGlzLnZhbHVlKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBfJG1pZGRsZXdhcmUgKG5hbWU6IHN0cmluZywgLi4uYXJnczogYW55W10pIHtcclxuICAgIHJldHVybiB0aGlzLm1pZGRsZXdhcmVzW25hbWVdLmNhbGwodGhpcywgLi4uYXJncylcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBSZWNvcmRBcnJheTxUPiBleHRlbmRzIFJlY29yZGVyPFRbXT4ge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgX2luaXQ6IFRbXSxcclxuICAgIG1pZGRsZXdhcmVzID0ge31cclxuICApIHtcclxuICAgIHN1cGVyKF9pbml0LCBtaWRkbGV3YXJlcyk7XHJcbiAgICB0aGlzLiRvbignJGxpc3RlbicsIChldmVudE5hbWU6IHN0cmluZywgY2FsbGJhY2s6IEZ1bmN0aW9uKSA9PiB7XHJcbiAgICAgIGlmICggZXZlbnROYW1lID09PSAnYWRkJyApIHRoaXMudmFsdWUuZm9yRWFjaCggKGl0ZW0sIGluZGV4KSA9PiBjYWxsYmFjayhpdGVtLCBpbmRleCkgKVxyXG4gICAgfSlcclxuICAgIHRoaXMuJG9uKCdzZXQnLCAodmFsdWU6IFRbXSkgPT4ge1xyXG4gICAgICAvLyBSZW1vdmUgT2xkIEl0ZW1zXHJcbiAgICAgIHRoaXMuaGlzdG9yeVsgdGhpcy5oaXN0b3J5Lmxlbmd0aCAtIDEgXS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4gdGhpcy4kZW1pdCgncmVtb3ZlJywgaW5kZXgsIGl0ZW0pKVxyXG5cclxuICAgICAgLy8gQWRkIE5ldyBJdGVtc1xyXG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4gdGhpcy4kZW1pdCgnYWRkJywgaXRlbSwgaW5kZXgpKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHB1c2goLi4uaXRlbXM6IFRbXSkge1xyXG4gICAgdGhpcy52YWx1ZS5wdXNoKC4uLml0ZW1zKTtcclxuICAgIHRoaXMuJGVtaXQoXCJhZGRcIiwgaXRlbXMsIHRoaXMudmFsdWUubGVuZ3RoIC0gMSk7XHJcbiAgICB0aGlzLiRlbWl0KCd1cGRhdGUnLCB0aGlzLnZhbHVlKVxyXG4gICAgdGhpcy5oaXN0b3J5LnB1c2godGhpcy52YWx1ZSlcclxuICB9XHJcblxyXG4gIHNwbGljZSAoZnJvbTogbnVtYmVyLCBkZWxldGVDb3VudDogbnVtYmVyID0gMCwgLi4uaXRlbXM6IFRbXSkge1xyXG4gICAgdGhpcy52YWx1ZS5zcGxpY2UoZnJvbSwgZGVsZXRlQ291bnQsIC4uLml0ZW1zKVxyXG4gICAgdGhpcy4kZW1pdCgnc3BsaWNlJywgZnJvbSwgZGVsZXRlQ291bnQsIC4uLml0ZW1zKVxyXG4gICAgdGhpcy4kZW1pdChcInVwZGF0ZVwiLCB0aGlzLnZhbHVlKTtcclxuICAgIHRoaXMuaGlzdG9yeS5wdXNoKHRoaXMudmFsdWUpXHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJlY29yZFZhbHVlPFQ+IGV4dGVuZHMgUmVjb3JkZXI8VD4ge1xyXG4gICAgY29uc3RydWN0b3IgKFxyXG4gICAgICBfaW5pdDogVCxcclxuICAgICAgbWlkZGxld2FyZXMgPSB7fVxyXG4gICAgKSB7XHJcbiAgICAgIHN1cGVyKF9pbml0LCBtaWRkbGV3YXJlcylcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJlY29yZE9iamVjdDxUIGV4dGVuZHMgeyBba2V5OiBzdHJpbmddIDogYW55IH0+IGV4dGVuZHMgUmVjb3JkZXI8VD4ge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgIF9pbml0OiBULFxyXG4gICAgICBtaWRkbGV3YXJlcyA9IHt9XHJcbiAgICApIHtcclxuICAgICAgc3VwZXIoX2luaXQsIG1pZGRsZXdhcmVzKVxyXG4gICAgICB0aGlzLiRvbihcIiRsaXN0ZW5cIiwgKGV2ZW50RXhwcmVzc2lvbjogc3RyaW5nLCBjYWxsYmFjazogRnVuY3Rpb24pID0+IHtcclxuICAgICAgICBjb25zdCBbIG5hbWUsIHByZWZpeCBdID0gZXZlbnRFeHByZXNzaW9uLnNwbGl0KCc6JylcclxuICAgICAgICBpZiAobmFtZSA9PT0gXCJ1cGRhdGVcIiAmJiAhcHJlZml4KSBmb3IgKCBsZXQga2V5IGluIHRoaXMudmFsdWUgKSBjYWxsYmFjayhrZXksIHRoaXMudmFsdWVba2V5XSlcclxuICAgICAgICBpZiAobmFtZSA9PT0gXCJ1cGRhdGVcIiAmJiBwcmVmaXgpIGNhbGxiYWNrKHRoaXMudmFsdWVbcHJlZml4XSlcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuJG9uKCdzZXQnLCAodmFsdWU6IFQpID0+IHtcclxuICAgICAgICB0aGlzLiRlbWl0KCd1cGRhdGUnLCB2YWx1ZSlcclxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdmFsdWUpIHRoaXMuJGVtaXQoYHVwZGF0ZToke2tleX1gLCB2YWx1ZVtrZXldKTtcclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUgKGtleToga2V5b2YgVCwgdmFsdWU6IGFueSkge1xyXG4gICAgICB0aGlzLnZhbHVlW2tleV0gPSB2YWx1ZVxyXG4gICAgICB0aGlzLiRlbWl0KGB1cGRhdGVgLCBrZXksIHZhbHVlKVxyXG4gICAgICB0aGlzLiRlbWl0KGB1cGRhdGU6JHtrZXl9YCwgdmFsdWUpXHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHsgUmVjb3JkQXJyYXksIFJlY29yZE9iamVjdCwgUmVjb3JkVmFsdWUgfSBmcm9tIFwiLi9yZWNvcmRlclwiO1xyXG5pbXBvcnQgeyBjdXJyZW50UHJvZHVjdCB9IGZyb20gXCIuL3R5cGVzXCI7XHJcblxyXG5jb25zdCBkZXNjcmlwdGlvbiA9ICfZh9iw2Kcg2KfZhNmG2LUg2YXYq9in2YQg2YTZhti1INmK2YXZg9mGINij2YYg2YrYs9iq2KjYr9mEINmB2Yog2YbZgdizINin2YTZhdiz2KfYrdipLiDZhNiq2YjZhNmK2K8g2YfYsNinINin2YTZhti1INmF2YYg2YXZiNmE2K8g2KfZhNmG2LUg2KfZhNi52LHYqNmKINit2YrYqyDZitmF2YPZhiDYo9mGINiq2YjZhNivJ1xyXG5cclxuY29uc3QgcGFydDEgPSBbXHJcbiAge1xyXG4gICAgbmFtZTogXCLYrNmI2LHYr9in2YYg2LLZitix2Ygg2KrZiFwiLFxyXG4gICAgcHJpY2U6IDEyNixcclxuICAgIGltYWdlOiBcIi4uL2ltYWdlcy9zaG9lLTEucG5nXCIsXHJcbiAgICBkZXNjcmlwdGlvbixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwi2KPZitixINmF2KfZg9izIDI3MFwiLFxyXG4gICAgcHJpY2U6IDE2MCxcclxuICAgIGltYWdlOiBcIi4uL2ltYWdlcy9zaG9lLTIucG5nXCIsXHJcbiAgICBkZXNjcmlwdGlvbixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwi2KPZitixINis2YjYsdiv2KfZhiAxINmF2YrYr1wiLFxyXG4gICAgcHJpY2U6IDIwMCxcclxuICAgIGltYWdlOiBcIi4uL2ltYWdlcy9zaG9lLTMucG5nXCIsXHJcbiAgICBkZXNjcmlwdGlvbixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwi2YPZitmB2YrZhiDYr9mI2LHYp9mG2KogMTJcIixcclxuICAgIHByaWNlOiAzMjMsXHJcbiAgICBpbWFnZTogXCIuLi9pbWFnZXMvc2hvZS00LnBuZ1wiLFxyXG4gICAgZGVzY3JpcHRpb24sXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IHBhcnQyID0gW1xyXG4gIHtcclxuICAgIG5hbWU6IFwi2YHZhNmK2YPZitizINmF2YrYq9mI2K9cIixcclxuICAgIHByaWNlOiA1MDAsXHJcbiAgICBpbWFnZTogXCIuLi9pbWFnZXMvc2hvZS01LnBuZ1wiLFxyXG4gICAgZGVzY3JpcHRpb24sXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcItis2KfZg9mI2Kgg2LLZitix2Ygg2YjYp9mGXCIsXHJcbiAgICBwcmljZTogNzQwLFxyXG4gICAgaW1hZ2U6IFwiLi4vaW1hZ2VzL3Nob2UtNi5wbmdcIixcclxuICAgIGRlc2NyaXB0aW9uLFxyXG4gIH0sXHJcbl07XHJcblxyXG53aW5kb3cuc3RvcmUgPSB7XHJcbiAgZ29vZHM6IFtwYXJ0MSwgcGFydDJdLFxyXG5cclxuICBwcm9kdWN0czogbmV3IFJlY29yZEFycmF5KHBhcnQxKSxcclxuXHJcbiAgcHJvZHVjdDogbmV3IFJlY29yZE9iamVjdCh7XHJcbiAgICBuYW1lOiBcIlwiLFxyXG4gICAgcHJpY2U6IDAsXHJcbiAgICBpbWFnZTogXCJcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxyXG4gICAgaW5kZXg6IDIsXHJcbiAgfSksXHJcbn07XHJcblxyXG53aW5kb3cuc3RvcmUucHJvZHVjdHMuJG9uKFwic2V0XCIsICgpID0+IHtcclxuICBjb25zdCBpbmRleCA9IE1hdGgubWluKCB3aW5kb3cuc3RvcmUucHJvZHVjdC52YWx1ZS5pbmRleCwgd2luZG93LnN0b3JlLnByb2R1Y3RzLnZhbHVlLmxlbmd0aCAtIDEgKVxyXG4gIHdpbmRvdy5zdG9yZS5wcm9kdWN0LnNldCh7IGluZGV4LCAuLi53aW5kb3cuc3RvcmUucHJvZHVjdHMudmFsdWVbIGluZGV4IF0gfSk7XHJcbn0pOyIsImV4cG9ydCBjbGFzcyBFdmVudHNIYW5kbGVyIHtcclxuICAgIGV2ZW50czogeyBba2V5OiBzdHJpbmddIDogQXJyYXk8RnVuY3Rpb24+IH0gPSB7fVxyXG5cclxuICAgICRlbWl0IChldmVudE5hbWU6IHN0cmluZywgLi4uYXJnczogYW55KSB7XHJcbiAgICAgICAgaWYgKCAhQXJyYXkuaXNBcnJheSh0aGlzLmV2ZW50c1tldmVudE5hbWVdKSApIHJldHVyblxyXG4gICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uZm9yRWFjaCggY2FsbEJhY2sgPT4gY2FsbEJhY2soLi4uYXJncykgKVxyXG4gICAgfVxyXG5cclxuICAgICRvbiAoZXZlbnROYW1lOiBzdHJpbmcsIGNhbGxCYWNrOiBGdW5jdGlvbikge1xyXG4gICAgICAgIGlmICggIUFycmF5LmlzQXJyYXkodGhpcy5ldmVudHNbZXZlbnROYW1lXSkgKSB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gW11cclxuICAgICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnB1c2goIGNhbGxCYWNrIClcclxuICAgICAgICBpZiAoIGV2ZW50TmFtZSAhPT0gJyRsaXN0ZW4nICkgdGhpcy4kZW1pdCgnJGxpc3RlbicsIGV2ZW50TmFtZSwgY2FsbEJhY2spIFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb25EcmFnRHJvcCAoXHJcbiAgICBlbGVtZW50OiBIVE1MRWxlbWVudCxcclxuICAgIG1vdXNlZG93bjogKGU6IE1vdXNlRXZlbnQpID0+IHZvaWQgfCBib29sZWFuLFxyXG4gICAgbW91c2Vtb3ZlOiAoZTogTW91c2VFdmVudCwgcG9zaXRpb24gOiB7IHggOiBudW1iZXIsIHk6IG51bWJlciB9KSA9PiBhbnksXHJcbiAgICBtb3VzZXVwOiAoZTogTW91c2VFdmVudCkgPT4gdm9pZFxyXG4pIHtcclxuICBsZXQgcG9pbnRfMSA9IHsgeCA6IDAsIHkgOiAwIH1cclxuXHJcbiAgbGV0IGlzTW91c2VVcCA9IGZhbHNlXHJcbiAgbGV0IGlzTW91c2VEb3duID0gZmFsc2VcclxuICBsZXQgaXNNb3VzZU1vdmUgPSBmYWxzZVxyXG5cclxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGU6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgIGlmICggbW91c2Vkb3duKGUpICkge1xyXG4gICAgICBpc01vdXNlRG93biA9IHRydWVcclxuICAgICAgaXNNb3VzZVVwID0gZmFsc2VcclxuICAgICAgcG9pbnRfMSA9IHsgeDogZS5wYWdlWCwgeTogZS5wYWdlWSB9O1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIChlOiBNb3VzZUV2ZW50KSA9PiB7XHJcblxyXG4gICAgaWYgKCBpc01vdXNlRG93biAmJiBpc01vdXNlTW92ZSApIHtcclxuICAgICAgaXNNb3VzZVVwID0gdHJ1ZTtcclxuICAgICAgbW91c2V1cChlKTtcclxuICAgIH1cclxuXHJcbiAgfSk7XHJcblxyXG4gIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCAoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgaWYgKCAhaXNNb3VzZVVwICYmIGlzTW91c2VEb3duICkge1xyXG4gICAgICBpc01vdXNlTW92ZSA9IHRydWVcclxuICAgICAgbW91c2Vtb3ZlKGUsIHsgeDogZS5wYWdlWCAtIHBvaW50XzEueCwgeTogZS5wYWdlWSAtIHBvaW50XzEueSB9KTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYWQobnVtYmVyOiBudW1iZXIsIHJhbmdlOiBudW1iZXIgPSAyKTogc3RyaW5nIHtcclxuICBjb25zdCBhcnIgPSBuZXcgQXJyYXkocmFuZ2UpLmZpbGwoMClcclxuICBhcnIuc3BsaWNlKFN0cmluZyhudW1iZXIpLmxlbmd0aCAtIDEsIFN0cmluZyhudW1iZXIpLmxlbmd0aCwgU3RyaW5nKG51bWJlcikpXHJcbiAgcmV0dXJuIGFyci5yZXZlcnNlKCkuam9pbignJylcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQ8SyBleHRlbmRzIGtleW9mIEhUTUxFbGVtZW50VGFnTmFtZU1hcD4gKHRhZ05hbWU6IEssIG9wdGlvbnM6IHtcclxuICAgIGlubmVyVGV4dD8gOiBzdHJpbmcsXHJcbiAgICBpbm5lckhUTUw/IDogc3RyaW5nLFxyXG4gICAgY2xhc3NMaXN0PyA6IHN0cmluZ1tdLFxyXG4gICAgYXR0cnM/IDogeyBba2V5OiBzdHJpbmddIDogc3RyaW5nIH1cclxufSkge1xyXG4gICAgY29uc3QgZWxtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKVxyXG4gICAgXHJcbiAgICBlbG0uaW5uZXJUZXh0ID0gb3B0aW9ucy5pbm5lclRleHQgfHwgJyc7XHJcblxyXG4gICAgZWxtLmlubmVySFRNTCA9IG9wdGlvbnMuaW5uZXJIVE1MIHx8IGVsbS5pbm5lckhUTUxcclxuXHJcbiAgICBmb3IgKCBsZXQgY2xhc3NOYW1lIG9mIChvcHRpb25zLmNsYXNzTGlzdCB8fCBbXSkgKSBlbG0uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG5cclxuICAgIGZvciAoIGxldCBhdHRyTmFtZSBpbiBvcHRpb25zLmF0dHJzICkgZWxtLnNldEF0dHJpYnV0ZSggYXR0ck5hbWUsIG9wdGlvbnMuYXR0cnNbIGF0dHJOYW1lIF0gKVxyXG5cclxuICAgIHJldHVybiBlbG1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFuaW1hdGVDb3VudGluZyAoc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIsIGNhbGxCYWNrOiBGdW5jdGlvbikge1xyXG4gIGNvbnN0IGluY3JlbWVudCA9IGVuZCA8IHN0YXJ0ID8gLTEgOiAxXHJcbiAgY29uc3QgY291bnRlciA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgIGNhbGxCYWNrKHN0YXJ0ICs9IGluY3JlbWVudClcclxuICAgIGlmICggc3RhcnQgPT09IGVuZCApIGNsZWFySW50ZXJ2YWwoY291bnRlcik7XHJcbiAgfSwgMTUwMCAvIE1hdGguYWJzKGVuZCAtIHN0YXJ0KSApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhbmltYXRlVHlwaW5nIChzdHJpbmc6IHN0cmluZywgY2FsbEJhY2s6IEZ1bmN0aW9uKSB7XHJcbiAgbGV0IF9zdHJpbmcgPSAnJ1xyXG4gIGxldCBpID0gMFxyXG4gIGNvbnN0IGFuaW1hdGlvbiA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgIF9zdHJpbmcgKz0gc3RyaW5nW2ldXHJcbiAgICBjYWxsQmFjayhfc3RyaW5nKTtcclxuICAgIGkgKz0gMVxyXG4gICAgaWYgKCBpID49IHN0cmluZy5sZW5ndGggKSBjbGVhckludGVydmFsKGFuaW1hdGlvbilcclxuICB9LCAxMDAwIC8gc3RyaW5nLmxlbmd0aClcclxufSIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=
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
___CSS_LOADER_EXPORT___.push([module.i, "@charset \"UTF-8\";\n:root {\n  --gray-100: #F8F8F8;\n  --gray-200: #EEEEEE;\n  --gray-300: #E6E6E6;\n  --gray-400: #C8C8C8;\n  --gray-500: #4B4B4B;\n  --gray-600: #1E1E1E;\n}\n\nhtml {\n  height: 100%;\n}\n\nbody {\n  font-family: \"Swissra ☞\";\n  padding: 10px 20px;\n  height: 100%;\n  display: flex;\n  margin: 0px;\n  box-sizing: border-box;\n  flex-direction: column;\n}\n\n#app {\n  display: flex;\n  align-items: center;\n  flex-grow: 1;\n}\n\n.navbar {\n  height: 50px;\n  display: flex;\n  justify-content: space-between;\n}\n.navbar > div:nth-child(2) {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: row;\n  direction: ltr;\n  align-items: center;\n}\n.navbar__logo {\n  height: 100%;\n}\n.navbar__logo img {\n  height: 100%;\n}\n.navbar__menu {\n  height: 50px;\n  width: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  transition: all 0.5s;\n  border-radius: 10px;\n}\n.navbar__menu:hover {\n  background-color: var(--gray-100);\n}\n.navbar__sections {\n  position: relative;\n}\n.navbar__sections span {\n  margin-right: 15px;\n  position: relative;\n  display: inline-block;\n  cursor: pointer;\n}\n.navbar__sections:before {\n  content: \"\";\n  height: 5px;\n  background-color: var(--gray-500);\n  display: inline-block;\n  position: absolute;\n  top: 100%;\n  z-index: -1;\n  transition: all 0.5s;\n  border-radius: 5px;\n  width: var(--width);\n  left: var(--left);\n}\n.navbar__actions {\n  margin: 0 5em;\n}\n.navbar__actions span {\n  height: 45px;\n  width: 45px;\n  background-color: var(--gray-300);\n  border-radius: 10px;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 10px;\n  cursor: pointer;\n}\n\n.view {\n  width: 20em;\n  height: 20em;\n  background: var(--gray-300);\n  border-radius: 50%;\n  display: flex;\n  margin: 0 auto;\n  margin-bottom: 2em;\n  justify-content: center;\n  align-items: center;\n}\n.view__image {\n  width: 15em;\n  transform: rotate(-30deg) scale(1.7);\n  margin-right: 2em;\n  margin-top: -4em;\n  filter: drop-shadow(5px 20px 10px rgba(0, 0, 0, 0.3));\n}\n\n.scroll__bar {\n  background-color: var(--gray-300);\n  width: 5px;\n  height: 40vh;\n  border-radius: 10px;\n  transition: all 0.2s;\n  overflow: hidden;\n  position: relative;\n}\n.scroll__thumbnail {\n  background-color: var(--gray-400);\n  width: 100%;\n  position: absolute;\n  transition: all 0.2s;\n}\n\n.scroll__fraction {\n  font-family: \"Cairo\";\n  font-size: 2em;\n  height: 25vh;\n  color: var(--gray-400);\n}\n.scroll__numerator {\n  font-size: 3em;\n  color: var(--gray-500);\n}\n\n.slider {\n  display: flex;\n  width: 35em;\n  align-items: center;\n}\n.slider__previous-btn, .slider__next-btn {\n  width: 50px;\n  height: 50px;\n  background-color: var(--gray-300);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  cursor: pointer;\n}\n.slider__slides {\n  display: flex;\n  flex-grow: 1;\n  justify-content: space-between;\n  margin: 0px 2em;\n}\n.slider__slide {\n  width: 65px;\n  height: 65px;\n  background-color: var(--gray-300);\n  border-radius: 10px;\n  cursor: pointer;\n  transition: all 0.2s;\n  box-sizing: border-box;\n}\n.slider__slide--current {\n  border: 3px solid var(--gray-500);\n}\n.slider__slide img {\n  width: 90px;\n  transform: rotate(-35deg) scale(1.1);\n  transform-origin: center;\n}\n\n.descriptor {\n  margin: 0 5em;\n  width: 25em;\n}\n.descriptor__background {\n  position: absolute;\n  font-size: 4em;\n  font-family: Cairo;\n  color: var(--gray-200);\n  z-index: -1;\n  margin-right: 30px;\n}\n.descriptor__name {\n  font-size: 2em;\n  height: 4em;\n  display: flex;\n  align-items: center;\n}\n.descriptor__description {\n  font-weight: 300;\n  margin-bottom: 2em;\n}\n.descriptor__footer {\n  display: flex;\n  align-items: center;\n}\n.descriptor__buy-btn {\n  display: inline-block;\n  background: var(--gray-300);\n  padding: 10px;\n  border-radius: 10px;\n  width: 7em;\n  text-align: center;\n  cursor: pointer;\n}\n.descriptor__price {\n  font-family: Cairo;\n  font-size: 2em;\n  height: 45px;\n  display: flex;\n  align-items: center;\n  margin: 0px 0.5em;\n}\n\n@keyframes typing {\n  0% {\n    width: 0;\n  }\n}", "",{"version":3,"sources":["webpack://src/index.scss"],"names":[],"mappings":"AAAA,gBAAgB;AAAhB;EACI,mBAAA;EACA,mBAAA;EACA,mBAAA;EACA,mBAAA;EACA,mBAAA;EACA,mBAAA;AAEJ;;AACA;EACI,YAAA;AAEJ;;AACA;EACI,wBAAA;EACA,kBAAA;EACA,YAAA;EACA,aAAA;EACA,WAAA;EACA,sBAAA;EACA,sBAAA;AAEJ;;AACA;EACI,aAAA;EACA,mBAAA;EACA,YAAA;AAEJ;;AAIA;EACI,YAAA;EACA,aAAA;EACA,8BAAA;AADJ;AAGI;EACI,YAAA;EACA,aAAA;EACA,mBAAA;EACA,cAAA;EACA,mBAAA;AADR;AAII;EACI,YAAA;AAFR;AAGQ;EACI,YAAA;AADZ;AAKI;EACI,YAAA;EACA,WAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,eAAA;EACA,oBAAA;EACA,mBAAA;AAHR;AAIQ;EACI,iCAAA;AAFZ;AAMI;EACI,kBAAA;AAJR;AAKQ;EACI,kBAAA;EACA,kBAAA;EACA,qBAAA;EACA,eAAA;AAHZ;AAKQ;EACI,WAAA;EACA,WAAA;EACA,iCAAA;EACA,qBAAA;EACA,kBAAA;EACA,SAAA;EACA,WAAA;EACA,oBAAA;EACA,kBAAA;EACA,mBAAA;EACA,iBAAA;AAHZ;AAOI;EACI,aAAA;AALR;AAMQ;EACI,YAAA;EACA,WAAA;EACA,iCAAA;EACA,mBAAA;EACA,oBAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,eAAA;AAJZ;;AAaA;EACI,WAAA;EACA,YAAA;EACA,2BAAA;EACA,kBAAA;EACA,aAAA;EACA,cAAA;EACA,kBAAA;EACA,uBAAA;EACA,mBAAA;AAVJ;AAWI;EACI,WAAA;EACA,oCAAA;EACA,iBAAA;EACA,gBAAA;EACA,qDAAA;AATR;;AAiBI;EACI,iCAAA;EACA,UAAA;EACA,YAAA;EACA,mBAAA;EACA,oBAAA;EACA,gBAAA;EACA,kBAAA;AAdR;AAgBI;EACI,iCAAA;EACA,WAAA;EACA,kBAAA;EACA,oBAAA;AAdR;;AAmBI;EACI,oBAAA;EACA,cAAA;EACA,YAAA;EACA,sBAAA;AAhBR;AAkBI;EACI,cAAA;EACA,sBAAA;AAhBR;;AAuBA;EAEI,aAAA;EACA,WAAA;EACA,mBAAA;AArBJ;AAuBI;EACI,WAAA;EACA,YAAA;EACA,iCAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,eAAA;AArBR;AAwBI;EACI,aAAA;EACA,YAAA;EACA,8BAAA;EACA,eAAA;AAtBR;AAyBI;EACI,WAAA;EACA,YAAA;EACA,iCAAA;EACA,mBAAA;EACA,eAAA;EACA,oBAAA;EACA,sBAAA;AAvBR;AAwBQ;EACI,iCAAA;AAtBZ;AAwBQ;EACI,WAAA;EACA,oCAAA;EACA,wBAAA;AAtBZ;;AA8BA;EACI,aAAA;EACA,WAAA;AA3BJ;AA6BI;EACI,kBAAA;EACA,cAAA;EACA,kBAAA;EACA,sBAAA;EACA,WAAA;EACA,kBAAA;AA3BR;AA8BI;EACI,cAAA;EACA,WAAA;EACA,aAAA;EACA,mBAAA;AA5BR;AA+BI;EACI,gBAAA;EACA,kBAAA;AA7BR;AAgCI;EACI,aAAA;EACA,mBAAA;AA9BR;AAiCI;EACI,qBAAA;EACA,2BAAA;EACA,aAAA;EACA,mBAAA;EACA,UAAA;EACA,kBAAA;EACA,eAAA;AA/BR;AAkCI;EACI,kBAAA;EACA,cAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,iBAAA;AAhCR;;AAoCA;EACI;IACI,QAAA;EAjCN;AACF","sourcesContent":[":root {\r\n    --gray-100 : #F8F8F8;\r\n    --gray-200 : #EEEEEE;\r\n    --gray-300 : #E6E6E6;\r\n    --gray-400 : #C8C8C8;\r\n    --gray-500 : #4B4B4B;\r\n    --gray-600 : #1E1E1E;\r\n}\r\n\r\nhtml {\r\n    height: 100%;\r\n}\r\n\r\nbody {\r\n    font-family: \"Swissra ☞\";\r\n    padding: 10px 20px;\r\n    height: 100%;\r\n    display: flex;\r\n    margin: 0px;\r\n    box-sizing: border-box;\r\n    flex-direction: column;\r\n}\r\n\r\n#app {\r\n    display: flex;\r\n    align-items: center;\r\n    flex-grow: 1;\r\n}\r\n\r\n// =======================================\r\n// Navbar\r\n// =======================================\r\n.navbar {\r\n    height: 50px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n\r\n    & > div:nth-child(2) {\r\n        flex-grow: 1;\r\n        display: flex;\r\n        flex-direction: row;\r\n        direction: ltr;\r\n        align-items: center;\r\n    }\r\n\r\n    &__logo {\r\n        height: 100%;\r\n        img {\r\n            height: 100%;\r\n        }\r\n    }\r\n\r\n    &__menu {\r\n        height: 50px;\r\n        width: 50px;\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        cursor: pointer;\r\n        transition: all .5s;\r\n        border-radius: 10px;\r\n        &:hover {\r\n            background-color: var(--gray-100)\r\n        }\r\n    }\r\n\r\n    &__sections {\r\n        position: relative;\r\n        span {\r\n            margin-right: 15px;\r\n            position: relative;\r\n            display: inline-block;\r\n            cursor: pointer;\r\n        }\r\n        &:before {\r\n            content: \"\";\r\n            height: 5px;\r\n            background-color: var(--gray-500);\r\n            display: inline-block;\r\n            position: absolute;\r\n            top: 100%;\r\n            z-index: -1;\r\n            transition: all 0.5s;\r\n            border-radius: 5px;\r\n            width: var(--width);\r\n            left: var(--left);\r\n        }\r\n    }\r\n\r\n    &__actions {\r\n        margin: 0 5em;\r\n        span {\r\n            height: 45px;\r\n            width: 45px;\r\n            background-color: var(--gray-300);\r\n            border-radius: 10px;\r\n            display: inline-flex;\r\n            justify-content: center;\r\n            align-items: center;\r\n            margin-right: 10px;\r\n            cursor: pointer;\r\n        }\r\n    }\r\n\r\n}\r\n\r\n// =======================================\r\n// View\r\n// =======================================\r\n.view {\r\n    width: 20em;\r\n    height: 20em;\r\n    background: var(--gray-300);\r\n    border-radius: 50%;\r\n    display: flex;\r\n    margin: 0 auto;\r\n    margin-bottom: 2em;\r\n    justify-content: center;\r\n    align-items: center;\r\n    &__image {\r\n        width: 15em;\r\n        transform: rotate(-30deg) scale(1.7);\r\n        margin-right: 2em;\r\n        margin-top: -4em;\r\n        filter : drop-shadow(5px 20px 10px rgba(0,0,0,0.3));\r\n    }\r\n}\r\n\r\n// =======================================\r\n// Scroll\r\n// =======================================\r\n.scroll {\r\n    &__bar {\r\n        background-color: var(--gray-300);\r\n        width: 5px;\r\n        height: 40vh;\r\n        border-radius: 10px;\r\n        transition: all .2s;\r\n        overflow: hidden;\r\n        position: relative;\r\n    }\r\n    &__thumbnail {\r\n        background-color: var(--gray-400);\r\n        width: 100%;\r\n        position: absolute;\r\n        transition: all .2s;\r\n    }\r\n}\r\n\r\n.scroll {\r\n    &__fraction {\r\n        font-family: \"Cairo\";\r\n        font-size: 2em;\r\n        height: 25vh;\r\n        color: var(--gray-400);\r\n    }\r\n    &__numerator {\r\n        font-size: 3em;\r\n        color: var(--gray-500);\r\n    }\r\n}\r\n\r\n// =======================================\r\n// Slider\r\n// =======================================\r\n.slider {\r\n\r\n    display: flex;\r\n    width: 35em;\r\n    align-items: center;\r\n\r\n    &__previous-btn, &__next-btn {\r\n        width: 50px;\r\n        height: 50px;\r\n        background-color: var(--gray-300);\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        border-radius: 50%;\r\n        cursor: pointer;\r\n    }\r\n\r\n    &__slides {\r\n        display: flex;\r\n        flex-grow: 1;\r\n        justify-content: space-between;\r\n        margin: 0px 2em;\r\n    }\r\n\r\n    &__slide {\r\n        width: 65px;\r\n        height: 65px;\r\n        background-color: var(--gray-300);\r\n        border-radius: 10px;\r\n        cursor: pointer;\r\n        transition: all .2s;\r\n        box-sizing: border-box;\r\n        &--current {\r\n            border : 3px solid var(--gray-500);\r\n        }\r\n        img {\r\n            width: 90px;\r\n            transform: rotate(-35deg) scale(1.1);\r\n            transform-origin: center;\r\n        }\r\n    }\r\n}\r\n\r\n// =======================================\r\n// Descriptor\r\n// =======================================\r\n.descriptor {\r\n    margin: 0 5em;\r\n    width: 25em;\r\n    \r\n    &__background {\r\n        position: absolute;\r\n        font-size: 4em;\r\n        font-family: Cairo;\r\n        color: var(--gray-200);\r\n        z-index: -1;\r\n        margin-right: 30px;\r\n    }\r\n\r\n    &__name {\r\n        font-size: 2em;\r\n        height: 4em;\r\n        display: flex;\r\n        align-items: center;\r\n    }\r\n\r\n    &__description {\r\n        font-weight: 300;\r\n        margin-bottom: 2em;\r\n    }\r\n\r\n    &__footer {\r\n        display: flex;\r\n        align-items: center;\r\n    }\r\n\r\n    &__buy-btn {\r\n        display: inline-block;\r\n        background: var(--gray-300);\r\n        padding: 10px;\r\n        border-radius: 10px;\r\n        width: 7em;\r\n        text-align: center;\r\n        cursor: pointer;\r\n    }\r\n\r\n    &__price {\r\n        font-family: Cairo;\r\n        font-size: 2em;\r\n        height: 45px;\r\n        display: flex;\r\n        align-items: center;\r\n        margin: 0px 0.5em;\r\n    }\r\n}\r\n\r\n@keyframes typing {\r\n    0% {\r\n        width: 0;\r\n    }\r\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");
/* harmony import */ var _recorder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recorder */ "./src/recorder.ts");




// ========================================
// Store
// ========================================
const description = "هذا النص مثال لنص يمكن أن يستبدل في نفس المساحة. لتوليد هذا النص من مولد النص العربي حيث يمكن أن تولد";
const part1 = [
    {
        name: "جوردان زيرو تو",
        price: 126,
        image: "images/shoe-1.png",
        description,
    },
    {
        name: "أير ماكس 270",
        price: 160,
        image: "images/shoe-2.png",
        description,
    },
    {
        name: "أير جوردان 1 ميد",
        price: 200,
        image: "images/shoe-3.png",
        description,
    },
    {
        name: "كيفين دورانت 12",
        price: 323,
        image: "images/shoe-4.png",
        description,
    },
];
const part2 = [
    {
        name: "فليكيس ميثود",
        price: 500,
        image: "images/shoe-5.png",
        description,
    },
    {
        name: "جاكوب زيرو وان",
        price: 740,
        image: "images/shoe-6.png",
        description,
    },
];
var store = {
    goods: [part1, part2],
    products: new _recorder__WEBPACK_IMPORTED_MODULE_2__["RecordArray"](part1),
    product_index: new _recorder__WEBPACK_IMPORTED_MODULE_2__["RecordValue"](2),
    product: {
        name: '',
        price: 0,
        image: '',
        description: ''
    }
};
store.product_index.$on('set', () => {
    store.product = store.products.value[store.product_index.value];
});
store.products.$on('set', () => {
    store.product_index.set(Math.min(store.product_index.value, 0));
});
////////////////////////////////////////////////
// Navbar
////////////////////////////////////////////////
class Navbar {
    constructor() {
        this.$elm = document.querySelector('.navbar');
        this.navbar__sections = this.$elm.querySelector('.navbar__sections');
        this.sections = this.navbar__sections.querySelectorAll(".navbar__section");
        // =====================================
        // Sections Animation
        // =====================================
        this.sections.forEach((section) => {
            section.addEventListener('mouseover', () => {
                this.navbar__sections.style.setProperty("--left", section.offsetLeft + "px");
                this.navbar__sections.style.setProperty('--width', section.getBoundingClientRect().width + 'px');
            });
            section.addEventListener('mouseleave', () => {
                this.navbar__sections.style.setProperty('--width', '0px');
            });
        });
    }
}
const navbar = new Navbar();
////////////////////////////////////////////////
// View
////////////////////////////////////////////////
class View {
    constructor() {
        this.image = document.querySelector('.view__image');
        store.product_index.$on("set", () => {
            this.image.setAttribute("src", store.product.image);
        });
    }
}
const view = new View();
////////////////////////////////////////////////
// Scroll
////////////////////////////////////////////////
class Scroll {
    constructor() {
        this.numerator = new _recorder__WEBPACK_IMPORTED_MODULE_2__["RecordValue"](0, {
            set: (value) => Math.min(Math.max(value, 0), this.denominator.value - 1)
        });
        this.denominator = new _recorder__WEBPACK_IMPORTED_MODULE_2__["RecordValue"](4);
        this.heightUnit = 0;
        this.$elm = document.querySelector('.scroll');
        this.scroll__bar = this.$elm.querySelector(".scroll__bar");
        this.scroll__thumbnail = this.$elm.querySelector(".scroll__thumbnail");
        this.scroll__numerator = this.$elm.querySelector(".scroll__numerator");
        this.scroll__denominator = this.$elm.querySelector(".scroll__denominator");
        this.computedData();
        this.updateView();
        // =======================================
        // Data
        // =======================================
        this.numerator.set(0);
        this.denominator.set(store.goods.length);
        // =======================================
        // Scroll Bar Functionality
        // =======================================
        const onMove = (e) => {
            const y = e.pageY - this.scroll__bar.getBoundingClientRect().top;
            this.numerator.set(Math.floor(y / this.heightUnit));
        };
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["onDragDrop"])(this.scroll__thumbnail, () => true, onMove, () => { });
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
            store.products.set(store.goods[value]);
        });
    }
    updateView() {
        // Set Scroll Fraction Text
        this.numerator.$on("set", (value) => (this.scroll__numerator.innerText = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["pad"])(value + 1, String(this.denominator.value).length)));
        this.denominator.$on("set", (value) => (this.scroll__denominator.innerText = String(value)));
        // Set Height Of Thumbnail
        this.denominator.$on("set", (value) => {
            this.scroll__thumbnail.style.height = `${this.scroll__bar.offsetHeight / value}px`;
        });
        // Set Y of Thumbnail
        this.numerator.$on('set', (value) => (this.scroll__thumbnail.style.top = this.heightUnit * this.numerator.value + 'px'));
    }
}
const scroll = new Scroll();
////////////////////////////////////////////////
// Slider
////////////////////////////////////////////////
class Slider {
    constructor() {
        this.$elm = document.querySelector('.slider');
        this.slider__slides = this.$elm.querySelector(".slider__slides");
        // =====================================
        // Remove Slides
        // =====================================
        store.products.$on("remove", (index, item) => {
            this.slider__slide.forEach((slide) => slide.remove());
        });
        // =====================================
        // Add Slides
        // =====================================
        store.products.$on("add", (product, index) => {
            const slide = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", { classList: ["slider__slide"] });
            slide.appendChild(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", { attrs: { src: product.image } }));
            this.slider__slides.appendChild(slide);
            slide.addEventListener("click", () => store.product_index.set(index));
        });
        // =====================================
        // Add class "slider__slide--current" to currentProduct
        // =====================================
        store.product_index.$on("set", (index) => {
            var _a;
            (_a = this.currentSlide) === null || _a === void 0 ? void 0 : _a.classList.remove("slider__slide--current");
            this.slider__slide[index].classList.add("slider__slide--current");
        });
    }
    get slider__slide() {
        return this.$elm.querySelectorAll(".slider__slides .slider__slide");
    }
    get currentSlide() {
        return this.$elm.querySelector(".slider__slide--current");
    }
}
const slider = new Slider();
class Descriptor {
    constructor() {
        this.$elm = document.querySelector('.descriptor');
        this.descriptor__name = this.$elm.querySelector(".descriptor__name span");
        this.descriptor__price = this.$elm.querySelector(".descriptor__price span");
        this.descriptor__description = this.$elm.querySelector(".descriptor__description");
        store.product_index.$on('set', () => {
            const { name, price, description } = store.product;
            this.descriptor__name.innerText = name;
            this.descriptor__price.innerText = String(price);
            this.descriptor__description.innerText = description;
        });
    }
}
const descriptor = new Descriptor();


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


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnNjc3M/NzIyMyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlY29yZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQ3lGO0FBQ3pGLDhCQUE4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SyxXQUFXLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLEtBQUssVUFBVSxNQUFNLGdDQUFnQyw2QkFBNkIsNkJBQTZCLDZCQUE2Qiw2QkFBNkIsNkJBQTZCLDZCQUE2QixLQUFLLGNBQWMscUJBQXFCLEtBQUssY0FBYyxtQ0FBbUMsMkJBQTJCLHFCQUFxQixz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Y2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7XFxuOnJvb3Qge1xcbiAgLS1ncmF5LTEwMDogI0Y4RjhGODtcXG4gIC0tZ3JheS0yMDA6ICNFRUVFRUU7XFxuICAtLWdyYXktMzAwOiAjRTZFNkU2O1xcbiAgLS1ncmF5LTQwMDogI0M4QzhDODtcXG4gIC0tZ3JheS01MDA6ICM0QjRCNEI7XFxuICAtLWdyYXktNjAwOiAjMUUxRTFFO1xcbn1cXG5cXG5odG1sIHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIlN3aXNzcmEg4pieXFxcIjtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW46IDBweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jYXBwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG4ubmF2YmFyIHtcXG4gIGhlaWdodDogNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5uYXZiYXIgPiBkaXY6bnRoLWNoaWxkKDIpIHtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZGlyZWN0aW9uOiBsdHI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubmF2YmFyX19sb2dvIHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLm5hdmJhcl9fbG9nbyBpbWcge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4ubmF2YmFyX19tZW51IHtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuLm5hdmJhcl9fbWVudTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5LTEwMCk7XFxufVxcbi5uYXZiYXJfX3NlY3Rpb25zIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLm5hdmJhcl9fc2VjdGlvbnMgc3BhbiB7XFxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5uYXZiYXJfX3NlY3Rpb25zOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGhlaWdodDogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS01MDApO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMDAlO1xcbiAgei1pbmRleDogLTE7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHdpZHRoOiB2YXIoLS13aWR0aCk7XFxuICBsZWZ0OiB2YXIoLS1sZWZ0KTtcXG59XFxuLm5hdmJhcl9fYWN0aW9ucyB7XFxuICBtYXJnaW46IDAgNWVtO1xcbn1cXG4ubmF2YmFyX19hY3Rpb25zIHNwYW4ge1xcbiAgaGVpZ2h0OiA0NXB4O1xcbiAgd2lkdGg6IDQ1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5LTMwMCk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi52aWV3IHtcXG4gIHdpZHRoOiAyMGVtO1xcbiAgaGVpZ2h0OiAyMGVtO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JheS0zMDApO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4udmlld19faW1hZ2Uge1xcbiAgd2lkdGg6IDE1ZW07XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzBkZWcpIHNjYWxlKDEuNyk7XFxuICBtYXJnaW4tcmlnaHQ6IDJlbTtcXG4gIG1hcmdpbi10b3A6IC00ZW07XFxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDVweCAyMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjMpKTtcXG59XFxuXFxuLnNjcm9sbF9fYmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXktMzAwKTtcXG4gIHdpZHRoOiA1cHg7XFxuICBoZWlnaHQ6IDQwdmg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uc2Nyb2xsX190aHVtYm5haWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS00MDApO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcXG59XFxuXFxuLnNjcm9sbF9fZnJhY3Rpb24ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJDYWlyb1xcXCI7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIGhlaWdodDogMjV2aDtcXG4gIGNvbG9yOiB2YXIoLS1ncmF5LTQwMCk7XFxufVxcbi5zY3JvbGxfX251bWVyYXRvciB7XFxuICBmb250LXNpemU6IDNlbTtcXG4gIGNvbG9yOiB2YXIoLS1ncmF5LTUwMCk7XFxufVxcblxcbi5zbGlkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAzNWVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnNsaWRlcl9fcHJldmlvdXMtYnRuLCAuc2xpZGVyX19uZXh0LWJ0biB7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXktMzAwKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5zbGlkZXJfX3NsaWRlcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1ncm93OiAxO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luOiAwcHggMmVtO1xcbn1cXG4uc2xpZGVyX19zbGlkZSB7XFxuICB3aWR0aDogNjVweDtcXG4gIGhlaWdodDogNjVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXktMzAwKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi5zbGlkZXJfX3NsaWRlLS1jdXJyZW50IHtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWdyYXktNTAwKTtcXG59XFxuLnNsaWRlcl9fc2xpZGUgaW1nIHtcXG4gIHdpZHRoOiA5MHB4O1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTM1ZGVnKSBzY2FsZSgxLjEpO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xcbn1cXG5cXG4uZGVzY3JpcHRvciB7XFxuICBtYXJnaW46IDAgNWVtO1xcbiAgd2lkdGg6IDI1ZW07XFxufVxcbi5kZXNjcmlwdG9yX19iYWNrZ3JvdW5kIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGZvbnQtc2l6ZTogNGVtO1xcbiAgZm9udC1mYW1pbHk6IENhaXJvO1xcbiAgY29sb3I6IHZhcigtLWdyYXktMjAwKTtcXG4gIHotaW5kZXg6IC0xO1xcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xcbn1cXG4uZGVzY3JpcHRvcl9fbmFtZSB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIGhlaWdodDogNGVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5kZXNjcmlwdG9yX19kZXNjcmlwdGlvbiB7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xcbn1cXG4uZGVzY3JpcHRvcl9fZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uZGVzY3JpcHRvcl9fYnV5LWJ0biB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmF5LTMwMCk7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHdpZHRoOiA3ZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5kZXNjcmlwdG9yX19wcmljZSB7XFxuICBmb250LWZhbWlseTogQ2Fpcm87XFxuICBmb250LXNpemU6IDJlbTtcXG4gIGhlaWdodDogNDVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiAwcHggMC41ZW07XFxufVxcblxcbkBrZXlmcmFtZXMgdHlwaW5nIHtcXG4gIDAlIHtcXG4gICAgd2lkdGg6IDA7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvaW5kZXguc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFDQTtFQUNJLFlBQUE7QUFFSjs7QUFDQTtFQUNJLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0FBRUo7O0FBQ0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBRUo7O0FBSUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FBREo7QUFHSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFEUjtBQUlJO0VBQ0ksWUFBQTtBQUZSO0FBR1E7RUFDSSxZQUFBO0FBRFo7QUFLSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQUhSO0FBSVE7RUFDSSxpQ0FBQTtBQUZaO0FBTUk7RUFDSSxrQkFBQTtBQUpSO0FBS1E7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBSFo7QUFLUTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUhaO0FBT0k7RUFDSSxhQUFBO0FBTFI7QUFNUTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUpaOztBQWFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFWSjtBQVdJO0VBQ0ksV0FBQTtFQUNBLG9DQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFEQUFBO0FBVFI7O0FBaUJJO0VBQ0ksaUNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBZFI7QUFnQkk7RUFDSSxpQ0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FBZFI7O0FBbUJJO0VBQ0ksb0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FBaEJSO0FBa0JJO0VBQ0ksY0FBQTtFQUNBLHNCQUFBO0FBaEJSOztBQXVCQTtFQUVJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFyQko7QUF1Qkk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFyQlI7QUF3Qkk7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQXRCUjtBQXlCSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0FBdkJSO0FBd0JRO0VBQ0ksaUNBQUE7QUF0Qlo7QUF3QlE7RUFDSSxXQUFBO0VBQ0Esb0NBQUE7RUFDQSx3QkFBQTtBQXRCWjs7QUE4QkE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtBQTNCSjtBQTZCSTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUEzQlI7QUE4Qkk7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQTVCUjtBQStCSTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUE3QlI7QUFnQ0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUE5QlI7QUFpQ0k7RUFDSSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQS9CUjtBQWtDSTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQWhDUjs7QUFvQ0E7RUFDSTtJQUNJLFFBQUE7RUFqQ047QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAgIC0tZ3JheS0xMDAgOiAjRjhGOEY4O1xcclxcbiAgICAtLWdyYXktMjAwIDogI0VFRUVFRTtcXHJcXG4gICAgLS1ncmF5LTMwMCA6ICNFNkU2RTY7XFxyXFxuICAgIC0tZ3JheS00MDAgOiAjQzhDOEM4O1xcclxcbiAgICAtLWdyYXktNTAwIDogIzRCNEI0QjtcXHJcXG4gICAgLS1ncmF5LTYwMCA6ICMxRTFFMUU7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIlN3aXNzcmEg4pieXFxcIjtcXHJcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIG1hcmdpbjogMHB4O1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4jYXBwIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZmxleC1ncm93OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4vLyBOYXZiYXJcXHJcXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4ubmF2YmFyIHtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFxyXFxuICAgICYgPiBkaXY6bnRoLWNoaWxkKDIpIHtcXHJcXG4gICAgICAgIGZsZXgtZ3JvdzogMTtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICAgICAgZGlyZWN0aW9uOiBsdHI7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2xvZ28ge1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgaW1nIHtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fbWVudSB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgICAgICB3aWR0aDogNTBweDtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXktMTAwKVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX3NlY3Rpb25zIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgIHNwYW4ge1xcclxcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgICY6YmVmb3JlIHtcXHJcXG4gICAgICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDVweDtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5LTUwMCk7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgICAgICB0b3A6IDEwMCU7XFxyXFxuICAgICAgICAgICAgei1pbmRleDogLTE7XFxyXFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XFxyXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICAgICAgICAgIHdpZHRoOiB2YXIoLS13aWR0aCk7XFxyXFxuICAgICAgICAgICAgbGVmdDogdmFyKC0tbGVmdCk7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fYWN0aW9ucyB7XFxyXFxuICAgICAgICBtYXJnaW46IDAgNWVtO1xcclxcbiAgICAgICAgc3BhbiB7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiA0NXB4O1xcclxcbiAgICAgICAgICAgIHdpZHRoOiA0NXB4O1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXktMzAwKTtcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcclxcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbn1cXHJcXG5cXHJcXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4vLyBWaWV3XFxyXFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLnZpZXcge1xcclxcbiAgICB3aWR0aDogMjBlbTtcXHJcXG4gICAgaGVpZ2h0OiAyMGVtO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmF5LTMwMCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDJlbTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICZfX2ltYWdlIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxNWVtO1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTMwZGVnKSBzY2FsZSgxLjcpO1xcclxcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyZW07XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAtNGVtO1xcclxcbiAgICAgICAgZmlsdGVyIDogZHJvcC1zaGFkb3coNXB4IDIwcHggMTBweCByZ2JhKDAsMCwwLDAuMykpO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi8vIFNjcm9sbFxcclxcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi5zY3JvbGwge1xcclxcbiAgICAmX19iYXIge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS0zMDApO1xcclxcbiAgICAgICAgd2lkdGg6IDVweDtcXHJcXG4gICAgICAgIGhlaWdodDogNDB2aDtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xcclxcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgfVxcclxcbiAgICAmX190aHVtYm5haWwge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS00MDApO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5zY3JvbGwge1xcclxcbiAgICAmX19mcmFjdGlvbiB7XFxyXFxuICAgICAgICBmb250LWZhbWlseTogXFxcIkNhaXJvXFxcIjtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xcclxcbiAgICAgICAgaGVpZ2h0OiAyNXZoO1xcclxcbiAgICAgICAgY29sb3I6IHZhcigtLWdyYXktNDAwKTtcXHJcXG4gICAgfVxcclxcbiAgICAmX19udW1lcmF0b3Ige1xcclxcbiAgICAgICAgZm9udC1zaXplOiAzZW07XFxyXFxuICAgICAgICBjb2xvcjogdmFyKC0tZ3JheS01MDApO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi8vIFNsaWRlclxcclxcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi5zbGlkZXIge1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICB3aWR0aDogMzVlbTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgJl9fcHJldmlvdXMtYnRuLCAmX19uZXh0LWJ0biB7XFxyXFxuICAgICAgICB3aWR0aDogNTBweDtcXHJcXG4gICAgICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXktMzAwKTtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fc2xpZGVzIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LWdyb3c6IDE7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgICAgICBtYXJnaW46IDBweCAyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fc2xpZGUge1xcclxcbiAgICAgICAgd2lkdGg6IDY1cHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDY1cHg7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5LTMwMCk7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4ycztcXHJcXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgICAgICAmLS1jdXJyZW50IHtcXHJcXG4gICAgICAgICAgICBib3JkZXIgOiAzcHggc29saWQgdmFyKC0tZ3JheS01MDApO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgaW1nIHtcXHJcXG4gICAgICAgICAgICB3aWR0aDogOTBweDtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzVkZWcpIHNjYWxlKDEuMSk7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi8vIERlc2NyaXB0b3JcXHJcXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4uZGVzY3JpcHRvciB7XFxyXFxuICAgIG1hcmdpbjogMCA1ZW07XFxyXFxuICAgIHdpZHRoOiAyNWVtO1xcclxcbiAgICBcXHJcXG4gICAgJl9fYmFja2dyb3VuZCB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICBmb250LXNpemU6IDRlbTtcXHJcXG4gICAgICAgIGZvbnQtZmFtaWx5OiBDYWlybztcXHJcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1ncmF5LTIwMCk7XFxyXFxuICAgICAgICB6LWluZGV4OiAtMTtcXHJcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19uYW1lIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xcclxcbiAgICAgICAgaGVpZ2h0OiA0ZW07XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19kZXNjcmlwdGlvbiB7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2Zvb3RlciB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19idXktYnRuIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWdyYXktMzAwKTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICAgICAgd2lkdGg6IDdlbTtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19wcmljZSB7XFxyXFxuICAgICAgICBmb250LWZhbWlseTogQ2Fpcm87XFxyXFxuICAgICAgICBmb250LXNpemU6IDJlbTtcXHJcXG4gICAgICAgIGhlaWdodDogNDVweDtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgbWFyZ2luOiAwcHggMC41ZW07XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyB0eXBpbmcge1xcclxcbiAgICAwJSB7XFxyXFxuICAgICAgICB3aWR0aDogMDtcXHJcXG4gICAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgJy4vaW5kZXguc2NzcydcclxuaW1wb3J0IHsgb25EcmFnRHJvcCwgcGFkLCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4vdXRpbHNcIjtcclxuaW1wb3J0IHsgUmVjb3JkVmFsdWUgfSBmcm9tIFwiLi9yZWNvcmRlclwiO1xyXG5pbXBvcnQgeyBSZWNvcmRBcnJheSwgUmVjb3JkT2JqZWN0IH0gZnJvbSBcIi4vcmVjb3JkZXJcIjtcclxuaW1wb3J0IHsgY3VycmVudFByb2R1Y3QsIFByb2R1Y3QgfSBmcm9tIFwiLi90eXBlc1wiO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBTdG9yZVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5jb25zdCBkZXNjcmlwdGlvbiA9XHJcbiAgXCLZh9iw2Kcg2KfZhNmG2LUg2YXYq9in2YQg2YTZhti1INmK2YXZg9mGINij2YYg2YrYs9iq2KjYr9mEINmB2Yog2YbZgdizINin2YTZhdiz2KfYrdipLiDZhNiq2YjZhNmK2K8g2YfYsNinINin2YTZhti1INmF2YYg2YXZiNmE2K8g2KfZhNmG2LUg2KfZhNi52LHYqNmKINit2YrYqyDZitmF2YPZhiDYo9mGINiq2YjZhNivXCI7XHJcblxyXG5jb25zdCBwYXJ0MSA9IFtcclxuICB7XHJcbiAgICBuYW1lOiBcItis2YjYsdiv2KfZhiDYstmK2LHZiCDYqtmIXCIsXHJcbiAgICBwcmljZTogMTI2LFxyXG4gICAgaW1hZ2U6IFwiaW1hZ2VzL3Nob2UtMS5wbmdcIixcclxuICAgIGRlc2NyaXB0aW9uLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCLYo9mK2LEg2YXYp9mD2LMgMjcwXCIsXHJcbiAgICBwcmljZTogMTYwLFxyXG4gICAgaW1hZ2U6IFwiaW1hZ2VzL3Nob2UtMi5wbmdcIixcclxuICAgIGRlc2NyaXB0aW9uLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCLYo9mK2LEg2KzZiNix2K/Yp9mGIDEg2YXZitivXCIsXHJcbiAgICBwcmljZTogMjAwLFxyXG4gICAgaW1hZ2U6IFwiaW1hZ2VzL3Nob2UtMy5wbmdcIixcclxuICAgIGRlc2NyaXB0aW9uLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCLZg9mK2YHZitmGINiv2YjYsdin2YbYqiAxMlwiLFxyXG4gICAgcHJpY2U6IDMyMyxcclxuICAgIGltYWdlOiBcImltYWdlcy9zaG9lLTQucG5nXCIsXHJcbiAgICBkZXNjcmlwdGlvbixcclxuICB9LFxyXG5dO1xyXG5cclxuY29uc3QgcGFydDIgPSBbXHJcbiAge1xyXG4gICAgbmFtZTogXCLZgdmE2YrZg9mK2LMg2YXZitir2YjYr1wiLFxyXG4gICAgcHJpY2U6IDUwMCxcclxuICAgIGltYWdlOiBcImltYWdlcy9zaG9lLTUucG5nXCIsXHJcbiAgICBkZXNjcmlwdGlvbixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwi2KzYp9mD2YjYqCDYstmK2LHZiCDZiNin2YZcIixcclxuICAgIHByaWNlOiA3NDAsXHJcbiAgICBpbWFnZTogXCJpbWFnZXMvc2hvZS02LnBuZ1wiLFxyXG4gICAgZGVzY3JpcHRpb24sXHJcbiAgfSxcclxuXTtcclxuXHJcbnZhciBzdG9yZSA9IHtcclxuICBnb29kczogW3BhcnQxLCBwYXJ0Ml0sXHJcblxyXG4gIHByb2R1Y3RzOiBuZXcgUmVjb3JkQXJyYXkocGFydDEpLFxyXG5cclxuICBwcm9kdWN0X2luZGV4OiBuZXcgUmVjb3JkVmFsdWUoMiksXHJcblxyXG4gIHByb2R1Y3QgOiB7XHJcbiAgICBuYW1lIDogJycsXHJcbiAgICBwcmljZSA6IDAsXHJcbiAgICBpbWFnZSA6ICcnLFxyXG4gICAgZGVzY3JpcHRpb24gOiAnJ1xyXG4gIH1cclxufTtcclxuXHJcbnN0b3JlLnByb2R1Y3RfaW5kZXguJG9uKCdzZXQnLCAoKSA9PiB7XHJcbiAgc3RvcmUucHJvZHVjdCA9IHN0b3JlLnByb2R1Y3RzLnZhbHVlW3N0b3JlLnByb2R1Y3RfaW5kZXgudmFsdWVdO1xyXG59KVxyXG5cclxuc3RvcmUucHJvZHVjdHMuJG9uKCdzZXQnLCAoKSA9PiB7XHJcbiAgc3RvcmUucHJvZHVjdF9pbmRleC5zZXQoIE1hdGgubWluKCBzdG9yZS5wcm9kdWN0X2luZGV4LnZhbHVlLCAwICkgKVxyXG59KVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIE5hdmJhclxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuY2xhc3MgTmF2YmFyIHtcclxuXHJcbiAgJGVsbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXInKSBhcyBIVE1MRWxlbWVudFxyXG5cclxuICBuYXZiYXJfX3NlY3Rpb25zID0gdGhpcy4kZWxtLnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXJfX3NlY3Rpb25zJykgYXMgSFRNTEVsZW1lbnRcclxuXHJcbiAgc2VjdGlvbnMgPSB0aGlzLm5hdmJhcl9fc2VjdGlvbnMucXVlcnlTZWxlY3RvckFsbChcIi5uYXZiYXJfX3NlY3Rpb25cIikgYXMgTm9kZUxpc3RPZjwgSFRNTEVsZW1lbnQgPlxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFNlY3Rpb25zIEFuaW1hdGlvblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgdGhpcy5zZWN0aW9ucy5mb3JFYWNoKChzZWN0aW9uOiBIVE1MRWxlbWVudCkgPT4ge1xyXG4gICAgICBzZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcclxuICAgICAgICB0aGlzLm5hdmJhcl9fc2VjdGlvbnMuc3R5bGUuc2V0UHJvcGVydHkoXCItLWxlZnRcIiwgc2VjdGlvbi5vZmZzZXRMZWZ0ICsgXCJweFwiKTtcclxuICAgICAgICB0aGlzLm5hdmJhcl9fc2VjdGlvbnMuc3R5bGUuc2V0UHJvcGVydHkoJy0td2lkdGgnLCBzZWN0aW9uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoICsgJ3B4JyApXHJcbiAgICAgIH0pXHJcbiAgICAgIHNlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcclxuICAgICAgICB0aGlzLm5hdmJhcl9fc2VjdGlvbnMuc3R5bGUuc2V0UHJvcGVydHkoJy0td2lkdGgnLCAnMHB4JyApXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmNvbnN0IG5hdmJhciA9IG5ldyBOYXZiYXIoKVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIFZpZXdcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNsYXNzIFZpZXcge1xyXG5cclxuICAgIGltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZpZXdfX2ltYWdlJykgYXMgSFRNTEltYWdlRWxlbWVudFxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICBzdG9yZS5wcm9kdWN0X2luZGV4LiRvbihcInNldFwiLCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5pbWFnZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgc3RvcmUucHJvZHVjdC5pbWFnZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuY29uc3QgdmlldyA9IG5ldyBWaWV3KClcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBTY3JvbGxcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNsYXNzIFNjcm9sbCB7XHJcbiAgbnVtZXJhdG9yOiBSZWNvcmRWYWx1ZTxudW1iZXI+ID0gbmV3IFJlY29yZFZhbHVlKDAsIHtcclxuICAgIHNldCA6ICh2YWx1ZTogbnVtYmVyKSA9PiBNYXRoLm1pbihNYXRoLm1heCggdmFsdWUsIDAgKSwgdGhpcy5kZW5vbWluYXRvci52YWx1ZSAtIDEpXHJcbiAgfSk7XHJcblxyXG4gIGRlbm9taW5hdG9yOiBSZWNvcmRWYWx1ZTxudW1iZXI+ID0gbmV3IFJlY29yZFZhbHVlKDQpO1xyXG5cclxuICBoZWlnaHRVbml0OiBudW1iZXIgPSAwXHJcblxyXG4gICRlbG0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2Nyb2xsJykgYXMgSFRNTEVsZW1lbnRcclxuICBcclxuICBzY3JvbGxfX2JhciA9IHRoaXMuJGVsbS5xdWVyeVNlbGVjdG9yKFwiLnNjcm9sbF9fYmFyXCIpIGFzIEhUTUxFbGVtZW50O1xyXG5cclxuICBzY3JvbGxfX3RodW1ibmFpbCA9IHRoaXMuJGVsbS5xdWVyeVNlbGVjdG9yKFwiLnNjcm9sbF9fdGh1bWJuYWlsXCIpIGFzIEhUTUxFbGVtZW50O1xyXG5cclxuICBzY3JvbGxfX251bWVyYXRvciA9IHRoaXMuJGVsbS5xdWVyeVNlbGVjdG9yKFwiLnNjcm9sbF9fbnVtZXJhdG9yXCIpIGFzIEhUTUxFbGVtZW50O1xyXG5cclxuICBzY3JvbGxfX2Rlbm9taW5hdG9yID0gdGhpcy4kZWxtLnF1ZXJ5U2VsZWN0b3IoXCIuc2Nyb2xsX19kZW5vbWluYXRvclwiKSBhcyBIVE1MRWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgdGhpcy5jb21wdXRlZERhdGEoKTtcclxuICAgIHRoaXMudXBkYXRlVmlldygpO1xyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gRGF0YVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICB0aGlzLm51bWVyYXRvci5zZXQoMCk7XHJcbiAgICB0aGlzLmRlbm9taW5hdG9yLnNldChzdG9yZS5nb29kcy5sZW5ndGgpO1xyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gU2Nyb2xsIEJhciBGdW5jdGlvbmFsaXR5XHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGNvbnN0IG9uTW92ZSA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgIGNvbnN0IHkgPSBlLnBhZ2VZIC0gdGhpcy5zY3JvbGxfX2Jhci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3BcclxuICAgICAgdGhpcy5udW1lcmF0b3Iuc2V0KCBNYXRoLmZsb29yKCB5IC8gdGhpcy5oZWlnaHRVbml0ICkgKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRyYWdEcm9wKHRoaXMuc2Nyb2xsX190aHVtYm5haWwsICgpID0+IHRydWUsIG9uTW92ZSwgKCkgPT4ge30pO1xyXG4gICAgXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCAoZSkgPT4ge1xyXG4gICAgICAvLyBTY3JvbGwgVXBcclxuICAgICAgaWYgKCBlLmRlbHRhWSA+IDAgKSB0aGlzLm51bWVyYXRvci5zZXQoIHRoaXMubnVtZXJhdG9yLnZhbHVlICsgMSApXHJcbiAgICAgIGVsc2UgdGhpcy5udW1lcmF0b3Iuc2V0KCB0aGlzLm51bWVyYXRvci52YWx1ZSAtIDEgKVxyXG4gICAgfSlcclxuXHJcbiAgfVxyXG5cclxuICBjb21wdXRlZERhdGEgKCkge1xyXG4gICAgdGhpcy5kZW5vbWluYXRvci4kb24oJ3NldCcsICh2YWx1ZTogbnVtYmVyKSA9PiB0aGlzLmhlaWdodFVuaXQgPSB0aGlzLnNjcm9sbF9fYmFyLm9mZnNldEhlaWdodCAvIHZhbHVlKVxyXG4gICAgdGhpcy5udW1lcmF0b3IuJG9uKCdzZXQnLCAodmFsdWU6IG51bWJlcikgPT4ge1xyXG4gICAgICBzdG9yZS5wcm9kdWN0cy5zZXQoc3RvcmUuZ29vZHNbdmFsdWVdKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHVwZGF0ZVZpZXcoKSB7XHJcbiAgICBcclxuICAgIC8vIFNldCBTY3JvbGwgRnJhY3Rpb24gVGV4dFxyXG4gICAgdGhpcy5udW1lcmF0b3IuJG9uKFxyXG4gICAgICBcInNldFwiLFxyXG4gICAgICAodmFsdWU6IG51bWJlcikgPT4gKHRoaXMuc2Nyb2xsX19udW1lcmF0b3IuaW5uZXJUZXh0ID0gcGFkKHZhbHVlICsgMSwgU3RyaW5nKHRoaXMuZGVub21pbmF0b3IudmFsdWUpLmxlbmd0aCkpXHJcbiAgICApO1xyXG4gICAgdGhpcy5kZW5vbWluYXRvci4kb24oXHJcbiAgICAgIFwic2V0XCIsXHJcbiAgICAgICh2YWx1ZTogbnVtYmVyKSA9PiAodGhpcy5zY3JvbGxfX2Rlbm9taW5hdG9yLmlubmVyVGV4dCA9IFN0cmluZyh2YWx1ZSkpXHJcbiAgICApO1xyXG5cclxuICAgIC8vIFNldCBIZWlnaHQgT2YgVGh1bWJuYWlsXHJcbiAgICB0aGlzLmRlbm9taW5hdG9yLiRvbihcInNldFwiLCAodmFsdWU6IG51bWJlcikgPT4ge1xyXG4gICAgICB0aGlzLnNjcm9sbF9fdGh1bWJuYWlsLnN0eWxlLmhlaWdodCA9IGAke3RoaXMuc2Nyb2xsX19iYXIub2Zmc2V0SGVpZ2h0IC8gdmFsdWV9cHhgXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBTZXQgWSBvZiBUaHVtYm5haWxcclxuICAgIHRoaXMubnVtZXJhdG9yLiRvbihcclxuICAgICAgJ3NldCcsXHJcbiAgICAgICh2YWx1ZTogbnVtYmVyKSA9PiAodGhpcy5zY3JvbGxfX3RodW1ibmFpbC5zdHlsZS50b3AgPSB0aGlzLmhlaWdodFVuaXQgKiB0aGlzLm51bWVyYXRvci52YWx1ZSArICdweCcpXHJcbiAgICApXHJcblxyXG4gIH1cclxufVxyXG5cclxuY29uc3Qgc2Nyb2xsID0gbmV3IFNjcm9sbCgpXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gU2xpZGVyXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jbGFzcyBTbGlkZXIge1xyXG5cclxuICAkZWxtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlcicpIGFzIEhUTUxFbGVtZW50XHJcblxyXG4gIHNsaWRlcl9fc2xpZGVzID0gdGhpcy4kZWxtLnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGVyX19zbGlkZXNcIikgYXMgSFRNTEVsZW1lbnQ7XHJcblxyXG4gIGdldCBzbGlkZXJfX3NsaWRlICgpIHtcclxuICAgIHJldHVybiB0aGlzLiRlbG0ucXVlcnlTZWxlY3RvckFsbChcIi5zbGlkZXJfX3NsaWRlcyAuc2xpZGVyX19zbGlkZVwiKTtcclxuICB9XHJcblxyXG4gIGdldCBjdXJyZW50U2xpZGUgKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuJGVsbS5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlcl9fc2xpZGUtLWN1cnJlbnRcIik7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBSZW1vdmUgU2xpZGVzXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBzdG9yZS5wcm9kdWN0cy4kb24oXCJyZW1vdmVcIiwgKGluZGV4OiBudW1iZXIsIGl0ZW06IFByb2R1Y3QpID0+IHtcclxuICAgICAgdGhpcy5zbGlkZXJfX3NsaWRlLmZvckVhY2goKHNsaWRlKSA9PiBzbGlkZS5yZW1vdmUoKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBBZGQgU2xpZGVzXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBzdG9yZS5wcm9kdWN0cy4kb24oXCJhZGRcIiwgKHByb2R1Y3Q6IFByb2R1Y3QsIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgY29uc3Qgc2xpZGUgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NMaXN0OiBbXCJzbGlkZXJfX3NsaWRlXCJdIH0pO1xyXG4gICAgICBzbGlkZS5hcHBlbmRDaGlsZChcclxuICAgICAgICBjcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgYXR0cnM6IHsgc3JjOiBwcm9kdWN0LmltYWdlIH0gfSlcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5zbGlkZXJfX3NsaWRlcy5hcHBlbmRDaGlsZChzbGlkZSk7XHJcbiAgICAgIHNsaWRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBzdG9yZS5wcm9kdWN0X2luZGV4LnNldChpbmRleCkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gQWRkIGNsYXNzIFwic2xpZGVyX19zbGlkZS0tY3VycmVudFwiIHRvIGN1cnJlbnRQcm9kdWN0XHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBzdG9yZS5wcm9kdWN0X2luZGV4LiRvbihcInNldFwiLCAoaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICB0aGlzLmN1cnJlbnRTbGlkZT8uY2xhc3NMaXN0LnJlbW92ZShcInNsaWRlcl9fc2xpZGUtLWN1cnJlbnRcIik7XHJcbiAgICAgIHRoaXMuc2xpZGVyX19zbGlkZVtpbmRleF0uY2xhc3NMaXN0LmFkZChcInNsaWRlcl9fc2xpZGUtLWN1cnJlbnRcIik7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgXHJcbn1cclxuXHJcbmNvbnN0IHNsaWRlciA9IG5ldyBTbGlkZXIoKTtcclxuXHJcbmNsYXNzIERlc2NyaXB0b3Ige1xyXG5cclxuICAkZWxtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc2NyaXB0b3InKSBhcyBIVE1MRWxlbWVudFxyXG5cclxuICBkZXNjcmlwdG9yX19uYW1lID0gdGhpcy4kZWxtLnF1ZXJ5U2VsZWN0b3IoXCIuZGVzY3JpcHRvcl9fbmFtZSBzcGFuXCIpIGFzIEhUTUxFbGVtZW50O1xyXG5cclxuICBkZXNjcmlwdG9yX19wcmljZSA9IHRoaXMuJGVsbS5xdWVyeVNlbGVjdG9yKFwiLmRlc2NyaXB0b3JfX3ByaWNlIHNwYW5cIikgYXMgSFRNTEVsZW1lbnQ7XHJcblxyXG4gIGRlc2NyaXB0b3JfX2Rlc2NyaXB0aW9uID0gdGhpcy4kZWxtLnF1ZXJ5U2VsZWN0b3IoXCIuZGVzY3JpcHRvcl9fZGVzY3JpcHRpb25cIikgYXMgSFRNTEVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yICgpIHtcclxuICAgIHN0b3JlLnByb2R1Y3RfaW5kZXguJG9uKCdzZXQnLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgbmFtZSwgcHJpY2UsIGRlc2NyaXB0aW9uIH0gPSBzdG9yZS5wcm9kdWN0XHJcbiAgICAgIHRoaXMuZGVzY3JpcHRvcl9fbmFtZS5pbm5lclRleHQgPSBuYW1lXHJcbiAgICAgIHRoaXMuZGVzY3JpcHRvcl9fcHJpY2UuaW5uZXJUZXh0ID0gU3RyaW5nKHByaWNlKTtcclxuICAgICAgdGhpcy5kZXNjcmlwdG9yX19kZXNjcmlwdGlvbi5pbm5lclRleHQgPSBkZXNjcmlwdGlvbjtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxufVxyXG5cclxuY29uc3QgZGVzY3JpcHRvciA9IG5ldyBEZXNjcmlwdG9yKCkiLCJpbXBvcnQgeyBFdmVudHNIYW5kbGVyIH0gZnJvbSBcIi4vdXRpbHNcIlxyXG5cclxuYWJzdHJhY3QgY2xhc3MgUmVjb3JkZXI8VD4gZXh0ZW5kcyBFdmVudHNIYW5kbGVyIHtcclxuICB2YWx1ZTogVDtcclxuICBoaXN0b3J5OiBUW10gPSBbXVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBfaW5pdDogVCxcclxuICAgIHB1YmxpYyBtaWRkbGV3YXJlczogeyBba2V5OiBzdHJpbmddOiAoLi4uYXJnczogYW55KSA9PiBhbnkgfVxyXG4gICkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMudmFsdWUgPSB0aGlzLl9pbml0O1xyXG4gICAgdGhpcy4kZW1pdCgnc2V0JywgdGhpcy52YWx1ZSlcclxuICAgIHRoaXMuJG9uKFwiJGxpc3RlblwiLCAoZXZlbnROYW1lOiBzdHJpbmcsIGNhbGxiYWNrOiBGdW5jdGlvbikgPT4ge1xyXG4gICAgICBpZiAoZXZlbnROYW1lID09PSBcInNldFwiKSBjYWxsYmFjayh0aGlzLnZhbHVlKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5taWRkbGV3YXJlcyA9IE9iamVjdC5hc3NpZ24oXHJcbiAgICAgIHtcclxuICAgICAgICBzZXQ6ICh2OiBUKSA9PiB2LFxyXG4gICAgICAgIHVwZGF0ZTogKGluZGV4OiBudW1iZXIsIHY6IFQpID0+IFtpbmRleCwgdl0sXHJcbiAgICAgICAgdXBkYXRlQWxsOiAodjogVCkgPT4gdixcclxuICAgICAgICBnZXQgOiAoaW5kZXg6IG51bWJlcikgPT4gdm9pZCAwXHJcbiAgICAgIH0sXHJcbiAgICAgIHRoaXMubWlkZGxld2FyZXNcclxuICAgICk7XHJcbiAgICB0aGlzLmhpc3RvcnkucHVzaCh0aGlzLnZhbHVlKTtcclxuICB9XHJcblxyXG4gIHNldCh2YWx1ZTogVCkge1xyXG4gICAgdmFsdWUgPSB0aGlzLl8kbWlkZGxld2FyZSgnc2V0JywgdmFsdWUpO1xyXG5cclxuICAgIGlmICh2YWx1ZSAhPT0gdGhpcy52YWx1ZSkgdGhpcy4kZW1pdChcInVwZGF0ZVwiLCAodGhpcy52YWx1ZSA9IHZhbHVlKSk7XHJcbiAgICB0aGlzLiRlbWl0KFwic2V0XCIsIHRoaXMudmFsdWUpO1xyXG4gICAgdGhpcy5oaXN0b3J5LnB1c2godGhpcy52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgXyRtaWRkbGV3YXJlIChuYW1lOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSB7XHJcbiAgICByZXR1cm4gdGhpcy5taWRkbGV3YXJlc1tuYW1lXS5jYWxsKHRoaXMsIC4uLmFyZ3MpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUmVjb3JkQXJyYXk8VD4gZXh0ZW5kcyBSZWNvcmRlcjxUW10+IHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIF9pbml0OiBUW10sXHJcbiAgICBtaWRkbGV3YXJlcyA9IHt9XHJcbiAgKSB7XHJcbiAgICBzdXBlcihfaW5pdCwgbWlkZGxld2FyZXMpO1xyXG4gICAgdGhpcy4kb24oJyRsaXN0ZW4nLCAoZXZlbnROYW1lOiBzdHJpbmcsIGNhbGxiYWNrOiBGdW5jdGlvbikgPT4ge1xyXG4gICAgICBpZiAoIGV2ZW50TmFtZSA9PT0gJ2FkZCcgKSB0aGlzLnZhbHVlLmZvckVhY2goIChpdGVtLCBpbmRleCkgPT4gY2FsbGJhY2soaXRlbSwgaW5kZXgpIClcclxuICAgIH0pXHJcbiAgICB0aGlzLiRvbignc2V0JywgKHZhbHVlOiBUW10pID0+IHtcclxuICAgICAgLy8gUmVtb3ZlIE9sZCBJdGVtc1xyXG4gICAgICB0aGlzLmhpc3RvcnlbIHRoaXMuaGlzdG9yeS5sZW5ndGggLSAxIF0uZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHRoaXMuJGVtaXQoJ3JlbW92ZScsIGluZGV4LCBpdGVtKSlcclxuXHJcbiAgICAgIC8vIEFkZCBOZXcgSXRlbXNcclxuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHRoaXMuJGVtaXQoJ2FkZCcsIGl0ZW0sIGluZGV4KSlcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBwdXNoKC4uLml0ZW1zOiBUW10pIHtcclxuICAgIHRoaXMudmFsdWUucHVzaCguLi5pdGVtcyk7XHJcbiAgICB0aGlzLiRlbWl0KFwiYWRkXCIsIGl0ZW1zLCB0aGlzLnZhbHVlLmxlbmd0aCAtIDEpO1xyXG4gICAgdGhpcy4kZW1pdCgndXBkYXRlJywgdGhpcy52YWx1ZSlcclxuICAgIHRoaXMuaGlzdG9yeS5wdXNoKHRoaXMudmFsdWUpXHJcbiAgfVxyXG5cclxuICBzcGxpY2UgKGZyb206IG51bWJlciwgZGVsZXRlQ291bnQ6IG51bWJlciA9IDAsIC4uLml0ZW1zOiBUW10pIHtcclxuICAgIHRoaXMudmFsdWUuc3BsaWNlKGZyb20sIGRlbGV0ZUNvdW50LCAuLi5pdGVtcylcclxuICAgIHRoaXMuJGVtaXQoJ3NwbGljZScsIGZyb20sIGRlbGV0ZUNvdW50LCAuLi5pdGVtcylcclxuICAgIHRoaXMuJGVtaXQoXCJ1cGRhdGVcIiwgdGhpcy52YWx1ZSk7XHJcbiAgICB0aGlzLmhpc3RvcnkucHVzaCh0aGlzLnZhbHVlKVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBSZWNvcmRWYWx1ZTxUPiBleHRlbmRzIFJlY29yZGVyPFQ+IHtcclxuICAgIGNvbnN0cnVjdG9yIChcclxuICAgICAgX2luaXQ6IFQsXHJcbiAgICAgIG1pZGRsZXdhcmVzID0ge31cclxuICAgICkge1xyXG4gICAgICBzdXBlcihfaW5pdCwgbWlkZGxld2FyZXMpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBSZWNvcmRPYmplY3Q8VCBleHRlbmRzIHsgW2tleTogc3RyaW5nXSA6IGFueSB9PiBleHRlbmRzIFJlY29yZGVyPFQ+IHtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICBfaW5pdDogVCxcclxuICAgICAgbWlkZGxld2FyZXMgPSB7fVxyXG4gICAgKSB7XHJcbiAgICAgIHN1cGVyKF9pbml0LCBtaWRkbGV3YXJlcylcclxuICAgICAgdGhpcy4kb24oXCIkbGlzdGVuXCIsIChldmVudEV4cHJlc3Npb246IHN0cmluZywgY2FsbGJhY2s6IEZ1bmN0aW9uKSA9PiB7XHJcbiAgICAgICAgY29uc3QgWyBuYW1lLCBwcmVmaXggXSA9IGV2ZW50RXhwcmVzc2lvbi5zcGxpdCgnOicpXHJcbiAgICAgICAgaWYgKG5hbWUgPT09IFwidXBkYXRlXCIgJiYgIXByZWZpeCkgZm9yICggbGV0IGtleSBpbiB0aGlzLnZhbHVlICkgY2FsbGJhY2soa2V5LCB0aGlzLnZhbHVlW2tleV0pXHJcbiAgICAgICAgaWYgKG5hbWUgPT09IFwidXBkYXRlXCIgJiYgcHJlZml4KSBjYWxsYmFjayh0aGlzLnZhbHVlW3ByZWZpeF0pXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLiRvbignc2V0JywgKHZhbHVlOiBUKSA9PiB7XHJcbiAgICAgICAgdGhpcy4kZW1pdCgndXBkYXRlJywgdmFsdWUpXHJcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHZhbHVlKSB0aGlzLiRlbWl0KGB1cGRhdGU6JHtrZXl9YCwgdmFsdWVba2V5XSk7XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlIChrZXk6IGtleW9mIFQsIHZhbHVlOiBhbnkpIHtcclxuICAgICAgdGhpcy52YWx1ZVtrZXldID0gdmFsdWVcclxuICAgICAgdGhpcy4kZW1pdChgdXBkYXRlYCwga2V5LCB2YWx1ZSlcclxuICAgICAgdGhpcy4kZW1pdChgdXBkYXRlOiR7a2V5fWAsIHZhbHVlKVxyXG4gICAgfVxyXG5cclxufSIsImV4cG9ydCBjbGFzcyBFdmVudHNIYW5kbGVyIHtcclxuICAgIGV2ZW50czogeyBba2V5OiBzdHJpbmddIDogQXJyYXk8RnVuY3Rpb24+IH0gPSB7fVxyXG5cclxuICAgICRlbWl0IChldmVudE5hbWU6IHN0cmluZywgLi4uYXJnczogYW55KSB7XHJcbiAgICAgICAgaWYgKCAhQXJyYXkuaXNBcnJheSh0aGlzLmV2ZW50c1tldmVudE5hbWVdKSApIHJldHVyblxyXG4gICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uZm9yRWFjaCggY2FsbEJhY2sgPT4gY2FsbEJhY2soLi4uYXJncykgKVxyXG4gICAgfVxyXG5cclxuICAgICRvbiAoZXZlbnROYW1lOiBzdHJpbmcsIGNhbGxCYWNrOiBGdW5jdGlvbikge1xyXG4gICAgICAgIGlmICggIUFycmF5LmlzQXJyYXkodGhpcy5ldmVudHNbZXZlbnROYW1lXSkgKSB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gW11cclxuICAgICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnB1c2goIGNhbGxCYWNrIClcclxuICAgICAgICBpZiAoIGV2ZW50TmFtZSAhPT0gJyRsaXN0ZW4nICkgdGhpcy4kZW1pdCgnJGxpc3RlbicsIGV2ZW50TmFtZSwgY2FsbEJhY2spIFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb25EcmFnRHJvcCAoXHJcbiAgICBlbGVtZW50OiBIVE1MRWxlbWVudCxcclxuICAgIG1vdXNlZG93bjogKGU6IE1vdXNlRXZlbnQpID0+IHZvaWQgfCBib29sZWFuLFxyXG4gICAgbW91c2Vtb3ZlOiAoZTogTW91c2VFdmVudCwgcG9zaXRpb24gOiB7IHggOiBudW1iZXIsIHk6IG51bWJlciB9KSA9PiBhbnksXHJcbiAgICBtb3VzZXVwOiAoZTogTW91c2VFdmVudCkgPT4gdm9pZFxyXG4pIHtcclxuICBsZXQgcG9pbnRfMSA9IHsgeCA6IDAsIHkgOiAwIH1cclxuXHJcbiAgbGV0IGlzTW91c2VVcCA9IGZhbHNlXHJcbiAgbGV0IGlzTW91c2VEb3duID0gZmFsc2VcclxuICBsZXQgaXNNb3VzZU1vdmUgPSBmYWxzZVxyXG5cclxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGU6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgIGlmICggbW91c2Vkb3duKGUpICkge1xyXG4gICAgICBpc01vdXNlRG93biA9IHRydWVcclxuICAgICAgaXNNb3VzZVVwID0gZmFsc2VcclxuICAgICAgcG9pbnRfMSA9IHsgeDogZS5wYWdlWCwgeTogZS5wYWdlWSB9O1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIChlOiBNb3VzZUV2ZW50KSA9PiB7XHJcblxyXG4gICAgaWYgKCBpc01vdXNlRG93biAmJiBpc01vdXNlTW92ZSApIHtcclxuICAgICAgaXNNb3VzZVVwID0gdHJ1ZTtcclxuICAgICAgbW91c2V1cChlKTtcclxuICAgIH1cclxuXHJcbiAgfSk7XHJcblxyXG4gIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCAoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgaWYgKCAhaXNNb3VzZVVwICYmIGlzTW91c2VEb3duICkge1xyXG4gICAgICBpc01vdXNlTW92ZSA9IHRydWVcclxuICAgICAgbW91c2Vtb3ZlKGUsIHsgeDogZS5wYWdlWCAtIHBvaW50XzEueCwgeTogZS5wYWdlWSAtIHBvaW50XzEueSB9KTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYWQobnVtYmVyOiBudW1iZXIsIHJhbmdlOiBudW1iZXIgPSAyKTogc3RyaW5nIHtcclxuICBjb25zdCBhcnIgPSBuZXcgQXJyYXkocmFuZ2UpLmZpbGwoMClcclxuICBhcnIuc3BsaWNlKFN0cmluZyhudW1iZXIpLmxlbmd0aCAtIDEsIFN0cmluZyhudW1iZXIpLmxlbmd0aCwgU3RyaW5nKG51bWJlcikpXHJcbiAgcmV0dXJuIGFyci5yZXZlcnNlKCkuam9pbignJylcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQ8SyBleHRlbmRzIGtleW9mIEhUTUxFbGVtZW50VGFnTmFtZU1hcD4gKHRhZ05hbWU6IEssIG9wdGlvbnM6IHtcclxuICAgIGlubmVyVGV4dD8gOiBzdHJpbmcsXHJcbiAgICBpbm5lckhUTUw/IDogc3RyaW5nLFxyXG4gICAgY2xhc3NMaXN0PyA6IHN0cmluZ1tdLFxyXG4gICAgYXR0cnM/IDogeyBba2V5OiBzdHJpbmddIDogc3RyaW5nIH1cclxufSkge1xyXG4gICAgY29uc3QgZWxtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKVxyXG4gICAgXHJcbiAgICBlbG0uaW5uZXJUZXh0ID0gb3B0aW9ucy5pbm5lclRleHQgfHwgJyc7XHJcblxyXG4gICAgZWxtLmlubmVySFRNTCA9IG9wdGlvbnMuaW5uZXJIVE1MIHx8IGVsbS5pbm5lckhUTUxcclxuXHJcbiAgICBmb3IgKCBsZXQgY2xhc3NOYW1lIG9mIChvcHRpb25zLmNsYXNzTGlzdCB8fCBbXSkgKSBlbG0uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG5cclxuICAgIGZvciAoIGxldCBhdHRyTmFtZSBpbiBvcHRpb25zLmF0dHJzICkgZWxtLnNldEF0dHJpYnV0ZSggYXR0ck5hbWUsIG9wdGlvbnMuYXR0cnNbIGF0dHJOYW1lIF0gKVxyXG5cclxuICAgIHJldHVybiBlbG1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFuaW1hdGVDb3VudGluZyAoc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIsIGNhbGxCYWNrOiBGdW5jdGlvbikge1xyXG4gIGNvbnN0IGluY3JlbWVudCA9IGVuZCA8IHN0YXJ0ID8gLTEgOiAxXHJcbiAgY29uc3QgY291bnRlciA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgIGNhbGxCYWNrKHN0YXJ0ICs9IGluY3JlbWVudClcclxuICAgIGlmICggc3RhcnQgPT09IGVuZCApIGNsZWFySW50ZXJ2YWwoY291bnRlcik7XHJcbiAgfSwgMTUwMCAvIE1hdGguYWJzKGVuZCAtIHN0YXJ0KSApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhbmltYXRlVHlwaW5nIChzdHJpbmc6IHN0cmluZywgY2FsbEJhY2s6IEZ1bmN0aW9uKSB7XHJcbiAgbGV0IF9zdHJpbmcgPSAnJ1xyXG4gIGxldCBpID0gMFxyXG4gIGNvbnN0IGFuaW1hdGlvbiA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgIF9zdHJpbmcgKz0gc3RyaW5nW2ldXHJcbiAgICBjYWxsQmFjayhfc3RyaW5nKTtcclxuICAgIGkgKz0gMVxyXG4gICAgaWYgKCBpID49IHN0cmluZy5sZW5ndGggKSBjbGVhckludGVydmFsKGFuaW1hdGlvbilcclxuICB9LCAxMDAwIC8gc3RyaW5nLmxlbmd0aClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=
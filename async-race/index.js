/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[0].use[3]!./src/components/garage/garage.scss":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[0].use[3]!./src/components/garage/garage.scss ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/icons/flagsvg.svg */ \"./src/assets/icons/flagsvg.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  width: 100vw;\n  background-color: #2c4a52;\n  color: #f4ebdb;\n  overflow-x: hidden;\n}\n\n.winners.hidden,\n.garage-view.hidden {\n  display: none;\n}\n\n.button {\n  width: 130px;\n  height: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 5px;\n  background-color: #f4ebdb;\n  color: #2c4a52;\n  font-size: 1.2em;\n  letter-spacing: 0.05em;\n}\n.button:hover {\n  cursor: pointer;\n}\n.button:disabled {\n  cursor: default;\n}\n\n.garage-view {\n  width: 100%;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.garage-view .select {\n  width: 500px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.garage-view .select__line {\n  width: 450px;\n  height: 30px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.garage-view .select__input {\n  width: 200px;\n  height: 100%;\n  padding: 3px 10px;\n}\n.garage-view .select__color {\n  width: 50px;\n  height: 35px;\n}\n.garage-view .select__color :hover {\n  cursor: pointer;\n}\n.garage-view .select .button {\n  height: 100%;\n}\n.garage-view .select .generate-btn {\n  width: 170px;\n}\n.garage-view .garage {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  letter-spacing: 0.06em;\n}\n.garage-view .garage__pagination {\n  display: flex;\n  gap: 15px;\n}\n.garage-view .garage__pagination .button {\n  width: 100px;\n  background-color: #8e9b97;\n  color: #f4ebdb;\n}\n\n.track {\n  position: relative;\n  width: 100%;\n  height: 100px;\n  border-bottom: 1px dotted #f4ebdb;\n  padding-top: 5px;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n  background-repeat: no-repeat;\n  background-position: right 100px bottom;\n}\n.track__controls {\n  display: flex;\n  gap: 15px;\n  align-items: center;\n}\n.track__controls .button {\n  height: 30px;\n}\n.track__drive {\n  display: flex;\n  gap: 15px;\n}\n.track__drive .button {\n  width: 50px;\n  height: 30px;\n  font-size: 12px;\n}\n.track svg {\n  position: absolute;\n  bottom: 0;\n  left: 20px;\n}\n\n.car {\n  width: 70px;\n  height: 50px;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://async-race/./src/components/garage/garage.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet%5B1%5D.rules%5B0%5D.use%5B3%5D");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[0].use[3]!./src/components/header/header.scss":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[0].use[3]!./src/components/header/header.scss ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  width: 100vw;\n  background-color: #2c4a52;\n  color: #f4ebdb;\n  overflow-x: hidden;\n}\n\n.winners.hidden,\n.garage-view.hidden {\n  display: none;\n}\n\n.button {\n  width: 130px;\n  height: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 5px;\n  background-color: #f4ebdb;\n  color: #2c4a52;\n  font-size: 1.2em;\n  letter-spacing: 0.05em;\n}\n.button:hover {\n  cursor: pointer;\n}\n.button:disabled {\n  cursor: default;\n}\n\n.header {\n  width: 100vw;\n  height: 100px;\n  padding: 10px;\n  display: flex;\n  gap: 15px;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://async-race/./src/components/header/header.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet%5B1%5D.rules%5B0%5D.use%5B3%5D");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[0].use[3]!./src/components/message/message.scss":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[0].use[3]!./src/components/message/message.scss ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  width: 100vw;\n  background-color: #2c4a52;\n  color: #f4ebdb;\n  overflow-x: hidden;\n}\n\n.winners.hidden,\n.garage-view.hidden {\n  display: none;\n}\n\n.button {\n  width: 130px;\n  height: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 5px;\n  background-color: #f4ebdb;\n  color: #2c4a52;\n  font-size: 1.2em;\n  letter-spacing: 0.05em;\n}\n.button:hover {\n  cursor: pointer;\n}\n.button:disabled {\n  cursor: default;\n}\n\n.message {\n  position: absolute;\n  width: 50vw;\n  height: 30px;\n  top: 40vh;\n  left: 25vw;\n  text-align: center;\n  z-index: 6;\n  font-size: 46px;\n  color: orange;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://async-race/./src/components/message/message.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet%5B1%5D.rules%5B0%5D.use%5B3%5D");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[0].use[3]!./src/components/winner/winners.scss":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[0].use[3]!./src/components/winner/winners.scss ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/icons/up.png */ \"./src/assets/icons/up.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/icons/down.png */ \"./src/assets/icons/down.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  width: 100vw;\n  background-color: #2c4a52;\n  color: #f4ebdb;\n  overflow-x: hidden;\n}\n\n.winners.hidden,\n.garage-view.hidden {\n  display: none;\n}\n\n.button {\n  width: 130px;\n  height: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 5px;\n  background-color: #f4ebdb;\n  color: #2c4a52;\n  font-size: 1.2em;\n  letter-spacing: 0.05em;\n}\n.button:hover {\n  cursor: pointer;\n}\n.button:disabled {\n  cursor: default;\n}\n\n.winners {\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  padding: 10px;\n}\n.winners__table {\n  width: 500px;\n  border-collapse: collapse;\n}\n.winners__table th {\n  height: 40px;\n  background-color: #f4ebdb;\n  color: #2c4a52;\n  font-size: 1.2em;\n  letter-spacing: 0.06em;\n  border: 0.5px solid #2c4a52;\n  position: relative;\n  text-align: left;\n  padding-left: 10px;\n}\n.winners__table td {\n  height: 40px;\n  text-align: center;\n  border: 0.2px solid #f4ebdb;\n}\n.winners__pagination {\n  display: flex;\n  gap: 15px;\n}\n.winners__pagination .button {\n  width: 100px;\n  background-color: #8e9b97;\n  color: #f4ebdb;\n}\n\n.sort {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  width: 20px;\n  height: 100%;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.sort .active {\n  filter: invert(40%);\n}\n.sort__up, .sort__down {\n  height: 30%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n.sort__up:hover, .sort__down:hover {\n  cursor: pointer;\n}\n.sort__up {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n}\n.sort__down {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://async-race/./src/components/winner/winners.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet%5B1%5D.rules%5B0%5D.use%5B3%5D");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://async-race/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://async-race/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://async-race/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/components/garage/garage.scss":
/*!*******************************************!*\
  !*** ./src/components/garage/garage.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_0_use_3_garage_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[0].use[3]!./garage.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[0].use[3]!./src/components/garage/garage.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_0_use_3_garage_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_0_use_3_garage_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_0_use_3_garage_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_0_use_3_garage_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://async-race/./src/components/garage/garage.scss?");

/***/ }),

/***/ "./src/components/header/header.scss":
/*!*******************************************!*\
  !*** ./src/components/header/header.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_0_use_3_header_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[0].use[3]!./header.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[0].use[3]!./src/components/header/header.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_0_use_3_header_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_0_use_3_header_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_0_use_3_header_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_0_use_3_header_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://async-race/./src/components/header/header.scss?");

/***/ }),

/***/ "./src/components/message/message.scss":
/*!*********************************************!*\
  !*** ./src/components/message/message.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_0_use_3_message_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[0].use[3]!./message.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[0].use[3]!./src/components/message/message.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_0_use_3_message_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_0_use_3_message_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_0_use_3_message_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_0_use_3_message_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://async-race/./src/components/message/message.scss?");

/***/ }),

/***/ "./src/components/winner/winners.scss":
/*!********************************************!*\
  !*** ./src/components/winner/winners.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_0_use_3_winners_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[0].use[3]!./winners.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[0].use[3]!./src/components/winner/winners.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_0_use_3_winners_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_0_use_3_winners_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_0_use_3_winners_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_0_use_3_winners_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://async-race/./src/components/winner/winners.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://async-race/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://async-race/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://async-race/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://async-race/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://async-race/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://async-race/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/api/addToWinners.ts":
/*!*********************************!*\
  !*** ./src/api/addToWinners.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst urls_1 = __webpack_require__(/*! ./urls */ \"./src/api/urls.ts\");\nasync function addToWinners(winner) {\n    const resp = await fetch(`${urls_1.BASEURL}${urls_1.endPoint.winners}`, {\n        method: \"POST\",\n        headers: {\n            \"Content-Type\": \"application/json\",\n        },\n        body: JSON.stringify(winner),\n    });\n    const result = await resp.json();\n    return result;\n}\nexports[\"default\"] = addToWinners;\n\n\n//# sourceURL=webpack://async-race/./src/api/addToWinners.ts?");

/***/ }),

/***/ "./src/api/addWinner.ts":
/*!******************************!*\
  !*** ./src/api/addWinner.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst addToWinners_1 = __importDefault(__webpack_require__(/*! ./addToWinners */ \"./src/api/addToWinners.ts\"));\nconst getData_1 = __webpack_require__(/*! ./getData */ \"./src/api/getData.ts\");\nconst updateWinner_1 = __importDefault(__webpack_require__(/*! ./updateWinner */ \"./src/api/updateWinner.ts\"));\nasync function addWinner(winner) {\n    const winners = await (0, getData_1.getWinners)();\n    const winnerInWinners = winners.find((car) => car.id === winner.id);\n    const lastTime = +(winner.distance / winner.velocity / 1000).toFixed(2);\n    if (!winnerInWinners) {\n        const winnerToAdd = {\n            id: winner.id,\n            wins: 1,\n            time: lastTime,\n        };\n        (0, addToWinners_1.default)(winnerToAdd);\n    }\n    else {\n        const winnerToUpdate = {\n            id: winnerInWinners.id,\n            wins: winnerInWinners.wins + 1,\n            time: Math.min(winnerInWinners.time, lastTime),\n        };\n        (0, updateWinner_1.default)(winnerToUpdate);\n    }\n}\nexports[\"default\"] = addWinner;\n\n\n//# sourceURL=webpack://async-race/./src/api/addWinner.ts?");

/***/ }),

/***/ "./src/api/createCar.ts":
/*!******************************!*\
  !*** ./src/api/createCar.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst urls_1 = __webpack_require__(/*! ./urls */ \"./src/api/urls.ts\");\nasync function createCar(car) {\n    const options = {\n        method: \"POST\",\n        headers: {\n            \"Content-Type\": \"application/json\",\n        },\n        body: JSON.stringify(car),\n    };\n    const response = await fetch(`${urls_1.BASEURL}${urls_1.endPoint.garage}`, options);\n    const createdCar = await response.json();\n    return createdCar;\n}\nexports[\"default\"] = createCar;\n\n\n//# sourceURL=webpack://async-race/./src/api/createCar.ts?");

/***/ }),

/***/ "./src/api/drive.ts":
/*!**************************!*\
  !*** ./src/api/drive.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst urls_1 = __webpack_require__(/*! ./urls */ \"./src/api/urls.ts\");\nasync function driveModeOn(id) {\n    const response = await fetch(`${urls_1.BASEURL}${urls_1.endPoint.engine}?id=${id}&status=drive`, {\n        method: \"PATCH\",\n    });\n    const { status } = response;\n    return status;\n}\nexports[\"default\"] = driveModeOn;\n\n\n//# sourceURL=webpack://async-race/./src/api/drive.ts?");

/***/ }),

/***/ "./src/api/getData.ts":
/*!****************************!*\
  !*** ./src/api/getData.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.editWinners = exports.getWinners = exports.getCars = void 0;\nconst urls_1 = __webpack_require__(/*! ./urls */ \"./src/api/urls.ts\");\nasync function getCars() {\n    const resp = await fetch(`${urls_1.BASEURL}${urls_1.endPoint.garage}`);\n    const cars = await resp.json();\n    return cars;\n}\nexports.getCars = getCars;\nasync function getWinners() {\n    const resp = await fetch(`${urls_1.BASEURL}${urls_1.endPoint.winners}`);\n    const winners = await resp.json();\n    return winners;\n}\nexports.getWinners = getWinners;\nasync function editWinners(winners) {\n    const cars = await getCars();\n    const editedWinners = winners\n        .filter((winner) => cars.find((car) => car.id === winner.id))\n        .map((winner) => {\n        const currentCar = cars.find((car) => car.id === winner.id);\n        const editedWinner = {\n            ...winner,\n            color: currentCar.color,\n            name: currentCar.name,\n        };\n        return editedWinner;\n    });\n    return editedWinners;\n}\nexports.editWinners = editWinners;\n\n\n//# sourceURL=webpack://async-race/./src/api/getData.ts?");

/***/ }),

/***/ "./src/api/getPage.ts":
/*!****************************!*\
  !*** ./src/api/getPage.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getWinnersPage = exports.getGaragePage = void 0;\nconst urls_1 = __webpack_require__(/*! ./urls */ \"./src/api/urls.ts\");\nasync function getGaragePage(n) {\n    const resp = await fetch(`${urls_1.BASEURL}${urls_1.endPoint.garage}?_page=${n}&_limit=7`);\n    const result = await resp.json();\n    return result;\n}\nexports.getGaragePage = getGaragePage;\nasync function getWinnersPage(n) {\n    const resp = await fetch(`${urls_1.BASEURL}${urls_1.endPoint.winners}?_page=${n}&_limit=10`);\n    const result = await resp.json();\n    return result;\n}\nexports.getWinnersPage = getWinnersPage;\n\n\n//# sourceURL=webpack://async-race/./src/api/getPage.ts?");

/***/ }),

/***/ "./src/api/getSortedWinners.ts":
/*!*************************************!*\
  !*** ./src/api/getSortedWinners.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst urls_1 = __webpack_require__(/*! ./urls */ \"./src/api/urls.ts\");\nconst getSortedWinners = async (page, toSort, sortOrder) => {\n    const resp = await fetch(`${urls_1.BASEURL}${urls_1.endPoint.winners}?_page=${page}&_limit=10&_sort=${toSort}&_order=${sortOrder}`);\n    const sortedWinners = await resp.json();\n    return sortedWinners;\n};\nexports[\"default\"] = getSortedWinners;\n\n\n//# sourceURL=webpack://async-race/./src/api/getSortedWinners.ts?");

/***/ }),

/***/ "./src/api/removeCar.ts":
/*!******************************!*\
  !*** ./src/api/removeCar.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst urls_1 = __webpack_require__(/*! ./urls */ \"./src/api/urls.ts\");\nasync function removeCar(id) {\n    const response = await fetch(`${urls_1.BASEURL}${urls_1.endPoint.garage}/${id}`, {\n        method: \"DELETE\",\n    });\n    await response.json();\n}\nexports[\"default\"] = removeCar;\n\n\n//# sourceURL=webpack://async-race/./src/api/removeCar.ts?");

/***/ }),

/***/ "./src/api/removeWinner.ts":
/*!*********************************!*\
  !*** ./src/api/removeWinner.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst urls_1 = __webpack_require__(/*! ./urls */ \"./src/api/urls.ts\");\nasync function removeWinner(id) {\n    const response = await fetch(`${urls_1.BASEURL}${urls_1.endPoint.winners}/${id}`, {\n        method: \"DELETE\",\n    });\n    const res = await response.json();\n    return res;\n}\nexports[\"default\"] = removeWinner;\n\n\n//# sourceURL=webpack://async-race/./src/api/removeWinner.ts?");

/***/ }),

/***/ "./src/api/startEngine.ts":
/*!********************************!*\
  !*** ./src/api/startEngine.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst urls_1 = __webpack_require__(/*! ./urls */ \"./src/api/urls.ts\");\nasync function startEngine(id) {\n    const response = await fetch(`${urls_1.BASEURL}${urls_1.endPoint.engine}?id=${id}&status=started`, {\n        method: \"PATCH\",\n    });\n    const data = await response.json();\n    return { id, ...data };\n}\nexports[\"default\"] = startEngine;\n\n\n//# sourceURL=webpack://async-race/./src/api/startEngine.ts?");

/***/ }),

/***/ "./src/api/stopEngine.ts":
/*!*******************************!*\
  !*** ./src/api/stopEngine.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst urls_1 = __webpack_require__(/*! ./urls */ \"./src/api/urls.ts\");\nasync function stopEngine(id) {\n    await fetch(`${urls_1.BASEURL}${urls_1.endPoint.engine}?id=${id}&status=stopped`, {\n        method: \"PATCH\",\n    });\n}\nexports[\"default\"] = stopEngine;\n\n\n//# sourceURL=webpack://async-race/./src/api/stopEngine.ts?");

/***/ }),

/***/ "./src/api/updateCar.ts":
/*!******************************!*\
  !*** ./src/api/updateCar.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst urls_1 = __webpack_require__(/*! ./urls */ \"./src/api/urls.ts\");\nasync function updateCar(car) {\n    const { id, ...body } = car;\n    const resp = await fetch(`${urls_1.BASEURL}${urls_1.endPoint.garage}/${car.id}`, {\n        method: \"PUT\",\n        headers: {\n            \"Content-Type\": \"application/json\",\n        },\n        body: JSON.stringify(body),\n    });\n    const result = await resp.json();\n    console.log(result);\n}\nexports[\"default\"] = updateCar;\n\n\n//# sourceURL=webpack://async-race/./src/api/updateCar.ts?");

/***/ }),

/***/ "./src/api/updateWinner.ts":
/*!*********************************!*\
  !*** ./src/api/updateWinner.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst urls_1 = __webpack_require__(/*! ./urls */ \"./src/api/urls.ts\");\nasync function updateWinner(winner) {\n    const resp = await fetch(`${urls_1.BASEURL}${urls_1.endPoint.winners}/${winner.id}`, {\n        method: \"PUT\",\n        headers: {\n            \"Content-Type\": \"application/json\",\n        },\n        body: JSON.stringify(winner),\n    });\n    const result = await resp.json();\n    return result;\n}\nexports[\"default\"] = updateWinner;\n\n\n//# sourceURL=webpack://async-race/./src/api/updateWinner.ts?");

/***/ }),

/***/ "./src/api/urls.ts":
/*!*************************!*\
  !*** ./src/api/urls.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.endPoint = exports.BASEURL = void 0;\nexports.BASEURL = \"http://127.0.0.1:3000\";\nexports.endPoint = {\n    garage: \"/garage\",\n    winners: \"/winners\",\n    engine: \"/engine\",\n};\n\n\n//# sourceURL=webpack://async-race/./src/api/urls.ts?");

/***/ }),

/***/ "./src/assets/icons/car..ts":
/*!**********************************!*\
  !*** ./src/assets/icons/car..ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst carImage = `<svg version=\"1.0\" xmlns=\"http://www.w3.org/2000/svg\"\n width=\"70px\" height=\"30px\" viewBox=\"0 0 1280.000000 640.000000\"\n preserveAspectRatio=\"xMidYMid meet\">\n<g transform=\"translate(0.000000,640.000000) scale(0.100000,-0.100000)\"\nstroke=\"none\">\n<path d=\"M7410 5305 c0 -3 -21 -73 -46 -156 -25 -83 -43 -153 -41 -156 5 -4\n179 -58 702 -214 252 -76 320 -102 1015 -391 410 -171 747 -312 750 -315 2 -2\n-262 -3 -588 -2 -325 1 -592 4 -592 8 0 3 23 35 52 70 l52 63 -25 19 c-74 57\n-263 133 -368 148 -57 8 -101 -3 -169 -44 -60 -36 -132 -163 -132 -233 l0 -23\n-332 3 -333 4 -640 72 c-352 39 -755 84 -895 99 l-254 28 -11 80 c-14 93 -30\n129 -97 209 -75 90 -94 137 -123 297 -38 212 -57 252 -126 264 -47 8 -98 -8\n-127 -38 -22 -23 -22 -24 -7 -158 8 -73 17 -152 20 -174 l5 -40 -24 45 c-33\n61 -61 89 -112 111 -40 18 -43 23 -49 67 -23 171 -82 282 -150 282 -32 0 -72\n-42 -101 -105 -23 -50 -29 -77 -51 -220 l-8 -49 -75 -22 c-41 -12 -198 -54\n-348 -94 l-273 -71 -66 37 -67 37 -230 -7 c-127 -3 -373 -11 -546 -17 -173 -5\n-720 -23 -1215 -39 l-900 -29 -120 -44 c-257 -95 -275 -106 -365 -223 -25 -32\n-64 -76 -87 -99 -40 -39 -44 -48 -123 -309 -62 -203 -79 -270 -69 -276 9 -6\n-4 -74 -56 -291 l-67 -283 6 -125 c10 -188 51 -459 80 -529 43 -108 87 -150\n394 -379 255 -190 292 -215 331 -219 25 -3 45 -6 46 -7 1 -1 16 -36 35 -77\n115 -255 333 -467 602 -585 553 -243 1226 -36 1526 468 l47 78 105 -5 c58 -3\n179 -11 270 -17 198 -13 369 -12 885 1 215 5 579 14 810 20 488 12 1068 26\n1620 40 215 5 768 19 1230 29 462 11 926 23 1032 26 l192 6 27 -53 c166 -329\n509 -523 894 -505 189 9 339 50 511 139 179 93 369 260 479 420 l44 65 126 7\nc69 3 224 6 345 6 255 0 276 3 575 76 228 55 275 73 342 125 34 27 41 44 107\n249 66 201 141 499 141 557 0 71 -128 233 -313 396 -206 181 -542 394 -846\n537 -634 299 -985 442 -1261 514 -69 18 -228 63 -355 101 -126 37 -331 89\n-455 115 -371 79 -437 99 -870 272 -223 89 -493 189 -600 224 -107 34 -280 90\n-385 124 -104 33 -204 63 -221 65 -17 3 -43 9 -58 15 -14 5 -26 7 -26 5z\"/>\n</g>\n</svg>`;\nexports[\"default\"] = carImage;\n\n\n//# sourceURL=webpack://async-race/./src/assets/icons/car..ts?");

/***/ }),

/***/ "./src/callbacks/animation.ts":
/*!************************************!*\
  !*** ./src/callbacks/animation.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.stopAnimation = exports.startAnimation = exports.startDrive = void 0;\nconst drive_1 = __importDefault(__webpack_require__(/*! ../api/drive */ \"./src/api/drive.ts\"));\nconst startEngine_1 = __importDefault(__webpack_require__(/*! ../api/startEngine */ \"./src/api/startEngine.ts\"));\nconst stopEngine_1 = __importDefault(__webpack_require__(/*! ../api/stopEngine */ \"./src/api/stopEngine.ts\"));\nconst animationIDs = [];\nconst animationID = {\n    id: 1,\n};\nconst startDrive = async (params, place) => {\n    const timeMSec = Math.round(params.distance / params.velocity);\n    const timeSec = timeMSec / 1000;\n    const times = timeSec * 60;\n    const { innerWidth } = window;\n    const distance = innerWidth - 20 - 100;\n    const step = distance / times;\n    const car = [...place.children].find((el) => +el.id === params.id)\n        .lastElementChild;\n    car.style.left = `${20 - step}px`;\n    const moveLeft = () => {\n        const way = parseFloat(car.style.left);\n        car.style.left = `${way + step}px`;\n        if (way < distance) {\n            const id = requestAnimationFrame(moveLeft);\n            animationIDs[params.id] = { animationId: id };\n        }\n    };\n    moveLeft();\n    const status = await (0, drive_1.default)(params.id);\n    if (status === 500) {\n        cancelAnimationFrame(animationIDs[params.id].animationId);\n        return Promise.reject();\n    }\n    return params.id;\n};\nexports.startDrive = startDrive;\nasync function startAnimation(e) {\n    const startBtn = e.target;\n    const stopBtn = startBtn.nextElementSibling;\n    stopBtn.disabled = false;\n    startBtn.disabled = true;\n    const { id } = startBtn.closest(\".track\");\n    const driveParams = await (0, startEngine_1.default)(+id);\n    const timeMSec = driveParams.distance / driveParams.velocity;\n    const timeSec = timeMSec / 1000;\n    const times = timeSec * 60;\n    const { innerWidth } = window;\n    const distance = innerWidth - 20 - 100;\n    const step = distance / times;\n    const car = startBtn.parentElement.nextElementSibling;\n    car.style.left = `${20 - step}px`;\n    const moveLeft = () => {\n        const way = parseFloat(car.style.left);\n        car.style.left = `${way + step}px`;\n        if (way < distance) {\n            animationID.id = requestAnimationFrame(moveLeft);\n        }\n    };\n    moveLeft();\n    const status = await (0, drive_1.default)(+id);\n    if (status === 500)\n        cancelAnimationFrame(animationID.id);\n}\nexports.startAnimation = startAnimation;\nasync function stopAnimation(e) {\n    const stopBtn = e.target;\n    const startBtn = stopBtn.previousElementSibling;\n    stopBtn.disabled = true;\n    startBtn.disabled = false;\n    const { id } = stopBtn.closest(\".track\");\n    await (0, stopEngine_1.default)(+id);\n    cancelAnimationFrame(animationID.id);\n    const car = stopBtn.parentElement.nextElementSibling;\n    car.style.left = `20px`;\n}\nexports.stopAnimation = stopAnimation;\n\n\n//# sourceURL=webpack://async-race/./src/callbacks/animation.ts?");

/***/ }),

/***/ "./src/callbacks/create.ts":
/*!*********************************!*\
  !*** ./src/callbacks/create.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst createCar_1 = __importDefault(__webpack_require__(/*! ../api/createCar */ \"./src/api/createCar.ts\"));\nconst track_1 = __importDefault(__webpack_require__(/*! ../components/garage/main/track */ \"./src/components/garage/main/track.ts\"));\nconst getCarParams = (e) => {\n    const { target } = e;\n    const btn = target;\n    const colorInput = btn.previousElementSibling;\n    const nameInput = colorInput.previousElementSibling;\n    const carParams = {\n        name: nameInput.value,\n        color: colorInput.value,\n    };\n    colorInput.value = \"\";\n    nameInput.value = \"\";\n    return carParams;\n};\nconst updateAmount = (heading) => {\n    const amountSpan = heading.firstElementChild;\n    const amount = +amountSpan.textContent.slice(1, -1);\n    amountSpan.textContent = `(${amount + 1})`;\n    return amount + 1;\n};\nconst getPageN = (place) => {\n    const pageSpan = place.children[1].firstElementChild;\n    const page = +pageSpan.textContent.slice(1);\n    return page;\n};\nconst createCallback = async (e, placeToAppend) => {\n    const carParams = getCarParams(e);\n    const car = await (0, createCar_1.default)(carParams);\n    const page = getPageN(placeToAppend);\n    const amount = updateAmount(placeToAppend.firstElementChild);\n    if (page * 7 >= amount) {\n        const track = (0, track_1.default)(car);\n        placeToAppend.append(track);\n    }\n    const nextBtn = placeToAppend.children[2]\n        .lastElementChild;\n    if (amount > page * 7) {\n        nextBtn.disabled = false;\n    }\n};\nexports[\"default\"] = createCallback;\n\n\n//# sourceURL=webpack://async-race/./src/callbacks/create.ts?");

/***/ }),

/***/ "./src/callbacks/edit.ts":
/*!*******************************!*\
  !*** ./src/callbacks/edit.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.updateCallback = exports.select = void 0;\nconst updateCar_1 = __importDefault(__webpack_require__(/*! ../api/updateCar */ \"./src/api/updateCar.ts\"));\nfunction select(e) {\n    const btn = e.target;\n    const garage = btn.closest(\".garage-view\");\n    const name = btn.nextElementSibling.nextElementSibling.textContent;\n    const track = btn.closest(\".track\");\n    const color = track.children[2].getAttribute(\"fill\");\n    const nameInput = garage.firstElementChild.children[1]\n        .firstElementChild;\n    const colorInput = garage.firstElementChild.children[1]\n        .children[1];\n    const updateBtn = garage.firstElementChild.children[1]\n        .lastElementChild;\n    updateBtn.disabled = false;\n    updateBtn.dataset.id = track.id;\n    nameInput.value = name;\n    colorInput.value = color;\n}\nexports.select = select;\nconst updateWinnerRow = (car, garage) => {\n    const tbody = garage.parentElement.nextElementSibling.children[2].children[1];\n    const row = tbody.querySelector(`[data-id=\"${car.id}\"]`);\n    if (row) {\n        row.children[1].firstElementChild.setAttribute(\"fill\", car.color);\n        row.children[2].textContent = car.name;\n    }\n};\nfunction updateCallback(e, garage) {\n    const btn = e.target;\n    const { id } = btn.dataset;\n    const track = garage.querySelector(`[id=\"${id}\"]`);\n    const nameToUpdate = track.firstElementChild.lastElementChild;\n    const imgToUpdate = track.lastElementChild;\n    const name = btn.previousElementSibling\n        .previousElementSibling;\n    const color = btn.previousElementSibling;\n    nameToUpdate.textContent = name.value;\n    imgToUpdate.setAttribute(\"fill\", color.value);\n    const carParams = {\n        id: +id,\n        color: color.value,\n        name: name.value,\n    };\n    updateWinnerRow(carParams, garage);\n    (0, updateCar_1.default)(carParams);\n    name.value = \"\";\n    color.value = \"black\";\n    btn.removeAttribute(\"data-id\");\n    btn.disabled = true;\n}\nexports.updateCallback = updateCallback;\n\n\n//# sourceURL=webpack://async-race/./src/callbacks/edit.ts?");

/***/ }),

/***/ "./src/callbacks/generate.ts":
/*!***********************************!*\
  !*** ./src/callbacks/generate.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst createCar_1 = __importDefault(__webpack_require__(/*! ../api/createCar */ \"./src/api/createCar.ts\"));\nconst updateTracks_1 = __importDefault(__webpack_require__(/*! ../render/updateTracks */ \"./src/render/updateTracks.ts\"));\nconst randomColor = () => {\n    const color = `#${Math.random().toString(16).slice(3, 9)}`;\n    return color;\n};\nconst firstName = [\n    \"Ferrari\",\n    \"Bugatti\",\n    \"Porsche\",\n    \"Toyota\",\n    \"Audi\",\n    \"Mercedes\",\n    \"Eagle\",\n    \"BMW\",\n    \"Honda\",\n    \"Subaru\",\n];\nconst lastName = [\n    \"Model_1\",\n    \"Model_2\",\n    \"Model_3\",\n    \"Model_4\",\n    \"Model_5\",\n    \"Model_6\",\n    \"Model_7\",\n    \"Model_8\",\n    \"Model_9\",\n    \"Model_10\",\n];\nconst getRandomName = (array) => {\n    const randomNumber = Math.floor(Math.random() * array.length);\n    return array[randomNumber];\n};\nconst generateCarParams = () => {\n    const carsOptions = [];\n    for (let i = 0; i < 100; i += 1) {\n        const carParams = {\n            name: `${getRandomName(firstName)} ${getRandomName(lastName)}`,\n            color: randomColor(),\n        };\n        carsOptions.push(carParams);\n    }\n    return carsOptions;\n};\nconst create100Cars = async (carsOptionsArray) => {\n    const promisedCars = carsOptionsArray.map((car) => (0, createCar_1.default)(car));\n    const createdCars = await Promise.all(promisedCars);\n    return createdCars;\n};\nconst generateCallback = (e, place) => {\n    create100Cars(generateCarParams());\n    const heading = place.firstElementChild.firstElementChild;\n    const amount = +heading.textContent.slice(1, -1);\n    const newAmount = amount + 100;\n    heading.textContent = `(${newAmount})`;\n    const pageSpan = place.children[1].firstElementChild;\n    const page = +pageSpan.textContent.slice(1);\n    const nextBtn = place.children[2].lastElementChild;\n    nextBtn.disabled = false;\n    (0, updateTracks_1.default)(page, place);\n};\nexports[\"default\"] = generateCallback;\n\n\n//# sourceURL=webpack://async-race/./src/callbacks/generate.ts?");

/***/ }),

/***/ "./src/callbacks/pagination.ts":
/*!*************************************!*\
  !*** ./src/callbacks/pagination.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.prev = exports.next = void 0;\nconst updateTracks_1 = __importDefault(__webpack_require__(/*! ../render/updateTracks */ \"./src/render/updateTracks.ts\"));\nconst next = async (e, place, heading) => {\n    const nextBtn = e.target;\n    const prevBtn = nextBtn.previousElementSibling;\n    prevBtn.disabled = false;\n    const pageSpan = place.children[1].firstElementChild;\n    const page = +pageSpan.textContent.slice(1);\n    const nextPage = page + 1;\n    pageSpan.textContent = `#${nextPage}`;\n    const carsAmount = +heading.firstElementChild.textContent.slice(1, -1);\n    if ((page + 1) * 7 >= carsAmount) {\n        nextBtn.disabled = true;\n    }\n    (0, updateTracks_1.default)(nextPage, place);\n};\nexports.next = next;\nconst prev = async (e, place) => {\n    const prevBtn = e.target;\n    const nextBtn = prevBtn.nextElementSibling;\n    nextBtn.disabled = false;\n    const pageSpan = place.children[1].firstElementChild;\n    const page = +pageSpan.textContent.slice(1);\n    const prevPage = page - 1;\n    pageSpan.textContent = `#${prevPage}`;\n    if (page === 2)\n        prevBtn.disabled = true;\n    (0, updateTracks_1.default)(prevPage, place);\n};\nexports.prev = prev;\n\n\n//# sourceURL=webpack://async-race/./src/callbacks/pagination.ts?");

/***/ }),

/***/ "./src/callbacks/race.ts":
/*!*******************************!*\
  !*** ./src/callbacks/race.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst getPage_1 = __webpack_require__(/*! ../api/getPage */ \"./src/api/getPage.ts\");\nconst startEngine_1 = __importDefault(__webpack_require__(/*! ../api/startEngine */ \"./src/api/startEngine.ts\"));\nconst message_view_1 = __importStar(__webpack_require__(/*! ../components/message/message-view */ \"./src/components/message/message-view.ts\"));\nconst addWinner_1 = __importDefault(__webpack_require__(/*! ../api/addWinner */ \"./src/api/addWinner.ts\"));\nconst animation_1 = __webpack_require__(/*! ./animation */ \"./src/callbacks/animation.ts\");\nconst disableButtons = (buttons) => {\n    buttons.forEach((button) => {\n        const el = button;\n        el.disabled = true;\n    });\n};\nconst enableButtons = (buttons) => {\n    buttons.forEach((button) => {\n        const el = button;\n        if (!el.classList.contains(\"stop\"))\n            el.disabled = false;\n    });\n};\nasync function startRace(e) {\n    const raceBtn = e.target;\n    const resetBtn = raceBtn.nextElementSibling;\n    const generateBtn = resetBtn.nextElementSibling;\n    const garage = raceBtn.closest(\".select\").nextElementSibling;\n    const buttons = [\n        raceBtn,\n        resetBtn,\n        generateBtn,\n        ...garage.querySelectorAll(\"button\"),\n    ];\n    disableButtons(buttons);\n    const page = +garage.children[1].firstElementChild.textContent.slice(1);\n    const currentCars = await (0, getPage_1.getGaragePage)(page);\n    const promisedCars = currentCars.map((car) => (0, startEngine_1.default)(car.id));\n    const carParams = await Promise.all(promisedCars);\n    const promisedCarParams = carParams.map((params) => (0, animation_1.startDrive)(params, garage));\n    const maxTime = Math.max(...carParams.map((car) => car.distance / car.velocity));\n    setTimeout(() => {\n        enableButtons(buttons);\n    }, maxTime);\n    let winner;\n    try {\n        const winnerID = await Promise.any(promisedCarParams);\n        const winnerCar = currentCars.find((el) => el.id === winnerID);\n        const winnerParams = carParams.find((param) => param.id === winnerID);\n        winner = { ...winnerCar, ...winnerParams };\n        console.log(winner);\n        (0, message_view_1.default)(winner);\n        (0, addWinner_1.default)(winner);\n    }\n    catch {\n        message_view_1.message.textContent = \"All cars have been broken\";\n        enableButtons(buttons);\n    }\n    return winner;\n}\nexports[\"default\"] = startRace;\n\n\n//# sourceURL=webpack://async-race/./src/callbacks/race.ts?");

/***/ }),

/***/ "./src/callbacks/remove.ts":
/*!*********************************!*\
  !*** ./src/callbacks/remove.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst getData_1 = __webpack_require__(/*! ../api/getData */ \"./src/api/getData.ts\");\nconst removeCar_1 = __importDefault(__webpack_require__(/*! ../api/removeCar */ \"./src/api/removeCar.ts\"));\nconst removeWinner_1 = __importDefault(__webpack_require__(/*! ../api/removeWinner */ \"./src/api/removeWinner.ts\"));\nconst winners_1 = __importDefault(__webpack_require__(/*! ../components/winner/winners */ \"./src/components/winner/winners.ts\"));\nconst updateAmount = (heading) => {\n    const amountSpan = heading.firstElementChild;\n    const amount = +amountSpan.textContent.slice(1, -1);\n    amountSpan.textContent = `(${amount - 1})`;\n};\nconst removeFromWinners = async (id) => {\n    const winners = await (0, getData_1.getWinners)();\n    const isWinner = !!winners.filter((el) => el.id === id).length;\n    if (isWinner)\n        (0, removeWinner_1.default)(id);\n};\nasync function remove(e) {\n    const { target } = e;\n    const btn = target;\n    const track = btn.closest(\".track\");\n    const { id } = track;\n    const garage = track.closest(\".garage\");\n    const page = +garage.children[1].firstElementChild.textContent.slice(1);\n    await removeFromWinners(+id);\n    await (0, removeCar_1.default)(+id);\n    updateAmount(garage.firstElementChild);\n    const row = [...winners_1.default.children[2].children[1].children].find((el) => el.id === id);\n    if (row) {\n        row.remove();\n    }\n    track.remove();\n    return [page, garage];\n}\nexports[\"default\"] = remove;\n\n\n//# sourceURL=webpack://async-race/./src/callbacks/remove.ts?");

/***/ }),

/***/ "./src/callbacks/reset.ts":
/*!********************************!*\
  !*** ./src/callbacks/reset.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst stopEngine_1 = __importDefault(__webpack_require__(/*! ../api/stopEngine */ \"./src/api/stopEngine.ts\"));\nasync function resetRace(e, garage) {\n    const resetBtn = e.target;\n    const raceBtn = resetBtn.previousElementSibling;\n    raceBtn.disabled = false;\n    const tracks = [...garage.children].filter((el) => el.classList.contains(\"track\"));\n    const carsImg = tracks.map((track) => track.lastElementChild);\n    carsImg.forEach((car) => {\n        const elem = car;\n        elem.style.left = `20px`;\n    });\n    const winMessage = [...document.body.children].find((el) => el.classList.contains(\"message\"));\n    if (winMessage)\n        winMessage.remove();\n    const IDs = tracks.map((track) => +track.id);\n    IDs.forEach((id) => (0, stopEngine_1.default)(id));\n}\nexports[\"default\"] = resetRace;\n\n\n//# sourceURL=webpack://async-race/./src/callbacks/reset.ts?");

/***/ }),

/***/ "./src/callbacks/sort.ts":
/*!*******************************!*\
  !*** ./src/callbacks/sort.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst getData_1 = __webpack_require__(/*! ../api/getData */ \"./src/api/getData.ts\");\nconst getSortedWinners_1 = __importDefault(__webpack_require__(/*! ../api/getSortedWinners */ \"./src/api/getSortedWinners.ts\"));\nconst fillTable_1 = __importDefault(__webpack_require__(/*! ../render/fillTable */ \"./src/render/fillTable.ts\"));\nconst getPage = (table) => {\n    const pageSpan = table.previousElementSibling.previousElementSibling.firstElementChild;\n    const page = pageSpan.textContent.slice(1);\n    return +page;\n};\nconst sortTable = async (e) => {\n    const btn = e.target;\n    const table = btn.closest(\".winners__table\");\n    const activeBtn = table.querySelector(\".active\");\n    if (activeBtn)\n        activeBtn.classList.remove(\"active\");\n    btn.classList.add(\"active\");\n    const page = getPage(table);\n    const { sortOrder, column } = btn.dataset;\n    const sortedWinners = await (0, getSortedWinners_1.default)(page, column, sortOrder);\n    const edittedSortedWinners = await (0, getData_1.editWinners)(sortedWinners);\n    console.log(sortedWinners);\n    const tbody = table.lastElementChild;\n    tbody.innerHTML = \"\";\n    (0, fillTable_1.default)(edittedSortedWinners, page, tbody);\n};\nexports[\"default\"] = sortTable;\n\n\n//# sourceURL=webpack://async-race/./src/callbacks/sort.ts?");

/***/ }),

/***/ "./src/callbacks/winnerPagination.ts":
/*!*******************************************!*\
  !*** ./src/callbacks/winnerPagination.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.prevCallback = exports.nextCallback = void 0;\nconst changeTableContext_1 = __importDefault(__webpack_require__(/*! ../render/changeTableContext */ \"./src/render/changeTableContext.ts\"));\nconst nextCallback = async (e, place, heading) => {\n    const nextBtn = e.target;\n    const prevBtn = nextBtn.previousElementSibling;\n    prevBtn.disabled = false;\n    const pageSpan = place.children[1].firstElementChild;\n    const currentPage = +pageSpan.textContent.slice(1);\n    const nextPage = currentPage + 1;\n    pageSpan.textContent = `#${nextPage}`;\n    const amount = +heading.firstElementChild.textContent.slice(1, -1);\n    if (nextPage * 10 >= amount) {\n        nextBtn.disabled = true;\n    }\n    (0, changeTableContext_1.default)(place, nextPage);\n};\nexports.nextCallback = nextCallback;\nconst prevCallback = (e, place) => {\n    const prevBtn = e.target;\n    const nextBtn = prevBtn.nextElementSibling;\n    nextBtn.disabled = false;\n    const pageSpan = place.children[1].firstElementChild;\n    const currentPage = +pageSpan.textContent.slice(1);\n    const prevPage = currentPage - 1;\n    pageSpan.textContent = `#${prevPage}`;\n    if (prevPage === 1)\n        prevBtn.disabled = true;\n    (0, changeTableContext_1.default)(place, prevPage);\n};\nexports.prevCallback = prevCallback;\n\n\n//# sourceURL=webpack://async-race/./src/callbacks/winnerPagination.ts?");

/***/ }),

/***/ "./src/components/garage/garage-view.ts":
/*!**********************************************!*\
  !*** ./src/components/garage/garage-view.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__webpack_require__(/*! ./garage.scss */ \"./src/components/garage/garage.scss\");\nconst createElement_1 = __importDefault(__webpack_require__(/*! ../../utils/createElement */ \"./src/utils/createElement.ts\"));\nconst select_view_1 = __importDefault(__webpack_require__(/*! ./select/select-view */ \"./src/components/garage/select/select-view.ts\"));\nconst main_view_1 = __importDefault(__webpack_require__(/*! ./main/main-view */ \"./src/components/garage/main/main-view.ts\"));\nconst message_view_1 = __webpack_require__(/*! ../message/message-view */ \"./src/components/message/message-view.ts\");\nfunction createGarage() {\n    const garage = (0, createElement_1.default)({\n        tag: \"main\",\n        className: [\"garage-view\"],\n    });\n    const garageView = (0, main_view_1.default)();\n    const selection = (0, select_view_1.default)(garageView);\n    garage.append(selection, garageView, message_view_1.message);\n    return garage;\n}\nconst garage = createGarage();\nexports[\"default\"] = garage;\n\n\n//# sourceURL=webpack://async-race/./src/components/garage/garage-view.ts?");

/***/ }),

/***/ "./src/components/garage/main/main-view.ts":
/*!*************************************************!*\
  !*** ./src/components/garage/main/main-view.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.addTracks = exports.pageCountView = void 0;\nconst getData_1 = __webpack_require__(/*! ../../../api/getData */ \"./src/api/getData.ts\");\nconst getPage_1 = __webpack_require__(/*! ../../../api/getPage */ \"./src/api/getPage.ts\");\nconst pagination_1 = __webpack_require__(/*! ../../../callbacks/pagination */ \"./src/callbacks/pagination.ts\");\nconst remove_1 = __importDefault(__webpack_require__(/*! ../../../callbacks/remove */ \"./src/callbacks/remove.ts\"));\nconst addLastTrack_1 = __importDefault(__webpack_require__(/*! ../../../render/addLastTrack */ \"./src/render/addLastTrack.ts\"));\nconst createButton_1 = __importDefault(__webpack_require__(/*! ../../../utils/createButton */ \"./src/utils/createButton.ts\"));\nconst createElement_1 = __importDefault(__webpack_require__(/*! ../../../utils/createElement */ \"./src/utils/createElement.ts\"));\nconst track_1 = __importDefault(__webpack_require__(/*! ./track */ \"./src/components/garage/main/track.ts\"));\nexports.pageCountView = (0, createElement_1.default)({\n    tag: \"span\",\n    className: [\"pages__count\"],\n    text: `#1`,\n});\nfunction createPageView() {\n    const pageHeading = (0, createElement_1.default)({\n        tag: \"h3\",\n        className: [\"garage__pages\"],\n        text: \"Page \",\n    });\n    pageHeading.append(exports.pageCountView);\n    return pageHeading;\n}\nfunction createHeading() {\n    const heading = (0, createElement_1.default)({\n        tag: \"h2\",\n        className: [\"heading\", \"garage__heading\"],\n        text: \"Garage \",\n    });\n    const carsAmountView = (0, createElement_1.default)({\n        tag: \"span\",\n        className: [\"garage__count\"],\n    });\n    heading.append(carsAmountView);\n    return heading;\n}\nfunction createPagination(garage, heading) {\n    const pagination = (0, createElement_1.default)({\n        tag: \"div\",\n        className: [\"garage__pagination\"],\n    });\n    const prevBtn = (0, createButton_1.default)([\"button\", \"prev\"], \"prev\", (e) => (0, pagination_1.prev)(e, garage, heading));\n    prevBtn.disabled = true;\n    const nextBtn = (0, createButton_1.default)([\"button\", \"next\"], \"next\", (e) => (0, pagination_1.next)(e, garage, heading));\n    pagination.append(prevBtn, nextBtn);\n    return pagination;\n}\nfunction createGarageView() {\n    const garage = (0, createElement_1.default)({\n        tag: \"section\",\n        className: [\"garage\"],\n    });\n    const heading = createHeading();\n    const pages = createPageView();\n    const pagination = createPagination(garage, heading);\n    garage.append(heading, pages, pagination);\n    garage.addEventListener(\"click\", async (e) => {\n        const target = e.target;\n        if (target.classList.contains(\"remove-btn\")) {\n            const data = await (0, remove_1.default)(e);\n            (0, addLastTrack_1.default)(...data);\n        }\n    });\n    return garage;\n}\nexports[\"default\"] = createGarageView;\nasync function addTracks(placeToAppend) {\n    const currentCars = await (0, getPage_1.getGaragePage)(1);\n    const allCars = await (0, getData_1.getCars)();\n    const carsAmount = allCars.length;\n    const heading = placeToAppend.firstElementChild.firstElementChild;\n    heading.textContent = `(${carsAmount})`;\n    currentCars.forEach((car) => {\n        const track = (0, track_1.default)(car);\n        placeToAppend.append(track);\n    });\n    return allCars.length;\n}\nexports.addTracks = addTracks;\n\n\n//# sourceURL=webpack://async-race/./src/components/garage/main/main-view.ts?");

/***/ }),

/***/ "./src/components/garage/main/track.ts":
/*!*********************************************!*\
  !*** ./src/components/garage/main/track.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst car_1 = __importDefault(__webpack_require__(/*! ../../../assets/icons/car. */ \"./src/assets/icons/car..ts\"));\nconst edit_1 = __webpack_require__(/*! ../../../callbacks/edit */ \"./src/callbacks/edit.ts\");\nconst animation_1 = __webpack_require__(/*! ../../../callbacks/animation */ \"./src/callbacks/animation.ts\");\nconst createButton_1 = __importDefault(__webpack_require__(/*! ../../../utils/createButton */ \"./src/utils/createButton.ts\"));\nconst createElement_1 = __importDefault(__webpack_require__(/*! ../../../utils/createElement */ \"./src/utils/createElement.ts\"));\nfunction createButtonCont(carName) {\n    const cont = (0, createElement_1.default)({\n        tag: \"div\",\n        className: [\"track__controls\"],\n    });\n    const selectButton = (0, createButton_1.default)([\"button\", \"select-btn\"], \"select\", edit_1.select);\n    const removeButton = (0, createButton_1.default)([\"button\", \"remove-btn\"], \"remove\");\n    const name = (0, createElement_1.default)({\n        tag: \"span\",\n        className: [\"name\"],\n        text: carName,\n    });\n    cont.append(selectButton, removeButton, name);\n    return cont;\n}\nconst createDriveButtonsCont = () => {\n    const cont = (0, createElement_1.default)({\n        tag: \"div\",\n        className: [\"track__drive\"],\n    });\n    const startButton = (0, createButton_1.default)([\"button\", \"start\"], \"Start\", animation_1.startAnimation);\n    const stopButton = (0, createButton_1.default)([\"button\", \"stop\"], \"Stop\", animation_1.stopAnimation);\n    stopButton.disabled = true;\n    cont.append(startButton, stopButton);\n    return cont;\n};\nconst createCar = () => {\n    const wrapper = (0, createElement_1.default)({\n        tag: \"div\",\n        className: [\"car\"],\n    });\n    wrapper.innerHTML = car_1.default;\n    return wrapper;\n};\nfunction createTrack(car) {\n    const track = (0, createElement_1.default)({\n        tag: \"div\",\n        className: [\"track\"],\n    });\n    track.id = car.id.toString();\n    const buttonCont = createButtonCont(car.name);\n    const driveButtonsCont = createDriveButtonsCont();\n    const carWrapper = createCar();\n    const carImg = carWrapper.firstElementChild;\n    carImg.setAttribute(\"fill\", car.color);\n    track.append(buttonCont, driveButtonsCont, carImg);\n    return track;\n}\nexports[\"default\"] = createTrack;\n\n\n//# sourceURL=webpack://async-race/./src/components/garage/main/track.ts?");

/***/ }),

/***/ "./src/components/garage/select/select-view.ts":
/*!*****************************************************!*\
  !*** ./src/components/garage/select/select-view.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst create_1 = __importDefault(__webpack_require__(/*! ../../../callbacks/create */ \"./src/callbacks/create.ts\"));\nconst edit_1 = __webpack_require__(/*! ../../../callbacks/edit */ \"./src/callbacks/edit.ts\");\nconst generate_1 = __importDefault(__webpack_require__(/*! ../../../callbacks/generate */ \"./src/callbacks/generate.ts\"));\nconst race_1 = __importDefault(__webpack_require__(/*! ../../../callbacks/race */ \"./src/callbacks/race.ts\"));\nconst reset_1 = __importDefault(__webpack_require__(/*! ../../../callbacks/reset */ \"./src/callbacks/reset.ts\"));\nconst createButton_1 = __importDefault(__webpack_require__(/*! ../../../utils/createButton */ \"./src/utils/createButton.ts\"));\nconst createElement_1 = __importDefault(__webpack_require__(/*! ../../../utils/createElement */ \"./src/utils/createElement.ts\"));\nfunction createSelectLine(text, callback, place) {\n    const selectLine = (0, createElement_1.default)({ tag: \"div\", className: [\"select__line\"] });\n    const inputName = (0, createElement_1.default)({\n        tag: \"input\",\n        className: [\"select__input\"],\n    });\n    const inputColor = (0, createElement_1.default)({\n        tag: \"input\",\n        className: [\"select__color\"],\n    });\n    inputColor.type = \"color\";\n    const btn = (0, createButton_1.default)([\"button\", `${text}-button`], `${text}`, (e) => callback(e, place));\n    if (btn.classList.contains(\"update-button\"))\n        btn.disabled = true;\n    selectLine.append(inputName, inputColor, btn);\n    return selectLine;\n}\nfunction createButtonsLine(place) {\n    const buttonsLine = (0, createElement_1.default)({\n        tag: \"div\",\n        className: [\"select__line\"],\n    });\n    const raceButton = (0, createButton_1.default)([\"button\", \"race-btn\"], \"race\", race_1.default);\n    const resetButton = (0, createButton_1.default)([\"button\", \"reset-btn\"], \"reset\", (e) => (0, reset_1.default)(e, place));\n    const generateButton = (0, createButton_1.default)([\"button\", \"generate-btn\"], \"generate cars\", (e) => (0, generate_1.default)(e, place));\n    buttonsLine.append(raceButton, resetButton, generateButton);\n    return buttonsLine;\n}\nfunction createSelectView(place) {\n    const selectCont = (0, createElement_1.default)({\n        tag: \"section\",\n        className: [\"select\"],\n    });\n    const createLine = createSelectLine(\"create\", create_1.default, place);\n    const updateLine = createSelectLine(\"update\", edit_1.updateCallback, place);\n    const buttonsLine = createButtonsLine(place);\n    selectCont.append(createLine, updateLine, buttonsLine);\n    return selectCont;\n}\nexports[\"default\"] = createSelectView;\n\n\n//# sourceURL=webpack://async-race/./src/components/garage/select/select-view.ts?");

/***/ }),

/***/ "./src/components/header/header-view.ts":
/*!**********************************************!*\
  !*** ./src/components/header/header-view.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst updateWinnerTable_1 = __importDefault(__webpack_require__(/*! ../../render/updateWinnerTable */ \"./src/render/updateWinnerTable.ts\"));\nconst createButton_1 = __importDefault(__webpack_require__(/*! ../../utils/createButton */ \"./src/utils/createButton.ts\"));\nconst createElement_1 = __importDefault(__webpack_require__(/*! ../../utils/createElement */ \"./src/utils/createElement.ts\"));\nconst garage_view_1 = __importDefault(__webpack_require__(/*! ../garage/garage-view */ \"./src/components/garage/garage-view.ts\"));\nconst winners_1 = __importDefault(__webpack_require__(/*! ../winner/winners */ \"./src/components/winner/winners.ts\"));\n__webpack_require__(/*! ./header.scss */ \"./src/components/header/header.scss\");\nconst garageCallback = () => {\n    garage_view_1.default.classList.remove(\"hidden\");\n    winners_1.default.classList.add(\"hidden\");\n};\nconst garageButton = (0, createButton_1.default)([\"button\", \"garage-btn\"], \"To garage\", garageCallback);\nconst winnersCallback = () => {\n    winners_1.default.classList.remove(\"hidden\");\n    garage_view_1.default.classList.add(\"hidden\");\n    (0, updateWinnerTable_1.default)();\n};\nconst winnersButton = (0, createButton_1.default)([\"button\", \"winners-btn\"], \"To winners\", winnersCallback);\nfunction createHeader() {\n    const headerOptions = {\n        tag: \"header\",\n        className: [\"header\"],\n    };\n    const header = (0, createElement_1.default)(headerOptions);\n    header.append(garageButton, winnersButton);\n    return header;\n}\nexports[\"default\"] = createHeader;\n\n\n//# sourceURL=webpack://async-race/./src/components/header/header-view.ts?");

/***/ }),

/***/ "./src/components/message/message-view.ts":
/*!************************************************!*\
  !*** ./src/components/message/message-view.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.message = void 0;\n__webpack_require__(/*! ./message.scss */ \"./src/components/message/message.scss\");\nconst createElement_1 = __importDefault(__webpack_require__(/*! ../../utils/createElement */ \"./src/utils/createElement.ts\"));\nfunction createWinMessage() {\n    const messageOptions = {\n        tag: \"div\",\n        className: [\"message\"],\n    };\n    const message = (0, createElement_1.default)(messageOptions);\n    return message;\n}\nexports.message = createWinMessage();\nfunction addWinMessageText(car) {\n    const winTme = (car.distance / car.velocity / 1000).toFixed(2);\n    exports.message.textContent = `${car.name} wins in ${winTme}s`;\n}\nexports[\"default\"] = addWinMessageText;\n\n\n//# sourceURL=webpack://async-race/./src/components/message/message-view.ts?");

/***/ }),

/***/ "./src/components/view.ts":
/*!********************************!*\
  !*** ./src/components/view.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst main_view_1 = __webpack_require__(/*! ./garage/main/main-view */ \"./src/components/garage/main/main-view.ts\");\nconst garage_view_1 = __importDefault(__webpack_require__(/*! ./garage/garage-view */ \"./src/components/garage/garage-view.ts\"));\nconst header_view_1 = __importDefault(__webpack_require__(/*! ./header/header-view */ \"./src/components/header/header-view.ts\"));\nconst winners_1 = __importDefault(__webpack_require__(/*! ./winner/winners */ \"./src/components/winner/winners.ts\"));\nconst winners_table_1 = __webpack_require__(/*! ./winner/winners-table */ \"./src/components/winner/winners-table.ts\");\nconst message_view_1 = __webpack_require__(/*! ./message/message-view */ \"./src/components/message/message-view.ts\");\nasync function makeView() {\n    const header = (0, header_view_1.default)();\n    const totalCarsAmount = await (0, main_view_1.addTracks)(garage_view_1.default.children[1]);\n    if (totalCarsAmount < 8) {\n        const nextBtn = garage_view_1.default.children[1].children[2]\n            .lastElementChild;\n        nextBtn.disabled = true;\n    }\n    const table = [...winners_1.default.children].find((el) => el.classList.contains(\"winners__table\"));\n    await (0, winners_table_1.addWinners)(table.children[1]);\n    document.body.append(header, garage_view_1.default, winners_1.default);\n    garage_view_1.default.addEventListener(\"click\", () => {\n        message_view_1.message.textContent = \"\";\n    });\n}\nexports[\"default\"] = makeView;\n\n\n//# sourceURL=webpack://async-race/./src/components/view.ts?");

/***/ }),

/***/ "./src/components/winner/winners-table.ts":
/*!************************************************!*\
  !*** ./src/components/winner/winners-table.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.addWinners = void 0;\nconst getData_1 = __webpack_require__(/*! ../../api/getData */ \"./src/api/getData.ts\");\nconst getPage_1 = __webpack_require__(/*! ../../api/getPage */ \"./src/api/getPage.ts\");\nconst sort_1 = __importDefault(__webpack_require__(/*! ../../callbacks/sort */ \"./src/callbacks/sort.ts\"));\nconst fillTable_1 = __importDefault(__webpack_require__(/*! ../../render/fillTable */ \"./src/render/fillTable.ts\"));\nconst createElement_1 = __importDefault(__webpack_require__(/*! ../../utils/createElement */ \"./src/utils/createElement.ts\"));\nconst createSortedTH = (headingElements) => {\n    const sortTH = [headingElements[3], headingElements[4]];\n    const columnDataset = [\"wins\", \"time\"];\n    sortTH.forEach((th, i) => {\n        const arrowCont = (0, createElement_1.default)({\n            tag: \"div\",\n            className: [\"sort\"],\n        });\n        const sortUp = (0, createElement_1.default)({\n            tag: \"div\",\n            className: [\"sort__up\"],\n        });\n        sortUp.dataset.sortOrder = \"ASC\";\n        sortUp.dataset.column = columnDataset[i];\n        sortUp.addEventListener(\"click\", sort_1.default);\n        const sortDown = (0, createElement_1.default)({\n            tag: \"div\",\n            className: [\"sort__down\"],\n        });\n        sortDown.dataset.sortOrder = \"DESC\";\n        sortDown.dataset.column = columnDataset[i];\n        sortDown.addEventListener(\"click\", sort_1.default);\n        arrowCont.append(sortUp, sortDown);\n        th.append(arrowCont);\n    });\n};\nconst createTableHead = () => {\n    const head = (0, createElement_1.default)({\n        tag: \"thead\",\n    });\n    const row = (0, createElement_1.default)({\n        tag: \"tr\",\n    });\n    const headings = [\"№\", \"Car\", \"Name\", \"Wins\", \"Best time\"];\n    const headingElements = headings.map((el) => (0, createElement_1.default)({\n        tag: \"th\",\n        text: el,\n    }));\n    createSortedTH(headingElements);\n    row.append(...headingElements);\n    head.append(row);\n    return head;\n};\nfunction createWinnersTable() {\n    const table = (0, createElement_1.default)({\n        tag: \"table\",\n        className: [\"winners__table\"],\n    });\n    const tableBody = (0, createElement_1.default)({ tag: \"tbody\" });\n    const head = createTableHead();\n    table.append(head, tableBody);\n    return table;\n}\nexports[\"default\"] = createWinnersTable;\nasync function addWinners(placeToAppend, pageNumber = 1) {\n    const winners = await (0, getPage_1.getWinnersPage)(pageNumber);\n    const editedWinners = await (0, getData_1.editWinners)(winners);\n    (0, fillTable_1.default)(editedWinners, pageNumber, placeToAppend);\n}\nexports.addWinners = addWinners;\n\n\n//# sourceURL=webpack://async-race/./src/components/winner/winners-table.ts?");

/***/ }),

/***/ "./src/components/winner/winners.ts":
/*!******************************************!*\
  !*** ./src/components/winner/winners.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst winnerPagination_1 = __webpack_require__(/*! ../../callbacks/winnerPagination */ \"./src/callbacks/winnerPagination.ts\");\nconst createButton_1 = __importDefault(__webpack_require__(/*! ../../utils/createButton */ \"./src/utils/createButton.ts\"));\nconst createElement_1 = __importDefault(__webpack_require__(/*! ../../utils/createElement */ \"./src/utils/createElement.ts\"));\nconst winners_table_1 = __importDefault(__webpack_require__(/*! ./winners-table */ \"./src/components/winner/winners-table.ts\"));\n__webpack_require__(/*! ./winners.scss */ \"./src/components/winner/winners.scss\");\nfunction createHeading() {\n    const heading = (0, createElement_1.default)({\n        tag: \"h2\",\n        className: [\"heading\", \"winners__heading\"],\n        text: \"Winners \",\n    });\n    const winnersAmount = 0;\n    const winnersAmountView = (0, createElement_1.default)({\n        tag: \"span\",\n        className: [\"winners__count\"],\n        text: `(${winnersAmount})`,\n    });\n    heading.append(winnersAmountView);\n    return heading;\n}\nfunction createPageView() {\n    const pageHeading = (0, createElement_1.default)({\n        tag: \"h3\",\n        className: [\"winners__pages\"],\n        text: \"Page \",\n    });\n    const pageCount = 1;\n    const pageCountView = (0, createElement_1.default)({\n        tag: \"span\",\n        className: [\"pages__count\"],\n        text: `#${pageCount}`,\n    });\n    pageHeading.append(pageCountView);\n    return pageHeading;\n}\nfunction createPagination(winners, heading) {\n    const paginCont = (0, createElement_1.default)({\n        tag: \"div\",\n        className: [\"winners__pagination\"],\n    });\n    const prevBtn = (0, createButton_1.default)([\"button\", \"prev\"], \"prev\", (e) => (0, winnerPagination_1.prevCallback)(e, winners));\n    prevBtn.disabled = true;\n    const nextBtn = (0, createButton_1.default)([\"button\", \"next\"], \"next\", (e) => (0, winnerPagination_1.nextCallback)(e, winners, heading));\n    paginCont.append(prevBtn, nextBtn);\n    return paginCont;\n}\nfunction createWinners() {\n    const winners = (0, createElement_1.default)({\n        tag: \"main\",\n        className: [\"winners\", \"hidden\"],\n    });\n    const heading = createHeading();\n    const pages = createPageView();\n    const paginCont = createPagination(winners, heading);\n    const table = (0, winners_table_1.default)();\n    winners.append(heading, pages, paginCont, table);\n    return winners;\n}\nconst winner = createWinners();\nexports[\"default\"] = winner;\n\n\n//# sourceURL=webpack://async-race/./src/components/winner/winners.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst view_1 = __importDefault(__webpack_require__(/*! ./components/view */ \"./src/components/view.ts\"));\n(0, view_1.default)();\n\n\n//# sourceURL=webpack://async-race/./src/index.ts?");

/***/ }),

/***/ "./src/render/addLastTrack.ts":
/*!************************************!*\
  !*** ./src/render/addLastTrack.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst getPage_1 = __webpack_require__(/*! ../api/getPage */ \"./src/api/getPage.ts\");\nconst track_1 = __importDefault(__webpack_require__(/*! ../components/garage/main/track */ \"./src/components/garage/main/track.ts\"));\nconst addLastTrack = async (page, place) => {\n    const cars = await (0, getPage_1.getGaragePage)(page);\n    if (cars.length === 7) {\n        const lastCar = cars.at(-1);\n        const track = (0, track_1.default)(lastCar);\n        place.append(track);\n    }\n};\nexports[\"default\"] = addLastTrack;\n\n\n//# sourceURL=webpack://async-race/./src/render/addLastTrack.ts?");

/***/ }),

/***/ "./src/render/changeTableContext.ts":
/*!******************************************!*\
  !*** ./src/render/changeTableContext.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst getData_1 = __webpack_require__(/*! ../api/getData */ \"./src/api/getData.ts\");\nconst getSortedWinners_1 = __importDefault(__webpack_require__(/*! ../api/getSortedWinners */ \"./src/api/getSortedWinners.ts\"));\nconst winners_table_1 = __webpack_require__(/*! ../components/winner/winners-table */ \"./src/components/winner/winners-table.ts\");\nconst fillTable_1 = __importDefault(__webpack_require__(/*! ./fillTable */ \"./src/render/fillTable.ts\"));\nfunction checkActiveSort(place) {\n    const table = [...place.children].find((el) => el.classList.contains(\"winners__table\"));\n    const active = table.querySelector(\".active\");\n    const activeSort = active;\n    return activeSort;\n}\nasync function addSortedWinners(activeSort, page, tbody) {\n    const toSort = activeSort.dataset.column;\n    const { sortOrder } = activeSort.dataset;\n    const sortedWinners = await (0, getSortedWinners_1.default)(page, toSort, sortOrder);\n    const edittedSortedwinner = await (0, getData_1.editWinners)(sortedWinners);\n    (0, fillTable_1.default)(edittedSortedwinner, page, tbody);\n}\nconst changeTableContent = (place, page) => {\n    const activeSort = checkActiveSort(place);\n    const tbody = [...place.children].find((el) => el.classList.contains(\"winners__table\")).lastElementChild;\n    tbody.innerHTML = \"\";\n    if (activeSort) {\n        addSortedWinners(activeSort, page, tbody);\n    }\n    else {\n        (0, winners_table_1.addWinners)(tbody, page);\n    }\n};\nexports[\"default\"] = changeTableContent;\n\n\n//# sourceURL=webpack://async-race/./src/render/changeTableContext.ts?");

/***/ }),

/***/ "./src/render/fillTable.ts":
/*!*********************************!*\
  !*** ./src/render/fillTable.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst car_1 = __importDefault(__webpack_require__(/*! ../assets/icons/car. */ \"./src/assets/icons/car..ts\"));\nconst createElement_1 = __importDefault(__webpack_require__(/*! ../utils/createElement */ \"./src/utils/createElement.ts\"));\nfunction fillTable(winners, page, placeToAppend) {\n    let n = (page - 1) * 10 + 1;\n    winners.forEach((winner) => {\n        const row = (0, createElement_1.default)({ tag: \"tr\" });\n        row.setAttribute(\"data-id\", `${winner.id}`);\n        const numberTD = (0, createElement_1.default)({\n            tag: \"td\",\n            text: `${n}`,\n        });\n        n += 1;\n        const carTD = (0, createElement_1.default)({\n            tag: \"td\",\n        });\n        carTD.innerHTML = car_1.default;\n        carTD.firstElementChild.setAttribute(\"fill\", winner.color);\n        const nameTD = (0, createElement_1.default)({\n            tag: \"td\",\n            text: winner.name,\n        });\n        const winsTD = (0, createElement_1.default)({\n            tag: \"td\",\n            text: `${winner.wins}`,\n        });\n        const timeTd = (0, createElement_1.default)({\n            tag: \"td\",\n            text: `${winner.time}`,\n        });\n        row.append(numberTD, carTD, nameTD, winsTD, timeTd);\n        placeToAppend.append(row);\n    });\n}\nexports[\"default\"] = fillTable;\n\n\n//# sourceURL=webpack://async-race/./src/render/fillTable.ts?");

/***/ }),

/***/ "./src/render/updateTracks.ts":
/*!************************************!*\
  !*** ./src/render/updateTracks.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst getPage_1 = __webpack_require__(/*! ../api/getPage */ \"./src/api/getPage.ts\");\nconst track_1 = __importDefault(__webpack_require__(/*! ../components/garage/main/track */ \"./src/components/garage/main/track.ts\"));\nconst updateTracks = async (page, place) => {\n    const cars = await (0, getPage_1.getGaragePage)(page);\n    const tracks = [...place.querySelectorAll(\".track\")];\n    tracks.forEach((track) => track.remove());\n    cars.forEach((car) => {\n        const track = (0, track_1.default)(car);\n        place.append(track);\n    });\n};\nexports[\"default\"] = updateTracks;\n\n\n//# sourceURL=webpack://async-race/./src/render/updateTracks.ts?");

/***/ }),

/***/ "./src/render/updateWinnerTable.ts":
/*!*****************************************!*\
  !*** ./src/render/updateWinnerTable.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst getData_1 = __webpack_require__(/*! ../api/getData */ \"./src/api/getData.ts\");\nconst winners_1 = __importDefault(__webpack_require__(/*! ../components/winner/winners */ \"./src/components/winner/winners.ts\"));\nconst changeTableContext_1 = __importDefault(__webpack_require__(/*! ./changeTableContext */ \"./src/render/changeTableContext.ts\"));\nasync function updateWinnerTable() {\n    const page = +winners_1.default.children[1].firstElementChild.textContent.slice(1);\n    const winnersList = await (0, getData_1.getWinners)();\n    if (page * 10 >= winnersList.length) {\n        const nextBtn = winners_1.default.children[2].lastElementChild;\n        nextBtn.disabled = true;\n    }\n    const heading = winners_1.default.firstElementChild.firstElementChild;\n    heading.textContent = `(${winnersList.length})`;\n    (0, changeTableContext_1.default)(winners_1.default, page);\n}\nexports[\"default\"] = updateWinnerTable;\n\n\n//# sourceURL=webpack://async-race/./src/render/updateWinnerTable.ts?");

/***/ }),

/***/ "./src/utils/createButton.ts":
/*!***********************************!*\
  !*** ./src/utils/createButton.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nfunction createButton(className, text, callback) {\n    const button = document.createElement(\"button\");\n    button.className = className.join(\" \");\n    button.textContent = text;\n    if (callback)\n        button.addEventListener(\"click\", callback);\n    return button;\n}\nexports[\"default\"] = createButton;\n\n\n//# sourceURL=webpack://async-race/./src/utils/createButton.ts?");

/***/ }),

/***/ "./src/utils/createElement.ts":
/*!************************************!*\
  !*** ./src/utils/createElement.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nfunction createElement(options) {\n    const element = document.createElement(options.tag);\n    if (options.className)\n        element.className = options.className.join(\" \");\n    element.textContent = options.text;\n    return element;\n}\nexports[\"default\"] = createElement;\n\n\n//# sourceURL=webpack://async-race/./src/utils/createElement.ts?");

/***/ }),

/***/ "./src/assets/icons/down.png":
/*!***********************************!*\
  !*** ./src/assets/icons/down.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0c61558dc690f68fc810.png\";\n\n//# sourceURL=webpack://async-race/./src/assets/icons/down.png?");

/***/ }),

/***/ "./src/assets/icons/flagsvg.svg":
/*!**************************************!*\
  !*** ./src/assets/icons/flagsvg.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2a4ba366380bf5047030.svg\";\n\n//# sourceURL=webpack://async-race/./src/assets/icons/flagsvg.svg?");

/***/ }),

/***/ "./src/assets/icons/up.png":
/*!*********************************!*\
  !*** ./src/assets/icons/up.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"97e1df67b2da2413ea8c.png\";\n\n//# sourceURL=webpack://async-race/./src/assets/icons/up.png?");

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
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
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
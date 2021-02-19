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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/css/app.scss":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/css/app.scss ***!
  \**************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@charset \\\"UTF-8\\\";\\nheader {\\n  background-color: #76ddff;\\n  position: sticky;\\n  top: 0;\\n  z-index: 1;\\n}\\nheader .header-container {\\n  display: flex;\\n  height: 75px;\\n  margin: 0 auto;\\n}\\nheader .header-container img {\\n  margin: 10px;\\n  max-width: 120px;\\n  object-fit: cover;\\n}\\nheader .header-container .fa-bars, header .header-container .fa-times {\\n  display: none;\\n  font-size: 25px;\\n  color: white;\\n  cursor: pointer;\\n  position: absolute;\\n  top: 20px;\\n  right: 20px;\\n}\\nheader .header-container nav {\\n  display: flex;\\n  margin-left: auto;\\n}\\nheader .header-container nav button {\\n  background-color: inherit;\\n  font-size: 16px;\\n  border: none;\\n  padding: 1rem;\\n  cursor: pointer;\\n}\\nheader .header-container nav button:hover {\\n  background-color: orange;\\n}\\n\\n@keyframes fadeEffect {\\n  from {\\n    opacity: 0;\\n  }\\n  to {\\n    opacity: 1;\\n  }\\n}\\n#home {\\n  display: flex;\\n  flex-direction: row;\\n  color: white;\\n}\\n#home .hero-content {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  width: 800px;\\n  max-width: 90vw;\\n  margin: 0 auto;\\n  padding-top: 50px;\\n  position: relative;\\n  text-align: center;\\n}\\n#home .hero-content img {\\n  max-height: 500px;\\n  max-width: 100vw;\\n  transform: scaleX(-1);\\n}\\n#home .hero-content .hero-info {\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n  width: 800px;\\n  max-width: 90vw;\\n  text-shadow: 3px 3px 0 orange;\\n}\\n#home .hero-content .hero-info p {\\n  color: black;\\n}\\n#home .hero-content .hero-info > * {\\n  margin: 0.5rem;\\n}\\n#home .hero-content .hero-info h2 {\\n  font-size: 3vmax;\\n}\\n#home .hero-content .hero-info button {\\n  width: 150px;\\n  height: 50px;\\n  font-size: 18px;\\n}\\n#home .contact-info {\\n  background-color: rgba(49, 49, 49, 0.5);\\n  width: 300px;\\n  margin: 0 auto;\\n  margin-top: 50px;\\n  padding: 1rem;\\n}\\n#home .contact-info > * {\\n  margin: 0.5rem;\\n}\\n#home .contact-info .address::before {\\n  font-family: \\\"Font Awesome 5 Free\\\";\\n  font-weight: 900;\\n  content: \\\"\\\";\\n}\\n#home .contact-info .open-hours::before {\\n  font-family: \\\"Font Awesome 5 Free\\\";\\n  font-weight: 900;\\n  content: \\\"\\\";\\n}\\n\\n#menu .menu-container #food-container {\\n  display: grid;\\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\\n  gap: 1rem;\\n  justify-items: center;\\n}\\n#menu .menu-container #food-container .menu-card {\\n  width: 300px;\\n  background-color: #ffffec;\\n  padding: 0.5rem;\\n}\\n#menu .menu-container #food-container .menu-card > *:not(:last-child) {\\n  margin-bottom: 0.5rem;\\n}\\n#menu .menu-container #food-container .menu-card img {\\n  width: 100%;\\n}\\n\\n.contact-container .contact-info {\\n  width: 600px;\\n  max-width: 90vw;\\n  margin: 0 auto;\\n  padding: 0 0.5rem;\\n}\\n.contact-container .contact-info > * {\\n  margin: 0.5rem;\\n}\\n.contact-container .contact-info .address::before {\\n  font-family: \\\"Font Awesome 5 Free\\\";\\n  font-weight: 900;\\n  content: \\\"\\\";\\n}\\n.contact-container .contact-info .contact-number::before {\\n  font-family: \\\"Font Awesome 5 Free\\\";\\n  font-weight: 900;\\n  content: \\\"\\\";\\n}\\n.contact-container .contact-info .open-hours::before {\\n  font-family: \\\"Font Awesome 5 Free\\\";\\n  font-weight: 900;\\n  content: \\\"\\\";\\n}\\n.contact-container iframe {\\n  display: block;\\n  max-width: 100vw;\\n  margin: 0 auto;\\n}\\n\\nfooter {\\n  background-color: orange;\\n  min-height: 50px;\\n  padding: 1rem;\\n  text-align: center;\\n}\\n\\n@keyframes fadeEffect {\\n  from {\\n    opacity: 0;\\n  }\\n  to {\\n    opacity: 1;\\n  }\\n}\\n@media screen and (max-width: 500px) {\\n  header .header-container .fa-bars {\\n    display: block;\\n  }\\n  header .header-container nav {\\n    display: none;\\n    flex-direction: column;\\n    background-color: orange;\\n    width: 100vw;\\n    position: absolute;\\n    top: 75px;\\n    z-index: 1;\\n  }\\n  header .header-container nav button {\\n    color: white;\\n  }\\n  header .header-container nav button:hover {\\n    background-color: #fdb42c;\\n  }\\n}\\n* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n  font-family: \\\"Montserrat\\\", sans-serif;\\n  font-size: 16px;\\n}\\n\\nh2 {\\n  text-align: center;\\n  margin-bottom: 1rem;\\n  font-size: 24px;\\n}\\n\\nbutton {\\n  background-color: orange;\\n  border: none;\\n  padding: 0.5rem;\\n  cursor: pointer;\\n  transition: all 0.5s;\\n}\\nbutton:hover {\\n  background-color: #ffb62d;\\n}\\n\\n.container {\\n  width: 800px;\\n  max-width: 100vw;\\n  margin: 0 auto;\\n}\\n\\n.tab-content {\\n  min-height: calc(100vh - 125px);\\n  background-color: #76ddff;\\n  padding-top: 1rem;\\n  padding-bottom: 2rem;\\n}\\n.tab-content > * {\\n  animation: fadeEffect 1s;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/assets/css/app.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/assets/css/app.scss":
/*!*********************************!*\
  !*** ./src/assets/css/app.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./app.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/css/app.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://restaurant-page/./src/assets/css/app.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/assets/images/logo-8cuts.png":
/*!******************************************!*\
  !*** ./src/assets/images/logo-8cuts.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c311b8468c1f66d95a52.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/logo-8cuts.png?");

/***/ }),

/***/ "./src/assets/images/newest-burger.png":
/*!*********************************************!*\
  !*** ./src/assets/images/newest-burger.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"10be6a0ffbe789b89eb4.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/newest-burger.png?");

/***/ }),

/***/ "./src/assets/js/menuItems.js":
/*!************************************!*\
  !*** ./src/assets/js/menuItems.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menuItems\": () => (/* binding */ menuItems)\n/* harmony export */ });\nconst menuItems = [\n  {\n    name: 'Cheeseburger',\n    price: 230,\n    ingredients: ['House Cheddar', 'Greens', 'Sauce No.3'],\n    pax: 1,\n    imgUrl: 'https://cdn.shopify.com/s/files/1/0419/1266/4231/products/cheeseburger_fa15c912-490a-43f6-96c2-28cde3673355_295x.jpg?v=1601476609',\n  },\n  {\n    name: 'Piggy',\n    price: 350,\n    ingredients: ['House-made Smoked Bacon', 'Bacon-Onion Campote', 'Garlic Aioli', 'House Cheddar', 'etc.'],\n    pax: 1,\n    imgUrl: 'https://cdn.shopify.com/s/files/1/0419/1266/4231/products/piggy_752eea14-fc19-4d92-83ac-4a34bd8618fc_295x.jpg?v=1601476619',\n  },\n  {\n    name: 'Four Cheese 2.0',\n    price: 305,\n    ingredients: ['Parmesan-crusted Mozzarella', 'Sharp Yellow Cheddar', 'Monterey Jack', 'Garlic Aioli', 'etc.'],\n    pax: 1,\n    imgUrl: 'https://cdn.shopify.com/s/files/1/0419/1266/4231/products/fourcheese_25abddac-6594-4463-8400-de3c472e36a8_295x.jpg?v=1601476628',\n  },\n  {\n    name: 'Q-Daddy',\n    price: 330,\n    ingredients: ['Peppered Onion Tanglers', 'Jalapeño Ranch', 'Smoked Bacon', 'Sharp Yellow Cheddar', 'etc.'],\n    pax: 1,\n    imgUrl: 'https://cdn.shopify.com/s/files/1/0419/1266/4231/products/Qdaddy_9be1d810-8d76-4549-ac3f-2dbf273c1cf2_295x.jpg?v=1601476888',\n  },\n  {\n    name: 'Meathead',\n    price: 230,\n    ingredients: ['House Cheddar', 'Caramelized Onions', 'Sauce No.3'],\n    pax: 1,\n    imgUrl: 'https://cdn.shopify.com/s/files/1/0419/1266/4231/products/meathead_af4fc158-8db5-46c5-8097-ba5be016b369_295x.jpg?v=1601476637',\n  },\n  {\n    name: 'OG Burger',\n    price: 185,\n    ingredients: ['Sauce No.3'],\n    pax: 1,\n    imgUrl: 'https://cdn.shopify.com/s/files/1/0419/1266/4231/products/ogburger_d899bdbc-8fce-4bdb-92ad-b54ef4816216_295x.jpg?v=1601476648',\n  },\n  {\n    name: 'The Sliders',\n    price: 360,\n    ingredients: [],\n    pax: 1,\n    imgUrl: 'https://cdn.shopify.com/s/files/1/0419/1266/4231/products/NOPHOTOAVAILABLE_604912cb-f4ff-4b8e-a06b-a8f88db7ab2a_295x.jpg?v=1601476660',\n  },\n  {\n    name: 'Hangover 2.0',\n    price: 330,\n    ingredients: ['Sugar-glazed Corned Beef', 'Dijonnaise', 'Sunny Side-down Egg', 'Shoestring Potatoes', 'etc.'],\n    pax: 1,\n    imgUrl: 'https://cdn.shopify.com/s/files/1/0419/1266/4231/products/hangover_ea54d52e-f66f-47db-9505-2566f9525d25_295x.jpg?v=1601476878',\n  },\n]\n\n//# sourceURL=webpack://restaurant-page/./src/assets/js/menuItems.js?");

/***/ }),

/***/ "./src/assets/js/openTab.js":
/*!**********************************!*\
  !*** ./src/assets/js/openTab.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"openTab\": () => (/* binding */ openTab)\n/* harmony export */ });\nconst openTab = () => {\n  const tabContent = document.querySelectorAll('.tab-content');\n  const tabLinks = document.querySelectorAll('.tab-links');\n  const orderNowBtn = document.getElementById('order-now');\n\n  tabContent.forEach(tab => {\n    tab.style.display = 'none';\n  });\n  \n  tabLinks.forEach(link => {\n    link.addEventListener('click', showContent);\n  });\n\n  orderNowBtn.addEventListener('click', showMenu)\n  \n}\n\nconst home = document.getElementById('home');\nconst menu = document.getElementById('menu');\nconst contact = document.getElementById('contact');\n\nconst showContent = (e, link) => {\n  switch(e.target.id || link) {\n    case 'home-link':\n      home.style.display = 'block';\n      menu.style.display = 'none';\n      contact.style.display = 'none';\n      break;\n    case 'menu-link':\n      menu.style.display = 'block';\n      home.style.display = 'none';\n      contact.style.display = 'none';\n      break;\n    case 'contact-link':\n      contact.style.display = 'block';\n      menu.style.display = 'none';\n      home.style.display = 'none';\n      break;\n  }\n}\n\nconst showMenu = () => {\n  menu.style.display = 'block';\n  home.style.display = 'none';\n  contact.style.display = 'none';\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/assets/js/openTab.js?");

/***/ }),

/***/ "./src/assets/js/printMenu.js":
/*!************************************!*\
  !*** ./src/assets/js/printMenu.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"printMenu\": () => (/* binding */ printMenu)\n/* harmony export */ });\n/* harmony import */ var _menuItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuItems */ \"./src/assets/js/menuItems.js\");\n\n\nconst printMenu = () => {\n  const foodContainer = document.getElementById('food-container');\n  _menuItems__WEBPACK_IMPORTED_MODULE_0__.menuItems.forEach(item => {\n    const card = document.createElement('div');\n    card.classList.add('menu-card');\n    const cardImg = document.createElement('img');\n    cardImg.src = item.imgUrl;\n    cardImg.alt = item.name;\n    const title = document.createElement('h3');\n    title.innerText = item.name;\n    const price = document.createElement('p');\n    price.innerText = `Starts from: ₱${item.price.toFixed(2)}`;\n    const ingredientList = document.createElement('p');\n    const ingredients = item.ingredients.join(', ');\n    ingredientList.innerText = ingredients;\n    card.appendChild(cardImg);\n    card.appendChild(title);\n    card.appendChild(price);\n    card.appendChild(ingredientList);\n\n    foodContainer.appendChild(card);\n  })\n}\n\n//# sourceURL=webpack://restaurant-page/./src/assets/js/printMenu.js?");

/***/ }),

/***/ "./src/assets/js/showHideMenu.js":
/*!***************************************!*\
  !*** ./src/assets/js/showHideMenu.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showHideMenu\": () => (/* binding */ showHideMenu)\n/* harmony export */ });\nconst nav = document.querySelector('nav');\nconst navBtns = document.querySelectorAll('.tab-links');\nconst menuBtn = document.querySelector('.fa-bars');\nconst closeBtn = document.querySelector('.fa-times');\n\nconst showHideMenu = () => {\n  menuBtn.addEventListener('click', showMenu);\n  closeBtn.addEventListener('click', closeMenu);\n\n  navBtns.forEach(btn => {\n    btn.addEventListener('click', closeMenu)\n  })\n};\n\nconst showMenu = () => {\n  nav.style.display = 'flex';\n  menuBtn.style.display = 'none';\n  closeBtn.style.display = 'block';\n}\n\nconst closeMenu = () => {\n  if (closeBtn.style.display === 'block') {\n    nav.style.display = 'none';\n    menuBtn.style.display = 'block';\n    closeBtn.style.display = 'none';\n  }\n}\n\n//# sourceURL=webpack://restaurant-page/./src/assets/js/showHideMenu.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_css_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/css/app.scss */ \"./src/assets/css/app.scss\");\n/* harmony import */ var _assets_js_openTab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/js/openTab */ \"./src/assets/js/openTab.js\");\n/* harmony import */ var _assets_images_logo_8cuts_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/images/logo-8cuts.png */ \"./src/assets/images/logo-8cuts.png\");\n/* harmony import */ var _assets_images_newest_burger_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/images/newest-burger.png */ \"./src/assets/images/newest-burger.png\");\n/* harmony import */ var _assets_js_printMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/js/printMenu */ \"./src/assets/js/printMenu.js\");\n/* harmony import */ var _assets_js_showHideMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/js/showHideMenu */ \"./src/assets/js/showHideMenu.js\");\n\n\n\n\n\n\n\n\n(0,_assets_js_openTab__WEBPACK_IMPORTED_MODULE_1__.openTab)();\ndocument.getElementById('home-link').click();\n\n/* Inserts logo image*/\nconst headerContainer = document.querySelector('.header-container');\nconst logoImg = new Image();\nlogoImg.src = _assets_images_logo_8cuts_png__WEBPACK_IMPORTED_MODULE_2__;\nheaderContainer.insertBefore(logoImg, headerContainer.firstChild);\n\n/* Inserts burger hero image */\nconst heroContianer = document.querySelector('.hero-content');\nconst heroImg = new Image();\nheroImg.classList.add('hero-img');\nheroImg.src = _assets_images_newest_burger_png__WEBPACK_IMPORTED_MODULE_3__;\nheroContianer.insertBefore(heroImg, heroContianer.firstChild);\n\n(0,_assets_js_printMenu__WEBPACK_IMPORTED_MODULE_4__.printMenu)();\n(0,_assets_js_showHideMenu__WEBPACK_IMPORTED_MODULE_5__.showHideMenu)();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
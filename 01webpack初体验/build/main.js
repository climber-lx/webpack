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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.json */ \"./src/index.json\");\n/*\r\n\r\n    index.js: webpack 入口起点文件\r\n\r\n    1.运行指令：\r\n        开发环境： webpack ./src/index.js -o ./build --mode=development\r\n            webpack会以 ./src/index.js 为入口文件开始打包，打包输出到 ./build \r\n            整体打包环境，是开发环境\r\n        生产环境：  webpack ./src/index.js -o ./build --mode=production\r\n             webpack会以 ./src/index.js 为入口文件开始打包，打包输出到 ./build \r\n            整体打包环境，是生产环境\r\n    2. 结论：\r\n        1.webpack 能处理 js/ json 资源，不能处理 css/img 等其他资源\r\n        2.生产环境和开发环境将ES6模块化编译成浏览器能识别的模块化\r\n        3.生产环境比开发环境多一个压缩js代码\r\n \r\n*/\r\n\r\n\r\nconsole.log(_index_json__WEBPACK_IMPORTED_MODULE_0__);\r\n\r\n// import './index.css';\r\n\r\nfunction add(x, y) {\r\n    return x + y\r\n}\r\n\r\nconsole.log(add(1, 2));\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/index.json":
/*!************************!*\
  !*** ./src/index.json ***!
  \************************/
/***/ ((module) => {

eval("module.exports = {\"name\":\"ll\"};\n\n//# sourceURL=webpack:///./src/index.json?");

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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
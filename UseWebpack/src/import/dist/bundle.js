/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	// import {funA} from './moduleD.js';
	// funA();
	'use strict';

	var _moduleDJs = __webpack_require__(1);

	console.log(_moduleDJs.Data);
	(0, _moduleDJs.funB)();
	(0, _moduleDJs.funA)();

/***/ },
/* 1 */
/***/ function(module, exports) {

	//ES6的一个文件可以export多个对象

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	function funA() {
	  console.log('fun A');
	}

	function funB() {
	  console.log('fun B');
	}

	var Data = {
	  baseUrl: 'http://localhost:3000/api/comments',
	  foo: function foo(params) {
	    var _this = this;

	    fetch(this.baseUrl).then(function (res) {
	      console.log(res);
	      return res.json();
	    }).then(function (res) {
	      console.log(_this.baseUrl);
	    });
	  }
	};

	exports.funA = funA;
	exports.funB = funB;
	exports.Data = Data;

	// 下面的做法也OK
	// export {funA};
	// export {funB};
	// export {Data};

/***/ }
/******/ ]);
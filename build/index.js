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

/***/ "./src/entryParsing.ts":
/*!*****************************!*\
  !*** ./src/entryParsing.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nexports.__esModule = true;\r\nexports.isAmazonOrder = function (string) {\r\n    var matched = string.match(/[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9][0-9][0-9][0-9]/);\r\n    return {\r\n        matched: matched ? true : false,\r\n        orderId: matched ? matched[0] : null\r\n    };\r\n};\r\n\n\n//# sourceURL=webpack:///./src/entryParsing.ts?");

/***/ }),

/***/ "./src/firebirdDb.ts":
/*!***************************!*\
  !*** ./src/firebirdDb.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nexports.__esModule = true;\r\nvar envLoad = __webpack_require__(/*! dotenv */ \"dotenv\");\r\nvar Firebird = __webpack_require__(/*! node-firebird */ \"node-firebird\");\r\nexports.getDbCredentials = function () {\r\n    envLoad.config();\r\n    var host = process.env.DBHOST;\r\n    var port = process.env.DBPORT;\r\n    var database = process.env.DBPATH;\r\n    var user = process.env.DBUSER;\r\n    var password = process.env.DBPASS;\r\n    host && port && database && user && password ? console.log(\"Db credentials loaded from .env file\") : console.error(\"Can't read db credentials from .env file!\");\r\n    return { host: host, port: port, database: database, user: user, password: password };\r\n};\r\nexports.queryPackages = function (_a, startingId) {\r\n    var host = _a.host, port = _a.port, database = _a.database, user = _a.user, password = _a.password;\r\n    if (startingId === void 0) { startingId = 66000; }\r\n    var options = { host: host, port: port, database: database, user: user, password: password, lowercase_keys: false, role: null, pageSize: 4096 };\r\n    var sqlQuery = \"SELECT ID, NUMER_LP, NUMER_PMS, OPIS_ZAWARTOSCI, UWAGI, DATA_EKSPORTU, LI_PACZEK, WAGA_PACZEK, ODBIORCA_NAZWA_KRAJU, NAZWA_KONTA\\n  FROM LIST\\n  WHERE ID>\" + startingId + \"\\n  ;\";\r\n    console.log(options);\r\n    Firebird.attach(options, function (err, db) {\r\n        if (err)\r\n            throw err;\r\n        db.query(sqlQuery, function (err, result) {\r\n            console.log(err, result);\r\n            db.detach();\r\n        });\r\n    });\r\n};\r\n\n\n//# sourceURL=webpack:///./src/firebirdDb.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nexports.__esModule = true;\r\nvar firebirdDb_1 = __webpack_require__(/*! ./firebirdDb */ \"./src/firebirdDb.ts\");\r\nvar entryParsing_1 = __webpack_require__(/*! ./entryParsing */ \"./src/entryParsing.ts\");\r\nfunction t() {\r\n    var credentials = firebirdDb_1.getDbCredentials();\r\n    // queryPackages(credentials)\r\n    entryParsing_1.isAmazonOrder(\"'17734/2020; Amazon 206-8562183-9433933 Ms Samantha May Ferrier',\");\r\n}\r\nt();\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "node-firebird":
/*!********************************!*\
  !*** external "node-firebird" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"node-firebird\");\n\n//# sourceURL=webpack:///external_%22node-firebird%22?");

/***/ })

/******/ });
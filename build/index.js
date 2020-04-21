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
eval("\r\nexports.__esModule = true;\r\nexports.isAmazonOrder = function (string) {\r\n    var matched = string.match(/[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9][0-9][0-9][0-9]/);\r\n    return {\r\n        matched: matched ? true : false,\r\n        orderId: matched ? matched[0] : null\r\n    };\r\n};\r\nexports.formatDate = function (dateString) {\r\n    return (\"\" + dateString).substring(0, 10);\r\n};\r\nexports.packageArrayToFile = function (packages) {\r\n    var tabSeparatedString = \"order-id\\torder-item-id\\tquantity\\tship-date\\tcarrier-code\\tcarrier-name\\ttracking-number\\tship-method\\ttransparency_code\\n\";\r\n    for (var _i = 0, packages_1 = packages; _i < packages_1.length; _i++) {\r\n        var p = packages_1[_i];\r\n        tabSeparatedString += p.amazonOrder + \"\\t\\t\\t\" + p.date + \"\\t\" + p.carrier + \"\\t\" + p.carrier + \"\\t\" + p.trackingId + \"\\t\\t\\n\";\r\n    }\r\n    return tabSeparatedString;\r\n};\r\n\n\n//# sourceURL=webpack:///./src/entryParsing.ts?");

/***/ }),

/***/ "./src/firebirdDb.ts":
/*!***************************!*\
  !*** ./src/firebirdDb.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nexports.__esModule = true;\r\nvar envLoad = __webpack_require__(/*! dotenv */ \"dotenv\");\r\nvar Firebird = __webpack_require__(/*! node-firebird */ \"node-firebird\");\r\nvar entryParsing_1 = __webpack_require__(/*! ./entryParsing */ \"./src/entryParsing.ts\");\r\nexports.getDbCredentials = function () {\r\n    envLoad.config();\r\n    var host = process.env.DBHOST;\r\n    var port = process.env.DBPORT;\r\n    var database = process.env.DBPATH;\r\n    var user = process.env.DBUSER;\r\n    var password = process.env.DBPASS;\r\n    host && port && database && user && password ? console.log(\"Db credentials loaded from .env file\") : console.error(\"Can't read db credentials from .env file!\");\r\n    return { host: host, port: port, database: database, user: user, password: password };\r\n};\r\nexports.queryPackages = function (_a, startingId) {\r\n    var host = _a.host, port = _a.port, database = _a.database, user = _a.user, password = _a.password;\r\n    if (startingId === void 0) { startingId = 66000; }\r\n    return __awaiter(void 0, void 0, void 0, function () {\r\n        var options, sqlQuery;\r\n        return __generator(this, function (_b) {\r\n            options = { host: host, port: port, database: database, user: user, password: password, lowercase_keys: false, role: null, pageSize: 4096 };\r\n            sqlQuery = \"SELECT ID, NUMER_LP, NUMER_PMS, OPIS_ZAWARTOSCI, UWAGI, DATA_EKSPORTU, LI_PACZEK, WAGA_PACZEK, ODBIORCA_NAZWA_KRAJU, NAZWA_KONTA\\n  FROM LIST\\n  WHERE ID>\" + startingId + \"\\n  ;\";\r\n            return [2 /*return*/, new Promise(function (resolve, reject) {\r\n                    var parsedResults = [];\r\n                    var lastId = 0;\r\n                    Firebird.attach(options, function (err, db) {\r\n                        if (err) {\r\n                            reject(err);\r\n                        }\r\n                        console.log('starting db query..');\r\n                        db.query(sqlQuery, function (err, result) {\r\n                            for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {\r\n                                var entry = result_1[_i];\r\n                                var order = entryParsing_1.isAmazonOrder(entry.OPIS_ZAWARTOSCI + \" \" + entry.UWAGI);\r\n                                if (order.matched) {\r\n                                    if (parseInt(entry.ID, 10) > lastId) {\r\n                                        lastId = parseInt(entry.ID, 10);\r\n                                        console.log(lastId);\r\n                                    }\r\n                                    parsedResults.push({\r\n                                        amazonOrder: order.orderId,\r\n                                        trackingId: entry.NUMER_LP,\r\n                                        carrier: entry.NAZWA_KONTA,\r\n                                        date: entryParsing_1.formatDate(new Date(entry.DATA_EKSPORTU).toISOString())\r\n                                    });\r\n                                }\r\n                            }\r\n                            db.detach();\r\n                            resolve({ parsedResults: parsedResults, lastId: lastId });\r\n                        });\r\n                    });\r\n                })];\r\n        });\r\n    });\r\n};\r\n\n\n//# sourceURL=webpack:///./src/firebirdDb.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nexports.__esModule = true;\r\nvar firebirdDb_1 = __webpack_require__(/*! ./firebirdDb */ \"./src/firebirdDb.ts\");\r\nvar entryParsing_1 = __webpack_require__(/*! ./entryParsing */ \"./src/entryParsing.ts\");\r\nvar progressPersistence_1 = __webpack_require__(/*! ./progressPersistence */ \"./src/progressPersistence.ts\");\r\nvar fs = __webpack_require__(/*! fs */ \"fs\");\r\nfunction t() {\r\n    return __awaiter(this, void 0, void 0, function () {\r\n        var credentials, progress, packages, tabString;\r\n        return __generator(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0:\r\n                    credentials = firebirdDb_1.getDbCredentials();\r\n                    progress = progressPersistence_1.getLastProcessedEntry();\r\n                    return [4 /*yield*/, firebirdDb_1.queryPackages(credentials, progress)\r\n                        // 5. Make an Amazon upload file according to the template\r\n                    ];\r\n                case 1:\r\n                    packages = _a.sent();\r\n                    tabString = entryParsing_1.packageArrayToFile(packages.parsedResults);\r\n                    fs.writeFileSync(\"output/\" + entryParsing_1.formatDate(new Date().toISOString()) + \".txt\", tabString);\r\n                    // 6. Upload to Baselinker\r\n                    progressPersistence_1.saveLastProcessedEntry(packages.lastId);\r\n                    return [2 /*return*/];\r\n            }\r\n        });\r\n    });\r\n}\r\nt();\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/progressPersistence.ts":
/*!************************************!*\
  !*** ./src/progressPersistence.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nexports.__esModule = true;\r\nvar fs = __webpack_require__(/*! fs */ \"fs\");\r\nexports.getLastProcessedEntry = function () {\r\n    fs.existsSync('lastentry') ? console.log('reading last processed entry') : function () {\r\n        console.error('unable to read progress file, starting from 0');\r\n        exports.saveLastProcessedEntry(0);\r\n    };\r\n    var data = fs.readFileSync('lastentry.txt');\r\n    return parseInt(data.toString(), 10);\r\n};\r\nexports.saveLastProcessedEntry = function (id) {\r\n    fs.writeFileSync('lastentry.txt', \"\" + id);\r\n};\r\n\n\n//# sourceURL=webpack:///./src/progressPersistence.ts?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

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
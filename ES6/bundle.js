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
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./functions.js":
/*!**********************!*\
  !*** ./functions.js ***!
  \**********************/
/*! exports provided: add */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"add\", function() { return add; });\nfunction add(a, b) {\n  return a + b;\n}\n\n//# sourceURL=webpack:///./functions.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ \"./functions.js\");\n// es6 - classes\n\n/*\r\nclass List {\r\n    constructor() {\r\n        this.data = [];\r\n    }\r\n\r\n    add(data) {\r\n        this.data.push(data);\r\n        console.log(this.data);\r\n    }\r\n}\r\n\r\n//inheritance\r\nclass TodoList extends List {\r\n    constructor() {\r\n        super();\r\n\r\n        this.user = 'Luis';\r\n    }\r\n\r\n    showUser() {\r\n        console.log(this.user);\r\n    }\r\n}\r\n\r\nvar myTodoList = new TodoList();\r\n\r\ndocument.getElementById('newTodo').onclick = function() {\r\n    myTodoList.add('new todo');\r\n}\r\n\r\nmyTodoList.showUser();\r\n\r\n// static method example\r\nclass Maths {\r\n  // static mehods: can't be called in class intances\r\n  // mostly used for util methods\r\n  static sum(a, b) {\r\n    return a + b;\r\n  }\r\n}\r\n\r\nconsole.log(Maths.sum(1, 2));\r\n\r\n// const - identifier can't be reassigned | let - scoped variable\r\nconst user = { name: \"Luis\" };\r\nconsole.log(user);\r\nuser.name = \"Pedro\";\r\nconsole.log(user);\r\n\r\nfunction test(x) {\r\n  let y = 2;\r\n\r\n  if (x > 5) {\r\n    let y = 4;\r\n    console.log(x, y); // logs: y = 4\r\n  }\r\n}\r\n// console.log(y); would not work here\r\ntest(10);\r\n\r\n// Array Operations\r\nconst arr = [1, 3, 4, 5, 9, 2];\r\n\r\n// map\r\n//const newArr = arr.map(function name(item) {\r\n//  return item * 2;\r\n//});\r\n//console.log(newArr);\r\n\r\n// reduce\r\nconst sum = arr.reduce(function name(total, next) {\r\n  return total + next;\r\n});\r\nconsole.log(sum);\r\n\r\n// filter\r\nconst filterArr = arr.filter(function name(item) {\r\n  return item % 2 === 0;\r\n});\r\nconsole.log(filterArr);\r\n\r\n// find\r\nconst findArr = arr.find(function name(item) {\r\n  return item === 4; // returns undefined if not found\r\n});\r\nconsole.log(findArr);\r\n\r\n// Arrow Functions - anonym\r\nconst newArr = arr.map((item) => item * 2);\r\nconsole.log(newArr);\r\n\r\nconst test = () => ({ name: \"Luis\" });\r\nconsole.log(test());\r\n\r\n// default function values\r\nconst sumTest = (a = 3, b = 6) => a + b;\r\nconsole.log(sumTest());\r\nconsole.log(sumTest(1));\r\n\r\n// destructuring\r\nconst user = {\r\n  name: \"Luis\",\r\n  age: 24,\r\n  address: {\r\n    country: \"Portugal\",\r\n    city: \"Porto\",\r\n  },\r\n};\r\nconst {\r\n  name,\r\n  age,\r\n  address: { country },\r\n} = user;\r\nconsole.log(name, age, country);\r\n\r\nfunction showCity({ address: { city } }) {\r\n  console.log(city);\r\n}\r\nshowCity(user);\r\n\r\n// rest / spread operators\r\nconst user = {\r\n  name: \"Luis\",\r\n  age: 24,\r\n  company: \"Luis S.A.\",\r\n  club: \"FCP\",\r\n};\r\n// rest\r\nconst { name, age, ...stuff } = user;\r\nconsole.log(name);\r\nconsole.log(stuff);\r\n\r\nconst arr = [1, 2, 3, 4];\r\nconst [a, ...b] = arr;\r\nconsole.log(a);\r\nconsole.log(b);\r\n\r\nfunction add(a, b, c, d) {\r\n  return a + b + c + d;\r\n}\r\nfunction addTwo(...params) {\r\n  return params.reduce((total, next) => total + next);\r\n}\r\nconsole.log(add(1, 2, 3, 1));\r\nconsole.log(addTwo(1, 2, 3, 1));\r\n\r\n// spread\r\nconst arr1 = [1, 2, 3];\r\nconst arr2 = [4, 5, 6];\r\nconst arr3 = [...arr1, ...arr2];\r\nconsole.log(arr3);\r\n\r\nconst user2 = { ...user, company: \"ANA\" };\r\nconsole.log(user2);\r\n\r\n// template literals\r\nconsole.log(`My name is ${name} and I am ${age} years old`);\r\n// object short syntax\r\nconst employeeName = \"L\";\r\nconst employeeAge = 24;\r\nconst employee = {\r\n  employeeName,\r\n  employeeAge,\r\n  employeeCompany: \"VSCode\",\r\n};\r\nconsole.log(employee);\r\n\r\n//Challenge\r\n// 1\r\nclass User {\r\n  constructor(email, pass) {\r\n    this.email = email;\r\n    this.pass = pass;\r\n    this.admin = false;\r\n  }\r\n\r\n  isAdmin() {\r\n    return this.admin;\r\n  }\r\n}\r\n\r\nclass Admin extends User {\r\n  constructor() {\r\n    super();\r\n    this.admin = true;\r\n  }\r\n}\r\n\r\nconst user = new User(\"usermail\", \"pass1\");\r\nconst admin = new Admin(\"adminmail\", \"pass2\");\r\nconsole.log(user.isAdmin());\r\nconsole.log(admin.isAdmin());\r\n\r\n// 2\r\nconst users = [\r\n  { name: \"Diego\", age: 23, company: \"Rocketseat\" },\r\n  { name: \"Gabriel\", age: 15, empresa: \"Rocketseat\" },\r\n  { name: \"Lucas\", age: 30, company: \"Facebook\" },\r\n  { name: \"Luis\", age: 24, company: \"Google\" },\r\n];\r\n// 2.1\r\nconst ages = users.map((user) => user.age);\r\nconsole.log(ages);\r\n// 2.2\r\nconst filteredUsers = users.filter(\r\n  (user) => user.age > 18 && user.company === \"Rocketseat\"\r\n);\r\nconsole.log(filteredUsers);\r\n// 2.3\r\nconst googlers = users.find((user) => user.company === \"Google\");\r\nconsole.log(googlers);\r\n// 2.4\r\nconst belowFifty = users.filter((item) => item.age * 2 <= 50);\r\nconsole.log(belowFifty);\r\n\r\n// 3\r\n// 3.1\r\nconst arr = [1, 2, 3, 4, 5];\r\narr.map((item) => item + 10);\r\nconsole.log(arr);\r\n// 3.2\r\nconst user2 = { name: \"Diego\", age: 23 };\r\nconst showAge = (user) => user.age;\r\nconsole.log(showAge(user2));\r\n// 3.3\r\nconst name = \"Diego\";\r\nconst age = 23;\r\nconst showUser = (name = \"Diego\", age = 18) => ({\r\n  //important\r\n  name,\r\n  age,\r\n});\r\nconsole.log(showUser(name, age));\r\nconsole.log(showUser(name));\r\n// 3.4\r\nconst promise = () => new Promise((resolve, reject) => resolve());\r\n\r\n// 4\r\n// 4.1\r\nconst company = {\r\n  companyName: \"Rocketseat\",\r\n  address: { city: \"Rio do Sul\", state: \"SC\" },\r\n};\r\nconst {\r\n  companyName,\r\n  address: { city, state },\r\n} = company;\r\nconsole.log(companyName);\r\nconsole.log(city);\r\nconsole.log(state);\r\n// 4.2\r\nfunction showInfo(...user) {\r\n  return `${name} tem ${age} anos.`;\r\n}\r\nconsole.log(showInfo({ name: \"Diego\", age: 23 }));\r\n\r\n// 5\r\n// 5.1 - 1\r\nconst arrFive = [1, 2, 3, 4, 5, 6];\r\nconst [x, ...y] = arrFive;\r\nconsole.log(x);\r\nconsole.log(y);\r\n// 5.1 - 2\r\nconst sumRest = (...arr) => arr.reduce((total, next) => total + next);\r\nconsole.log(sumRest(1, 2, 3));\r\nconsole.log(sumRest(1, 1, 2, 3, 4, 5));\r\n// 5.2\r\nconst userSpread = {\r\n  name: \"Diego\",\r\n  age: 23,\r\n  address: { city: \"Rio do Sul\", state: \"SC\", country: \"Brasil\" },\r\n};\r\n\r\nconst userSpread2 = { ...userSpread, name: \"Gabriel\" }; // order matters\r\nconst userSpread3 = {\r\n  ...userSpread,\r\n  address: { ...userSpread.address, city: \"Lontras\" }, // important\r\n};\r\nconsole.log(userSpread2);\r\nconsole.log(userSpread3);\r\n\r\n// 6\r\nconst userTL = \"Diego\";\r\nconst ageTL = 23;\r\nconsole.log(`O usuário ${userTL} possui ${ageTL} anos`);\r\n\r\n// 7\r\nconst nameO = \"Diego\";\r\nconst ageO = 23;\r\nconst userO = { nameO, ageO, city: \"Rio do Sul\" };\r\nconsole.log(userO);\r\n*/\n// Webpack\n\nconsole.log(Object(_functions__WEBPACK_IMPORTED_MODULE_0__[\"add\"])(1, 7));\n\n//# sourceURL=webpack:///./main.js?");

/***/ })

/******/ });
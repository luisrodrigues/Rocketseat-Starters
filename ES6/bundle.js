"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// es6 - classes

/*
class List {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}

//inheritance
class TodoList extends List {
    constructor() {
        super();

        this.user = 'Luis';
    }

    showUser() {
        console.log(this.user);
    }
}

var myTodoList = new TodoList();

document.getElementById('newTodo').onclick = function() {
    myTodoList.add('new todo');
}

myTodoList.showUser();

// static method example
class Maths {
  // static mehods: can't be called in class intances
  // mostly used for util methods
  static sum(a, b) {
    return a + b;
  }
}

console.log(Maths.sum(1, 2));

// const - identifier can't be reassigned | let - scoped variable
const user = { name: "Luis" };
console.log(user);
user.name = "Pedro";
console.log(user);

function test(x) {
  let y = 2;

  if (x > 5) {
    let y = 4;
    console.log(x, y); // logs: y = 4
  }
}
// console.log(y); would not work here
test(10);

// Array Operations
const arr = [1, 3, 4, 5, 9, 2];

// map
//const newArr = arr.map(function name(item) {
//  return item * 2;
//});
//console.log(newArr);

// reduce
const sum = arr.reduce(function name(total, next) {
  return total + next;
});
console.log(sum);

// filter
const filterArr = arr.filter(function name(item) {
  return item % 2 === 0;
});
console.log(filterArr);

// find
const findArr = arr.find(function name(item) {
  return item === 4; // returns undefined if not found
});
console.log(findArr);

// Arrow Functions - anonym
const newArr = arr.map((item) => item * 2);
console.log(newArr);

const test = () => ({ name: "Luis" });
console.log(test());

// default function values
const sumTest = (a = 3, b = 6) => a + b;
console.log(sumTest());
console.log(sumTest(1));

// destructuring
const user = {
  name: "Luis",
  age: 24,
  address: {
    country: "Portugal",
    city: "Porto",
  },
};
const {
  name,
  age,
  address: { country },
} = user;
console.log(name, age, country);

function showCity({ address: { city } }) {
  console.log(city);
}
showCity(user);

// rest / spread operators
const user = {
  name: "Luis",
  age: 24,
  company: "Luis S.A.",
  club: "FCP",
};
// rest
const { name, age, ...stuff } = user;
console.log(name);
console.log(stuff);

const arr = [1, 2, 3, 4];
const [a, ...b] = arr;
console.log(a);
console.log(b);

function add(a, b, c, d) {
  return a + b + c + d;
}
function addTwo(...params) {
  return params.reduce((total, next) => total + next);
}
console.log(add(1, 2, 3, 1));
console.log(addTwo(1, 2, 3, 1));

// spread
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3);

const user2 = { ...user, company: "ANA" };
console.log(user2);

// template literals
console.log(`My name is ${name} and I am ${age} years old`);
// object short syntax
const employeeName = "L";
const employeeAge = 24;
const employee = {
  employeeName,
  employeeAge,
  employeeCompany: "VSCode",
};
console.log(employee);
*/
//Challenge
// 1
var User = /*#__PURE__*/function () {
  function User(email, pass) {
    _classCallCheck(this, User);

    this.email = email;
    this.pass = pass;
    this.admin = false;
  }

  _createClass(User, [{
    key: "isAdmin",
    value: function isAdmin() {
      return this.admin;
    }
  }]);

  return User;
}();

var Admin = /*#__PURE__*/function (_User) {
  _inherits(Admin, _User);

  var _super = _createSuper(Admin);

  function Admin() {
    var _this;

    _classCallCheck(this, Admin);

    _this = _super.call(this);
    _this.admin = true;
    return _this;
  }

  return Admin;
}(User);

var user = new User("usermail", "pass1");
var admin = new Admin("adminmail", "pass2");
console.log(user.isAdmin());
console.log(admin.isAdmin()); // 2

var users = [{
  name: "Diego",
  age: 23,
  company: "Rocketseat"
}, {
  name: "Gabriel",
  age: 15,
  empresa: "Rocketseat"
}, {
  name: "Lucas",
  age: 30,
  company: "Facebook"
}, {
  name: "Luis",
  age: 24,
  company: "Google"
}]; // 2.1

var ages = users.map(function (user) {
  return user.age;
});
console.log(ages); // 2.2

var filteredUsers = users.filter(function (user) {
  return user.age > 18 && user.company === "Rocketseat";
});
console.log(filteredUsers); // 2.3

var googlers = users.find(function (user) {
  return user.company === "Google";
});
console.log(googlers); // 2.4

var belowFifty = users.filter(function (item) {
  return item.age * 2 <= 50;
});
console.log(belowFifty); // 3
// 3.1

var arr = [1, 2, 3, 4, 5];
arr.map(function (item) {
  return item + 10;
});
console.log(arr); // 3.2

var user2 = {
  name: "Diego",
  age: 23
};

var showAge = function showAge(user) {
  return user.age;
};

console.log(showAge(user2)); // 3.3

var name = "Diego";
var age = 23;

var showUser = function showUser() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Diego";
  var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
  return {
    //important
    name: name,
    age: age
  };
};

console.log(showUser(name, age));
console.log(showUser(name)); // 3.4

var promise = function promise() {
  return new Promise(function (resolve, reject) {
    return resolve();
  });
}; // 4
// 4.1


var company = {
  companyName: "Rocketseat",
  address: {
    city: "Rio do Sul",
    state: "SC"
  }
};
var companyName = company.companyName,
    _company$address = company.address,
    city = _company$address.city,
    state = _company$address.state;
console.log(companyName);
console.log(city);
console.log(state); // 4.2

function showInfo() {
  return "".concat(name, " tem ").concat(age, " anos.");
}

console.log(showInfo({
  name: "Diego",
  age: 23
})); // 5
// 5.1 - 1

var arrFive = [1, 2, 3, 4, 5, 6];
var x = arrFive[0],
    y = arrFive.slice(1);
console.log(x);
console.log(y); // 5.1 - 2

var sumRest = function sumRest() {
  for (var _len = arguments.length, arr = new Array(_len), _key = 0; _key < _len; _key++) {
    arr[_key] = arguments[_key];
  }

  return arr.reduce(function (total, next) {
    return total + next;
  });
};

console.log(sumRest(1, 2, 3));
console.log(sumRest(1, 1, 2, 3, 4, 5)); // 5.2

var userSpread = {
  name: "Diego",
  age: 23,
  address: {
    city: "Rio do Sul",
    state: "SC",
    country: "Brasil"
  }
};

var userSpread2 = _objectSpread(_objectSpread({}, userSpread), {}, {
  name: "Gabriel"
}); // order matters


var userSpread3 = _objectSpread(_objectSpread({}, userSpread), {}, {
  address: _objectSpread(_objectSpread({}, userSpread.address), {}, {
    city: "Lontras"
  }) // important

});

console.log(userSpread2);
console.log(userSpread3); // 6

var userTL = "Diego";
var ageTL = 23;
console.log("O usu\xE1rio ".concat(userTL, " possui ").concat(ageTL, " anos")); // 7

var nameO = "Diego";
var ageO = 23;
var userO = {
  nameO: nameO,
  ageO: ageO,
  city: "Rio do Sul"
};
console.log(userO);

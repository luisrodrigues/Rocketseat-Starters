"use strict";

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
*/
var Maths = /*#__PURE__*/function () {
  function Maths() {
    _classCallCheck(this, Maths);
  }

  _createClass(Maths, null, [{
    key: "sum",
    // static mehods: can't be called in class intances
    // mostly used for util methods
    value: function sum(a, b) {
      return a + b;
    }
  }]);

  return Maths;
}();

console.log(Maths.sum(1, 2));

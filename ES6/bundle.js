"use strict";

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
*/
// Array Operations
var arr = [1, 3, 4, 5, 9, 2]; // map
//const newArr = arr.map(function name(item) {
//  return item * 2;
//});
//console.log(newArr);
// reduce

var sum = arr.reduce(function name(total, next) {
  return total + next;
});
console.log(sum); // filter

var filterArr = arr.filter(function name(item) {
  return item % 2 === 0;
});
console.log(filterArr); // find

var findArr = arr.find(function name(item) {
  return item === 4; // returns undefined if not found
});
console.log(findArr); // Arrow Functions - anonym

var newArr = arr.map(function (item) {
  return item * 2;
});
console.log(newArr);

var test = function test() {
  return {
    name: "Luis"
  };
};

console.log(test()); // default function values

var sumTest = function sumTest() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return a + b;
};

console.log(sumTest());
console.log(sumTest(1));

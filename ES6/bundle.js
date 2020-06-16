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
};
// rest
const { name, ...stuff } = user;
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
*/
// template literals
"use strict";

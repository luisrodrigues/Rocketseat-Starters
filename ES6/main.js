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
class User {
  constructor(email, pass) {
    this.email = email;
    this.pass = pass;
    this.admin = false;
  }

  isAdmin() {
    return this.admin;
  }
}

class Admin extends User {
  constructor() {
    super();
    this.admin = true;
  }
}

const user = new User("usermail", "pass1");
const admin = new Admin("adminmail", "pass2");
console.log(user.isAdmin());
console.log(admin.isAdmin());

// 2
const users = [
  { name: "Diego", age: 23, company: "Rocketseat" },
  { name: "Gabriel", age: 15, empresa: "Rocketseat" },
  { name: "Lucas", age: 30, company: "Facebook" },
  { name: "Luis", age: 24, company: "Google" },
];
// 2.1
const ages = users.map((user) => user.age);
console.log(ages);
// 2.2
const filteredUsers = users.filter(
  (user) => user.age > 18 && user.company === "Rocketseat"
);
console.log(filteredUsers);
// 2.3
const googlers = users.find((user) => user.company === "Google");
console.log(googlers);
// 2.4
const belowFifty = users.filter((item) => item.age * 2 <= 50);
console.log(belowFifty);

// 3
// 3.1
const arr = [1, 2, 3, 4, 5];
arr.map((item) => item + 10);
console.log(arr);
// 3.2
const user2 = { name: "Diego", age: 23 };
const showAge = (user) => user.age;
console.log(showAge(user2));
// 3.3
const name = "Diego";
const age = 23;
const showUser = (name = "Diego", age = 18) => ({
  //important
  name,
  age,
});
console.log(showUser(name, age));
console.log(showUser(name));
// 3.4
const promise = () => new Promise((resolve, reject) => resolve());

// 4
// 4.1
const company = {
  companyName: "Rocketseat",
  address: { city: "Rio do Sul", state: "SC" },
};
const {
  companyName,
  address: { city, state },
} = company;
console.log(companyName);
console.log(city);
console.log(state);
// 4.2
function showInfo(...user) {
  return `${name} tem ${age} anos.`;
}
console.log(showInfo({ name: "Diego", age: 23 }));

// 5
// 5.1 - 1
const arrFive = [1, 2, 3, 4, 5, 6];
const [x, ...y] = arrFive;
console.log(x);
console.log(y);
// 5.1 - 2
const sumRest = (...arr) => arr.reduce((total, next) => total + next);
console.log(sumRest(1, 2, 3));
console.log(sumRest(1, 1, 2, 3, 4, 5));
// 5.2
const userSpread = {
  name: "Diego",
  age: 23,
  address: { city: "Rio do Sul", state: "SC", country: "Brasil" },
};

const userSpread2 = { ...userSpread, name: "Gabriel" }; // order matters
const userSpread3 = {
  ...userSpread,
  address: { ...userSpread.address, city: "Lontras" }, // important
};
console.log(userSpread2);
console.log(userSpread3);

// 6
const userTL = "Diego";
const ageTL = 23;
console.log(`O usuário ${userTL} possui ${ageTL} anos`);

// 7
const nameO = "Diego";
const ageO = 23;
const userO = { nameO, ageO, city: "Rio do Sul" };
console.log(userO);

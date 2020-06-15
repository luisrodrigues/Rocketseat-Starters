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

class Maths {
    // static mehods: can't be called in class intances
    // mostly used for util methods
    static sum(a, b) {
        return a + b;
    }
}

console.log(Maths.sum(1, 2));





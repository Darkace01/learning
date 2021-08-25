const strings = ['a','b','c','d'];


//lookup
console.log(strings[2]);

//push
strings.push('e'); //O(1)

console.log(strings);

//pop
strings.pop(); //O(1)

console.log(strings);

//unshift
strings.unshift('f'); //O(1)

console.log(strings);

//splice
strings.splice(2,0, 'alien'); //O(n)

console.log(strings);

//sort
strings.sort(); //O(n log n)

console.log(strings);

// Reference Types is Javascript
console.log("------- Reference Type In Javascript -------");
console.log([] === []);

var object1 = {value:10};
var object2 = object1;
var object3 = {value: 10};

console.log(object1 === object2);
console.log(object1 === object3);

console.log("------- Context vs Scope -------");


//Scope
function b() {
  var a = 10;
  console.log(a);
}
b();
//console.log(a); <----- This would throw an error cause 'a' is withing the scope of the function and not outside it.

// Context
console.log(this);

// console.log(this === window);  <----- Would throw an error because window doesn't exist in the terminal, it would only work in a browser's console

// Basically 'this' is used to determine what object its within.

console.log("------- Instantiation -------");

class Player{
    constructor(name, type){
        console.log('palyer' , this);
        this.name = name;
        this.type = type;
    }
    introduce(){
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
    }
}

class Wizard extends Player{
    constructor(name,type){
        super(name, type);
        console.log('wizard', this);
    }
    play(){
        console.log(`WEEEEE I'm a ${this.type}`);
    }
}

const wizard1 = new Wizard('Harry', 'Wizard');
const wizard2 = new Wizard('Hermione', 'Wizard');

wizard1.play();
wizard2.introduce();

//Creating My array

class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
    }
}
 
const newArray = new MyArray();
newArray.push('Hello');
console.log(newArray);
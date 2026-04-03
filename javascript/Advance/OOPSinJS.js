class Animals{
  constructor(){
    console.log("i am a default constructor");
    
  }
  eats(){
    console.log("kha raha hu");
    
  }
  jumps(){
    console.log("kood raha hu");
    
  }
}

let a = new Animals();
console.log(a);

/*/////////////////////////////////////////
1. What is OOP in JavaScript?

OOP = Object-Oriented Programming

Main pillars:

Encapsulation
Abstraction
Inheritance
Polymorphism

JS is prototype-based OOP, not purely class-based like Java/C++.
/////////////////////////////////////////////////
🧱 2. Objects in JS
const user = {
  name: "Sahil",
  greet() {
    console.log("Hello " + this.name);
  }
};

user.greet(); // Hello Sahil
///////////////////////////////////////////////////////
🏗️ 3. Constructor Function (Old Way)

Used before ES6 classes.

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const p1 = new Person("Sahil", 20);
console.log(p1.name);
///////////////////////////////////////////

👉 new keyword does:

Creates empty object
Binds this
Links prototype
Returns object
🧬 4. Prototypal Inheritance (CORE JS CONCEPT)

Every object in JS has a hidden property → [[Prototype]]

function Person(name) {
  this.name = name;
}

Person.prototype.sayHi = function () {
  console.log("Hi " + this.name);
};

const p1 = new Person("Sahil");
p1.sayHi();
/////////////////////////////////////////////////////////

👉 Method stored in prototype → memory efficient

🔗 Prototype Chain
console.log(p1.__proto__ === Person.prototype); // true

JS searches:

object → prototype → parent prototype → null
🆕 5. Classes (ES6 Syntax)

Just syntactic sugar over prototypes.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("Hello " + this.name);
  }
}

const p1 = new Person("Sahil", 20);
p1.greet();
🧬 6. Inheritance
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + " makes sound");
  }
}

class Dog extends Animal {
  bark() {
    console.log(this.name + " barks");
  }
}

const d = new Dog("Tommy");
d.speak();
d.bark();
/////////////////////////////////////////////////////
🔑 7. super Keyword

Used to call parent constructor or methods.

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // calls parent constructor
    this.breed = breed;
  }
}

👉 Important:

Must call super() before using this
/////////////////////////////////////////////////////////
🔁 8. Method Overriding (Polymorphism)
class Animal {
  speak() {
    console.log("Animal speaks");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dog barks");
  }
}

const d = new Dog();
d.speak(); // Dog barks
///////////////////////////////////////////////////////
🔄 9. Calling Parent Method (super method)
class Dog extends Animal {
  speak() {
    super.speak(); // call parent method
    console.log("Dog barks");
  }
}/
///////////////////////////////////////////////////////
🧊 10. Static Method & Static Keyword

Belongs to class, not object.

class MathUtils {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtils.add(2, 3)); // 5

❌ Not allowed:

const obj = new MathUtils();
obj.add(); // error
🎯 11. Getter & Setter

Used to control access to properties.

class Person {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }
}

const p = new Person("Sahil");
console.log(p.name); // getter
p.name = "Aman";     // setter
/////////////////////////////////////////////////////////
🔐 12. Encapsulation (Data Hiding)
class BankAccount {
  #balance = 0; // private field

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}
  /////////////////////////////////////////////////////////
🎭 13. Abstraction

Hide implementation details.

class Car {
  start() {
    this.#igniteEngine();
    console.log("Car started");
  }

  #igniteEngine() {
    console.log("Engine ignited");
  }
}
  //////////////////////////////////////////////////////////
🔍 14. instanceof Operator

Checks object type.

class Animal {}

const d = new Animal();

console.log(d instanceof Animal); // true
console.log(d instanceof Object); // true
*/
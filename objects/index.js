//define the constructor that willl create a Person Objet
function Person(name, age) {
  this.name = name;
  this.age = age;
}
//hang functions off the prototype
Person.prototype.hello = function () {
  console.log(`Hello my name is ${this.name}`);
}
Person.prototype.my_age = function () {
  console.log(`My age is ${this.age}`);
}

let person = new Person('Marianna', 40)
// let person2 = new Person('Sean', 24)
person.hello()
person.my_age()
// person2.hello()
// person2.hi()
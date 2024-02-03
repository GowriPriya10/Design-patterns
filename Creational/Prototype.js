
/**
 * 1. Lets you clone objects easily w/o depending on the class
 * 2. Allows the objects to access and inherit the properties from other objects.
 * 
 * Traditionally, a class would have a clone() method to clone the existing object.
 * But since JS is prototype based language, it is easier to copy the object and its properties
 * from other object. 
 * 
 */

const dog = {
    bark() {
      console.log(`Woof!`);
    }
};
  
const pet1 = Object.create(dog);

pet1.bark(); // Woof!
console.log("Direct properties on pet1: ", Object.keys(pet1)); // []
console.log("Properties on pet1's prototype: ", Object.keys(pet1.__proto__)); // bark()

class Dog {
    constructor(name) {
        this.name = name;
    }

    bark() {
        console.log("Woof!");
    }
}

class SuperDog extends Dog {
    constructor(name) {
        super(name);
    }

    fly() {
        console.log(`Flying!`);
    }
}

const dog1 = new SuperDog("dog");
console.log(Dog.prototype, SuperDog.prototype);


/**
 * 1. Another way of creating objects w/o using new keyword in Javascript
 * 2. Factory method allows client to delegate the object creation while having control
 * over which type of object to be instantiated. 
 * 3. Interface for creating objects in a superclass, but allows subclasses to alter 
 * the type of objects that will be created.
 * 
 */

// Type 1
class ShapeFactory {

    createShape(type){
        let shape;
        if(type === 'square')
            shape = new Square();
        if(type === 'triangle')
            shape = new Triangle();
        return shape;
    }
}

let Square = function () {
    this.sides = 4;
}

let Triangle = function (){
    this.triangle = 3;
}

let shapeFactory = new ShapeFactory(); // This can be created as a Singleton
const square = shapeFactory.createShape('square'); // creating diff. shapes w/o using new keyword
const triangle = shapeFactory.createShape('triangle');
console.log(square, triangle);

// Type 2
const createUser = ({ firstName, lastName, email }) => ({
    firstName,
    lastName,
    email,
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
});
  
const user1 = createUser({
    firstName: "John",
    lastName: "Doe",
    email: "john@doe.com"
});

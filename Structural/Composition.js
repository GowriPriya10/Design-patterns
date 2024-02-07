/**
 * As name suggets, this pattern let's you create objects that are composed of objects
 * resulting in a tree stucture, and then allows working with these as individual structures
 * Eg: Small components called Node's can be part of Tree and each node again can have nodes as
 * one of it's prop resulting in deep nested structure. 
 * We can work with Complex structure of Tree directly, sub part of Tree (node having nodes) or 
 * a single node.
 */

// Component 1: Engine
class Engine {
    start() {
        console.log('Engine started');
    }
}

// Component 2: Wheels
class Wheels {
    roll() {
        console.log('Wheels rolling');
    }
}

// Component 3: CarBody
class CarBody {
    construct() {
        console.log('Car body constructed');
    }
}

// Composed object: Car
class Car {
    constructor() {
        this.engine = new Engine();
        this.wheels = new Wheels();
        this.carBody = new CarBody();
    }

    drive() {
        this.engine.start();
        this.wheels.roll();
        console.log('Car is on the move!');
    }

    assemble() {
        this.carBody.construct();
        console.log('Car assembled');
    }
}

// Client code
const myCar = new Car();
myCar.assemble();
myCar.drive();

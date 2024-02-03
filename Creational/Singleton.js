
/**
 * 
 * Solves 2 probs: (resulting in violating Single Responsibility Principle)
 * 1. A class should have only one instance of it
 * 2. Provide a global access point to that instance
 * 
 */
let instance;

class Singleton {
    constructor() {
        if(instance){
            throw new Error('Instance already created!');
        }else {
            instance = this;
        }
    }

    getInstance() {
        return this;
    }
}

let s1 = new Singleton();
export default Object.freeze(s1); // To make sure no modifications can be done. 
// let s2 = new Singleton(); // error thrown

/**
 * The Observer Pattern defines a one to many dependency between objects so that 
 * one object changes state, all of its dependents are notified and updated automatically.
 * Eg: Product out of stock Notify me capability,
 *     Marketing Email subscriptions  etc., 
 */

class LettersObservable{
    constructor() {
        this.subscribers = [];
    }

    add(sub) {
        this.subscribers.push(sub);
    }

    notify(letter) {
        // notify all subscribers about new letter added
        this.subscribers.forEach(sub => console.log(`sent the new letter - ${letter} to mail`, sub));
        console.log('notified all subs')
    }
}

class Letters {
    constructor(observer) {
        this.observer = observer;
        this.letters = [];
    }

    add(letter) {
        this.letters.push(letter);
        this.observer.notify(letter);
    }
}

const observer = new LettersObservable();
observer.add('Jhon');
observer.add('Doe');
const letters = new Letters(observer);
letters.add('let1');
letters.add('let2');

/**
 * As the name suggests, a mediator takes care of communicatin b/w diff. objects
 * instead of them communicating directly among themselves which would lead to
 * unnescessary complications. 
 * Eg: (1) Chatroom - All users communicate with others using a mediator called Chatroom
 *  (2) Authenticator - All users can be authenticate using the Authenticator mediator 
 *                      instead of user class directly communicating with db.
 *  (3) StockExchange broker
 */

// Mediator
class Authenticator {
    constructor() {
        this.users = [];
    }

    addUser(user) {
        this.users.push(user);
        user.setMediator(this);
    }

    authenticate(username, password, user) {
        const isValid = this.users.some((u) => {return u.name === username});
        console.log(`${user.getName()} authentication ${isValid ? 'succeeded' : 'failed'}`);
        return isValid;
    }
}

class User {
    constructor(name) {
        this.name = name;
        this.mediator = null;
    }

    setMediator(mediator) {
        this.mediator = mediator;
    }

    getName() {
        return this.name;
    }

    authenticate(username, password) {
        return this.mediator.authenticate(username, password, this);
    }
}

const authenticator = new Authenticator();

const user1 = new User('Alice');
authenticator.addUser(user1);

const user2 = new User('Bob');
authenticator.addUser(user2);

// Simulate authentication attempts
user1.authenticate('Alice', 'pass123'); // Alice authentication succeeded
user2.authenticate('bob', 'wrongpass'); // Bob authentication failed

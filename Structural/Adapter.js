/**
 * Can also be referred to as Wrapper Pattern.
 * Match interfaces of different classes.
 * Useful in converting one form of object to another form of object (to collaborate with incompatible interfaces)
 */

class OldObj {
    request(data) {
        console.log('Data is in xml format');
        return data;
    }
}

class NewObj {
    request(data) {
        if(data === 'xml') {
            console.log('data type incompatible, cannot process data');
            return;
        }
        console.log('Data is in json format');
        return data;
    }
}

class Client {
    constructor(obj) {
        this.obj = obj;
    }
    
    makeReq(data) {
        this.obj.request(data);
    }
}

class Adapter {
    constructor(adaptee) {
        this.adaptee = adaptee;
    }

    //convert formats
    makeReq(data) {
        if(data === 'xml'){
            console.log('data is getting converted from xml to json');
            data = 'json';
        }
        return this.adaptee.request(data);
    }
}

const old = new OldObj();
let client = new Client(old);
client.makeReq('xml');

const newObj = new NewObj();
client.obj = newObj;
client.makeReq('xml'); // error thrown

client = new Adapter(new NewObj());
client.makeReq('xml');

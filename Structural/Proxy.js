/**
 * Proxy Object is a placeholder for for another obejct.
 * A Proxy controls the original object's functionality, allowing to perform some
 * operations either before or after the req. is made to original object.
 * Eg: Validations, Caching, formatting etc., before getting or setting a object's prop
 */

const UsersDB = {
    1: {
        name: 'Jhon',
        age: 25
    },
    2: {
        name: 'Mary',
        age: '22'
    }
}

const UsersCache = {}

const UserProxy = new Proxy(UsersDB, {
    get: (obj, id) => {
        if(!(id in obj))
            return 'User dont exist';
        if(!UsersCache[id])
            UsersCache[id] = obj[id];
        // (OR) use JS built-in method Reflect to get
        // UsersCahe[id] = Reflect.get(obj, id);
        return UsersCache[id];
    },
    set: (obj, key, val) => {
        if(!key || !val)
            return 'Key/ Val is missing';
        obj[key] = val;
        // (OR) use JS built-in method Reflect to get
        // UsersCahe[id] = Reflect.set(obj, key, val);
        return `User with id - ${key} is set with details - ${val}`
    }
})

console.log(UserProxy[1]);
console.log(UserProxy[2]);
console.log(UserProxy[3]);
UserProxy[4] = {name: 'Doe', age: 18}
console.log(UserProxy[4]);
console.log(UsersCache)

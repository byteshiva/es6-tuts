const request = require('request');

interface Person {
    name: string;
    age: number;
}

class PersonManager {
    hello: string;

    constructor() {
        this.hello = 'foo';
    }
}


function sortPeople(input: Person[] = []) {
    const result = input.slice(0);

    return result.sort((a, b) => {
        return a.name.localeCompare(b.name);
    });

    return result;
}

// sortPeople(5);
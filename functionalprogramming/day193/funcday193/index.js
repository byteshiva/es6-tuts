const R = require('ramda');

const numbers = [1, 2, 3, 4];
const factorials = R.scan(R.multiply, 1, numbers); //=> [1, 1, 2, 6, 24]

console.log(factorials);

const R = require('ramda');

const isOdd = (n) => n % 2 === 1;

rreject1 = R.reject(isOdd, [1, 2, 3, 4]); //=> [2, 4]

rreject2 = R.reject(isOdd, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}

console.log(rreject1, rreject2);

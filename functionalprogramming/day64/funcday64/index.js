const R = require('ramda');

const isEven = n => n % 2 === 0;

const rFilter1 = R.filter(isEven, [1, 2, 3, 4]); //=> [2, 4]

const rFilter2 = R.filter(isEven, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}

console.log(rFilter1, rFilter2);


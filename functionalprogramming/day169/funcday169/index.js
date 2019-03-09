const R = require('ramda');

const isUpperCase = (val, key) => key.toUpperCase() === key;
const rpickby1 = R.pickBy(isUpperCase, {a: 1, b: 2, A: 3, B: 4}); //=> {A: 3, B: 4}

console.log(rpickby1);


const R = require('ramda');

const rzipobj1 = R.zipObj(['a', 'b', 'c'], [1, 2, 3]); //=> {a: 1, b: 2, c: 3}

console.log(rzipobj1);

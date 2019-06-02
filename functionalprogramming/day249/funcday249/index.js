const R = require('ramda');

const rwithout1 = R.without([1, 2], [1, 2, 1, 3, 4]); //=> [3, 4]

console.log(rwithout1);

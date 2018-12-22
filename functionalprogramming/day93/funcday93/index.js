const R = require('ramda');

const rinsert1 = R.insert(2, 'x', [1,2,3,4]); //=> [1,2,'x',3,4]

console.log(rinsert1);


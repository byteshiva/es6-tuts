const R = require('ramda');

const intersection1 = R.intersection([1,2,3,4], [7,6,5,4,3]); //=> [4, 3]

console.log(intersection1);

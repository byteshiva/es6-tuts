const R = require('ramda');

const rlength1 = R.length([]); //=> 0
const rlength2 = R.length([1, 2, 3]); //=> 3

console.log(rlength1, rlength2);

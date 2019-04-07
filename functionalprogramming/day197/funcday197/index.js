const R = require('ramda');

const diff = function(a, b) { return a - b; };
const rsort1 = R.sort(diff, [4,2,7,5]); //=> [2, 4, 5, 7]

console.log(rsort1);

const R = require('ramda');

const reqs1 = R.equals(1, 1); //=> true
const reqs2 = R.equals(1, '1'); //=> false
const reqs3 = R.equals([1, 2, 3], [1, 2, 3]); //=> true

const a = {}; a.v = a;
const b = {}; b.v = b;
const reqs4 = R.equals(a, b); //=> true

console.log(reqs1, reqs2, reqs3, reqs4);

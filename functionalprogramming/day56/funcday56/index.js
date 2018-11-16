const R = require('ramda');
var l = [1, -1, 1, 3, 4, -4, -4, -5, 5, 3, 3];

const rdropRepeatsWith1 = R.dropRepeatsWith(R.eqBy(Math.abs), l); //=> [1, 3, 4, -5, 3]

console.log(rdropRepeatsWith1);

const R = require('ramda');

const rmin1 = R.min(789, 123); //=> 123
const rmin2 = R.min('a', 'b'); //=> 'a'

console.log(rmin1, rmin2);


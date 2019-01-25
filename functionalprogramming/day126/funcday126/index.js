const R = require('ramda');

const rmax1 = R.max(789, 123); //=> 789
const rmax2= R.max('a', 'b'); //=> 'b'

console.log(rmax1, rmax2);

const R = require('ramda');

const rtrim1  = R.trim('   xyz  '); //=> 'xyz'
const rtrim2  = R.map(R.trim, R.split(',', 'x, y, z')); //=> ['x', 'y', 'z']

console.log(rtrim1, rtrim2);

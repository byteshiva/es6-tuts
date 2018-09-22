const R = require('ramda');

const rTrim = R.trim('   xyz  '); //=> 'xyz'
const rMap = R.map(R.trim, R.split(',', 'x, y, z')); //=> ['x', 'y', 'z']


console.log(rTrim, rMap);


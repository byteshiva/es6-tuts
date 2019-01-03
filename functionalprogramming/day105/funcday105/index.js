const R = require('ramda');

const getRange = R.juxt([Math.min, Math.max]);
const rjuxt1 = getRange(3, 4, 9, -3); //=> [-3, 9]

console.log(rjuxt1);

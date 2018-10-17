const R = require('ramda');

const clamp1 = R.clamp(1, 10, -5) // => 1
const clamp2 = R.clamp(1, 10, 15) // => 10
const clamp3 = R.clamp(1, 10, 4)  // => 4

console.log(clamp1, clamp2, clamp3);

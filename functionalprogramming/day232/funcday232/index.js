const R = require('ramda');

const rutil1 = R.until(R.gt(R.__, 100), R.multiply(2))(1) // => 128

console.log(rutil1);

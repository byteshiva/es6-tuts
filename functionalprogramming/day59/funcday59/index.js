const R = require('ramda');

const reqby = R.eqBy(Math.abs, 5, -5); //=> true

console.log(reqby);


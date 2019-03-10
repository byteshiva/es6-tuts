const R = require('ramda');

const f = R.pipe(Math.pow, R.negate, R.inc);

console.log(f(10));

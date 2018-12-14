const R = require('ramda');

const o = {};
const riden1 = R.identical(o, o); //=> true
const riden2 = R.identical(1, 1); //=> true
const riden3 = R.identical(1, '1'); //=> false
const riden4 = R.identical([], []); //=> false
const riden5 = R.identical(0, -0); //=> false
const riden6 = R.identical(NaN, NaN); //=> true

console.log(riden1, riden2, riden3, riden4, riden5, riden6);

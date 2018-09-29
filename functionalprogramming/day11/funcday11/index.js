const R = require('ramda');

const r1 = R.and(true, true); //=> true
const r2 = R.and(true, false); //=> false
const r3 = R.and(false, true); //=> false
const r4 =R.and(false, false); //=> false

console.log(r1, r2, r3, r4);

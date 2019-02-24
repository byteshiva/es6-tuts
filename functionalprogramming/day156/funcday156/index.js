const R = require('ramda');

const ror1 = R.or(true, true); //=> true
const ror2 = R.or(true, false); //=> true
const ror3 = R.or(false, true); //=> true
const ror4 = R.or(false, false); //=> false

console.log(ror1, ror2, ror3, ror4);

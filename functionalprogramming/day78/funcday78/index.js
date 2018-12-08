const R = require('ramda');

const rgte1 = R.gte(2, 1); //=> true
const rgte2 = R.gte(2, 2); //=> true
const rgte3 = R.gte(2, 3); //=> false
const rgte4 = R.gte('a', 'z'); //=> false
const rgte5 = R.gte('z', 'a'); //=> true

console.log(rgte1, rgte2, rgte3, rgte4, rgte5);

const R = require('ramda');

const rlt1 = R.lt(2, 1); //=> false
const rlt2 = R.lt(2, 2); //=> false
const rlt3 = R.lt(2, 3); //=> true
const rlt4 = R.lt('a', 'z'); //=> true
const rlt5 = R.lt('z', 'a'); //=> false

console.log(rlt1, rlt2, rlt3, rlt4, rlt5);

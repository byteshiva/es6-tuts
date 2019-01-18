const R = require('ramda');

const rlte1 = R.lte(2, 1); //=> false
const rlte2 = R.lte(2, 2); //=> true
const rlte3 = R.lte(2, 3); //=> true
const rlte4 = R.lte('a', 'z'); //=> true
const rlte5 = R.lte('z', 'a'); //=> false

console.log(rlte1, rlte2, rlte3, rlte4, rlte5);

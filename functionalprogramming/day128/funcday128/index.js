const R = require('ramda');

const rmean1 = R.mean([2, 7, 9]); //=> 6
const rmean2 = R.mean([]); //=> NaN

console.log(rmean1, rmean2);

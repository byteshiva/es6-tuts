const R = require('ramda');

const rgt1 = R.gt(2, 1); //=> true
const rgt2 = R.gt(2, 2); //=> false
const rgt3 = R.gt(2, 3); //=> false
const rgt4 = R.gt('a', 'z'); //=> false
const rgt5 = R.gt('z', 'a'); //=> true


console.log(rgt1, rgt2, rgt3, rgt4, rgt5);

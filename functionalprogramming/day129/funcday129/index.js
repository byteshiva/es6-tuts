const R = require('ramda');

const rmedian1 = R.median([2, 9, 7]); //=> 7
const rmedian2 = R.median([7, 2, 10, 9]); //=> 8
const rmedian3 = R.median([]); //=> NaN

console.log(rmedian1, rmedian2, rmedian3);

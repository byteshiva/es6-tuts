const R = require('ramda');

const isEven = n => n % 2 === 0;
const isOdd = n => n % 2 === 1;

const rnone1 = R.none(isEven, [1, 3, 5, 7, 9, 11]); //=> true
const rnone2 = R.none(isOdd, [1, 3, 5, 7, 8, 11]); //=> false

console.log(rnone1, rnone2);


const R = require('ramda');

//  square :: Number -> Number
const square = n => n * n;

const rminby1 = R.minBy(square, -3, 2); //=> 2

const rminby2 = R.reduce(R.minBy(square), Infinity, [3, -5, 4, 1, -2]); //=> 1
const rminby3 = R.reduce(R.minBy(square), Infinity, []); //=> Infinity

console.log(rminby1, rminby2, rminby3);



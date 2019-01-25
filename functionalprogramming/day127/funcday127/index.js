const R = require('ramda');

//  square :: Number -> Number
const square = n => n * n;

const rmaxby1 = R.maxBy(square, -3, 2); //=> -3
const rmaxby2 = R.reduce(R.maxBy(square), 0, [3, -5, 4, 1, -2]); //=> -5
const rmaxby3 = R.reduce(R.maxBy(square), 0, []); //=> 0

console.log(rmaxby1, rmaxby2, rmaxby3);

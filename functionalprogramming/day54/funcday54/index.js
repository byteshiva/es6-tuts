const R = require('ramda');

var lteThree = x => x <= 3;

const RdropWhile1 = R.dropLastWhile(lteThree, [1, 2, 3, 4, 3, 2, 1]); //=> [1, 2, 3, 4]

const RdropWhile2 = R.dropLastWhile(x => x !== 'd' , 'Ramda'); //=> 'Ramd'

console.log(RdropWhile1, RdropWhile2)

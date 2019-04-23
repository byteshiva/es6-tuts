const R = require('ramda');

const isNotOne = x => x !== 1;

const rtakelastwhile1 = R.takeLastWhile(isNotOne, [1, 2, 3, 4]); //=> [2, 3, 4]

const rtakelastwhile2 = R.takeLastWhile(x => x !== 'R' , 'Ramda'); //=> 'amda'

console.log(rtakelastwhile1, rtakelastwhile2);

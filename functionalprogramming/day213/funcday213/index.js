const R = require('ramda');

const isNotFour = x => x !== 4;

const rtakewhile1 = R.takeWhile(isNotFour, [1, 2, 3, 4, 3, 2, 1]); //=> [1, 2, 3]
const rtakewhile2 = R.takeWhile(x => x !== 'd' , 'Ramda'); //=> 'Ram'

console.log(rtakewhile1, rtakewhile2);


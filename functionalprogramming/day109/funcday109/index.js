const R = require('ramda');

const rlastindexof1 = R.lastIndexOf(3, [-1,3,3,0,1,2,3,4]); //=> 6
const rlastindexof2 = R.lastIndexOf(10, [1,2,3,4]); //=> -1

console.log(rlastindexof1, rlastindexof2);

const R = require('ramda');

const rindexof1 = R.indexOf(3, [1,2,3,4]); //=> 2
const rindexof2 = R.indexOf(10, [1,2,3,4]); //=> -1

console.log(rindexof1, rindexof2);

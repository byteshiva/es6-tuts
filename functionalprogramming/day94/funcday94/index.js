const R = require('ramda');

const rinsertall1 = R.insertAll(2, ['x','y','z'], [1,2,3,4]); //=> [1,2,'x','y','z',3,4]

console.log(rinsertall1);

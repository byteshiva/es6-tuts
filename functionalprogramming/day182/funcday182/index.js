const R = require('ramda');

const rrange1 = R.range(1, 5);    //=> [1, 2, 3, 4]
const rrange2 = R.range(50, 53);  //=> [50, 51, 52]

console.log(rrange1, rrange2);

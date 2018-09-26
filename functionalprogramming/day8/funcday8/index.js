const R = require('ramda');

var equals3 = R.equals(3);
const transducer = R.all(equals3)([3, 3, 3, 3]); //=> true
const transducer2 = R.all(equals3)([3, 3, 1, 3]); //=> false

console.log(transducer, "\n", transducer2);

const R = require('ramda');

var lessThan0 = R.flip(R.lt)(0);
var lessThan2 = R.flip(R.lt)(2);
const anyCondCheck1 = R.any(lessThan0)([1, 2]); //=> false
const anyCondCheck2 = R.any(lessThan2)([1, 2]); //=> true

console.log(anyCondCheck1, anyCondCheck2);



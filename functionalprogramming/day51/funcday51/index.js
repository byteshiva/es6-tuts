const R = require('ramda');

console.log(R.divide(71, 100)); //=> 0.71

var half = R.divide(R.__, 2);
half(42); //=> 21

console.log(half(42));

var reciprocal = R.divide(1);
reciprocal(4);   //=> 0.25

console.log(reciprocal(4));
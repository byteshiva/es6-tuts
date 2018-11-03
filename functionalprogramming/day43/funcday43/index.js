const R = require('ramda');

var sumArgs = (...args) => R.sum(args);

var curriedAddFourNumbers = R.curryN(4, sumArgs);
var f = curriedAddFourNumbers(1, 2);
var g = f(3);
console.log(g(4)); //=> 10

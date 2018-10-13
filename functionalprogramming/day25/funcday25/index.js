const R = require('ramda');

var gt10 = R.gt(R.__, 10)
var lt20 = R.lt(R.__, 20)
var f = R.both(gt10, lt20);
const bothTestifyfn1 = f(15); //=> true
const bothTestifyfn2 = f(30); //=> false

console.log(bothTestifyfn1, bothTestifyfn2)




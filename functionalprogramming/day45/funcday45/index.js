const R = require('ramda');
var defaultTo42 = R.defaultTo(42);

console.log(defaultTo42(null));  //=> 42
console.log(defaultTo42(undefined));  //=> 42
console.log(defaultTo42('Ramda'));  //=> 'Ramda'
// parseInt('string') results in NaN
console.log(defaultTo42(parseInt('string'))); //=> 42

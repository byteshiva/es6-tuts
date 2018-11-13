const R = require('ramda');

const dropL1 =  R.dropLast(1, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
const dropL2 =  R.dropLast(2, ['foo', 'bar', 'baz']); //=> ['foo']
const dropL3 =  R.dropLast(3, ['foo', 'bar', 'baz']); //=> []
const dropL4 =  R.dropLast(4, ['foo', 'bar', 'baz']); //=> []
const dropL5 =  R.dropLast(3, 'ramda');               //=> 'ra'

console.log(dropL1, dropL2, dropL3, dropL4, dropL5);

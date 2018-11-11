const R = require('ramda');

const rd1 = R.drop(1, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']
const rd2 = R.drop(2, ['foo', 'bar', 'baz']); //=> ['baz']
const rd3 = R.drop(3, ['foo', 'bar', 'baz']); //=> []
const rd4 = R.drop(4, ['foo', 'bar', 'baz']); //=> []
const rd5 = R.drop(3, 'ramda');               //=> 'da'


console.log(rd1, rd2 , rd3, rd4, rd5);



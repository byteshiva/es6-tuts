const R = require('ramda');

const headLens = R.lensIndex(0);

const rover1 = R.over(headLens, R.toUpper, ['foo', 'bar', 'baz']); //=> ['FOO', 'bar', 'baz']

console.log(rover1);

const R = require('ramda');

const rintersperse1 = R.intersperse('a', ['b', 'n', 'n', 's']); //=> ['b', 'a', 'n', 'a', 'n', 'a', 's']

console.log(rintersperse1);

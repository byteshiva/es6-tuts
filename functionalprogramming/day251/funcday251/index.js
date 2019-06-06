const R = require('ramda');

const rzip1 = R.zip([1, 2, 3], ['a', 'b', 'c']); //=> [[1, 'a'], [2, 'b'], [3, 'c']]

console.log(rzip1);


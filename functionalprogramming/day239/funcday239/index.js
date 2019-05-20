const R = require('ramda');

const runnest1 = R.unnest([1, [2], [[3]]]); //=> [1, 2, [3]]
const runnest2 = R.unnest([[1, 2], [3, 4], [5, 6]]); //=> [1, 2, 3, 4, 5, 6]

console.log(runnest1, runnest2);

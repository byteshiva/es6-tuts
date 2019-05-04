const R = require('ramda');

const rtranspose1 = R.transpose([[1, 'a'], [2, 'b'], [3, 'c']]) //=> [[1, 2, 3], ['a', 'b', 'c']]
const rtranspose2 = R.transpose([[1, 2, 3], ['a', 'b', 'c']]) //=> [[1, 'a'], [2, 'b'], [3, 'c']]
// If some of the rows are shorter than the following rows, their elements are skipped:
const rtranspose3 = R.transpose([[10, 11], [20], [], [30, 31, 32]]) //=> [[10, 20, 30], [11, 31], [32]]

console.log(rtranspose1, rtranspose2, rtranspose3);


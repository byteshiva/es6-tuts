const R = require('ramda');

const rsplitevery1 = R.splitEvery(3, [1, 2, 3, 4, 5, 6, 7]); //=> [[1, 2, 3], [4, 5, 6], [7]]
const rsplitevery2 = R.splitEvery(3, 'foobarbaz'); //=> ['foo', 'bar', 'baz']

console.log(rsplitevery1, rsplitevery2);

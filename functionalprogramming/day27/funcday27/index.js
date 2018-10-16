const R = require('ramda');

var duplicate = n => [n, n];
const RChainNum1 = R.chain(duplicate, [1, 2, 3]); //=> [1, 1, 2, 2, 3, 3]

const RChainNum2 = R.chain(R.append, R.head)([1, 2, 3]); //=> [1, 2, 3, 1]

console.log(RChainNum1, RChainNum1);


const R = require('ramda');

const rxprod1 = R.xprod([1, 2], ['a', 'b']); //=> [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]

console.log(rxprod1);

const R = require('ramda');

const rntharg1 = R.nthArg(1)('a', 'b', 'c'); //=> 'b'
const rntharg2 = R.nthArg(-1)('a', 'b', 'c'); //=> 'c'

console.log(rntharg1, rntharg2);

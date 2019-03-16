const R = require('ramda');

const rprop1 = R.prop('x', {x: 100}); //=> 100
const rprop2 = R.prop('x', {}); //=> undefined
const rprop3 = R.compose(R.inc, R.prop('x'))({ x: 3 }) //=> 4

console.log(rprop1, rprop2, rprop3);

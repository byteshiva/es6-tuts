const R = require('ramda');

const madd3 = R.liftN(3, (...args) => R.sum(args));
const rmadd3 = madd3([1,2,3], [1,2,3], [1]); //=> [3, 4, 5, 4, 5, 6, 5, 6, 7]

console.log(rmadd3);

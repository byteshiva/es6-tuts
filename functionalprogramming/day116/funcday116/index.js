const R = require('ramda');

const madd3 = R.lift((a, b, c) => a + b + c);

const rliftmadd1 = madd3([1,2,3], [1,2,3], [1]); //=> [3, 4, 5, 4, 5, 6, 5, 6, 7]

const madd5 = R.lift((a, b, c, d, e) => a + b + c + d + e);

const rliftmadd2 = madd5([1,2], [3], [4, 5], [6], [7, 8]); //=> [21, 22, 22, 23, 22, 23, 23, 24]

console.log(rliftmadd1, rliftmadd2);



const R = require('ramda');

const pipeWhileNotNil = R.pipeWith((f, res) => R.isNil(res) ? res : f(res));
const f = pipeWhileNotNil([Math.pow, R.negate, R.inc])

const rpipewith1 = f(3, 4); // -(3^4) + 1

console.log(rpipewith1);

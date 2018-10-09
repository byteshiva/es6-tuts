const R = require('ramda');

const Rassoc = R.assoc('c', 3, {a: 1, b: 2}); //=> {a: 1, b: 2, c: 3}
console.log(Rassoc);

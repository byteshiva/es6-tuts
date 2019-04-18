const R = require('ramda');

const eqA = R.eqBy(R.prop('a'));
const l1 = [{a: 1}, {a: 2}, {a: 3}, {a: 4}];
const l2 = [{a: 3}, {a: 4}, {a: 5}, {a: 6}];
rsymmetricdifference1 = R.symmetricDifferenceWith(eqA, l1, l2); //=> [{a: 1}, {a: 2}, {a: 5}, {a: 6}]

console.log(rsymmetricdifference1);

const R = require('ramda');

const l1 = [{a: 1}, {a: 2}];
const l2 = [{a: 1}, {a: 4}];
const runionwith1 = R.unionWith(R.eqBy(R.prop('a')), l1, l2); //=> [{a: 1}, {a: 2}, {a: 4}]

console.log(runionwith1);

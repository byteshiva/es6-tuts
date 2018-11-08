const R = require('ramda');

var cmp = (x, y) => x.a === y.a;
var l1 = [{a: 1}, {a: 2}, {a: 3}];
var l2 = [{a: 3}, {a: 4}];
RDiff = R.differenceWith(cmp, l1, l2); //=> [{a: 1}, {a: 2}]

console.log(RDiff);

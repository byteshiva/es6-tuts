const R = require('ramda');

console.log(R.difference([1,2,3,4], [7,6,5,4,3]));

console.log(R.difference([7,6,5,4,3], [1,2,3,4]));

console.log(R.difference([{a:1}, {b:2}], [{a: 1}, {c: 3}]);

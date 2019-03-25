const R = require('ramda');

const rreduced1 = R.reduce((acc, item) => item > 3 ? R.reduced(acc) : acc.concat(item), [], [1, 2, 3, 4, 5]) // [1, 2, 3]

console.log(rreduced1);

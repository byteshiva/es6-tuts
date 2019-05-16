const R = require('ramda');

const runiqby1 = R.uniqBy(Math.abs, [-1, -5, 2, 10, 1, 2]); //=> [-1, -5, 2, 10]


console.log(runiqby1);


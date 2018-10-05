const R = require('ramda');

var nums = [1, 2, 3, -99, 42, 6, 7];
const RApply = R.apply(Math.max, nums);

console.log(RApply);

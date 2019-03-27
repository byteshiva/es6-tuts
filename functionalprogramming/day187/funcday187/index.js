const R = require('ramda');
const isOdd = (acc, x) => x % 2 === 1;
const xs = [1, 3, 5, 60, 777, 800];
const rreducewhile1 = R.reduceWhile(isOdd, R.add, 0, xs); //=> 9

const ys = [2, 4, 6]
const rreducewhile2 = R.reduceWhile(isOdd, R.add, 111, ys); //=> 111

console.log(rreducewhile1, rreducewhile2);

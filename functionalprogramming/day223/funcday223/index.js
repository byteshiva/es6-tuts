const R = require('ramda');

const numbers = [1, 2, 3, 4];
const transducer = R.compose(R.map(R.add(1)), R.take(2));
const rtransduce1 = R.transduce(transducer, R.flip(R.append), [], numbers); //=> [2, 3]

const isOdd = (x) => x % 2 === 1;
const firstOddTransducer = R.compose(R.filter(isOdd), R.take(1));
const rtransduce2 = R.transduce(firstOddTransducer, R.flip(R.append), [], R.range(0, 100)); //=> [1]

console.log(rtransduce1, rtransduce2);

const R = require('ramda');

let count = 0;
const factorial = R.memoizeWith(R.identity, n => {
  count += 1;
  return R.product(R.range(1, n + 1));
});
const rfactorial1 = factorial(5); //=> 120
const rfactorial2 = factorial(5); //=> 120
const rfactorial3 = factorial(5); //=> 120
const rcount1 = count; //=> 1

console.log(rfactorial1, rfactorial2, rfactorial3);

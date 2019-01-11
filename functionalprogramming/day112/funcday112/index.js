const R = require('ramda');

const headLens = R.lensIndex(0);

const rleniview1 = R.view(headLens, ['a', 'b', 'c']);            //=> 'a'
const rleniset1 = R.set(headLens, 'x', ['a', 'b', 'c']);        //=> ['x', 'b', 'c']
const rleniover1 = R.over(headLens, R.toUpper, ['a', 'b', 'c']); //=> ['A', 'b', 'c']

console.log(rleniview1, rleniset1, rleniview1);


const R = require('ramda');

const rend1 = R.endsWith('c', 'abc')                //=> true
const rend2 = R.endsWith('b', 'abc')                //=> false
const rend3 = R.endsWith(['c'], ['a', 'b', 'c'])    //=> true
const rend4 = R.endsWith(['b'], ['a', 'b', 'c'])    //=> false

console.log(rend1, rend2, rend3, rend4);



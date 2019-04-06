const R = require('ramda');

const rslice1 = R.slice(1, 3, ['a', 'b', 'c', 'd']);        //=> ['b', 'c']
const rslice2 = R.slice(1, Infinity, ['a', 'b', 'c', 'd']); //=> ['b', 'c', 'd']
const rslice3 = R.slice(0, -1, ['a', 'b', 'c', 'd']);       //=> ['a', 'b', 'c']
const rslice4 = R.slice(-3, -1, ['a', 'b', 'c', 'd']);      //=> ['b', 'c']
const rslice5 = R.slice(0, 3, 'ramda');                     //=> 'ram'

console.log(rslice1, rslice2, rslice3, rslice4, rslice5);

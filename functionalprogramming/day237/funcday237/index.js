const R = require('ramda');

const strEq = R.eqBy(String);
const runiqwith1  = R.uniqWith(strEq)([1, '1', 2, 1]); //=> [1, 2]
const runiqwith2  = R.uniqWith(strEq)([{}, {}]);       //=> [{}]
const runiqwith3  = R.uniqWith(strEq)([1, '1', 1]);    //=> [1]
const runiqwith4  = R.uniqWith(strEq)(['1', 1, 1]);    //=> ['1']

console.log(runiqwith1, runiqwith2, runiqwith3, runiqwith4);

const R = require('ramda');

const rtrycatch1 = R.tryCatch(R.prop('x'), R.F)({x: true}); //=> true
const rtrycatch2 = R.tryCatch(() => { throw 'foo'}, R.always('catched'))('bar') // => 'catched'
const rtrycatch3 = R.tryCatch(R.times(R.identity), R.always([]))('s') // => []


console.log(rtrycatch1, rtrycatch2, rtrycatch3);

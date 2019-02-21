const R = require('ramda');

const rof1 = R.of(null); //=> [null]
const rof2 = R.of([42]); //=> [[42]]

console.log(rof1, rof2);

const R = require('ramda');

var isNotNil = R.complement(R.isNil);
// const sNNl = isNil(null); //=> true
const sNotNl = isNotNil(null); //=> false
// const sNNl7 = isNil(7); //=> false
const sNNull7 = isNotNil(7); //=> true

// console.log(sNNl, sNotNl, sNNl7, sNNull7);
console.log( sNotNl,  sNNull7);


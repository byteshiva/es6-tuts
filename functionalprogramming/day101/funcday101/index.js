const R = require('ramda');

const ris1 = R.is(Object, {}); //=> true
const ris2 = R.is(Number, 1); //=> true
const ris3 = R.is(Object, 1); //=> false
const ris4 = R.is(String, 's'); //=> true
const ris5 = R.is(String, new String('')); //=> true
const ris6 = R.is(Object, new String('')); //=> true
const ris7 = R.is(Object, 's'); //=> false
const ris8 = R.is(Number, {}); //=> false

console.log(ris1, ris2, ris3, ris4, ris5, ris6, ris7, ris8);

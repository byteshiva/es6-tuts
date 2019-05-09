const R = require('ramda');

const rtype1 = R.type({}); //=> "Object"
const rtype2 = R.type(1); //=> "Number"
const rtype3 = R.type(false); //=> "Boolean"
const rtype4 = R.type('s'); //=> "String"
const rtype5 = R.type(null); //=> "Null"
const rtype6 = R.type([]); //=> "Array"
const rtype7 = R.type(/[A-z]/); //=> "RegExp"
const rtype8 = R.type(() => {}); //=> "Function"
const rtype9 = R.type(undefined); //=> "Undefined"

console.log(rtype1, rtype2, rtype3, rtype4, rtype5, rtype6, rtype7, rtype8, rtype9);

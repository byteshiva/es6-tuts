const R = require('ramda');

const ridentity1 = R.identity(1); //=> 1

const obj = {};
const ridentity2 =  R.identity(obj) === obj; //=> true

console.log(ridentity1, ridentity2);

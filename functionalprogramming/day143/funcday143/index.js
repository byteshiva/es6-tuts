const R = require('ramda');

const rmodulo1 = R.modulo(17, 3); //=> 2
// // JS behavior:
const rmodulo2 = R.modulo(-17, 3); //=> -2
const rmodulo3 = R.modulo(17, -3); //=> 2
const isOdd = R.modulo(R.__, 2);
const rmodulo4 = isOdd(42); //=> 0
const rmodulo5 = isOdd(21); //=> 1

console.log(rmodulo1, rmodulo2, rmodulo3, rmodulo4, rmodulo5);

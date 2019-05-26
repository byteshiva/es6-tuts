const R = require('ramda');

const rusewith1 = R.useWith(Math.pow, [R.identity, R.identity])(3, 4); //=> 81
const rusewith2 = R.useWith(Math.pow, [R.identity, R.identity])(3)(4); //=> 81
const rusewith3 = R.useWith(Math.pow, [R.dec, R.inc])(3, 4); //=> 32
const rusewith4 = R.useWith(Math.pow, [R.dec, R.inc])(3)(4); //=> 32

console.log(rusewith1, rusewith2, rusewith3, rusewith4);

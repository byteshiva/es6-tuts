const R = require('ramda');

const sayX = x => console.log('x is ' + x);
const rtap1 = R.tap(sayX, 100); //=> 100

console.log(rtap1);
// logs 'x is 100'

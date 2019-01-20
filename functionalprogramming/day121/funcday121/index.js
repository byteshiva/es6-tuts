const R = require('ramda');

const digits = ['1', '2', '3', '4'];
const appender = (a, b) => [a + b, a + b];

const rmapaccum1 = R.mapAccum(appender, 0, digits); //=> ['01234', ['01', '012', '0123', '01234']]

console.log(rmapaccum1);


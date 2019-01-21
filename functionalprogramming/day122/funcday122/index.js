const R = require('ramda');

const digits = ['1', '2', '3', '4'];
const appender = (a, b) => [b + a, b + a];

const rmapaccumright1 = R.mapAccumRight(appender, 5, digits); //=> ['12345', ['12345', '2345', '345', '45']]

console.log(rmapaccumright1);

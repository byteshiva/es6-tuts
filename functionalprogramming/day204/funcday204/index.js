const R = require('ramda');

const rsubtract1 = R.subtract(10, 8); //=> 2

const minus5 = R.subtract(R.__, 5);
const rsubtract2 = minus5(17); //=> 12

const complementaryAngle = R.subtract(90);
const rsubtract3 =  complementaryAngle(30); //=> 60
const rsubtract4 = complementaryAngle(72); //=> 18

console.log(rsubtract1, rsubtract2, rsubtract3, rsubtract4);

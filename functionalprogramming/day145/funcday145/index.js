const R = require('ramda');

const double = R.multiply(2);
const triple = R.multiply(3);
const rdouble1 = double(3);       //=>  6
const rtriple1 = triple(4);       //=> 12
const rmultiply1 = R.multiply(2, 5);  //=> 10

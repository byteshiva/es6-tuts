const R = require('ramda');

const rmathmod1 = R.mathMod(-17, 5);  //=> 3
const rmathmod2 = R.mathMod(17, 5);   //=> 2
const rmathmod3 = R.mathMod(17, -5);  //=> NaN
const rmathmod4 = R.mathMod(17, 0);   //=> NaN
const rmathmod5 = R.mathMod(17.2, 5); //=> NaN
const rmathmod6 = R.mathMod(17, 5.3); //=> NaN

const clock = R.mathMod(R.__, 12);

const rmathmod7 = clock(15); //=> 3
const rmathmod8 = clock(24); //=> 0

const seventeenMod = R.mathMod(17);
const rmathmod9 = seventeenMod(3);  //=> 2
const rmathmod10 = seventeenMod(4);  //=> 1
const rmathmod11 = seventeenMod(10); //=> 7

console.log(rmathmod1, rmathmod2, rmathmod3, rmathmod4, rmathmod5, rmathmod6, rmathmod7, rmathmod8, rmathmod9, rmathmod10, rmathmod11);

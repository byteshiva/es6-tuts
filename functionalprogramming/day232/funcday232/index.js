const R = require('ramda');

const f = n => n > 50 ? false : [-n, n + 10];
const runfold1 = R.unfold(f, 10); //=> [-10, -20, -30, -40, -50]

console.log(runfold1);

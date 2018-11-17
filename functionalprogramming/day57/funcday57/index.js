const R = require('ramda');

var lteTwo = x => x <= 2;

const rdropwhile1 = R.dropWhile(lteTwo, [1, 2, 3, 4, 3, 2, 1]); //=> [3, 4, 3, 2, 1]

const rdropwhile2 = R.dropWhile(x => x !== 'd' , 'Ramda'); //=> 'da'

console.log(rdropwhile1, rdropwhile2);



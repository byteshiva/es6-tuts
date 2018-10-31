const R = require('ramda');
var average = R.converge(R.divide, [R.sum, R.length])
console.log(average([1, 2, 3, 4, 5, 6, 7])) //=> 4

var strangeConcat = R.converge(R.concat, [R.toUpper, R.toLower])
console.log(strangeConcat("Yodel")) //=> "YODELyodel"

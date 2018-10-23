const R = require('ramda');

var classyGreeting = (firstName, lastName) => "The name's " + lastName + ", " + firstName + " " + lastName
var yellGreeting = R.compose(R.toUpper, classyGreeting);
console.log(yellGreeting('James', 'Bond')); //=> "THE NAME'S BOND, JAMES BOND"

console.log(R.compose(Math.abs, R.add(1), R.multiply(2))(-4)); //=> 7

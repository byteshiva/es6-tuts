const R = require('ramda');

const classyGreeting = name => "The name's " + name.last + ", " + name.first + " " + name.last
const yellGreeting = R.o(R.toUpper, classyGreeting);
const o1 = yellGreeting({first: 'James', last: 'Bond'}); //=> "THE NAME'S BOND, JAMES BOND"
const o2 = R.o(R.multiply(10), R.add(10))(-4) //=> 60

console.log(o1, o2);

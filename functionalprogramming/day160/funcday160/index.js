const R = require('ramda');

const multiply2 = (a, b) => a * b;
const double = R.partial(multiply2, [2]);
const rpartialdouble1 = double(2); //=> 4

const greet = (salutation, title, firstName, lastName) =>
  salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';

const sayHello = R.partial(greet, ['Hello']);
const sayHelloToMs = R.partial(sayHello, ['Ms.']);
const rpartial2 = sayHelloToMs('Jane', 'Jones'); //=> 'Hello, Ms. Jane Jones!'

console.log(rpartialdouble1, rpartial2);

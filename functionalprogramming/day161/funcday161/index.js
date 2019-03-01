const R = require('ramda');

const greet = (salutation, title, firstName, lastName) =>
  salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';

const greetMsJaneJones = R.partialRight(greet, ['Ms.', 'Jane', 'Jones']);

const rpartialright1 = greetMsJaneJones('Hello'); //=> 'Hello, Ms. Jane Jones!'

console.log(rpartialright1);

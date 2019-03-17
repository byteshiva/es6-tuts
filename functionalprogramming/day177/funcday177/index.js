const R = require('ramda');

const abby = {name: 'Abby', age: 7, hair: 'blond'};
const fred = {name: 'Fred', age: 12, hair: 'brown'};
const rusty = {name: 'Rusty', age: 10, hair: 'brown'};
const alois = {name: 'Alois', age: 15, disposition: 'surly'};
const kids = [abby, fred, rusty, alois];
const hasBrownHair = R.propEq('hair', 'brown');
const rpropeq1 = R.filter(hasBrownHair, kids); //=> [fred, rusty]

console.log(rpropeq1);

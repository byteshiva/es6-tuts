const R = require('ramda');

var byAge = R.descend(R.prop('age'));
var people = [
{age: 21},
{age: 24},
{age: 31},
{age: 51},
{age: 11},
{age: 91},
{age: 31},
{age: 51},
];
var peopleByOldestFirst = R.sort(byAge, people);
console.log(peopleByOldestFirst);

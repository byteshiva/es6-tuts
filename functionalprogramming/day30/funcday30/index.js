const R = require('ramda');

var byAge = R.comparator((a, b) => a.age < b.age);
var people = [
	{ age: 33},
	{ age: 91},
	{ age: 1},
	{ age: 21},
	{ age: 23}
];
var peopleByIncreasingAge = R.sort(byAge, people);

console.log(peopleByIncreasingAge);

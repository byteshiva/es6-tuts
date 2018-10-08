const R = require('ramda');

var byAge = R.ascend(R.prop('age'));
var people = [
{'age':12},
{'age':11},
{'age':1},
{'age':3},
{'age':2},
{'age':9},
{'age':18},
];
var peopleByYoungestFirst = R.sort(byAge, people);

console.log(peopleByYoungestFirst);

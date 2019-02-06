const R = require('ramda');

const rmergeright1 = R.mergeRight({ 'name': 'fred', 'age': 10 }, { 'age': 40 });
//=> { 'name': 'fred', 'age': 40 }

const withDefaults = R.mergeRight({x: 0, y: 0});
const withdefaultsmergeright1 = withDefaults({y: 2}); //=> {x: 0, y: 2}

console.log(rmergeright1, withdefaultsmergeright1);



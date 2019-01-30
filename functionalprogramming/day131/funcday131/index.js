const R = require('ramda');

R.merge({ 'name': 'fred', 'age': 10 }, { 'age': 40 });
//=> { 'name': 'fred', 'age': 40 }

const withDefaults = R.merge({x: 0, y: 0});
const rmerge1 = withDefaults({y: 2}); //=> {x: 0, y: 2}

console.log(rmerge1);

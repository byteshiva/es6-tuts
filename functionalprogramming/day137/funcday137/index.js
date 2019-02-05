const R = require('ramda');

const rmergeleft1 = R.mergeLeft({ 'age': 40 }, { 'name': 'fred', 'age': 10 });
//=> { 'name': 'fred', 'age': 40 }

const resetToDefault = R.mergeLeft({x: 0});
const resettodefault1 = resetToDefault({x: 5, y: 2}); //=> {x: 0, y: 2}

console.log(rmergeleft1, resettodefault1);

const R = require('ramda');

const tomato = {firstName: '  Tomato ', data: {elapsed: 100, remaining: 1400}, id:123};

const transformations = {
  firstName: R.trim,
  lastName: R.trim, // Will not get invoked.
  data: {elapsed: R.add(1), remaining: R.add(-1)}
};

const revolv1 = R.evolve(transformations, tomato); //=> {firstName: 'Tomato', data: {elapsed: 101, remaining: 1399}, id:123}

console.log(revolv1);

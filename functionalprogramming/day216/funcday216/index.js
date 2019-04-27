const R = require('ramda');

var makeQuery = (email) => ({ query: { email }});

//getMemberName :: String -> Promise ({firstName, lastName})
var getMemberName = R.pipe(
  makeQuery,
  fetchMember,
  R.then(R.pick(['firstName', 'lastName']))
);

console.log(getMemberName);

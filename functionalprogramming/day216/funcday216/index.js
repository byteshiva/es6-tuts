const R = require('ramda');

var makeQuery = (email) => ({ query: { email }});

//getMemberName :: String -> Promise ({firstName, lastName})
  // fetchMember,
var getMemberName = R.pipe(
  makeQuery,
  R.then(R.pick(['firstName', 'lastName']))
);

console.log(getMemberName);

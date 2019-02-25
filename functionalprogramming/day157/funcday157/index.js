const R = require('ramda');

var failedFetch = (id) => Promise.reject('bad ID');
var useDefault = () => ({ firstName: 'Bob', lastName: 'Loblaw' })

//recoverFromFailure :: String -> Promise ({firstName, lastName})
var recoverFromFailure = R.pipe(
  failedFetch,
  R.otherwise(useDefault),
  R.then(R.pick(['firstName', 'lastName'])),
);
recoverFromFailure(12345).then(console.log)

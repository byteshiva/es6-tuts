const R = require('ramda');
// truncate :: String -> String
const truncate = R.when(
  R.propSatisfies(R.gt(R.__, 10), 'length'),
  R.pipe(R.take(10), R.append('…'), R.join(''))
);
const rwhen1 = truncate('12345');         //=> '12345'
const rwhen2 = truncate('0123456789ABC'); //=> '0123456789…'

console.log(rwhen1, rwhen2);

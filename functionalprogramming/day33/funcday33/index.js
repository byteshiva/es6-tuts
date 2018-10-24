const R = require('ramda');
const M       = require('ramda-fantasy').Maybe;
//  get :: String -> Object -> Maybe *
 var get = R.curry((propName, obj) => M(obj[propName]))

 //  getStateCode :: Maybe String -> Maybe String
 var getStateCode = R.composeK(
   R.compose(M.of, R.toUpper),
   get('state'),
   get('address'),
   get('user'),
 );
const gCode =  getStateCode({"user":{"address":{"state":"ny"}}}); //=> Maybe.Just("NY")
const gCodeM = getStateCode({}); //=> Maybe.Nothing()

console.log(gCode, gCodeM);


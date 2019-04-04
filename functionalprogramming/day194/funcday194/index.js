const R = require('ramda');
const RF = require('ramda-fantasy');
const Maybe = RF.Maybe,
      Just = Maybe.Just,
      Nothing = Maybe.Nothing;

const rsequence1 = R.sequence(Maybe.of, [Just(1), Just(2), Just(3)]);   //=> Just([1, 2, 3])
const rsequence2 = R.sequence(Maybe.of, [Just(1), Just(2), Nothing()]); //=> Nothing()
const rsequence3 = R.sequence(R.of, Just([1, 2, 3])); //=> [Just(1), Just(2), Just(3)]
const rsequence4 = R.sequence(R.of, Nothing());       //=> [Nothing()]

console.log(rsequence1, rsequence2, rsequence3, rsequence4);

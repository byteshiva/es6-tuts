const R = require('ramda');

var isClub = R.propEq('suit', '♣');
var isSpade = R.propEq('suit', '♠');
var isBlackCard = R.anyPass([isClub, isSpade]);

const isB1 = isBlackCard({rank: '10', suit: '♣'}); //=> true
const isB2 = isBlackCard({rank: 'Q', suit: '♠'}); //=> true
const isB3 = isBlackCard({rank: 'Q', suit: '♦'}); //=> false

console.log(isB1, isB2, isB3);

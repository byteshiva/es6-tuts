var nlp = require('compromise')
var doc = nlp('London is calling')
console.log(doc.sentences().toNegative().out('text'))

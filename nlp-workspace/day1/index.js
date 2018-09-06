var nlp = require('compromise')
doc = nlp('a bottle of beer on the wall.')
doc.nouns(0).toPlural()
console.log(doc.out('text'))

doc = nlp('ninety five thousand and fifty two')
const toNum = doc.values().toNumber().out()
console.log(toNum);
// '95052'

doc = nlp('the 23rd of December')
doc.values().add(2).toText()
const toTxt = doc.out('text')
console.log(toTxt);
// 'the twenty fifth of December'

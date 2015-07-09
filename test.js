var MyParrot = require('./parrot')

console.log(MyParrot.speakEnglish() )
console.log(MyParrot.speakSpanish() )

var MyContact = require('./contact')

var name = MyContact.parseName('Jerod Estapa,555-555-5555')
var number = MyContact.parseNumber('Jerod Estapa,555-555-5555')
var contact = MyContact.createContact('Jerod Estapa,555-555-5555')

console.log(name)
console.log(number)
console.log(contact)
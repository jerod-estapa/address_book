var Contact = {}

Contact.parseName = function(str) {
	return str.split(",")[0].trim()
}

Contact.parseNumber = function(str) {
	return str.split(",")[1].trim()
}

Contact.createContact = function(str) {
	var contact = {
		name: this.parseName(str),
		number: this.parseNumber(str)
	}
	return contact
}

Contact.loadContacts = function(done) {
	var jsonfile = require('jsonfile')
	jsonfile.readFile('data.json', function(err, data) {
		done(err, data)
	})
}

Contact.saveContacts = function(contacts, done) {
	var jsonfile = require('jsonfile')
	jsonfile.writeFile('data.json', contacts, function(err, data) {
		done(err, data)
	})
}

Contact.saveContact = function(contact, done) {
	var _this = this
	this.loadContacts(function(err, contacts) {
		if (err) {return done(err) }
		contacts.push(contact)
		_this.saveContacts(contacts, done)
	})

}

Contact.findContacts = function(name, done) {
	function checkContacts(name) {
		return name
	}
	this.loadContacts(function(err, contacts) {
		if (err) {return done(err)}
		contacts.filter(checkContacts)
	})
}

module.exports = Contact
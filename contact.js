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

module.exports = Contact
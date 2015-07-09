var Contact = {}

Contact.parseName = function(str) {
	var res = str.split(",")
	return res[0]
};

Contact.parseNumber = function(str) {
	var res = str.split(",")
	return res[1]
}

module.exports = Contact
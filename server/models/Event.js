var mongoose = require('mongoose');

var eventSchema = mongoose.Schema({
	name: String,
	date: Date
})

module.exports = mongoose.model('Event', eventSchema);
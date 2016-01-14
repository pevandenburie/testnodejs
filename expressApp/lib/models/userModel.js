var mongoose = require('./../db');

// Create the User schema
var userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	firstname: {
		type: String,
		required: true,
	},
	age: {
		type: Number,
		required: true,
	},
}, {collection: 'users'});

// Register the schema
var User = mongoose.model('User', userSchema);

exports.mongoose = mongoose;
exports.User = User;
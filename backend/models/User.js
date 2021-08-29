const mongoose = require("mongoose")

const user = new mongoose.Schema({
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String
	},
	walletAddress: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: String
	},
	isAdmin: {
		type: Boolean,
		required: true
	}
})

mongoose.exports = mongoose.Model("User",user)

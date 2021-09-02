const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String
	},
	email: {
		type: String,
	},
	walletAddress: {
		type: String,
		required: true
	},
	isAdmin: {
		type: Boolean,
		required: true
	}
})

module.exports = new mongoose.model("User", UserSchema)

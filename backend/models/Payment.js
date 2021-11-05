const mongoose = require("mongoose")

const schema = new mongoose.Schema({
	id: {
		type: String
	},
	itemId: {
		type: String
	},
	tokens: {
		type: Number
	},
	paid: {
		type: Boolean
	},
	date: {
		type: Date,
		default: Date.now
	}
})


module.exports = mongoose.model("Payment",schema)

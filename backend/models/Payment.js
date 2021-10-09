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
	}
})


module.exports = mongoose.model("Payment",schema)

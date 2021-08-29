const mongoose = require("mongoose")

const product = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	category: {
		type: String,
		required: true
	},
	price: {
		type: String,
		required: true
	},
	desc: {
		type: String
	}
})

module.exports = mongoose.model("Product",product)

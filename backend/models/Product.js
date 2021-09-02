const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
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

module.exports = new mongoose.model("Product", ProductSchema)

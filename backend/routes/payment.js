const router = require("express").Router()
const { v4: uuidv4 } = require('uuid')
const Payment = require("../models/Payment")

router.route("/:itemId/create").post((req,res) => {
	const item_id = req.params.itemId
	const paymentId = uuidv4()
	Payment.create({
		id: paymentId,
		tokens: req.body.tokens,
		itemId: item_id,
		paid: false
	}).then((payment) => {
		res.status(200).send({
			paymentId: paymentId
		})
	}).catch((err) => res.status(400).send(err.message))
})

module.exports = router

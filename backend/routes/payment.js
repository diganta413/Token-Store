const router = require("express").Router()
const Payment = require("../models/Payment")

router.route("/:itemId/create").post((req,res) => {
	const item_id = req.params.itemId
	Payment.create({
		tokens: req.body.tokens,
		itemId: item_id,
		paid: false
	}).then((payment) => {
		res.status(200).send({
			paymentId: payment._id
		})
	}).catch((err) => res.status(400).send(err.message))
})

router.route("/:paymentId/update").put((req,res) => {
	const paymentId = req.params.paymentId
	Payment.findOneAndUpdate({ _id: paymentId }, { paid: true }, null, function (err, docs) {
		if (err) res.status(500).send({message: "Error occurred."})
		else res.status(200).send(docs)
	})
})

router.route("/:paymentId").get(async(req,res) => {
	const paymentId = req.params.paymentId
	await Payment.findById(paymentId)
	.then(rp => {res.status(200).send(rp)})
	.catch(err => {res.status(500).send({message: err})})
})

module.exports = router

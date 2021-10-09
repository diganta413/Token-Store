const paymentProcessor = require("../../client/src/contracts/Payment.json")
const Web3 = require("web3")
const payment_model = require("../models/Payment")
const provider = new Web3.providers.HttpProvider( "http://127.0.0.1:8545" );
const web3 = new Web3(provider);

function updatePayment() {
	const address = web3.eth.getAccounts()
	const deployedNetwork = paymentProcessor.networks[networkId];
      const payment = new web3.eth.Contract(
       		paymentProcessor.abi,
        	deployedNetwork && deployedNetwork.address,
      );
		payment.on('PaymentDone',(customer,amount,paymentId,date) => {
			console.log({
				"customer": customer,
				"amount": amount,
				"paymentId": paymentId,
				"date": date
			})
			payment.findOneAndUpdate({id: paymentId},{paid: true},null,function (err,docs) {
				if(err)
					console.log(err)
				else
					console.log(docs)
			})
			})
		}


module.exports = update

import React, { useState, useEffect, useContext } from "react"
import CustomButton from "../CustomButton/CustomButton"
import "./PaymentDetails.css"
import axios from "axios"
import { GlobalContext } from "../../utils/Context"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetails = (props) => {
	const { paymentContract, daiContract, web3 } = useContext(GlobalContext)
	const curUser = JSON.parse(localStorage.getItem("User"))

	const sendDai = async(tx1, amount, customer) => {
		if (tx1.status) {
			const res = await axios.post(`http://127.0.0.1:5000/payment/${props.product.id}/create`, {
				tokens: props.product.price
			})
			const paymentId = res.data.paymentId;
			await paymentContract.methods.pay( amount , 'abh')
			.send({from: customer})
			.then(res => {
				toast.success("Payment done.")
			})
			.catch(err => {
				toast.error("Something went wrong. Try again.")
			})
		}
		
	}

	const pay = async () => {
		if (!daiContract) {
			toast.warning("Contract not found.")
			return
		}
		let customer = curUser.walletAddress
		const amount = web3.utils.toWei(String(props.product.price))

		const tx1 = await daiContract.methods.approve(paymentContract._address, amount)
		.send({from: customer})
		// let res = await daiContract.methods.balanceOf(customer).call()
		sendDai(tx1, amount, customer)
	}

	return (
		<div className="Details_payment">
			<p>No of products :- {props.products}</p>
			<p>No of tokens :- {props.tokens}</p>
			<CustomButton
				label="Pay"
				margin="16px 0 0 0" width="100%" action={pay} />
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme='dark'
			/>
		</div>
	)
}

export default ProductDetails

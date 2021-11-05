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

	const pay = async () => {
		if (!daiContract) {
			toast.warning("Contract not found.")
			return
		}

		const check = await daiContract.methods.approve(paymentContract._address, props.product.price).call()
		let dist = await daiContract.methods.faucet(curUser.walletAddress, web3.utils.toWei('10000')).call()
		let res = await daiContract.methods.balanceOf(curUser.walletAddress).call()
		console.log(dist, res)
		if (check) {
			const res = await axios.post(`http://127.0.0.1:5000/payment/${props.product.id}/create`, {
				tokens: props.product.price
			})
			const paymentId = res.data.paymentId;
			const response = await paymentContract.methods.pay(props.product.price, paymentId).call()
			toast.success("Payment done.")
			console.log(response)
		}
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

import React,{useState,useEffect, useContext} from "react"
import CustomButton from "../CustomButton/CustomButton"
import "./PaymentDetails.css"
import axios from "axios"
import { GlobalContext } from "../../utils/Context"

const ProductDetails = (props) => {
    const {paymentContract, daiContract} = useContext(GlobalContext)
	const curUser = localStorage.getItem("User")

	const pay = async () =>  {
        if(!daiContract) {
            alert("Contract not found.")
            return
        }
		 
		const check = await daiContract.methods.approve(paymentContract.address,props.product.price)
		if(check)
		{
			const res = await axios.post(`http://127.0.0.1:5000/payment/${props.product.id}/create`,{
				tokens: props.product.price
			})
			const paymentId = res.data.paymentId;
			const response = await paymentContract.methods.pay(props.product.price,paymentId)
            console.log(response)
		}
		console.log(check)
	}

	return (
		<div className="Details_payment">
			<p>No of products :- {props.products}</p>
			<p>No of tokens :- {props.tokens}</p>
            <CustomButton 
			label="Pay" 
			margin="16px 0 0 0" width="100%" action={pay}/>
		</div>
	)
}

export default ProductDetails

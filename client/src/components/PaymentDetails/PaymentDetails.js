import React,{useState,useEffect} from "react"
import CustomButton from "../CustomButton/CustomButton"
import "./PaymentDetails.css"

const ProductDetails = (props) => {


	const pay = () =>  {
		console.log("pay")
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

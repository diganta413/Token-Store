import React,{useState,useEffect} from "react"
import "./ProductDetails.css"


const ProductDetails = (props) => {

	return (
		<div className="Details">
			<img src={props.img} alt="Product Image"/>
			<p>{props.desc} :-  {props.value}</p>
		</div>
	)
}

export default ProductDetails

import React, { useState, useEffect } from "react"
import "./ProductDetails.css"


const ProductDetails = (props) => {

	return (
		<div className="Details">
			<img src={props.img} alt="Product Image" />
			<div className="pd-details">
				<p>{props.product.name}</p>
				<p>{props.product.category}</p>
				<p>{props.product.desc}</p>
				<p>Tokens: {props.product.price}</p>
			</div>
		</div>
	)
}

export default ProductDetails

import React,{useState,useEffect} from "react";
import {useParams} from "react-router-dom"
import {useQuery} from "@apollo/client"
import {GET_PRODUCT} from "../../graphql/Queries"
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import PaymentDetails from "../../components/PaymentDetails/PaymentDetails";
import ProductImg from "../../assets/pr1.jpg"
import "./PaymentPage.css"

const PaymentPage = () => {
	const { prod_id  } = useParams()
	const { loading,error,data } = useQuery(GET_PRODUCT , { variables: {  id : prod_id}  })
	if(!loading)
		console.log(data)
	return (
		<div className="PaymentPage">
			<div className="ProductDetails">
				<ProductDetails img={ProductImg} desc="Name" value={data.product.name}/>
				<ProductDetails img={ProductImg} desc="Description" value={data.product.desc}/>
				<ProductDetails img={ProductImg} desc="Price" value={`${data.product.price} Tokens`}/>
			</div>
			<div className="PaymentDetails">
				<PaymentDetails products="1" tokens={data.product.price}/>				
			</div>
		</div>
	)
}

export default PaymentPage

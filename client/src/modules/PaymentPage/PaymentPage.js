import React, { useState, useEffect, useContext } from "react";
import { useParams, useHistory } from "react-router-dom"
import { useQuery } from "@apollo/client"
import { GET_PRODUCT } from "../../graphql/Queries"
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import PaymentDetails from "../../components/PaymentDetails/PaymentDetails";
import ProductImg from "../../assets/pr1.jpg"
import "./PaymentPage.css"
import Spinner from "../../components/Loader/Spinner";
import { GlobalContext } from "../../utils/Context";

const PaymentPage = () => {

	const {setPage} = useContext(GlobalContext)

	const { prod_id } = useParams()
	const history = useHistory()
	const { loading, error, data } = useQuery(GET_PRODUCT, { variables: { id: prod_id } })

	useEffect(() => {
		setPage("Payment")
	}, [])

	return (
		<div className="PaymentPage">
			{loading ? <Spinner /> : (
				<>
					<div className="ProductDetails">
						<ProductDetails img={ProductImg} product={data.product} />
					</div>
					<div className="PaymentDetails">
						<PaymentDetails products="1" tokens={data.product.price} />
					</div>
				</>
			)}

		</div>
	)
}

export default PaymentPage

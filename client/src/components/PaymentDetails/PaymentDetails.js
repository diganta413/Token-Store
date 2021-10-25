import React,{useState,useEffect} from "react"
import CustomButton from "../CustomButton/CustomButton"
import "./PaymentDetails.css"
import axios from "axios"
import getWeb3 from "../../getWeb3"
import Payment from "../../contracts/Payment.json"
import Dai from "../../contracts/Dai.json"

const ProductDetails = (props) => {
	const curUser = localStorage.getItem("User")
	const [PaymentContract,setPaymentContract] = useState()
	const [DaiContract,setDaiContract] = useState()
	const [Web3,setWeb3] = useState()
	console.log(props.product)
	
    useEffect(() => {
        const connect = async () => {
            try {

                // Get network provider and web3 instance.
                const web3 = await getWeb3();
                // Use web3 to get the user's accounts.
                const account = curUser.walletAddress

                // Get the contract instance.
                const networkId = await web3.eth.net.getId();

                // For payment contract
                const deployedNetwork_payment = Payment.networks[networkId];
                const payment_instance = new web3.eth.Contract(
                    Payment.abi,
                    deployedNetwork_payment && deployedNetwork_payment.address,
                );

                // For dai contract
                const deployedNetwork_dai = Dai.networks[networkId];
                const dai_instance = new web3.eth.Contract(
                    Dai.abi,
                    deployedNetwork_dai && deployedNetwork_dai.address,
                );

                // Set state

                setPaymentContract(payment_instance)
                setDaiContract(dai_instance)
                setWeb3(web3)

            } catch (error) {
                console.error(error);
            }
        }

        if(curUser) 
			connect()
    }, [])

	const pay = async () =>  {
		 
		const check = await DaiContract.approve(PaymentContract.address,props.product.price)
		if(check)
		{
			const res = await axios.post(`http://127.0.0.1:4000/${props.product.id}/create`,{
				tokens: props.product.price
			})
			const paymentId = res.data.paymentId;
			PaymentContract.pay(props.product.price,paymentId)
			.then((res) => alert("Payment Done"))
			.catch((err) => console.log(err))
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

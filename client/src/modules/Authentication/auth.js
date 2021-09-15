import React from 'react'
import CustomButton from '../../components/CustomButton/CustomButton'
import "./auth.css"
import Logo from "../../assets/logo.png"
import web3modal from "web3modal"
import WalletConnectProvider from "@walletconnect/web3-provider";

const Auth = () => {
	const provider;
    const connectWallet = () => {
		const providerOptions = {
  			walletconnect: {
    		package: WalletConnectProvider, // required
    		options: {
      			infuraId: "INFURA_ID" // required
    		}
  		}
		};

		const web3modal = new web3modal({
			cacheProvider: true,
			providerOptions
		})

		provider = web3modal.connect();

    }

    return (
        <div className="auth-container">
            <div className="auth-box">
                <div className="brand">
                    <img src={Logo} alt="/" />
                </div>
                <p>Connect your desired wallet.</p>
                <CustomButton 
                label="Connect Wallet"
                margin={"16px auto 0 auto"} />
            </div>
        </div>
    )
}

export default Auth

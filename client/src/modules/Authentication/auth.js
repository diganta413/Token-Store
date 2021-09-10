import React from 'react'
import CustomButton from '../../components/CustomButton/CustomButton'
import "./auth.css"
import Logo from "../../assets/logo.png"

const Auth = () => {
    return (
        <div className="auth-container">
            <div className="auth-box">
                <div className="brand">
                    <img src={Logo} alt="/" />
                </div>
                <p>Connect your desired wallet.</p>
                <CustomButton 
                label="Connect Wallet"
                margin={"16px 0 0 0"} />
            </div>
        </div>
    )
}

export default Auth

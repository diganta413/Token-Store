import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../utils/Context'
import "./edit.css"
import Avatar from '../../components/Avatar';
import IMG from "../../assets/avatar.jpeg"
import CustomInput from '../../components/CustomInput/CustomInput';

const EditAccount = () => {
    const { setPage } = useContext(GlobalContext)
    const user = JSON.parse(localStorage.getItem("User"))


    const [fname, setfname] = useState(user.firstName)
    const [lname, setlname] = useState(user.lastName)
    const [email, setemail] = useState(user.email)

    useEffect(() => {
        setPage("Edit")
    }, [])

    return (
        <div className="edit-container">
            <div className="pic">
                <Avatar img={IMG} size="large" />
            </div>
            <div className="fields">
                <h1 style={{ marginBottom: "16px" }}>Edit User Details</h1>
                <CustomInput placeHolder="First Name" style={{ marginBottom: "16px" }}
                    value={fname} setValue={setfname} />
                <CustomInput placeHolder="Last Name" style={{ marginBottom: "16px" }}
                    value={lname} setValue={setlname} />
                <CustomInput placeHolder="Email" style={{ marginBottom: "16px" }}
                    value={email} setValue={setemail} />
                <CustomInput placeHolder="Wallet Address" style={{ marginBottom: "16px" }} 
                value={user.walletAddress} contentEditable={false} />
            </div>
        </div>
    )
}

export default EditAccount

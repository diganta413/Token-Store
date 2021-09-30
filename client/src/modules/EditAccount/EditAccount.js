import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../utils/Context'
import "./edit.css"
import Avatar from '../../components/Avatar';
import IMG from "../../assets/avatar.jpeg"
import CustomInput from '../../components/CustomInput/CustomInput';
import { useMutation } from '@apollo/client';
import { DELETE_USER, UPDATE_USER } from '../../graphql/Mutation';

const EditAccount = () => {
    const { setPage } = useContext(GlobalContext)
    const user = JSON.parse(localStorage.getItem("User"))
    const [update] = useMutation(UPDATE_USER)
    const [deleteUser] = useMutation(DELETE_USER)


    const [fname, setfname] = useState(user.firstName)
    const [lname, setlname] = useState(user.lastName)
    const [email, setemail] = useState(user.email)

    useEffect(() => {
        setPage("Edit")
    }, [])

    const updateAccount = async () => {
        if ((fname !== user.firstName && fname !== "")
            || (lname !== user.lastName && lname !== "")
            || (email !== user.email && email !== "")) {
            const data = {
                id: user.id,
                firstName: fname,
                lastName: lname,
                email: email
            }
            let res = await update({ variables: data })
            localStorage.setItem("User", JSON.stringify(res.data.update))
        }
        else{
            alert("Fields are empty or you are entering previous value.")
        }
    }

    const deleteAccount = async () => {
        await deleteUser({variables: {id: user.id}})
        .then(res => {
            localStorage.removeItem("User")
            window.location.href = "/login"
        })
    }

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

                <div className="btn-container">
                    <button className="delete"
                    onClick={deleteAccount}
                    >Delete Account</button>
                    <button className="update"
                        onClick={updateAccount}
                    >Update Account</button>
                </div>
            </div>
        </div>
    )
}

export default EditAccount

import React, { useState } from 'react'
import CustomForm from '../CustomForm/CustomForm'
import "./modal.css"
import { useMutation } from '@apollo/client'
import { CREATE_USER } from '../../graphql/Mutation'

const UserFormModal = (props) => {

    const [authenticate] = useMutation(CREATE_USER)

    const [fname, setfname] = useState("")
    const [lname, setlname] = useState("")
    const [email, setemail] = useState("")

    const fields = [
        { val: fname, setVal: setfname, ph: "First Name" },
        { val: lname, setVal: setlname, ph: "Last Name" },
        { val: email, setVal: setemail, ph: "Email" }
    ]

    const createUser = async(e) => {
        e.preventDefault()
        const data = {
            firstName: fname,
            lastName: lname,
            email: email,
            address: props.address
        }
        let res = await authenticate({ variables: data })
            .then(res => res.data.authenticate)
            .catch(err => console.log(err))
        localStorage.setItem("User", JSON.stringify(res))
    }

    return (
        <div className="modal-class">
            <div className="modal-container">
                <CustomForm 
                onSubmitFunc={createUser}
                fields={fields} 
                width="600px" 
                heading="Enter your details" />
            </div>
        </div>
    )
}

export default UserFormModal

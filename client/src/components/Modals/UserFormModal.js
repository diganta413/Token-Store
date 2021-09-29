import React, { useState } from 'react'
import CustomForm from '../CustomForm/CustomForm'
import "./modal.css"

const UserFormModal = () => {

    const [fname, setfname] = useState("")
    const [lname, setlname] = useState("")
    const [email, setemail] = useState("")

    const fields = [
        { val: fname, setVal: setfname, ph: "First Name" },
        { val: lname, setVal: setlname, ph: "Last Name" },
        { val: email, setVal: setemail, ph: "Email" }
    ]
    return (
        <div className="modal-class">
            <div className="modal-container">
                <CustomForm fields={fields} width="600px" heading="Enter your details" />
            </div>
        </div>
    )
}

export default UserFormModal

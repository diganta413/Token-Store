import React from 'react'
import CustomButton from '../CustomButton/CustomButton'
import CustomInput from '../CustomInput/CustomInput'
import "./form.css"

const CustomForm = ({ fields = [], width }) => {

    return (
        <form className="custom-form" style={{ width: width }}>
            <h1 style={{marginBottom: '30px', textAlign: 'left', width: "100%"}}>Enter your details</h1>
            {fields.map(f => (
                <CustomInput 
                    placeholder={f.ph}
                    value={f.val}
                    setValue={f.setVal}
                    style={{ marginBottom: "16px" }} />
            ))}
            <CustomButton label="Submit" type="submit" margin={"20px 0 0 0"} />
        </form>
    )
}

export default CustomForm

import React from 'react'
import "./input.css"

const CustomInput = (props) => {
    return (
        <input
        className="custom-input"
        placeholder={props.placeholder}
        value={props.value}
        onChange={(e) => props.setValue(e.target.value)}
        {...props}
        ></input>
    )
}

export default CustomInput

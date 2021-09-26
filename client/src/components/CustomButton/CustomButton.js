import React from 'react'
import "./button.css"

const CustomButton = ({label, action, margin, width}) => {
    return (
        <button className="custom-btn" style={{margin: margin, width: width}}
        onClick={action}>
            <span>{label}</span>
        </button>
    )
}

export default CustomButton

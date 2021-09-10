import React from 'react'
import "./button.css"

const CustomButton = ({label, action, margin}) => {
    return (
        <button className="custom-btn" style={{margin: margin}}>
            <span>{label}</span>
        </button>
    )
}

export default CustomButton

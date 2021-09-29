import React from 'react'
import "./button.css"

const CustomButton = (props) => {
    return (
        <button className="custom-btn" style={{margin: props.margin, width: props.width}}
        onClick={props.action} {...props}>
            <span>{props.label}</span>
        </button>
    )
}

export default CustomButton

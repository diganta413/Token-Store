import React from 'react'
import "./messages.css"

const Error = ({message}) => {
    return (
        <div className="message error">
            {message}
        </div>
    )
}

export default Error

import React from 'react'

const InfoSec = (props) => {
    return (
        <div className="info-box">
            <h3>{props.title}</h3>
            <h1>{props.data}</h1>
            <p>{props.extra}</p>
        </div>
    )
}

export default InfoSec

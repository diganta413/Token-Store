import React from 'react'
import "./counter.css"

const Counter = (props) => {
    return (
        <div className="counter">
            <div className="dec"
                onClick={() => props.count > 1 ? props.setCount(props.count - 1) : null}>
                -
            </div>
            <div className="val">{props.count}</div>
            <div className="inc" onClick={() => props.setCount(props.count + 1)}>+</div>
        </div>
    )
}

export default Counter

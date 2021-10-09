import React, { useState } from 'react'
import useWindowDimensions from '../../utils/useWindowDimensions'
import "./rightbar.css"

const ShopRightBar = () => {

    const [open, setOpen] = useState(false)
    const { height, width } = useWindowDimensions()

    return (
        <div className={`right-bar ${open ? 'expand' : ''}`}
            onClick={() => width <= 900 && setOpen(!open)}>
            {!open && width<=900 ? (
                <>
                    <p>Click to expand</p>
                </>
            ) : (
                <>
                    <h3>Shop Right Bar</h3>
                    <p>Other options</p>
                </>
            )}
        </div>
    )
}

export default ShopRightBar

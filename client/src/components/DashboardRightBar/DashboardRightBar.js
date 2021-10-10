import React, { useState } from 'react'
import useWindowDimensions from '../../utils/useWindowDimensions'
import "./rightbar.css"

const DashboardRightBar = () => {

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
                    <h3>Dashboard Right Bar</h3>
                    <ul className="right-bar-options">
                        <li>All Products</li>
                        <li>Upload Product</li>
                        <li>Delete Product</li>

                    </ul>
                </>
            )}
        </div>
    )
}

export default DashboardRightBar

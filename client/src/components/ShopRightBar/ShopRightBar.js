import React, { useState } from 'react'
import "./rightbar.css"

const ShopRightBar = () => {

    const [open, setOpen] = useState(false)

    return (
        <div className={`right-bar ${open ? 'expand' : ''}`}
            onClick={() => setOpen(!open)}>
            {!open ? (
                <h3>Click To Expand</h3>
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

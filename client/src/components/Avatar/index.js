import React from 'react'
import "./avatar.css"

const Avatar = ({ img, size }) => {

    /*
    Three Avatar Sizes
    1. Small
    2. Medium
    3. Large
    */

    const small = { width: '36px', height: '36px' }
    const medium = { width: '70px', height: '70px' }
    const large = { width: '140px', height: '140px' }

    return (
        <div className="avatar-container"
            style={
                size === 'small' ? small :
                    size === 'medium' ? medium :
                        large
            }>
            <img src={img} alt="/" />
        </div>
    )
}

export default Avatar

import React from 'react'
import Product from "../../assets/pr1.jpg"

const Featured = () => {
    return (
        <div className="featured-card">
            <div className="featured-img">
                <img src={Product} alt="/" />
            </div>
            <div className="product-details">
                <h3>Featured Product</h3>
            </div>
        </div>
    )
}

export default Featured

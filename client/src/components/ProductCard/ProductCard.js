import React from 'react'
import "./card.css"
import Product from "../../assets/pr1.jpg"

const ProductCard = ({product}) => {
    return (
        <div className="product-card">
            <div className="product-img">
                <img src={Product} alt="/" />
            </div>
            <div className="product-details">
                <h3>{product.name}</h3>
                <h4>{product.price} Tokens</h4>
            </div>
        </div>
    )
}

export default ProductCard

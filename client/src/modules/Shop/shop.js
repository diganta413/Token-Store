import React, { useContext, useEffect } from 'react'
import ShopRightBar from '../../components/ShopRightBar/ShopRightBar'
import { GlobalContext } from '../../utils/Context'
import Featured from '../Home/Featured'
import "./shop.css"

const Shop = () => {
    const { setPage } = useContext(GlobalContext)
    useEffect(() => {
        setPage('Shop')
    }, [])
    return (
        <div className="shop-container">
            <div className="field">
                <div className="search-bar">
                    <input placeholder="Search products" type="search"></input>
                </div>
                <div className="pd-container">
                    <div className="shop-products">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 112].map(p => (
                            <Featured
                                key={p}
                                product={p} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="field">
                <ShopRightBar />
            </div>
        </div>
    )
}

export default Shop

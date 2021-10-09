import { useQuery } from '@apollo/client'
import { Link } from 'react-router-dom'
import React, { useContext, useEffect, useState } from 'react'
import Spinner from '../../components/Loader/Spinner'
import Error from '../../components/Messages/Error'
import ProductCard from '../../components/ProductCard/ProductCard'
import ShopRightBar from '../../components/ShopRightBar/ShopRightBar'
import { GET_PRODUCTS } from '../../graphql/Queries'
import { GlobalContext } from '../../utils/Context'
import "./shop.css"

const Shop = () => {
    const { setPage } = useContext(GlobalContext)
    const { loading, error, data } = useQuery(GET_PRODUCTS)

    const [query, setQuery] = useState('')

    const resProducts = data ? 
    data.products.filter(p => p.name.toLowerCase().includes(query.toLocaleLowerCase()))
    : []

    useEffect(() => {
        setPage('Shop')
    }, [])
    return (
        <div className="shop-container">
            <div className="field">
                <div className="search-bar">
                    <input placeholder="Search products"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    type="search"></input>
                </div>
                <div className="pd-container">
                    {loading ? (
                        <Spinner />
                    ) : !error ? (

                        <div className="shop-products">
                            {resProducts.length > 0 ? resProducts.map(p => (
                                <Link to={`/product/${p.id}`}>
                                    <ProductCard
                                        key={p.id}
                                        product={p} />
                                </Link>
                            )) : <p style={{fontSize: '20px', color: 'grey'}}>No Products</p>}
                        </div>

                    ) : <Error message={"Unable to fetch products."} />}
                </div>
            </div>
            <div className="field">
                <ShopRightBar />
            </div>
        </div>
    )
}

export default Shop

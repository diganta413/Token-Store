import React, { useContext, useEffect, useState } from 'react'
import "./dashboard.css"
import DashboardRightBar from '../../components/DashboardRightBar/DashboardRightBar'
import { GlobalContext } from '../../utils/Context'
import { useQuery } from '@apollo/client'
import { GET_PRODUCTS } from '../../graphql/Queries'
import Spinner from "../../components/Loader/Spinner.js"
import InfoSec from './InfoSec'
import { Link } from 'react-router-dom'
import ProductCard from '../../components/ProductCard/ProductCard'
import Error from '../../components/Messages/Error'

const Dashboard = () => {

    const { setPage } = useContext(GlobalContext)

    const { loading, error, data } = useQuery(GET_PRODUCTS)

    const [query, setQuery] = useState('')

    const resProducts = data ? 
    data.products.filter(p => p.name.toLowerCase().includes(query.toLocaleLowerCase()))
    : []

    useEffect(() => {
        setPage("Dashboard")
    }, [])

    return (
        <div className="dashboard-container">
            <div className="field ds-wrapper">
                {loading ? <Spinner />
                    : (
                        <div className="ds-container">
                            <div className="info-sec">
                                <InfoSec title="Products" data={data.products.length} extra="Extra text" />
                                <InfoSec title="Sold" data={data.products.length} extra="Extra text" />
                                <InfoSec title="Tokens Earned" data={data.products.length} extra="Extra text" />
                            </div>

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
                                        )) : <p style={{ fontSize: '20px', color: 'grey' }}>No Products</p>}
                                    </div>

                                ) : <Error message={"Unable to fetch products."} />}
                            </div>
                        </div>
                    )}
            </div>
            <div className="field">
                <DashboardRightBar />
            </div>
        </div>
    )
}

export default Dashboard

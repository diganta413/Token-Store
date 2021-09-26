import React, {useContext, useEffect} from 'react'
import { GET_PRODUCTS } from '../../graphql/Queries'
import "./home.css"
import { useQuery } from '@apollo/client'
import Spinner from '../../components/Loader/Spinner'
import {Link} from 'react-router-dom'
import { GlobalContext } from '../../utils/Context'
import Error from '../../components/Messages/Error'
import ProductCard from '../../components/ProductCard/ProductCard'

const Home = () => {
    const {setPage} = useContext(GlobalContext)
    const { loading, error, data } = useQuery(GET_PRODUCTS)

    useEffect(() => {
        setPage('Home')
    }, [])

    return (
        <div className="home-container">
            {loading ? (
                <Spinner />
            ) : !error ? (
                <div className="featured-products">
                    {data.products.slice(0, 6).map(p => (
                        <ProductCard 
                        key={p.id}
                        product={p}/>
                    ))}
                </div>
            ) : <Error message={"Unable to fetch products."}/>}
            <Link to="/shop" className="explore-more">Explore More</Link>
            <div className="home-banner"></div>
        </div>
    )
}

export default Home

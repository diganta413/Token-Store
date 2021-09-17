import React, {useContext, useEffect} from 'react'
import { GET_PRODUCTS } from '../../graphql/Queries'
import Featured from './Featured'
import "./home.css"
import { useQuery } from '@apollo/client'
import Spinner from '../../components/Loader/Spinner'
import {Link} from 'react-router-dom'
import { GlobalContext } from '../../utils/Context'

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
            ) : (
                <div className="featured-products">
                    {data.products.slice(0, 6).map(p => (
                        <Featured 
                        key={p.id}
                        product={p}/>
                    ))}
                </div>
            )}
            <Link to="/shop" className="explore-more">Explore More</Link>
            <div className="home-banner"></div>
        </div>
    )
}

export default Home

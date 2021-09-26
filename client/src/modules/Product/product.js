import { useQuery } from '@apollo/client'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Spinner from '../../components/Loader/Spinner'
import Error from '../../components/Messages/Error'
import { GET_PRODUCT } from '../../graphql/Queries'
import { GlobalContext } from '../../utils/Context'
import ProductImg from "../../assets/pr1.jpg"
import "./product.css"
import Counter from '../../components/Counter/Counter'
import CustomButton from '../../components/CustomButton/CustomButton'

const Product = () => {

    const { setPage } = useContext(GlobalContext)
    const { id } = useParams()
    const { loading, error, data } = useQuery(GET_PRODUCT, { variables: { id: id } })

    const [count, setCount] = useState(1)

    useEffect(() => {
        setPage(`Product - ${id}`)
    }, [])

    return (
        <div className="product-page">
            {loading ? (
                <Spinner />
            ) : !error ? (
                <>
                    <div className="pd-image">
                        <img src={ProductImg} alt="/" />
                    </div>
                    <div className="pd-details">
                        <h1>{data.product.name}</h1>
                        <p>{data.product.desc}</p>
                        <p>{data.product.category}</p>
                        <p>{data.product.price}</p>
                    </div>
                    <div className="pd-buy">
                        <div className="price-display">
                            <p>{data.product.price} Tokens</p>
                        </div>
                        <Counter setCount={setCount} count={count}/>
                        <p style={{marginTop: '20px', fontSize: '22px'}}>
                            Total tokens required: {(count*Number(data.product.price)).toFixed(2)}
                        </p>
                        <CustomButton label="Buy" margin="20px 0" width="100%"/>
                    </div>
                </>
            ) : <Error message={"Unable to fetch products."} />
            }
        </div >
    )
}

export default Product

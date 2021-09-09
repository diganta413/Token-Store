import React from 'react'
import Featured from './Featured'
import "./home.css"

const Home = () => {
    return (
        <div className="home-container">
            <div className="featured-products">
                {[1, 2, 3, 4, 5, 6].map(p => (
                    <Featured />
                ))}
            </div>
        </div>
    )
}

export default Home

import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import "./loader.css"

const Spinner = () => {
    return (
        <div className="spinner">
            <CircularProgress color="white"/>
        </div>
    )
}

export default Spinner

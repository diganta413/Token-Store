import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import "./header.css"
import Logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../utils/Context'
import Avatar from '../Avatar'
import IMG from "../../assets/avatar.jpeg"

const Header = () => {
    const { setMenuOpen, menuOpen, user } = useContext(GlobalContext)
    const history = useHistory()
    let pageName = history.location.pathname.split('/')[1]
    pageName = pageName ? pageName : 'Home'

    return (
        <div className="fixed-header"
            style={menuOpen ? { backgroundColor: '#262626f6', backdropFilter: 'blur(0px)' } : {}}>
            <div className="header-content">
                <div className="brand">
                    <Link to="/">
                        <img src={Logo} alt="/" />
                    </Link>
                    <div className="page-name">
                        {pageName}
                    </div>
                </div>
                {!user && (
                    <div className="collection">
                        <Avatar img={IMG} size='small' />
                        <div class={`menu-icon ${menuOpen ? 'close-icon' : ''}`}
                            onClick={() => setMenuOpen(!menuOpen)}>
                            <div class="leftright"></div>
                            <div class="rightleft"></div>
                        </div>
                    </div>
                )}
            </div>

        </div>
    )
}

export default Header

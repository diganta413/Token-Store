import React, { useState, useContext } from 'react'
import "./header.css"
import Logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../utils/Context'
import Avatar from '../Avatar'
import IMG from "../../assets/avatar.jpeg"

const Header = () => {
    const { setMenuOpen, menuOpen } = useContext(GlobalContext)

    return (
        <div className="fixed-header">
            <div className="header-content">
                <div className="brand">
                    <Link to="/">
                        <img src={Logo} alt="/" />
                    </Link>
                </div>
                <div className="collection">
                    <Avatar img={IMG} size='small' />
                    <div class={`menu-icon ${menuOpen ? 'close-icon' : ''}`}
                        onClick={() => setMenuOpen(!menuOpen)}>
                        <div class="leftright"></div>
                        <div class="rightleft"></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header

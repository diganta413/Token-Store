import React from 'react'
import { Link } from 'react-router-dom'
import "./menu.css"
import FadeIn from 'react-fade-in';
import Avatar from '../Avatar';
import IMG from "../../assets/avatar.jpeg"

const MainMenu = () => {

    const menuOptions = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'Shop',
            path: '/shop'
        },
        {
            name: 'Orders',
            path: '/orders'
        },
        {
            name: 'Edit Account',
            path: '/edit'
        },
        {
            name: 'Log Out',
            path: '/logout'
        }
    ]

    return (
        <div className="main-menu-container">
            <div className="menu-content">
                <FadeIn delay={100}>
                    <div className="user-details">
                        <Avatar img={IMG} size='medium' />
                        <div className="details">
                            <p className="username">@debjit</p>
                            <p className="wallet-address">0x548976A45R2BG3</p>
                        </div>
                    </div>
                </FadeIn>
                <ul className="list-items">
                    {menuOptions.map((mp, i) => (
                        <li>
                            <FadeIn delay={200 * (i+1)}>
                                <Link to={`${mp.path}`}>{mp.name}</Link>
                            </FadeIn>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default MainMenu

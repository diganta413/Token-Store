import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./menu.css"
import FadeIn from 'react-fade-in';
import Avatar from '../Avatar';
import IMG from "../../assets/avatar.jpeg"
import { GlobalContext } from '../../utils/Context';

const MainMenu = () => {

    const { menuOpen } = useContext(GlobalContext)
    useEffect(() => {
        if(menuOpen){
            document.body.style.overflow = 'hidden'
        }
        else{
            document.body.style.overflow = 'visible'
        }
    }, [menuOpen])

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
        <div className={`main-menu-container ${menuOpen ? 'open' : ''}`}>
            {menuOpen && (
                <div className="menu-content">
                    <FadeIn delay={200}>
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
                                <FadeIn delay={300 * (i + 1)}>
                                    <Link to={`${mp.path}`}>{mp.name}</Link>
                                </FadeIn>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default MainMenu

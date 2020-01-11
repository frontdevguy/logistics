import React from 'react';
import logo from '../../img/logo-transparent.png';
import '../style/header-component.css'

export const Header = () => {
    return (
        <>
           <nav className="main-header">
                <a className="site-logo"><img src={logo} /></a>
                <ul className="main-nav-links">
                    <li className="nav-link"><a>Initiate Tracking</a></li>
                    <li className="nav-link"><a>About Our Service</a></li>
                    <li className="nav-link"><a>Login/Register</a></li>
                </ul>
           </nav>
        </>
    )
}
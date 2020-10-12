import React from 'react'
import '../styles/scss/navbar.scss'

import Logo from '../img/logo-1.png'

export default function Navbar()
{
    return (
        <div className='navbar px-3' id="nav">
            <div className="mr-auto navbar-brand">
                <img src={Logo} alt="" className="logo-item"/>
            </div>
            <div className="ml-auto">
                <ul className="horizontal-menu">
                    <li>Contact Us</li>
                    <li>About Quest</li>
                    <li>Daftar</li>
                </ul>
            </div>
        </div>
    )
}
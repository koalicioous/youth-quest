import React from 'react'
import '../styles/scss/navbar.scss'

import Logo from '../img/logo-1.png'

export default function Navbar()
{
    return (
        <div className='navbar px-3 z-100' id="nav">
            <div className="mr-auto navbar-brand">
                <img src={Logo} alt="" className="logo-item"/>
            </div>
            <div className="ml-auto d-none d-md-block">
                <ul className="horizontal-menu">
                    <li><a href="#contact">Contact Us</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li>Daftar</li>
                </ul>
            </div>
        </div>
    )
}
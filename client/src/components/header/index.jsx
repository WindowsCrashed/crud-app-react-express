import React from 'react'
import './style.css'
import { Home } from 'react-feather'
import Logo from '../../assets/svg/gneric-sa-logo.svg'

function Header() {
    return (
        <header className='header'>
            <div className='corner'>
                <img className='logo' src={Logo} alt='logo' />
            </div>
            <div className='main'>
                <Home/>
                <span>Home</span>               
            </div>
        </header>
    )
}

export default Header
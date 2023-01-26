import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import { Home } from 'react-feather'
import Logo from '../../assets/svg/gneric-sa-logo.svg'

function Header() {
    return (
        <header className='header'>
            <div className='corner'>
                <Link to='/'>
                    <img className='logo' src={Logo} alt='logo' />
                </Link>               
            </div>
            <div className='main'>
                <Home/>
                <span>Home</span>               
            </div>
        </header>
    )
}

export default Header
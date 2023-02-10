import React from 'react'
import './style.css'
import NavItem from '../nav-item'

function NavBar() {
    return (
        <nav className='navbar'>
            <ul>
                <NavItem label='Users' url='users'/>
            </ul>               
        </nav>
    )
}

export default NavBar
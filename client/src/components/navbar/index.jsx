import React from 'react'
import NavItem from '../nav-item'
import './style.css'

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
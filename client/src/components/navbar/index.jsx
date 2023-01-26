import React from 'react'
import './style.css'
import NavItem from '../nav-item'

function NavBar() {
    return (
        <nav className='navbar'>
            <ul>
                <NavItem label='Users' url='users'/>
                <NavItem label='Users2' url='users2'/>
                <NavItem label='Users3' url='users3'/>
                <NavItem label='Users4' url='users4'/>
            </ul>               
        </nav>
    )
}

export default NavBar
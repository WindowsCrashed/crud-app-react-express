import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function NavItem({ label, url }) {
    return (
        <li className='nav-item'>
            <Link to={url}>{label}</Link>
        </li>
    )
}

export default NavItem

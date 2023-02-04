import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function Button({ url, classes, children }) {
    return (
        <Link className={`btn ${ classes ?? ''}`} to={ url }>{ children }</Link>
    )
}

export default Button
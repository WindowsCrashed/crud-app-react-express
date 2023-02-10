import React from 'react'
import './style.css'

function Title({ children }) {
    return (
        <div className='title'>
            <h1>{children}</h1>
        </div>
    )
}

export default Title

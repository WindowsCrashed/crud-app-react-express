import React from 'react'
import './style.css'

function Content({ children }) {
    return (
        <main className='content'>
            { children }
        </main>
    )
}

export default Content
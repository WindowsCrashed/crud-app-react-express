import React from 'react'
import './style.css'

function Input({ label, type }) {
    return (
        <div className='input'>
            <label>
                { label }
                <input type={ type ?? 'text' }/>
            </label>
        </div>
    )
}

export default Input
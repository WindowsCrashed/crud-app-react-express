import React from 'react'
import './style.css'

function Input({ label, type, onChange }) {
    return (
        <div className='input'>
            <label>
                { label }
                <input type={ type ?? 'text' } onChange={onChange}/>
            </label>
        </div>
    )
}

export default Input
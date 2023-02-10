import React from 'react'

function ButtonInput({ type, value, classes, onClick }) {
    return (
        <input
            type={type ?? 'button'}
            value={value}
            className={`btn btn-input ${classes}`}
            onClick={onClick}
        />
    )
}

export default ButtonInput

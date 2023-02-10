import React from 'react'
import './style.css'

function Input({ label, type, onChange, readonly, value }) {
	return (
		<div className='input'>
			<label>
				{label}
				<input type={type ?? 'text'} onChange={onChange} readOnly={readonly} value={value} />
			</label>
		</div>
	)
}

export default Input

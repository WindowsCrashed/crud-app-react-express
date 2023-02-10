import React from 'react'
import DeleteButton from '../delete-button'
import EditButton from '../edit-button'
import './style.css'

function ActionButtons({ id }) {
	return (
		<div className='action-btns'>
			<EditButton id={id} />
			<DeleteButton id={id} />
		</div>
	)
}

export default ActionButtons

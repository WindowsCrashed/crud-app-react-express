import React from 'react'
import Button from '../button'
import { Trash2 } from 'react-feather'

function DeleteButton({ id }) {
	return (
		<Button classes='btn-danger' url={`delete/${id}`}>
			<Trash2 size={21} />
		</Button>
	)
}

export default DeleteButton

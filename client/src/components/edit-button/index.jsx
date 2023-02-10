import React from 'react'
import Button from '../button'
import { Edit } from 'react-feather'

function EditButton({ id }) {
	return (
		<Button classes='btn-warning' url={`edit/${id}`}>
			<Edit size={21} />
		</Button>
	)
}

export default EditButton

import React from 'react'
import { useNavigate } from 'react-router-dom'
import ButtonInput from '../button-input'

function CancelButton({ returnTo }) {
	const navigate = useNavigate()
	const returnToPage = () => navigate(returnTo)

	return <ButtonInput value='Cancel' classes='btn-inverted-secondary' onClick={returnToPage} />
}

export default CancelButton

import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Content from '../../template/content'
import { UserFields, HorizontalButtonGroup, ButtonInput, CancelButton } from '../../components'
import useApi from '../../hooks/useApi'
import { handleSubmit } from '../../helpers'
import { Edit } from 'react-feather'

function EditUser() {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [age, setAge] = useState(0)
	const [loaded, setLoaded] = useState(false)

	const navigate = useNavigate()
	const id = useParams().id
	const api = useApi(`users/${id}`)

	const saveUser = async () => {
		const res = await api.put({ name, email, age })
		if (res) navigate('/users')
	}

	useEffect(() => {
		;(async () => {
			const data = await api.get()
			if (!data) return
			setName(data.name)
			setEmail(data.email)
			setAge(data.age)
			setLoaded(true)
		})()
	}, [])

	return (
		<Content title='Edit a user' pageTitle='Edit Users' pageIcon={Edit}>
			{loaded && (
				<form onSubmit={handleSubmit(saveUser)}>
					<UserFields setters={{ setName, setEmail, setAge }} values={{ name, email, age }} />
					<HorizontalButtonGroup>
						<ButtonInput type='submit' value='Save' classes='btn-primary' />
						<CancelButton returnTo='/users' />
					</HorizontalButtonGroup>
				</form>
			)}
		</Content>
	)
}

export default EditUser

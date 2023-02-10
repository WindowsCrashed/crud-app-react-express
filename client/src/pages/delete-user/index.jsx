import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Content from '../../template/content'
import { UserFields, HorizontalButtonGroup, ButtonInput, CancelButton } from '../../components'
import useApi from '../../hooks/useApi'
import { handleSubmit } from '../../helpers'
import { UserMinus } from 'react-feather'
import './style.css'

function DeleteUser() {
    const [data, setData] = useState({})
    const [loaded, setLoaded] = useState(false)

    const navigate = useNavigate()
    const id = useParams().id
    const api = useApi(`users/${id}`)

    const deleteUser = async () => {
        const res = await api.del()
        if (res) navigate('/users')
    }

    useEffect(() => {
        ;(async () => {
            const data = await api.get()
            if (!data) return
            setData({
                name: data.name,
                email: data.email,
                age: data.age,
            })
            setLoaded(true)
        })()
    }, [])

    return (
        <Content title='Delete a user' pageTitle='Delete Users' pageIcon={UserMinus}>
            {loaded && (
                <div className='delete-user'>
                    <p>Are you sure you want to delete the following user?</p>
                    <form onSubmit={handleSubmit(deleteUser)}>
                        <UserFields readonly={true} values={data} />
                        <HorizontalButtonGroup>
                            <ButtonInput type='submit' value='Delete' classes='btn-danger' />
                            <CancelButton returnTo='/users' />
                        </HorizontalButtonGroup>
                    </form>
                </div>
            )}
        </Content>
    )
}

export default DeleteUser

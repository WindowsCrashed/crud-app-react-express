import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Content from '../../template/content'
import { UserPlus } from 'react-feather'
import { UserFields, HorizontalButtonGroup, ButtonInput, CancelButton } from '../../components'
import useApi from '../../hooks/useApi'
import { handleSubmit } from '../../helpers'

function InsertUser() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState(0)
    
    const navigate = useNavigate()
    const api = useApi('users')

    const saveUser = async () => {
        const res = await api.post({ name, email, age })
        if (res) navigate('/users')
    }

    return (
        <Content title='Insert a new user' pageTitle='Insert Users' pageIcon={ UserPlus }>
            <form onSubmit={ handleSubmit(saveUser) }>
                <UserFields setName={ setName } setEmail={ setEmail } setAge={ setAge }/>
                <HorizontalButtonGroup>
                    <ButtonInput type='submit' value='Insert' classes='btn-primary'/>
                    <CancelButton returnTo='/users'/>
                </HorizontalButtonGroup>
            </form>     
        </Content>
    )
}

export default InsertUser

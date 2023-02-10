import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'
import Content from '../../template/content'
import { UserPlus } from 'react-feather'
import { Input } from '../../components'
import useApi from '../../hooks/useApi'

function InsertUser() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState(0)
    
    const navigate = useNavigate()
    const api = useApi('users')

    const saveUser = async () => {
        const res = await api.post({ name, email, age })
        if (res) returnToUsers()
    }

    const handleSubmit = event => {
        event.preventDefault()
        saveUser()
    }

    const returnToUsers = () => navigate('/users')

    return (
        <Content title='Insert a new user' pageTitle='Insert Users' pageIcon={ UserPlus }>
            <form className='insert-user-form' onSubmit={handleSubmit}>
                <div className='input-group'>
                    <Input label='Name' onChange={e => setName(e.target.value)}/>
                    <Input label='E-mail' type='email' onChange={e => setEmail(e.target.value)}/>
                    <Input label='Age' type='number' onChange={e => setAge(e.target.value)}/>
                </div>
                <div className='btn-group'>
                    <input type="submit" value="Insert" className='btn btn-primary'/>
                    <input type="button" value="Cancel" className='btn btn-inverted-secondary'
                        onClick={returnToUsers}/>
                </div>
            </form>     
        </Content>
    )
}

export default InsertUser

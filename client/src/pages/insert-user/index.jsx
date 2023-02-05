import React from 'react'
import './style.css'
import Content from '../../template/content'
import { UserPlus } from 'react-feather'
import { Input } from '../../components'

function InsertUser() {
    return (
        <Content title='Insert a new user' pageTitle='Insert Users' pageIcon={ UserPlus }>
            <form className='insert-user-form'>
                <div className='input-group'>
                    <Input label='Name'/>
                    <Input label='E-mail' type='email'/>
                    <Input label='Age' type='number'/>
                </div>
                <div className='btn-group'>
                    <input type="submit" value="Insert" className='btn btn-primary'/>
                    <input type="button" value="Cancel" className='btn btn-inverted-secondary'/>
                </div>
            </form>     
        </Content>
    )
}

export default InsertUser

import React from 'react'
import Input from '../input'
import './style.css'

function UserFields({ setters, readonly, values }) {
    return (
        <div className='user-fields'>
            <Input
                label='Name'
                readonly={readonly}
                value={values && values.name}
                onChange={e => {
                    if (setters && setters.setName) setters.setName(e.target.value)
                }}
            />
            <Input
                label='E-mail'
                type='email'
                readonly={readonly}
                value={values && values.email}
                onChange={e => {
                    if (setters && setters.setEmail) setters.setEmail(e.target.value)
                }}
            />
            <Input
                label='Age'
                type='number'
                readonly={readonly}
                value={values && values.age}
                onChange={e => {
                    if (setters && setters.setAge) setters.setAge(e.target.value)
                }}
            />
        </div>
    )
}

export default UserFields

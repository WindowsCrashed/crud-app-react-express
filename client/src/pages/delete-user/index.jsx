import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Content from '../../template/content'
import './style.css'
import { UserFields, HorizontalButtonGroup, ButtonInput, CancelButton } from '../../components'
import useApi from '../../hooks/useApi'
import { UserMinus } from 'react-feather'

function DeleteUser() {
    const [data, setData] = useState({})
    const [loaded, setLoaded] = useState(false)

    const navigate = useNavigate()
    const id = useParams().id   
    const api = useApi(`users/${id}`)   

    useEffect(() => {
        (async () => {
            const data = await api.get()
            if (!data) return
            console.log(data)
            setData({
                name: data.name,
                email: data.email,
                age: data.age
            })
            setLoaded(true)                                 
        })()
    }, [])

    return ( 
        <Content title='Delete a user' pageTitle='Delete Users' pageIcon={ UserMinus }>
            { loaded &&
                <div className='delete-user'>
                    <p>Are you sure you want to delete the following user?</p>
                    <form>
                        <UserFields readonly={true} values={ data }/>
                        <HorizontalButtonGroup>
                            <ButtonInput type='submit' value='Delete' classes='btn-danger'/>
                            <CancelButton returnTo='/users'/>
                        </HorizontalButtonGroup>
                    </form>
                </div>
            }        
        </Content>
    )
}

export default DeleteUser
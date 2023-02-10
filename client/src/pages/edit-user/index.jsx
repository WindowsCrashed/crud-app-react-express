import React, { useEffect, useState } from 'react'
import Content from '../../template/content'
import { Edit } from 'react-feather'
import { UserFields, HorizontalButtonGroup, ButtonInput, CancelButton } from '../../components'

function EditUser() {
    const [loaded, setLoaded] = useState(true)
    
    return (
        <Content title='Edit a user' pageTitle='Edit Users' pageIcon={ Edit }>
            { loaded &&
                <form>
                    <UserFields/>
                    <HorizontalButtonGroup>
                        <ButtonInput type='submit' value='Save' classes='btn-primary'/>
                        <CancelButton returnTo='/users'/>
                    </HorizontalButtonGroup>
                </form>
            }
        </Content>
    )
}

export default EditUser
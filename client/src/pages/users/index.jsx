import React, { useEffect, useState } from 'react'
import Content from '../../template/content'
import './style.css'
import { Table, Button } from '../../components'
import useApi from '../../hooks/useApi'
import mapDataToTableRow from '../../helpers/map-data-to-table-row'
import { User } from 'react-feather'

function Users() {
    const [data, setData] = useState([])
    const [loaded, setLoaded] = useState(false)
    
    const api = useApi('users')
    const headers = ['Id', 'Name', 'E-mail', 'Age', 'Actions']    

    useEffect(() => {
        (async () => {
            const data = await api.get()
            if (!data) return
            setData(mapDataToTableRow(data))
            setLoaded(true)                                 
        })()
    }, [])

    return ( 
        <Content title='Users' pageIcon={ User }>
            { loaded &&
                <React.Fragment>
                    <div className='insert-btn-container'>
                        <Button classes='btn-primary' url='/users/insert'>
                            Insert a new user
                        </Button> 
                    </div>                         
                    <Table headers={ headers } data={ data } />
                </React.Fragment>
            }        
        </Content>
    )
}

export default Users
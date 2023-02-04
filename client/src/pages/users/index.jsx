import React, { useEffect, useState } from 'react'
import Content from '../../template/content'
import './style.css'
import { Table } from '../../components'
import useApi from '../../hooks/useApi'
import mapDataToTableRow from '../../helpers/map-data-to-table-row'

function Users() {
    const [data, setData] = useState([])
    const [loaded, setLoaded] = useState(false)
    
    const api = useApi('users')
    const headers = ['id', 'name', 'email', 'age', 'actions']    

    useEffect(() => {
        (async () => {
            const data = await api.get()
            if (!data) return
            setData(mapDataToTableRow(data))
            setLoaded(true)                                 
        })()

        return () => api.cancelRequest()
    }, [])

    return ( 
        <Content title='Users'>
            { loaded &&          
                <Table headers={ headers } data={ data } />
            }        
        </Content>
    )
}

export default Users
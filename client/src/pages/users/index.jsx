import React from 'react'
import Content from '../../template/content'
import './style.css'
import { Table } from '../../components'

function Users() {
    const headers = ['id', 'name', 'email', 'age', 'actions']
    const data = [
        {
            id: 1,
            name: 'AAA',
            email: 'aaa@gmail.com',
            age: 12
        },
        {
            id: 2,
            name: 'BBB',
            email: 'bbb@gmail.com',
            age: 13
        },
        {
            id: 3,
            name: 'CCC',
            email: 'ccc@gmail.com',
            age: 14
        },
        ,
        {
            id: 4,
            name: 'DDD',
            email: 'ddd@gmail.com',
            age: 15
        },
        {
            id: 5,
            name: 'EEE',
            email: 'eee@gmail.com',
            age: 16
        },
        {
            id: 6,
            name: 'FFF',
            email: 'fff@gmail.com',
            age: 17
        },
        {
            id: 7,
            name: 'GGG',
            email: 'ggg@gmail.com',
            age: 18
        },
        {
            id: 8,
            name: 'HHH',
            email: 'hhh@gmail.com',
            age: 19
        }
    ]

    const mapedData = data.map(value => [ ...Object.values(value), 'crud' ])

    return ( 
        <Content title='Users'>
            <Table headers={ headers } data={ mapedData } />
        </Content>
    )
}

export default Users
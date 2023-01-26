import React from 'react'
import './style.css'
import { Title } from '../../components'

function Content({ title, children }) {
    return (
        <main className='content'>
            <Title>{ title }</Title>
            <div className='content-body'>
                { children }
            </div>
        </main>
    )
}

export default Content
import React from 'react'
import './style.css'
import { Header, NavBar, Content } from '../../components'
import Router from '../../router'

function Main() {
    return ( 
        <div className='main'>
            <Header/>           
            <NavBar/>
            <Content>
                <Router/>
            </Content>
        </div>
    )
}

export default Main
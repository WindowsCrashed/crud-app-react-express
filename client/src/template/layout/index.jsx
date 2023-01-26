import React from 'react'
import './style.css'
import { Header, NavBar, Content } from '../../components'
import Router from '../../router'

function Layout() {
    return ( 
        <div className='layout'>
            <Header/>           
            <NavBar/>
            <Content>
                <Router/>
            </Content>
        </div>
    )
}

export default Layout
import React from 'react'
import './style.css'
import { Header, NavBar } from '../../components'
import Router from '../../router'

function Layout() {
    return ( 
        <div className='layout'>
            <Header/>           
            <NavBar/>
            <Router/>
        </div>
    )
}

export default Layout
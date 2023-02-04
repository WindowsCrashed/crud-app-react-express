import React from 'react'
import './style.css'
import { Header, NavBar } from '../../components'
import Router from '../../router'
import PageTitleContextProvider from '../../context/page-title-context-provider'

function Layout() {
    return ( 
        <div className='layout'>
            <PageTitleContextProvider>
                <Header/>                     
                <Router/>
            </PageTitleContextProvider>          
            <NavBar/>
        </div>
    )
}

export default Layout
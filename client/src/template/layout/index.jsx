import React from 'react'
import PageTitleContextProvider from '../../context/page-title-context-provider'
import { Header, NavBar } from '../../components'
import Router from '../../router'
import './style.css'

function Layout() {
	return (
		<div className='layout'>
			<PageTitleContextProvider>
				<Header />
				<Router />
			</PageTitleContextProvider>
			<NavBar />
		</div>
	)
}

export default Layout

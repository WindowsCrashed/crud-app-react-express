import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import Logo from '../../assets/svg/gneric-sa-logo.svg'
import { PageTitleContext } from '../../context/page-title-context-provider'

function Header() {
    const { pageTitle, pageIcon: PageIcon } = useContext(PageTitleContext)

    return (
        <header className='header'>
            <div className='corner'>
                <Link to='/'>
                    <img className='logo' src={ Logo } alt='logo'/>
                </Link>               
            </div>
            <div className='main'>
                <PageIcon/>
                <span>{ pageTitle }</span>               
            </div>
        </header>
    )
}

export default Header
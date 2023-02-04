import React, { useContext } from 'react'
import './style.css'
import { Title } from '../../components'
import { PageTitleContext } from '../../context/page-title-context-provider'

function Content({ title, pageTitle, pageIcon: PageIcon, children }) {
    const { setPageTitle, setPageIcon } = useContext(PageTitleContext)
    
    setPageTitle(pageTitle ?? title)
    if (PageIcon) setPageIcon(PageIcon) 

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
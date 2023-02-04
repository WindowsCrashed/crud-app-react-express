import React, { createContext, useState } from 'react'
import { Slash } from 'react-feather'

export const PageTitleContext = createContext(null)

export default function PageTitleContextProvider({ children }) {
    const [pageTitle, setPageTitle] = useState('')
    const [pageIcon, setPageIcon] = useState(Slash)

    const value = {
        pageTitle, setPageTitle,
        pageIcon, setPageIcon
    }

    return (
        <PageTitleContext.Provider value={ value }>
            { children }
        </PageTitleContext.Provider>
    )
}
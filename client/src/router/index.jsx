import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, Users } from '../pages'

function Router() {
    return (
        <Routes>
            <Route path='/' element={ <Home/> }/>
            <Route path='/users' element={ <Users/> }/>
        </Routes>
    )
}

export default Router
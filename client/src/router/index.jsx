import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, Users, InsertUser } from '../pages'

function Router() {
    return (
        <Routes>
            <Route path='/' element={ <Home/> }/>
            <Route path='/users' element={ <Users/> }/>
            <Route path='/users/insert' element={ <InsertUser/> }/>
        </Routes>
    )
}

export default Router
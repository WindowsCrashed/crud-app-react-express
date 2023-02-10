import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, Users, InsertUser, DeleteUser } from '../pages'

function Router() {
    return (
        <Routes>
            <Route path='/' element={ <Home/> }/>
            <Route path='/users' element={ <Users/> }/>
            <Route path='/users/insert' element={ <InsertUser/> }/>
            <Route path='/users/delete/:id' element={ <DeleteUser/> }/>
        </Routes>
    )
}

export default Router
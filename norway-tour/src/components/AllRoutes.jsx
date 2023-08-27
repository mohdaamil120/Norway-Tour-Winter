import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from '../pages/Home'
import AboutUs from '../pages/AboutUs'
import Tours from '../pages/Tours'
import Reviews from '../pages/Reviews'
import Login from '../pages/Login'


function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<AboutUs/>}/>
            <Route path='/tours' element={<Tours/>}/>
            <Route path='/reviews' element={<Reviews/>}/>
            <Route path='/login' element={<Login/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes
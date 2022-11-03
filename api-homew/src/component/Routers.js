import React from 'react'
import HomePage from './HomePage';
import Login from './Login';
import { Routes, Route } from "react-router-dom";


function Routers() {
  return (
    <div>
        <Routes>
            <Route path='/' element ={<Login/>} ></Route>
            <Route exact path='Home' element ={<HomePage/>}></Route>
        </Routes>    
    </div>
  )
}

export default Routers
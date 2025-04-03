import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Navbar from './Navbar'

function Asie() {
  return (
   <>
   <BrowserRouter >
   <Navbar/>
 <Routes>
   <Route path='/' element={<Home/>} />

   <Route path='/about' element={<About/>} />
   </Routes>
 
    
  
   </BrowserRouter>
   </>
  )
}

export default Asie
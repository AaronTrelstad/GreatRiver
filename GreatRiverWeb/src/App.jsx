import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home'
import Services from './pages/services'
import About from './pages/aboutus'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* This makes it so the landing page is the home page*/}
        <Route index element={<Home />} />
        <Route path='/home' element={<Home />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

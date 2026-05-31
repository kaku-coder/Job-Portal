import React from 'react'
import "./App.css"
import Navbar from './componets/Navbar'
import {Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
      <Route path='/' element={<HomePage/>} />
      </Routes>
    </div>
  )
}

export default App

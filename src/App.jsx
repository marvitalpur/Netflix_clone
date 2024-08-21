import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import Login from './pages/Login/Login'
import Plyer from './pages/Player/Player';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/player/:id' element={<Plyer/>}/>
      </Routes>
  
    </div>
  )
}

export default App
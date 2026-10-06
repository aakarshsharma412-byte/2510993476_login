import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import Login from './component/Login'
import Dashboard from './component/Dashboard'
import ProtectedRoute from './component/ProtectedRoute'


function App() {
  return (
    <div>

      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/login"}>Login</Link>
        <Link to={"/dashboard"}>Dashboard</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route element={<ProtectedRoute/>}>
        <Route path='dashboard' element={<Dashboard/>}/>
        </Route>      
      </Routes>

    </div>
  )
}

export default App
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
    const navigate= useNavigate();
    
  function handleLogout(){
    localStorage.clear()
    navigate ("/login")
  }
    return (
    <div><h2>Welcome Admin!!</h2>
    <button onClick={handleLogout}>Logout</button>
    </div>
  )
}


export default Dashboard
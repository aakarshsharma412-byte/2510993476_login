import React from 'react'
import{useNavigate} from 'react-router-dom'
import {useState} from 'react'

function Login() {
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const navigate = useNavigate()

    function handleLogin(e){
        e.preventDefault();
        if(username=="Admin" && password=="12345"){
            localStorage.setItem("isLoggedIn","true");
            navigate("/dashboard")
        }else{
            alert("Invalid Credentials")
        }

    }
  return (
    <div>
        <h2>
            Login Form
        </h2>
        <form onSubmit={handleLogin}>
            <input type="text" placeholder="Enter username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
            <input type="text" placeholder='Enter password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Login
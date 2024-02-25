import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleEmail = (event) =>{
        setEmail(event.target.value)
    }
    const handlePassword = (event)=> {
        setPassword(event.target.value)
    }
    const values = {
        email: email, 
        password: password,
    }
    
    const navigate = useNavigate()

    const handleSubmit = (event) =>{
        event.preventDefault();
        axios.post('http://localhost:8081/login', values)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" onChange={handleEmail}/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" onChange={handlePassword}/>
            </div>
            <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default Login
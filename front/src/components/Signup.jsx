import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Signup() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleName = (event) =>{
        setName(event.target.value)
    }
    const handleEmail = (event) =>{
        setEmail(event.target.value) 
    }
    const handlePassword = (event) =>{
        setPassword(event.target.value)
    }
    const values = {
        name: name,
        email: email,
        password: password,
    };
    const handleSubmit = (event) =>{
        event.preventDefault();
        axios.post('http://localhost:8081/signup', values)
        .then(res => {
            if(res.data.signup){
                alert(res.data.Message)
            }
            else{
                alert(res.data.Message)
            }
        })
        .catch(err => console.log(err));
    }
  return (
    <div className="cont">
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" onChange={handleName} required/>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" onChange={handleEmail} required/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" onChange={handlePassword} required/>
            </div>
            <button type="submit">Signup</button>
        </form>
        <Link to='/login'>Already have an account</Link>
    </div>
  )
}

export default Signup
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'




function Profile() {

  axios.defaults.withCredentials = true
  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  let userInfo = ''

  if (token){
    userInfo = JSON.parse(atob(token.split('.')[1]));
  }
  else{
    userInfo = 'no token available'
  }
  const handleClick = (event) =>{
    event.preventDefault();
    // axios.get('http://localhost:8081/profile')
    // .then(res =>{
    //   console.log(email)
    // })
    console.log(userInfo)
  }

    
  return (
    <div>
      
        <button onClick={handleClick}>Show</button>
    </div>
    
  )
}

export default Profile
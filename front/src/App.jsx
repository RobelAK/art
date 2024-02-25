import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
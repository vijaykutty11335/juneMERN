import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import Courses from '../components/Courses'
import Login from '../components/Login'
import Aids from '../components/Courses/Aids'
import IT from '../components/Courses/IT'
import Cse from '../components/Courses/Cse'
import Aiml from '../components/Courses/Aiml'
import Cce from '../components/Courses/Cce'

const App = () => {
  const [ddstate,setDdstate] = useState(null);

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/navbar' element={<Navbar/>}  setDdstate={setDdstate}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/courses' element={<Courses/>} ddstate={ddstate}/>
      <Route path='/aids' element={<Aids/>}/>
      <Route path='/cse' element={<Cse/>}/>
      <Route path='/aiml' element={<Aiml/>}/>
      <Route path='/it' element={<IT/>}/>
      <Route path='/cce' element={<Cce/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

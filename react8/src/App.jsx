import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Register from './Userpages/Register'
import Loginpage from './Userpages/Loginpage'
import Home from './Userpages/Home'
const App = () => {
  return (
    <div>
      <Routes>
<Route path='/register' element={<Register/>}/>

<Route path='/' element={<Loginpage/>}/>

<Route path='/home' element={<Home/>}/>
        
      </Routes>
    </div>
  )
}

export default App

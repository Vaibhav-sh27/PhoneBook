import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Navb from './Components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';


const App = () => {
  
  return (
    <div>
    <Navb/>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </div>
  )
}

export default App
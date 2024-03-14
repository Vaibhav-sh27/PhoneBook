import React, { useEffect, useState } from 'react'
import {Route, Routes, useNavigate} from 'react-router-dom'
import Navb from './Components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import axios from 'axios';


const App = () => {
  let [d, setD] = useState([]);
  let navigate = useNavigate();

  let getData = async ()=>{
    await axios.get(`${window.API_URL}/all`).then((data)=>{
      console.log(data);
      setD(data.data);
  })
  }

  useEffect(()=>{
    
    getData();
    console.log(d);
  }, [])

  return (
    <div>
    <Navb/>
      <Routes>
        <Route path='/' element={<Home setD={setD} d={d}/>} />
      </Routes>
    </div>
  )
}

export default App
import React, { useState } from 'react'
import Show from './Show'
import Add from './Add'

const Home = ({setD, d}) => {
  const [show, setShow] = useState(false)
  const [item, setItem] = useState({
            id: '',
            first_name: '',
            middle_name: '',
            last_name: '', 
            email:'', 
            ph_no1:'', 
            ph_no2: '', 
            address: ''
  })
  return (
    <>
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop:'10px'}}>
    <Add setD={setD} d={d} show={show} setShow={setShow} item={item} setItem={setItem}/>
    </div>
    <div className='table'>
        <Show setD={setD} d={d} show={show} setShow={setShow} setItem={setItem}/> 
    </div>
    </>
  )
}

export default Home
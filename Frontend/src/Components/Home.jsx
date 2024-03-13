import React from 'react'
import Show from './Show'
import Add from './Add'

const Home = () => {
  return (
    <>
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop:'10px'}}>
    <Add/>
    </div>
    <div className='table'>
        <Show/> 
    </div>
    </>
  )
}

export default Home
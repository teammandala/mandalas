import React from 'react'
import './style.css'
import Login from '../login';

const Noaccess = () => {
  return (
    <div className='noaccess'>
        <h1>Sorry You have no Access to This Website</h1>
        <Login/>   
        
    </div>
  )
}

export default Noaccess
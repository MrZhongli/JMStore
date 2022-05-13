import React from 'react'
import "./spinner.css" 

const Spinner = () => {
  return (
    <div className='spinnerContainer flex flex-col'>
        <div className='spinner my-40'>
        </div>
        <h1 className='m-10'>Loading...</h1>
       
    </div>
  )
}

export default Spinner
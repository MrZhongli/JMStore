import React from 'react'

const ToastContainer = ({props}) => {
  return (
    <div>
         <button className='btn ' onClick={props}>Notify !</button>
    </div>
  )
}

export default ToastContainer
